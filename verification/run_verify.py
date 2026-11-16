import os
import sys
import time
from PIL import Image
from playwright.sync_api import sync_playwright

OUTPUT_DIR = r"C:\Users\hachimi\Downloads\myfap_decompiled\verification"
REF_DIR = r"C:\Users\hachimi\Downloads\myfap_decompiled\design\reference"
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_side_by_side(captured_path, ref_path, out_path, title="Comparison"):
    if not os.path.exists(captured_path) or not os.path.exists(ref_path):
        print(f"Skipping comparison {out_path}, missing file")
        return
    
    cap = Image.open(captured_path).convert("RGB")
    ref = Image.open(ref_path).convert("RGB")
    
    # Scale ref or cap to matching height
    target_height = 800
    cap_w = int(cap.width * (target_height / cap.height))
    cap_resized = cap.resize((cap_w, target_height), Image.Resampling.LANCZOS)
    
    ref_w = int(ref.width * (target_height / ref.height))
    ref_resized = ref.resize((ref_w, target_height), Image.Resampling.LANCZOS)
    
    combined = Image.new("RGB", (ref_resized.width + cap_resized.width + 20, target_height), (240, 240, 240))
    combined.paste(ref_resized, (0, 0))
    combined.paste(cap_resized, (ref_resized.width + 20, 0))
    
    combined.save(out_path)
    print(f"Generated side-by-side: {out_path}")

def run_verification(url="http://localhost:5173"):
    print(f"Starting UI verification against {url}...")
    errors = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
        context = browser.new_context(
            viewport={"width": 360, "height": 800},
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
        )
        page = context.new_page()
        
        page.on("pageerror", lambda exc: errors.append(f"PageError: {exc}"))
        page.on("console", lambda msg: errors.append(f"ConsoleError: {msg.text}") if msg.type == "error" else None)
        
        # 1. Load app
        page.goto(url, wait_until="networkidle", timeout=15000)
        time.sleep(1)
        
        # Check title / basic load
        print("Page loaded. Title:", page.title())
        
        # 2. Verify Tab 1: Hôm nay (Light)
        cap1_path = os.path.join(OUTPUT_DIR, "captured_01_home_light.png")
        page.screenshot(path=cap1_path)
        print("Captured Tab 1: Hôm nay (Light)")
        
        # 3. Navigate to Tab 2: Lịch
        # Find tab button containing "Lịch"
        tab2 = page.locator("nav button, footer button, [role='tab'], button").filter(has_text="Lịch").first
        tab2.click()
        time.sleep(0.5)
        cap2_path = os.path.join(OUTPUT_DIR, "captured_02_schedule_light.png")
        page.screenshot(path=cap2_path)
        print("Captured Tab 2: Lịch (Light)")
        
        # Test Lịch toggle: Lịch thi / Lịch học
        lich_thi_btn = page.locator("button, [role='tab']").filter(has_text="Lịch thi").first
        if lich_thi_btn.is_visible():
            lich_thi_btn.click()
            time.sleep(0.3)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "captured_02_schedule_lich_thi.png"))
            print("Tested Lịch thi toggle button")
            # Click back to Lịch học
            lich_hoc_btn = page.locator("button, [role='tab']").filter(has_text="Lịch học").first
            if lich_hoc_btn.is_visible():
                lich_hoc_btn.click()
                time.sleep(0.3)
        
        # Test T2-CN day selection
        day_btn = page.locator("button").filter(has_text="T3").first
        if day_btn.is_visible():
            day_btn.click()
            time.sleep(0.3)
            print("Tested day pill T3")
            t2_btn = page.locator("button").filter(has_text="T2").first
            if t2_btn.is_visible():
                t2_btn.click()
                time.sleep(0.3)
        
        # 4. Navigate to Tab 3: Học tập
        tab3 = page.locator("nav button, footer button, [role='tab'], button").filter(has_text="Học tập").first
        tab3.click()
        time.sleep(0.5)
        cap3_path = os.path.join(OUTPUT_DIR, "captured_03_academics_light.png")
        page.screenshot(path=cap3_path)
        print("Captured Tab 3: Học tập (Light)")
        
        # 5. Navigate to Tab 4: Dịch vụ
        tab4 = page.locator("nav button, footer button, [role='tab'], button").filter(has_text="Dịch vụ").first
        tab4.click()
        time.sleep(0.5)
        cap4_path = os.path.join(OUTPUT_DIR, "captured_04_services_light.png")
        page.screenshot(path=cap4_path)
        print("Captured Tab 4: Dịch vụ (Light)")
        
        # 6. Navigate to Tab 5: Cá nhân
        tab5 = page.locator("nav button, footer button, [role='tab'], button").filter(has_text="Cá nhân").first
        tab5.click()
        time.sleep(0.5)
        cap5_path = os.path.join(OUTPUT_DIR, "captured_05_profile_light.png")
        page.screenshot(path=cap5_path)
        print("Captured Tab 5: Cá nhân (Light)")
        
        # 7. Test Dark Mode toggle switch on Profile
        # Look for switch or toggle near "Giao diện tối"
        dark_toggle = page.locator("input[type='checkbox'], button[role='switch'], label:has-text('Giao diện tối')").first
        if not dark_toggle.is_visible():
            dark_toggle = page.locator("text='Giao diện tối'").locator("..").locator("button, input").first
        
        if dark_toggle.is_visible():
            dark_toggle.click()
            time.sleep(0.5)
            print("Toggled Dark Mode switch ON")
        else:
            print("Warning: Could not locate dark mode toggle directly, trying click on row")
            page.locator("text='Giao diện tối'").click()
            time.sleep(0.5)
        
        cap5_dark_path = os.path.join(OUTPUT_DIR, "captured_05_profile_dark.png")
        page.screenshot(path=cap5_dark_path)
        print("Captured Tab 5: Cá nhân (Dark)")
        
        # 8. Switch to Tab 1: Hôm nay in Dark Mode
        tab1 = page.locator("nav button, footer button, [role='tab'], button").filter(has_text="Hôm nay").first
        tab1.click()
        time.sleep(0.5)
        cap1_dark_path = os.path.join(OUTPUT_DIR, "captured_01_home_dark.png")
        page.screenshot(path=cap1_dark_path)
        print("Captured Tab 1: Hôm nay (Dark)")
        
        # 9. Test responsive viewport (e.g. 720 x 1280)
        context_hd = browser.new_context(
            viewport={"width": 720, "height": 1280},
            device_scale_factor=1,
            is_mobile=True,
            has_touch=True,
        )
        page_hd = context_hd.new_page()
        page_hd.goto(url, wait_until="networkidle", timeout=15000)
        time.sleep(1)
        cap_hd_path = os.path.join(OUTPUT_DIR, "captured_01_home_720x1280.png")
        page_hd.screenshot(path=cap_hd_path)
        print("Captured 720x1280 responsive view")
        
        context_hd.close()
        context.close()
        browser.close()
        
    print("\n--- Side by side comparison generation ---")
    create_side_by_side(cap1_path, os.path.join(REF_DIR, "01-home.png"), os.path.join(OUTPUT_DIR, "diff_01_home.png"))
    create_side_by_side(cap2_path, os.path.join(REF_DIR, "02-schedule.png"), os.path.join(OUTPUT_DIR, "diff_02_schedule.png"))
    create_side_by_side(cap3_path, os.path.join(REF_DIR, "03-academics.png"), os.path.join(OUTPUT_DIR, "diff_03_academics.png"))
    create_side_by_side(cap4_path, os.path.join(REF_DIR, "04-services.png"), os.path.join(OUTPUT_DIR, "diff_04_services.png"))
    create_side_by_side(cap5_path, os.path.join(REF_DIR, "05-profile.png"), os.path.join(OUTPUT_DIR, "diff_05_profile.png"))
    create_side_by_side(cap1_dark_path, os.path.join(REF_DIR, "06-dark-home-preview.png"), os.path.join(OUTPUT_DIR, "diff_06_dark_home.png"))
    
    print("\nErrors encountered:", errors)
    print("Verification completed successfully!")

if __name__ == "__main__":
    url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:5173"
    run_verification(url)

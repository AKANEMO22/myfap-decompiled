import os
import time
from playwright.sync_api import sync_playwright

OUTPUT_DIR = "C:/Users/hachimi/Downloads/myfap_decompiled/app-redesign/screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

TABS = [
    ("home", "01-home.png", "Hôm nay"),
    ("schedule", "02-schedule.png", "Lịch"),
    ("academics", "03-academics.png", "Học tập"),
    ("services", "04-services.png", "Dịch vụ"),
    ("profile", "05-profile.png", "Cá nhân"),
]

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})
    page.goto("http://localhost:4173")
    page.wait_for_load_state("networkidle")

    # 1. Capture 5 tabs in Light Mode
    for tab_id, filename, label in TABS:
        # Click the tab button
        page.click(f"button[aria-label='{label}']")
        page.wait_for_timeout(300)
        screenshot_path = os.path.join(OUTPUT_DIR, f"light-{filename}")
        page.screenshot(path=screenshot_path)
        print(f"Captured light {label} -> {screenshot_path}")

    # 2. Go to Profile and Toggle Dark Mode
    page.click("button[aria-label='Cá nhân']")
    page.wait_for_timeout(300)
    # Click dark mode toggle
    page.click("text=Giao diện tối")
    page.wait_for_timeout(300)

    # Capture Profile Dark Mode
    profile_dark_path = os.path.join(OUTPUT_DIR, "dark-05-profile.png")
    page.screenshot(path=profile_dark_path)
    print(f"Captured dark Profile -> {profile_dark_path}")

    # 3. Go to Home and Capture Home Dark Mode
    page.click("button[aria-label='Hôm nay']")
    page.wait_for_timeout(300)
    home_dark_path = os.path.join(OUTPUT_DIR, "dark-01-home.png")
    page.screenshot(path=home_dark_path)
    print(f"Captured dark Home -> {home_dark_path}")

    browser.close()
    print("All captures completed successfully!")

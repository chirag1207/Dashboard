@echo off
cd "C:\GMU\Summer 2024\Dashboard\dashboard"
git add .
git commit -m "Auto backup on %date% %time%"
git push origin main

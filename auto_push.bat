@echo off
cd "C:\GMU\Summer 2024\Dashboard\dashboard"

echo ==== Starting Auto Push at %date% %time% ==== >> autopush_log.txt

"C:\Program Files\Git\bin\git.exe" pull origin main --rebase >> autopush_log.txt 2>&1
"C:\Program Files\Git\bin\git.exe" add . >> autopush_log.txt 2>&1
"C:\Program Files\Git\bin\git.exe" commit -m "Auto backup on %date% %time%" >> autopush_log.txt 2>&1
"C:\Program Files\Git\bin\git.exe" push origin main >> autopush_log.txt 2>&1

echo ==== Completed at %date% %time% ==== >> autopush_log.txt

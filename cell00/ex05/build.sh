#!/bin/bash

# Check if no arguments are supplied
# ตรวจสอบว่าไม่มี Argument ถูกส่งเข้ามาหรือไม่
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 0 # Exit the script if no arguments. (ออกจากการทำงานของสคริปต์ถ้าไม่มี Argument)
fi

# Loop through all supplied arguments
# วนลูปเพื่อจัดการกับ Argument ทุกตัวที่ถูกส่งเข้ามา
for arg in "$@"; do
    # Create a directory with "ex" prefix
    # สร้างไดเรกทอรีโดยนำหน้าชื่อด้วย "ex"
    mkdir "ex${arg}"
done
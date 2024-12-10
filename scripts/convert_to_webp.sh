#!/bin/bash

# Check if the cwebp command is installed
if ! command -v cwebp &> /dev/null; then
    echo "cwebp is not installed. Please install it before running this script."
    exit 1
fi

# Loop through PNG and JPG files in the directory
for img in $( find "images/" -type f -name '*.png' -or -name '*.jpg' -or -name '*.jpeg' ); do
    # Check if the file exists to handle empty directory or no matches
    if [ ! -e "$img" ]; then
        continue
    fi
    
    # Get the file name without extension
    base_name="${img%.*}"

    # Convert the image to WebP
    cwebp -q 50 "$img" -o "$base_name.webp"
    if [ $? -eq 0 ]; then
        echo "Converted $img to $base_name.webp"
        # Delete the original file
        rm "$img"
        echo "Deleted $img"
    else
        echo "Failed to convert $img"
    fi
done

echo "Conversion completed."

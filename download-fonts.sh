#!/bin/bash

# Create temporary directory
mkdir -p temp-fonts

# Download the font files
curl -L "https://api.fontshare.com/v2/fonts/download/satoshi" -o temp-fonts/satoshi.zip

# Unzip the fonts
unzip temp-fonts/satoshi.zip -d temp-fonts

# Move only the woff2 files we need
mv temp-fonts/fonts/woff2/Satoshi-Regular.woff2 src/fonts/
mv temp-fonts/fonts/woff2/Satoshi-Medium.woff2 src/fonts/
mv temp-fonts/fonts/woff2/Satoshi-Bold.woff2 src/fonts/

# Clean up
rm -rf temp-fonts 
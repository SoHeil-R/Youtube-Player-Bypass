# YouTube Player Bypass Script

A Tampermonkey userscript that modifies YouTube's video player by replacing it with an embedded iframe player.

## ⚠️ Disclaimer

This script is provided for educational purposes only. Using this script might violate YouTube's Terms of Service. Use at your own discretion.

## 📋 Prerequisites

- [Tampermonkey](https://www.tampermonkey.net/) browser extension installed
- Compatible web browsers: Chrome, Firefox, Edge, Safari

## 💻 Installation

1. Install the Tampermonkey extension for your browser
2. Create a new script in Tampermonkey
3. Copy and paste the script code
4. Save the script (Ctrl+S or Command+S)

## 🔧 Usage

The script automatically activates when you visit any YouTube video page (URLs matching `https://www.youtube.com/watch?*`).

## ⚙️ Technical Details

The script works by:
1. Clearing YouTube's default player configurations
2. Listening for page navigation events
3. Extracting the video ID from the URL
4. Removing the original player elements
5. Creating an iframe with the embedded player

## 🐛 Known Issues

- May need adjustments if YouTube updates their player structure
- Some YouTube features might not be available in embedded player mode

## 👥 Contributing

Feel free to open issues or submit pull requests with improvements.

## 📝 License

This project is open source and available under the MIT License.

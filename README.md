# YouTube Player Bypass Script

A Tampermonkey userscript that replaces YouTube's default video player with an embedded iframe player. This script is designed to bypass certain restrictions, such as the 59-second limit, and provide a more customizable viewing experience.

---

## ⚠️ Disclaimer

This script is provided for educational purposes only. Using this script may violate YouTube's Terms of Service. Use it at your own discretion.

---

## 📋 Features

- Replaces YouTube's default player with an embedded iframe player.
- Bypasses restrictions like the 59-second limit.
- Customizable player settings (e.g., autoplay, quality, language).
- Retry mechanism for robust player replacement.
- Lightweight and easy to use.

---

## 🛠️ Installation

1. **Install Tampermonkey**:
   - Install the [Tampermonkey extension](https://www.tampermonkey.net/) for your browser (Chrome, Firefox, Edge, Safari).

2. **Create a New Script**:
   - Open the Tampermonkey dashboard.
   - Click on the **"Create a new script"** button.

3. **Copy and Paste the Script**:
   - Replace the default template with the script provided below.

4. **Save the Script**:
   - Save the script by pressing `Ctrl+S` (Windows/Linux) or `Command+S` (Mac).

5. **Visit YouTube**:
   - Navigate to any YouTube video page (e.g., `https://www.youtube.com/watch?v=example`).
   - The script will automatically replace the default player with an embedded iframe player.

---

## ⚙️ Configuration

The script includes a `CONFIG` object that allows you to customize its behavior:

- **`PLAYER_SELECTOR`**: The CSS selector for the player container.
- **`RETRY_ATTEMPTS`**: Number of retries if the player container is not found.
- **`RETRY_DELAY`**: Delay (in milliseconds) between retries.
- **`DEFAULT_QUALITY`**: Default video quality (e.g., `hd1080`).
- **`IFRAME_STYLES`**: Custom styles for the iframe player.

---

## 🐛 Known Issues

- Some YouTube features (e.g., annotations, live chat) may not work in the embedded player.
- The script may need updates if YouTube changes its player structure.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

---

## 📝 License

This project is open source and available under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Enjoy a better YouTube experience! 🎉
# macOS-web-portfolio
"A macOS-inspired web interface built using HTML, CSS, and JavaScript."

# macOS Web UI Clone

A front-end web project that replicates the visual interface and basic interaction patterns of macOS. The application focuses on recreating the desktop environment, including a dock system and functional apps, using standard web technologies.

---

## Overview

This project is a browser-based simulation of the macOS user interface. It demonstrates how core desktop UI concepts—such as window management, application launching, and real-time interactions—can be implemented using HTML, CSS, and JavaScript.

---

## Features

* **macOS-inspired Interface**

  * Clean layout with glassmorphism styling
  * Structured window-based design

* **Dock Navigation System**

  * Interactive dock with application icons
  * Click-based app launching behavior

* **Photo Booth Application**

  * Accesses the device camera via Web APIs
  * Captures images from live video stream
  * Displays captured images dynamically in a gallery

* **Calculator Application**

  * Performs basic arithmetic operations
  * Simple and responsive interface

---

## Technologies Used

* **HTML5** — Structure and layout
* **CSS3** — Styling, positioning, and UI effects
* **JavaScript** — Application logic and interactivity
* **Web APIs** — MediaDevices API for camera access

---

## Project Structure

```
/project-root
│── index.html
│── style.css
│── script.js
│── /icons
```

---

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Use the dock to launch available applications

---

## Implementation Details

* **Camera Integration**
  Uses `navigator.mediaDevices.getUserMedia()` to stream video input.

* **Canvas Rendering**
  Captured frames are drawn onto a `<canvas>` element and converted into image data.

* **Dynamic DOM Manipulation**
  JavaScript is used to create and append elements such as gallery images in real time.

---

## Limitations

* Designed for desktop browsers only
* Limited application ecosystem (currently includes Photo Booth and Calculator)
* No persistent storage for captured images

---

## Future Enhancements

* Window drag, resize, and layering system
* Additional applications (Finder, Browser, Settings)
* Persistent storage using LocalStorage or IndexedDB
* Improved animations and transitions
* Theme customization (light/dark modes)

---

## Author

Aman Kumar

---

## License

This project is intended for educational and demonstration purposes.

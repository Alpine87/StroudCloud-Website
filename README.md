# StroudCloud Website

![HTML](https://img.shields.io/badge/HTML-5E5CFF?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1DA1F2?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Last Commit](https://img.shields.io/github/last-commit/Alpine87/StroudCloud-Website?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)

## Overview
**StroudCloud** is a self-hosted cloud dashboard designed to centralize access to various home network services. This lightweight interface provides convenient links and controls for managing essential applications.

## Features
- **Unified Interface**: Easily access and control services within a structured layout.
- **Integrated Navigation**: Dropdown menus provide quick access to services like Pi-hole, Home Assistant, SSH, Gitea, and Portainer.
- **Smart Device Control**: External webhooks allow interaction with connected smart devices.
- **Cloudflare Protected**: Ensures security and reliability for hosted services.

## Structure
The website follows a clear folder hierarchy:

- `index.html` – The main dashboard page.
- `pages/` – Contains additional subpages for various tools and services.
- `styles/` – Houses `styles.css`, managing the site's theme and visual elements.
- `scripts/` – Contains `scripts.js`, handling interactivity and dynamic UI effects.
- `assets/` – Stores images and icons for branding and service navigation.

## Smart Device Integration
StroudCloud includes external webhook support to enable remote toggling of smart devices. The system seamlessly integrates API requests for automation without manual intervention.

## Setup & Usage
1. Clone the repository:
    ```sh
    git clone https://github.com/Alpine87/StroudCloud-Website.git
    ```
2. Serve locally or deploy via your preferred hosting method.
3. Customize service URLs in `index.html` as needed.
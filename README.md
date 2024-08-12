# Identitymark.io

This project is a web page for Identitymark.io, built using React and Vite. The webpage showcases recent customer designs, provides current weather details through the OpenWeatherMap API, and includes some animations for enhanced user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design with CSS Grid for showcasing recent customer creations.
- Current weather details integrated via the OpenWeatherMap API.
- Animated elements for an engaging user experience.
- Fast and optimized build using Vite.
- Modular and maintainable React components.

## Technologies Used

- **JavaScript**: Programming language used to create dynamic and interactive content.
- **HTML**: Markup language for structuring the web page.
- **CSS**: Styling language used to create visually appealing designs.
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tooling for fast development and optimized builds.
- **CSS Grid**: For creating responsive and flexible grid layouts.
- **OpenWeatherMap API**: To fetch and display current weather details.
- **Animations**: Various CSS and JavaScript animations for improved user experience.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/av-gowtham/identitymark.io.git
cd identitymark.io
npm install
```

Or if you prefer using yarn:

```bash
git clone https://github.com/av-gowtham/identitymark.io.git
cd identitymark.io
yarn install
```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

This will start the Vite development server, and you can view the webpage by navigating to `http://localhost:3000` in your browser.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The output will be in the `dist` folder, which you can then deploy to your hosting provider.

## Project Structure

```
identitymark.io/
├── public/           # Public assets (e.g., images, favicon)
├── src/              # Source files
│   ├── assets/       # Static assets like images, fonts, etc.
│   ├── components/   # React components
│   ├── styles/       # CSS files
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Entry point for the application
│   └── weather.js    # Integration with OpenWeatherMap API
├── index.html        # Main HTML file
├── package.json      # NPM/Yarn dependencies and scripts
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the project's coding standards and add tests for new features or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

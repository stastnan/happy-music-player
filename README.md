# Happy Music Player Repository

Welcome to the GitHub repository for Happy Music Player. This repository houses the source code for my music player application, which allows users to interact with music through the Deezer API. The application showcases a variety of functionalities, including playing top tracks, searching for songs, and managing playback settings.

## Application Overview

Happy Music Player is tailored specifically to enhance users' music enjoyment with its user-centric design and interactive features. Developed using React, this application offers a blend of functionality and aesthetics, ensuring a great music streaming experience. With intuitive controls and an elegant interface, users can effortlessly search, play, and manage their music. The player supports comprehensive interactions such as song search, playlist management, and real-time control over music playback settings, making it an essential part of users' daily music interaction.

## Highlights

- Play music from a comprehensive library via the Deezer API.
- Search functionality to find specific tracks.
- Control options such as play, pause, skip, and volume adjustment.
- Save favorite tracks to local storage.
- **[Visit Happy Music Player](https://main--chic-kataifi-e8fea7.netlify.app/)**
- **[Watch project's video presentation](https://www.loom.com/share/9a4b6dcd55484162b5ee13d29f16038a?sid=2ed5da2c-05a6-47d3-bbd5-d1b077226cf0)**

## Repository Structure

The Happy Music Player's codebase is organized into a type-based structure, which categorizes files and directories by their functional role within the application. This organization facilitates easy navigation and maintenance of the code:

### Pages

This directory contains all the main pages or routes of the application, each representing a distinct functional area:

- **Home Page**: The primary landing page where users start their music experience.
- **Search Page**: Enables users to find songs through a search interface.
- **Artist Page**: Shows songs published by a chosen artist.
- **Genre Page**: Displays a list of songs that belong to a chosen genre.
- **Error Page**: Displayed when the application cannot fulfill a request, handling any navigational errors.

### Components

Each component has its own directory, which includes both its JavaScript logic and styling details. This makes it easy to manage and isolate component-specific changes:

- **Header**: Contains all the UI and logic for the application's header.
- **HomePage**: Comprises components specifically used on the homepage, such as the Hero, Genres, and Artists related components.
- **Player**: Holds the player component that controls music playback.
- **TracksTable**: These components are used for displaying lists of tracks and individual track rows.
- **Layout**: Includes components that dictate the overall layout and structure of the application, ensuring consistent styles and behavior across different pages.
- **UI**: A special directory for smaller UI components that might be used across different parts of the application, promoting reuse and better organization.

## Tech Stack

### Core Technologies

- **React**: Utilizing React to build a dynamic and responsive front-end.
- **Create React App**: Sets up the project with standard configurations automatically.

### Styling

- **Styled Components**: Leveraging CSS-in-JS for scoped and maintainable styles.

### Utility Libraries

- **UUID**: Generating unique identifiers for tracking favorite songs.
- **React Icons**: Enhancing the UI with scalable icons.
- **React Router**: Managing navigation within the application.
- **Axios**: Performing HTTP requests to external APIs, in this project to the Deezer API.
- **PropTypes**: Used for checking the types of props passed in React components, aiding in bug prevention.
- **React Loading Skeleton**: Displays placeholder animations while content is loading, improving the user experience.
- **React Toastify**: Displaying informative toast notifications to enhance user experience.
- **Swiper**: Creating responsive and interactive sliders for content navigation.

### Development Tools

- **Yarn**: Managing packages and running predefined script commands.
- **ESLint and Prettier**: Ensuring code quality and consistency across the project.

## Clone & Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (recommended: the latest stable version)
- **Yarn** package manager

Check installation:

- node -v
- yarn -v

**Repository Cloning:**

- git clone https://github.com/stastnan/happy-music-player.git
- cd happy-music-player

**Installing Dependencies:**

- yarn install

**Running the Project:**

- yarn dev
  This command starts the project on your local server.

I am always open to networking, opportunities, and collaborations. Feel free to reach out to me via email at nik.stastna@gmail.com.

# Movie App

This React application allows users to search and view detailed information about movies, TV series, and episodes using the OMDb API. It features pagination, detailed movie cards, and the ability to filter results by year and type.

## Features

- Search movies, TV series, and episodes by name.
- Filter results by release year.
- Choose to display results for movies, TV series, or episodes.
- View detailed information about each movie, including IMDb ID, cast, plot, and more.
- Pagination support to navigate through search results.

## Getting Started

### Prerequisites

Before running this project, make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OnurSerbes/movie-app.git
   cd movie-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_OMDB_API_KEY=your_omdb_api_key
   ```
   Replace `your_omdb_api_key` with your actual OMDb API key.

4. **Run the application:**
   ```bash
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [Redux](https://redux.js.org/) - State management library.
- [Axios](https://github.com/axios/axios) - For making API requests.
- [Sass](https://sass-lang.com/) - Used for styling.

# Workday For Weekday

This is a React-based web application that serves as a candidate application platform. It allows users to view job listings, filter jobs based on various criteria, and implements infinite scroll for a seamless browsing experience.

## Features

- **Job Cards**: Each job listing is displayed as a card containing the job title, company name, location, job description (limited to a certain number of characters with an option to expand), required experience, and an apply button/link.
- **Filters**: Users can refine the job listings based on minimum experience, company name, location, remote/on-site work, tech stack, role, and minimum base pay.
- **Infinite Scroll**: The platform loads additional job listings automatically as the user scrolls down the page, without requiring them to click a "Load More" button.
- **Responsive Design**: The platform is designed to work well on different screen sizes, including mobile devices.

## Technologies Used

- **ReactJS**: The core library for building the user interface.
- **Redux Toolkit**: A modern Redux library for managing application state.
- **Material-UI**: A popular React UI library for implementing Material Design components.
- **Custom CSS**: Custom CSS styles for additional styling and customization.
- **Custom Logic**: Custom logic implementations for handling filters, infinite scroll, and other functionalities.

## Installation

1. Clone the repository:

```
git clone https://github.com/jaikrishnaverma-dev/workday.git
```

2. Navigate to the project directory:

```
cd workday
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running at `http://localhost:3000`.

## Project Structure

- `src/components`: Contains reusable React components used throughout the application.
- `src/features`: Contains Redux slices and related files for managing application state.
- `src/utils`: Contains utility functions used across the application.
- `src/App.css`: Contains custom CSS styles for components and layout.

## Redux Slices

The project utilizes Redux Toolkit for state management and includes the following slices:

- **mainSlice**: Responsible for managing the job listings and related data.
- **filterSlice**: Handles the state and logic for filtering job listings based on various criteria.

## Material-UI Integration

The project utilizes Material-UI components for consistent styling and a user-friendly interface. The job cards and filter components are built using Material-UI components and styles.

## Custom Logic

In addition to the provided libraries and frameworks, the project includes custom logic for handling:

- Infinite scroll implementation
- Filtering job listings based on multiple criteria
- Handling null values in the API response
- Expanding/collapsing job descriptions

## Usage

Upon launching the application, users will see a list of job cards displayed on the screen. They can use the filters on the left sidebar to refine the job listings based on their preferences. As the user scrolls down, more job listings will be loaded automatically through the infinite scroll feature.


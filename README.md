# Quin Assingment
## Description
An application that shows rockets based on map location.

## Installation

### Requirements
- Node.js > 16.x
- NPM > 8.x
- PNPM > 7.x


### Steps
1. Clone the repository
2. Copy the `.env.example` file to `.env` and fill the required fields
3. Run `pnpm install` to install the dependencies
4. Run `pnpm dev` to start the development server
5. Open `http://localhost:5137` in your browser


## Testing
> Run `pnpm test` to run the tests

## Used Libraries
 - React router is used for routing within the boilerplate.
 - `@react-google-maps/api` is used for the map component.
 - React query is used for data fetching. It handles caching and also provides a nice way to handle errors and state.
 - There is zod installed to verify the env variables of the application at the startup.
 - Eslint and prettier are used for linting and formatting the code.
 - React testing library used with vitest for testing the application. React testing library is used for testing the components and vitest is used for running the tests.
 - MSW is used for mocking the api calls in the tests.
 - Axios is used for making the api calls. Axios is used because it can be very useful if interceptors are needed.

## Folder Structure
  - Pages: Contains the pages of the application. Each page is a component that is rendered by the router.
  - Components: Contains the components of the application. Components are the building blocks of the application.
  - Hooks: Contains the custom hooks of the application. Hooks are used to share the logic between components.
  - Utils: Contains the utility functions of the application. Utility functions are used to share the logic between components.
  - Lib: Contains the libraries of the application. In case if you want to update the library you can do it here because of the Facade pattern.


## What to improve if I have more time
 - Add more tests for the Main page.
 - Add status filter for the launches.
 - Add smart zoom based on the launches.
 - Add smart fetching based on the zoom level.

## Problems that I have faced
 - Google maps integration with react was a bit tricky.
 - Understanding API data output. Documentation was not clear and the data needs to be defined manually.
# Appcharge FE Home Challenge

The bundle component is a dynamic, hightly flexible web component designed to display product bundles.

## Technologies

- TypeScript (5.2.2)
- React (18.2.0)
- Styled Components (6.1.1)
- Vite

## Project Structure

The source directory contains all the source code for the bundle. Here, I decided to use **Component-Based Architecture** for the components and **Feature-Based Structure** for the logic and additional functions: hooks, services, and utils.

- <b>assets</b> - the assets directory contains all static files like images
- <b>components</b> - the components directory cantains the React components used to build user interface for the bundle.
  - <b>Bundle</b> - the main Bundle Component
    - <b>BundleInfo</b> - the child component for the Bundle Component that provide information for specific bundles.
    - <b>BundleItems</b> - the child component for the Bundle Component that provides all products that belongs to the specific bundle.
  - <b>Spinner</b> - the spinner used to indicate loading bundles.
- <b>hooks</b> - сontains custom React hooks for fetching and managing data related to bundles.
- <b>services</b> - сonsists of service files that handle the business logic and API calls.
- <b>utils</b> - contains utility functions for date and time manipulation.

## Installation

- Steps to install bundle application:

```bash
git clone https://github.com/Lmenkovaaa/appchargeTask
cd appchargeTask
npm install
```

- Usage

```bash
npm start
```

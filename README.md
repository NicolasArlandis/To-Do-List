Aqui está a versão em inglês do README, ajustada conforme solicitado:

---

# To-Do List App

This project is a **To-Do List** application built using **React** and **Vite**. It allows users to manage tasks by adding, marking them as completed, and deleting tasks.

## Features

- **Add tasks**: Users can add new tasks to the list.
- **Delete tasks**: Tasks can be removed from the list.
- **Mark tasks as completed**: Tasks can be marked as completed and moved out of the pending list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development, used to create and configure the React project.
- **CSS**: For styling the application.

## How to Run the Project

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps to run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd repository-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or if you're using yarn
   yarn
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

5. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

To create an optimized build for production, run:

```bash
npm run build
# or with yarn
yarn build
```

The production files will be generated in the `dist` directory, ready to be served by a web server.

## Project Structure

```plaintext
.
├── public              # Static files
├── src                 # Main source code
│   ├── components      # Reusable React components
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

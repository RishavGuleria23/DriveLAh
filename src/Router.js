import { createBrowserRouter } from "react-router-dom";

// Importing layout components
import Home from "./components/layout/Home";
import Home2 from "./components/layout/Home2";

// Creating the main router with defined routes
const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
    // element: <p>404 Error - Nothing here...</p>
  },
  {
    path: "home2",
    element: <Home2 />,
  },
]);

// Exporting the router to be used in the application
export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default MyRouter;

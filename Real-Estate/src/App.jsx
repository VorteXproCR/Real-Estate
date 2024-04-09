import Home from "./routes/homePage/Home";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

import{
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
            children:[
                {
                    path : "/",
                    element: <Home />
                },
                {
                    path: "/list",
                    element: <ListPage />
                },
                {
                    path: "/:id",
                    element: <SinglePage />
                }
            ]
        }
      ]);


    return (
    <RouterProvider router={router} />
    );
}

export default App

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Loign from "./pages/Loign";
import Services from "./pages/Services";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/Login",
                element:<Loign/>
            },
        ]
    }
]);

export default router;
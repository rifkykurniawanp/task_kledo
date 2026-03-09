import { createHashRouter } from "react-router-dom" 
import FilterPage from "./pages/filter-page"
import { regionsLoader } from "./loaders/region-loaders"

export const router = createHashRouter([ 
  {
    path: "/",
    element: <FilterPage />,
    loader: regionsLoader
  }
])
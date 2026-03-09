import { createBrowserRouter } from "react-router-dom"
import FilterPage from "./pages/filter-page"
import { regionsLoader } from "./loaders/region-loaders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    loader: regionsLoader
  }
])
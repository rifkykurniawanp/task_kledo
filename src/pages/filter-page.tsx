import { useLoaderData } from "react-router-dom"
import { RegionsData } from "../types/regions"

export default function FilterPage() {

  const data = useLoaderData() as RegionsData

  return <div>Filter Page</div>
}
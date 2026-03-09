export async function regionsLoader() {
  const res = await fetch("/data/indonesia_regions.json")
  return res.json()
}
export async function regionsLoader() {
  const res = await fetch("/data/indonesia_regions.json")
  const raw = await res.json()

  return {
    province:  raw.Provincie  ?? [],
    regencies: raw.Regencies  ?? [],
    districts: raw.District   ?? [],
  }
}
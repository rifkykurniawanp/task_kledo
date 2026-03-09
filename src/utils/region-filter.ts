import type { Regency, District } from "../types/regions"

export function filterRegencies(regencies: Regency[], provinceId?: number): Regency[] {
  if (!provinceId) return []
  return regencies.filter((r) => r.province_id === provinceId)
}

export function filterDistricts(districts: District[], regencyId?: number): District[] {
  if (!regencyId) return []
  return districts.filter((d) => d.regency_id === regencyId)
}
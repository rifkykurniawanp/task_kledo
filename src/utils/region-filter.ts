import { Regency } from "../types/regions"

export function filterRegencies(
  regencies: Regency[],
  provinceId?: number
): Regency[] {
  if (!provinceId) return []

  return regencies.filter((regency) => regency.province_id === provinceId)
}
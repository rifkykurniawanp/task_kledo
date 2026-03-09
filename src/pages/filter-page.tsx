import { useLoaderData, useSearchParams } from "react-router-dom"
import type { RegionsData } from "../types/regions"
import { filterRegencies, filterDistricts } from "../utils/region-filter"
import Breadcrumb from "../components/breadcrumb"
import RegionSelect from "../components/region-select"
import RegionDisplay from "../components/region-display"

export default function FilterPage() {
  const data = useLoaderData() as RegionsData
  const [searchParams, setSearchParams] = useSearchParams()

  const provinceId = searchParams.get("province") ? Number(searchParams.get("province")) : undefined
  const regencyId  = searchParams.get("regency")  ? Number(searchParams.get("regency"))  : undefined
  const districtId = searchParams.get("district") ? Number(searchParams.get("district")) : undefined

  const selectedProvince = data.province.find((p) => p.id === provinceId)
  const selectedRegency  = data.regencies.find((r) => r.id === regencyId)
  const selectedDistrict = data.districts.find((d) => d.id === districtId)

  const regencies = filterRegencies(data.regencies, provinceId)
  const districts  = filterDistricts(data.districts, regencyId)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-70 min-w-70 bg-white border-r border-gray-200 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🌐</span>
          <span className="font-bold text-[15px] text-gray-900 tracking-tight">Frontend Assessment</span>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-[11px] font-semibold text-gray-400 tracking-widest">FILTER WILAYAH</p>

          <RegionSelect
            label="PROVINSI"
            name="province"
            options={data.province}
            value={selectedProvince?.id}
            onChange={(id) => setSearchParams({ province: String(id) })}
          />
          <RegionSelect
            label="KOTA/KABUPATEN"
            name="regency"
            options={regencies}
            value={selectedRegency?.id}
            disabled={!selectedProvince}
            onChange={(id) => setSearchParams({ province: String(provinceId), regency: String(id) })}
          />
          <RegionSelect
            label="KECAMATAN"
            name="district"
            options={districts}
            value={selectedDistrict?.id}
            disabled={!selectedRegency}
            onChange={(id) => setSearchParams({ province: String(provinceId), regency: String(regencyId), district: String(id) })}
          />

          <button
            onClick={() => setSearchParams({})}
            className="mt-2 py-3 border-[1.5px] border-blue-500 rounded-xl text-blue-500 font-semibold text-[13px] tracking-widest hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
          >
            ✕ &nbsp; RESET
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <Breadcrumb
          province={selectedProvince?.name}
          regency={selectedRegency?.name}
          district={selectedDistrict?.name}
        />
        <RegionDisplay
          province={selectedProvince?.name}
          regency={selectedRegency?.name}
          district={selectedDistrict?.name}
        />
      </main>
    </div>
  )
}
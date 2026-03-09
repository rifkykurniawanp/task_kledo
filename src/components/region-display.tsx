type RegionDisplayProps = {
  province?: string
  regency?: string
  district?: string
}

function DisplayBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-bold text-blue-300 tracking-widest mb-1.5">{label}</p>
      <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">{value}</h1>
    </div>
  )
}

export default function RegionDisplay({ province, regency, district }: RegionDisplayProps) {
  if (!province) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-400 text-base">Pilih provinsi untuk memulai</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <DisplayBlock label="PROVINSI" value={province} />
        {regency && (
          <>
            <div className="text-xl text-gray-300 my-2">↓</div>
            <DisplayBlock label="KOTA / KABUPATEN" value={regency} />
          </>
        )}
        {district && (
          <>
            <div className="text-xl text-gray-300 my-2">↓</div>
            <DisplayBlock label="KECAMATAN" value={district} />
          </>
        )}
      </div>
    </div>
  )
}
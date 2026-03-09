type Option = {
  id: number
  name: string
}

type RegionSelectProps = {
  label: string
  name: "province" | "regency" | "district"
  options: Option[]
  value?: number
  disabled?: boolean
  onChange: (value: number) => void
}

export default function RegionSelect({
  label,
  name,
  options,
  value,
  disabled = false,
  onChange,
}: RegionSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold text-gray-600 tracking-wider">{label}</label>
      <div className={`flex items-center border-[1.5px] border-gray-300 rounded-xl px-3 py-2.5 bg-white gap-2 transition-opacity ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
        <select
          name={name}
          value={value ?? ""}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 border-none outline-none text-sm text-gray-900 bg-transparent cursor-pointer appearance-none"
        >
          <option value="" disabled>Pilih {label}</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>{opt.name}</option>
          ))}
        </select>
        <span className="text-gray-400 shrink-0 text-base leading-none">⌄</span>
      </div>
    </div>
  )
}
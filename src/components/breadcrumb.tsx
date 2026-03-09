type BreadcrumbProps = {
  province?: string
  regency?: string
  district?: string
}

export default function Breadcrumb({ province, regency, district }: BreadcrumbProps) {
  const crumbs = ["Indonesia", province, regency, district].filter(Boolean) as string[]

  return (
    <nav className="breadcrumb px-10 py-4 border-b border-gray-200 bg-white text-sm">
      {crumbs.map((crumb, i) => (
        <span key={i}>
          {i > 0 && <span className="text-gray-300 mx-1"> › </span>}
          <span className={i === crumbs.length - 1 ? "text-blue-500 font-semibold" : "text-gray-500"}>
            {crumb}
          </span>
        </span>
      ))}
    </nav>
  )
}
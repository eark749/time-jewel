const goldRows = [
  { range: '1g – 5g', loss: '0.150 Mili Fine', type: 'Fixed' },
  { range: '6g – 20g', loss: '3% Wastage', type: 'Percent' },
  { range: '21g & Above', loss: '2.75% Wastage', type: 'Percent' },
]

const czRows = [
  { range: 'Under 5g', loss: '0.150 Mili Fine', type: 'Fixed' },
  { range: '5g & Above', loss: '0% – 3% Wastage', type: 'Percent' },
]

function TableRow({ range, loss, type }) {
  return (
    <tr className="group hover:bg-white/40 transition-colors">
      <td className="py-4 sm:py-6 md:py-8 text-sm sm:text-base font-display font-medium">{range}</td>
      <td className="py-4 sm:py-6 md:py-8 text-sm sm:text-base font-light">{loss}</td>
      <td className="py-4 sm:py-6 md:py-8 text-right text-xs sm:text-sm uppercase tracking-[0.2em] font-medium opacity-40">{type}</td>
    </tr>
  )
}

export default function Standards() {
  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-40 bg-[#E9E3D8]/30" id="charts">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl serif-header font-medium mb-4 sm:mb-6">Standards</h2>
          <p className="text-xs sm:text-sm font-light text-primary/50 max-w-lg">Transparent job work terms for gold and CZ casting services. Measured by industry-standard benchmarks for total transparency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-display italic mb-6 sm:mb-10 opacity-70">Gold Jewelry Casting</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[280px] text-left">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="py-4 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Range</th>
                    <th className="py-4 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Loss</th>
                    <th className="py-4 sm:py-6 text-right text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {goldRows.map((row) => (
                    <TableRow key={row.range} {...row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-display italic mb-6 sm:mb-10 opacity-70">CZ Jewelry Casting</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[280px] text-left">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="py-4 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Range</th>
                    <th className="py-4 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Loss</th>
                    <th className="py-4 sm:py-6 text-right text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold opacity-30">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {czRows.map((row) => (
                    <TableRow key={row.range} {...row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

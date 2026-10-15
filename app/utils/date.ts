const monthFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** Formats `YYYY-MM` as "Jun 2023" and `YYYY` as "2023". */
export function formatPeriodDate(value: string): string {
  const [year, month] = value.split('-').map(Number)
  if (!month) return String(year)
  return monthFormat.format(new Date(Date.UTC(year!, month - 1)))
}

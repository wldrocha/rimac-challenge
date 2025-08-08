// utils/date.ts

/**
 * Convierte una fecha en formato 'dd-mm-yyyy' a un objeto Date de JS.
 */
export function parseDMYToDate(dateStr: string): Date | null {
  const [d, m, y] = dateStr.split('-').map(Number)
  if (!d || !m || !y) return null
  return new Date(y, m - 1, d)
}

/**
 * Calcula la edad a partir de una fecha de nacimiento (Date o string 'dd-mm-yyyy').
 */
export function getAge(birth: Date | string): number | null {
  let birthDate: Date | null = null
  if (birth instanceof Date) {
    birthDate = birth
  } else {
    birthDate = parseDMYToDate(birth)
  }
  if (!birthDate) return null
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

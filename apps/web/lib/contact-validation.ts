// Shared by the form and API so international names receive the same validation.
export function isValidContactName(value: string): boolean {
  const name = value.trim()
  return (
    name.length >= 2 &&
    name.length <= 100 &&
    /^[\p{L}\p{M}\p{Zs}.'’-]+$/u.test(name) &&
    /\p{L}/u.test(name)
  )
}

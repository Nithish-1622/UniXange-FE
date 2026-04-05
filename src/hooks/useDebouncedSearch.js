import { useEffect, useState } from 'react'

export function useDebouncedSearch(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handle = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handle)
  }, [value, delay])

  return debouncedValue
}

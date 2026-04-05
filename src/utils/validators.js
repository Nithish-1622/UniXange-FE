export function isCollegeEmail(email) {
  return /@.+\.(edu|ac\.in)$/i.test(email)
}

export function validateRequiredFields(payload, requiredFields) {
  const missing = requiredFields.filter((field) => !payload?.[field])
  return {
    valid: missing.length === 0,
    missing,
  }
}

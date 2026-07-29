export function formatPrice(value) {
  const num = Number(value)
  if (Number.isNaN(num)) return '₹0'
  return `₹${num.toFixed(0)}`
}

export function formatPriceDecimal(value) {
  const num = Number(value)
  if (Number.isNaN(num)) return '₹0.00'
  return `₹${num.toFixed(2)}`
}

export const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'

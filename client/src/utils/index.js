export function formatPrice (price) {
  price = price.toString()
  price = `R$ ${price}`
  return price.replace('.', ',')
}
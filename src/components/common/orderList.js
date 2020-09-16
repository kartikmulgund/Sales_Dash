export default function orderList(customers, selected) {
  const phone = selected.phone
  const orderList = customers.filter((customer) => customer.phone === phone)
  return orderList
}

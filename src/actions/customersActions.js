export function storeData(customersData) {
  return {
    type: 'STORE_DATA',
    payload: customersData,
  }
}

export function searchData(sales, keyword) {
  const payload = sales.filter(
    (customer) =>
      customer.name.toLowerCase().indexOf(keyword) !== -1 ||
      customer.phone.toString().indexOf(keyword) !== -1
  )
  console.log(payload)
  return {
    type: 'SEARCH_DATA',
    payload,
  }
}

import findUnique from '../components/common/findUnique'
import orderCount from '../components/common/orderCount'
import getDailyData from '../components/common/getDailyData'

const { sampleData } = require('../sampleData')

const initialState = {
  sales: sampleData,
  unique: findUnique(sampleData, 'phone'),
  orderData: orderCount(sampleData),
  chartData: getDailyData(sampleData),
  searchData: null,
}

export default function customersReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'STORE_DATA':
      return {
        ...state,
        sales: payload,
        unique: findUnique(payload, 'phone'),
        orderData: orderCount(payload),
        chartData: getDailyData(payload),
      }

    case 'SEARCH_DATA':
      return {
        ...state,
        searchData: payload,
      }

    default:
      return state
  }
}

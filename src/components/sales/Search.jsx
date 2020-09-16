import React from 'react'
import { Input } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { searchData } from '../../actions/customersActions'

export default function Search() {
  const dispatch = useDispatch()
  const sales = useSelector((state) => state.customersData.sales)

  const placeHolder = 'Search using name or phone number'
  return (
    <Input
      icon='search'
      fluid
      placeholder={placeHolder}
      onChange={(e) => dispatch(searchData(sales, e.target.value))}
    />
  )
}

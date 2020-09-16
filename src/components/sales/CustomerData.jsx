import React from 'react'
import { useSelector } from 'react-redux'
import TabularDisplay from './TabularDisplay'
import { Header } from 'semantic-ui-react'
import Search from './Search'

export default function CustomerData() {
  const customers = useSelector((state) => state.customersData.sales)
  return (
    <>
      <Header as='h4' block textAlign='left' color='blue'>
        Customer Details
      </Header>
      <div
        style={{
          marginBottom: '1em',
        }}
      >
        <Search />
      </div>

      {customers && <TabularDisplay />}
    </>
  )
}

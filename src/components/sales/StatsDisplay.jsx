import React from 'react'
import { Statistic } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import totalAmount from '../common/totalAmount'

export default function StatsDisplay() {
  const sales = useSelector((state) => state.customersData.sales)
  const orderData = useSelector((state) => state.customersData.orderData)

  return (
    <>
      <Statistic.Group
        color='brown'
        size='large'
        floated='right'
        style={{
          marginBottom: '2rem',
          justifyContent: 'center',
          backgroundColor: '	rgba(252,252,252, 90)',
          borderRadius: 5,
        }}
      >
        <Statistic>
          <Statistic.Value>{sales.length}</Statistic.Value>
          <Statistic.Label>Orders Received</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{totalAmount(sales)}</Statistic.Value>
          <Statistic.Label>Total Amount Earned</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{orderData.orderedOnce}</Statistic.Value>
          <Statistic.Label>Ordered Only Once</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </>
  )
}

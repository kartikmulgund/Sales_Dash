import React from 'react'
import { Table, Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function SalesTable() {
  const orderData = useSelector((state) => state.customersData.orderData)
  return (
    <>
      <div style={{ marginBottom: '7em' }}>
        <Header as='h4' block textAlign='center' color='blue'>
          Table of Order Frequency
        </Header>
        <Table striped collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Frequency of Orders</Table.HeaderCell>
              <Table.HeaderCell>No Of Customers</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Ordered Once</Table.Cell>
              <Table.Cell>{orderData.orderedOnce}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ordered Twice</Table.Cell>
              <Table.Cell>{orderData.orderedTwice}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ordered Thrice</Table.Cell>
              <Table.Cell>{orderData.orderedThrice}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ordered Four Times</Table.Cell>
              <Table.Cell>{orderData.orderedFourTimes}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ordered More Than Four Times</Table.Cell>
              <Table.Cell>{orderData.orderedFiveTimes}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Table, Container } from 'semantic-ui-react'
import ModalWrapper from '../modal/ModalWrapper'
import orderList from '../common/orderList'
import totalAmount from '../common/totalAmount'

export default function ViewDetails() {
  const customer = useSelector((state) => state.modal.modalProps)
  const sales = useSelector((state) => state.customersData.sales)
  const orders = orderList(sales, customer)
  const total = totalAmount(orders)

  return (
    <>
      <ModalWrapper size='mini' header='Transction Details'>
        <Container>
          <Card color='blue'>
            <Card.Content>
              <Card.Header>{customer.name}</Card.Header>
              <Card.Meta>{customer.phone}</Card.Meta>
              <Card.Description>
                {`Total purchases till date: ${total}`}
              </Card.Description>
            </Card.Content>
          </Card>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {orders.map((order) => {
                return (
                  <Table.Row key={order.id}>
                    <Table.Cell>{order.date}</Table.Cell>
                    <Table.Cell>{order.amount}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Container>
      </ModalWrapper>
    </>
  )
}

import React from 'react'
import { Table, Container, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import findUnique from '../common/findUnique'

import { openModal } from '../../actions/modalActions'

export default function TabularDisplay() {
  const sales = useSelector((state) => state.customersData.sales)
  const dispatch = useDispatch()
  const updatedCustomers = findUnique(sales, 'phone')
  const searchData = useSelector((state) => state.customersData.searchData)

  return (
    <>
      <Container>
        <Table celled selectable center='true' compact size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {searchData
              ? searchData?.map((customer) => (
                  <Table.Row key={customer.id}>
                    <Table.Cell>{customer.name}</Table.Cell>
                    <Table.Cell>{customer.phone}</Table.Cell>
                    <Table.Cell>
                      <Button
                        secondary
                        size='mini'
                        content='View Details'
                        onClick={() =>
                          dispatch(
                            openModal({
                              modalType: 'ViewDetails',
                              modalProps: customer,
                            })
                          )
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                ))
              : updatedCustomers?.map((customer) => (
                  <Table.Row key={customer.id}>
                    <Table.Cell>{customer.name}</Table.Cell>
                    <Table.Cell>{customer.phone}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color='twitter'
                        circular
                        size='mini'
                        content='View Details'
                        onClick={() =>
                          dispatch(
                            openModal({
                              modalType: 'ViewDetails',
                              modalProps: customer,
                            })
                          )
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

import React from 'react'
import { Menu, Container, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { storeData } from '../../actions/customersActions'
import { parse } from 'papaparse'

export default function Navbar() {
  const dispatch = useDispatch()

  const parseData = (csvFile) => {
    parse(csvFile, {
      dynamicTyping: true,
      header: true,
      complete: function (results) {
        console.log('Parsed Data', results.data)
        dispatch(storeData(results.data))
      },
    })
  }

  return (
    <>
      <Menu inverted fixed='top' widths='2'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <Icon
              name='dashboard'
              color='grey'
              size='large'
              inverted
              style={{ marginRight: '15px' }}
            />
            Sales DashBoard
          </Menu.Item>

          <Menu.Item>
            <input
              type='file'
              onChange={(e) => {
                parseData(e.target.files[0])
              }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  )
}

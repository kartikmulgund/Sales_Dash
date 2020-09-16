import React from 'react'
import Navbar from './components/layout/Navbar'
import CustomerData from './components/sales/CustomerData'
import './index.css'
import { Container, Button } from 'semantic-ui-react'
import ModalManager from './components/modal/ModalManager'
import StatsDisplay from './components/sales/StatsDisplay'
import SalesTable from './components/sales/SalesTable'
import SalesChart from './components/sales/SalesChart'
import PdfDownload from './components/sales/PdfDownload'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <ModalManager />
        <Navbar />

        <Container className='main'>
          <Route exact path='/reportPdf' component={PdfDownload} />
          <StatsDisplay />
          <Button
            as={Link}
            to='/reportPdf'
            name='ReportPdf'
            content='Generate Reports and Download PDF'
            fluid
            compact
            circular
            color='instagram'
            style={{ marginBottom: '2em' }}
          />
          <div className='side'>
            <SalesChart />
            <SalesTable />
          </div>

          <CustomerData />
        </Container>
      </Router>
    </>
  )
}

export default App

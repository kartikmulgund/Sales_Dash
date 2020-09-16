import React from 'react'
import Pdf from 'react-to-pdf'
import { Container, Button, Header, Icon } from 'semantic-ui-react'
import SalesTable from './SalesTable'
import SalesChart from './SalesChart'

export default function pdfReport() {
  const ref = React.createRef()

  return (
    <>
      <Container>
        <Pdf targetRef={ref} filename='report.pdf'>
          {({ toPdf }) => (
            <Button onClick={toPdf} content='Download PDF' primary />
          )}
        </Pdf>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '4em',
          }}
          ref={ref}
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          <div style={{ marginBottom: '2em' }}></div>
          <Header
            as='h2'
            color='blue'
            dividing
            size='huge'
            style={{ marginBottom: '2em' }}
          >
            <Icon name='file pdf' />
            <Header.Content>Sales Report PDF</Header.Content>
          </Header>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
              margin: 'auto%',
            }}
          >
            <SalesChart />
            <SalesTable />
          </div>
        </div>
      </Container>
    </>
  )
}

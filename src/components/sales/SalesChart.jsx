import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'

export default function SalesChart() {
  const orderData = useSelector((state) => state.customersData.chartData)
  const categories = Object.keys(orderData)
  const data = Object.values(orderData)
  console.log(categories, data)
  console.log('Order Data', orderData)
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: 'Orders',
        data: data,
      },
    ],
  }
  return (
    <>
      <div style={{ marginBottom: '7em', marginRight: '7em' }}>
        <Header as='h4' block textAlign='center' color='blue'>
          Sales Per Day Chart
        </Header>
        <Container fluid>
          <div className='app'>
            <div className='row'>
              <div className='mixed-chart'>
                <Chart
                  options={chartData.options}
                  series={chartData.series}
                  type='bar'
                  width='450'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const chartRef = useRef(null);

  useEffect(() => {
    if (orders) {
      const orderRanges = {
        range1: { label: '0-249$', count: 0 },
        range2: { label: '250-499$', count: 0 },
        range3: { label: '500-999$', count: 0 },
        range4: { label: '1000$+', count: 0 },
      };

      orders.forEach((order) => {
        const price = order.totalPrice;
        if (price >= 0 && price < 250) {
          orderRanges.range1.count++;
        } else if (price >= 250 && price < 500) {
          orderRanges.range2.count++;
        } else if (price >= 500 && price < 1000) {
          orderRanges.range3.count++;
        } else if (price >= 1000) {
          orderRanges.range4.count++;
        }
      });

      const chartData = {
        labels: Object.values(orderRanges).map((range) => range.label),
        datasets: [
          {
            label: 'Orders Quantity',
            data: Object.values(orderRanges).map((range) => range.count),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
            ],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
        },
      };

      const ctx = chartRef.current.getContext('2d');
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      chartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
      });
    }
  }, [orders]);

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant='light' className='btn-sm'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <canvas id='orderChart' ref={chartRef} width='50' height='200' style={{ maxWidth: '2500px', maxHeight: '500px' }}></canvas>
        </>
      )}
    </>
  );
};

export default OrderListScreen;

// src/components/RecentOrders.jsx

import React from 'react';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', img:"/person1.png" },
    { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered', img:"/person3.png" },
    { customer: 'Guy Hawkins', orderNo: '78995215', amount: '$45.88', status: 'Cancelled', img:"/person2.png" },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending', img:"/person4.jpg" },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', img:"/person1.png" },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', img:"/person3.png" },
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="font-semibold mb-4">Recent Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-700">
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Order No.</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2 px-4 flex items-center gap-2 ">
                <img className="h-5 w-5 rounded-full" src={order.img}></img>
                {order.customer}
              </td>
              <td className="py-2 px-4">{order.orderNo}</td>
              <td className="py-2 px-4">{order.amount}</td>
              <td className="py-2 px-4">
                <span
                  className={`inline-flex justify-center items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset w-20 text-center ${
                    order.status === 'Delivered'
                      ? 'bg-green-500/30 text-green-500 ring-green-600/40'
                      : order.status === 'Cancelled'
                      ? 'bg-red-500/30 text-red-500 ring-red-600/40'
                      : 'bg-yellow-500/30 text-yellow-500 ring-yellow-600/40'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all necessary Chart.js components

const ActivityChart = () => {
  // State to manage selected time frame
  const [timeFrame, setTimeFrame] = useState('Monthly');

  // Dynamic data based on selected time frame
  const getDataForTimeFrame = () => {
    switch (timeFrame) {
      case 'Weekly':
        return {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Activity',
              data: [1200, 1900, 3000, 5000, 2300, 3400, 2900],
              backgroundColor: 'rgba(96, 165, 250, 0.7)', // Bar color
              borderRadius: 20, // Rounded corners
              borderSkipped: false,
            },
          ],
        };
      case 'Yearly':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Activity',
              data: [15000, 20000, 25000, 30000, 40000, 35000, 38000, 37000, 39000, 36000, 34000, 32000],
              backgroundColor: 'rgba(96, 165, 250, 0.7)',
              borderRadius: 20,
              borderSkipped: false,
            },
          ],
        };
      case 'Monthly':
      default:
        return {
          labels: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27 ,29,31],
          datasets: [
            {
              label: 'Activity',
              data: [5000, 7000, 6000, 8000, 7500, 12000, 10000, 15000, 11000, 9000, 6000 ,7000, 8000,4000,5000],
              backgroundColor: 'rgba(96, 165, 250, 0.7)',
              borderRadius: 20,
              borderSkipped: false,
            },
          ],
        };
    }
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ${context.raw} activities`;
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: 'white',
        bodyColor: 'white',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on the x-axis
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)', // X-axis tick color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid line color
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)', // Y-axis tick color
          stepSize: 5000,
        },
      },
    },
    responsive: true,
    layout: {
      padding: 10,
    },
    animation: {
      duration: 800, // Animation duration for transitions
      easing: 'easeOutQuart', // Animation easing style
    },
  };

  // Handle change in the time frame
  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-lg font-semibold">Activity</h3>
        <select
          value={timeFrame}
          onChange={handleTimeFrameChange}
          className="bg-gray-700 text-white px-4 py-1 ring-1 ring-gray-600 rounded-full focus:outline-none"
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="h-52">
        <Bar data={getDataForTimeFrame()} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;


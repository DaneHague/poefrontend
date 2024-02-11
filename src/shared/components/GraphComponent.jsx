import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphComponent = ({ graphData, maxSize }) => {

  const options = {
    scales: {
      y: {
        min: 0,
        max: maxSize,
      }
    }
  };

  return <Bar data={graphData} options={options} />;
};

export default GraphComponent;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphComponent = ({ graphData }) => {

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
      }
    }
  };

  return <Bar data={graphData} options={options} />;
};

export default GraphComponent;

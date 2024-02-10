import React from 'react';
import useFetch from '../hooks/useFetch';
import GraphComponent from './GraphComponent';

const DataDisplayComponent = () => {
  const { data, loading, error } = useFetch('https://poe-functions-test.azurewebsites.net/api/GetCurrency');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data to display</p>;

  const transformedData = Object.keys(data).map(key => ({
    name: data[key].Name,
    stackSize: parseInt(data[key].StackSize, 10)
  }));

  const graphData = {
    labels: transformedData.map(item => item.name),
    datasets: [
      {
        label: 'Stack Size',
        data: transformedData.map(item => item.stackSize),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <h2>Currency Stack Sizes:</h2>
      <GraphComponent graphData={graphData} />
    </div>
  );
};

export default DataDisplayComponent;

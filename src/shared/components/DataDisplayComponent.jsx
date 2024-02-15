import React from 'react';
import useFetch from '../hooks/useFetch';
import GraphComponent from './GraphComponent';

const DataDisplayComponent = ({ url, maxSize, graphTitle }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data to display</p>;

  const transformedData = Object.keys(data).map(key => ({
    name: data[key].name,
    stackSize: parseInt(data[key].stackSize, 10)
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
      <h2>{graphTitle}</h2>
      <GraphComponent graphData={graphData} maxSize={maxSize} />
    </div>
  );
};

export default DataDisplayComponent;

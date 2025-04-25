import './App.css';
import React, { useEffect, useState } from 'react';
import HealthForm from './components/HealthForm';
import HealthTable from './components/HealthTable';
import HealthChart from './components/HealthChart';
import FilterSortControls from './components/FilterSortControls';
import DarkModeToggle from './components/DarkModeToggle';
import { saveData, getData } from './utils/storage';
import { saveAs } from 'file-saver';


function App() {
  const [healthData, setHealthData] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('Step Count');
  const [filterTime, setFilterTime] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const storedData = getData();
    if (storedData) {
      setHealthData(storedData);
    }
  }, []);

  useEffect(() => {
    saveData(healthData);
  }, [healthData]);

  const addHealthEntry = (entry) => {
    setHealthData(prev => [entry, ...prev]);
  };

  const deleteEntry = (id) => {
    const updated = healthData.filter(item => item.id !== id);
    setHealthData(updated);
  }

  const editEntry = (id, newValue) => {
    const updated = healthData.map(item => item.id === id ? { ...item, value: newValue } : item);
    setHealthData(updated);
  }

  const exportCSV = () => {
    const csvContent = [
      ['Metric', 'Value', 'Time'],
      ...healthData.map(item => [
        item.metric, item.value, new Date(item.timestamp).toLocaleString()
      ])
    ].map(e => e.join(",")).join("/n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "health-data.csv");
  };

  return (
    <div className='app-container'>
      <h1 className='app-title'>
        Health Tracker App
      </h1>
      <DarkModeToggle />
      <button onClick={exportCSV} className='export-btn'>Export as CSV</button>
      <HealthForm onAddEntry={addHealthEntry} />
      <HealthTable
        data={healthData}
        filterTime={filterTime}
        sortOrder={sortOrder}
        onDelete={deleteEntry}
        onEdit={editEntry}
      />
      <FilterSortControls
        selectedMetric={selectedMetric}
        setSelectedMetric={setSelectedMetric}
        filterTime={filterTime}
        setFilterTime={setFilterTime}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <HealthChart
        data={healthData}
        selectedMetric={selectedMetric}
      />
    </div>
  );
}

export default App;

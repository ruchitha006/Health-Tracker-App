import './HealthForm.css';
import React, { useState } from 'react';

function HealthForm({ onAddEntry }) {
    const [metric, setMetric] = useState('Step Count');
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || isNaN(value) || value <= 0 || value > 100000) {
            alert('Please enter a valid, positive number under 100000');
            return;
        }

        const numValue = Number(value);
        if (metric === 'Step Count' && (numValue <= 0 || numValue > 100000)) {
            alert('Step Count must be between 1 and 100000');
            return;
        }
        if (metric === 'Water Intake' && (numValue <= 0 || numValue > 10000)) {
            alert(' Water Intake must be between 1 and 10000 ml');
            return;
        }
        if (metric === 'Heart Rate' && (numValue < 20 || numValue > 220)) {
            alert('Heart Rate must be between 20 and 220 bpm');
            return;
        }


        const newEntry = {
            id: Date.now(),
            metric,
            value: Number(value),
            timestamp: new Date().toISOString(),
        };

        onAddEntry(newEntry);
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit} className='health-form'>
            <select value={metric}
                onChange={(e) =>
                    setMetric(e.target.value)}>
                <option>Step Count</option>
                <option>Water Intake</option>
                <option>Heart Rate</option>
            </select>
            <input
                type='number'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Enter Value'
            />
            <button type='submit'>Add Entry</button>
        </form>
    );
}

export default HealthForm;
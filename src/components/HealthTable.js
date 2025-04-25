import { useState } from 'react';
import './HealthTable.css';

function HealthTable({ data, filterTime, sortOrder, onDelete, onEdit }) {
    const [editValue, setEditValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const getHour = (timestamp) =>
        new Date(timestamp).getHours();
    const filterDataByTime = (data) => {
        if (filterTime === 'all')
            return data;
        return data.filter((item) => {
            const hour = getHour(item.timestamp);
            if (filterTime === 'morning')
                return hour >= 5 && hour < 12;
            if (filterTime === 'afternoon')
                return hour >= 12 && hour < 17;
            if (filterTime === 'evening')
                return hour >= 17 && hour < 22;
            return false;
        });
    };

    const sortData = (data) => {
        let sorted = [...data];
        if (sortOrder === 'asc') {
            sorted.sort((a, b) => a.value - b.value);
        } else if (sortOrder === 'desc') {
            sorted.sort((a, b) => b.value - a.value);
        } else {
            sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        return sorted;
    };

    const filteredData = sortData(filterDataByTime(data));

    const startEditing = (id, currentValue) => {
        setEditingId(id);
        setEditValue(currentValue);
    };

    const saveEdit = (id) => {
        if (editValue === '' || isNaN(editValue)) {
            alert('Enter Valid Number');
            return;
        }
        onEdit(id, Number(editValue));
        setEditingId(null);
        setEditValue('');
    };

    return (
        <div className='table-container'>
            <h2>Health Data</h2>
            {filteredData.length === 0 ? (
                <p>No Data Available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.metric}</td>
                                <td>{editingId === item.id ? (
                                    <input
                                        type='number'
                                        value={editValue}
                                        onChange={(e) =>
                                            setEditValue(e.target.value)
                                        }
                                    />
                                ) : (item.value)}</td>
                                <td>{new Date(item.timestamp).toLocaleString()}</td>
                                <td>{editingId === item.id ? (
                                    <button onClick={() => saveEdit(item.id)}>Save</button>) :
                                    (<button onClick={() => startEditing(item.id, item.value)}>Edit</button>)}
                                    <button onClick={() => onDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )

}

export default HealthTable;
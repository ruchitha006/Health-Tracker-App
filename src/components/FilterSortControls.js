import './FilterSortControls.css';
import React from 'react';

function FilterSortControls({
    selectedMetric,
    setSelectedMetric,
    filterTime,
    setFilterTime,
    sortOrder,
    setSortOrder
}){
    return (
        <div className='controls-container'>
            {/* Metric Selection */}
            <div>
                <label>Metric for Chart:</label>
                <select value={selectedMetric}
                onChange={(e)=>setSelectedMetric(e.target.value)}>
                    <option>Step Count</option>
                    <option>Water Intake</option>
                    <option>Heart Rate</option>
                </select>
            </div>
            {/* Time Filter */}
            <div>
                <label>Time Filter:</label>
                <select value={filterTime}
                onChange={(e)=>setFilterTime(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='morning'>Morning</option>
                    <option value='afternoon'>Afternoon</option>
                    <option value='evening'>Evening</option>
                </select>
            </div>
            {/* Sort Order */}
            <div>
                <select value={sortOrder}
                onChange={(e)=>setSortOrder(e.target.value)}>
                    <option value='desc'>High to Low</option>
                    <option value='asc'>Low to High</option>
                </select>
            </div>
        </div>
    )
}
export default FilterSortControls;
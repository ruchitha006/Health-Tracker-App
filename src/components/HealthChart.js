import React from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, YAxis } from "recharts";
import './HealthChart.css';

function HealthChart({ data, selectedMetric }) {
    const filteredData = data.filter(item => {
        const hoursDiff = (new Date() - new Date(item.timestamp)) / (1000 * 60 * 60);
        return item.metric === selectedMetric && hoursDiff <= 24;
    });

    const sortedData = [...filteredData].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return (
        <div className="charted-container">
            <h2>{selectedMetric} in last 24 hours</h2>

            {sortedData.length === 0 ? (
                <p>No data to display</p>
            ) : (<ResponsiveContainer width='100%' height={300}>
                <LineChart data={sortedData}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="timestamp"
                        tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
                    <YAxis />
                    <Tooltip labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()} />
                    <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>)}
        </div>
    );
}

export default HealthChart;
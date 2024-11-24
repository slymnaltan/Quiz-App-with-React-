import React from 'react'
import './dropdown.css'

function Dropdown({ data, setChange }) {
    return (
        <div className='dropdown'>
            <select onChange={(e) => setChange(e.target.value)}>
                {data.map((dt, i) => (
                    <option key={i} value={dt.value || dt}>{dt.label || dt}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown

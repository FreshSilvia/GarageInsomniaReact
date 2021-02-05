import React from 'react';

function Filter({ selected, selectOptions }) {
    return (
        <div className="filter-container">
            <select onChange={selected} className="drop-down">
                {selectOptions.map((opt) => <option value={opt.value} disabled={opt.placeholder} selected={opt.placeholder} >{opt.label}</option> )}
            </select>
        </div>
    );
}

export default Filter;
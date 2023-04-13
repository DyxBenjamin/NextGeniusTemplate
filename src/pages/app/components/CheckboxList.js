import React, { useState } from 'react';

const CheckboxList = ({ numCheckboxes }) => {
    const [checkboxes, setCheckboxes] = useState(Array(numCheckboxes).fill(false));

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    }

    const renderCheckboxes = () => {
        return checkboxes.map((isChecked, index) => {
            return (
                <div key={index} style={{marginTop:"15px"}}>
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(index)} />
                        Ingrediente suplementario {index + 1}
                    </label>
                </div>
            );
        });
    }

    return (
        <div>
            {renderCheckboxes()}
        </div>
    );
};

export default CheckboxList;

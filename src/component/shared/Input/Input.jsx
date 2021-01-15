import React from 'react';

const Input = ({title, type = 'text', value, onChange, name}) => {
    return (
        <label>
            {title}
            <input
                type={type}
                placeholder=""
                value={value}
                name={name}
                onChange={onChange}
            />
        </label>
    );
};

export default Input;
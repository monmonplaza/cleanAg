import React from 'react'

export const Input = ({label, type,}) => {
    return (
        <div className="form__group">
            <label htmlFor={`input-${label}`}>{label}</label>
            <input type={type} name={`input-${label}`}/>
        </div>
    );
}


export const TextArea = ({label}) => {
    return (
        <div className="form__group">
            <label htmlFor={`textarea-${label}`}>{label}</label>
            <textarea name={`textarea-${label}`}></textarea>
        </div>
    );
}

export const Submit = ({text}) => {
    return (
        <div className="form__group">
          <button>{text}</button>
        </div>
    );
}
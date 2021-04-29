import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState(''); // undefined!

    const handleInputChange = (e) => {
        
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {

            // console.log('Submit hecho')
            setCategories( cats => [ inputValue, ...cats ] );
            setinputValue('');

        }
        
        
    }

    return (
        
        <form onSubmit = { handleSubmit }>
        
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
       
    )
}




import React, { useState } from 'react';

type prams_input = {
    lable_title: string,
    type: string,
    name: string,
    require: boolean,
    place_holder: string,
    validate: () => boolean
}

export default function Input({ lable_title, type, name, require, place_holder, validate }: prams_input) {
    const [error, setError] = useState(false);

    const handle_validate = () => {
        setError(!validate());
    }
    return (
        <>
            <div>
                <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">{lable_title}</label>
                <input type={type}
                    name={name}
                    className={`bg-neutral-secondary-medium border text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body ${error ? 'border-red-500' : 'border-default-medium'}`}
                    placeholder={place_holder}
                    required={require}
                    onBlur={handle_validate}
                />
            </div>

        </>
    )
}
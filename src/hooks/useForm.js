import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const[ values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        rePassword: '',
    });

    const changeHandler = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === "email" && (value.length <= 2 || value.length > 15)) {
            errors.email = 'Please enter a valid email address';
        };
        if (e.target.name === "password" && (value.length <= 2 || value.length > 10)) {
            errors.password = 'Please enter a valid password';
        };
        if (e.target.name === "rePassword" && (value.length <= 2 || value.length > 10)) {
            errors.rePassword = 'Please enter a valid rePassword';
        };
        setFormErrors(errors);
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };


    const onSubmit = (e) => {
        e.preventDefault();
       
        onSubmitHandler(values);// take state and send it values
        
        setValues(initialValues);//zero form and it values
    };

    const changeValues = (newValues) => {
        // TODO: Validate newVAlues shape(like initialValues)
        setValues(newValues);
    };

    return {
        values, 
        changeHandler, 
        onSubmit,
        changeValues,
        formErrors,
    };
}
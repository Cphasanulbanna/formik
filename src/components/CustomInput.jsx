import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, "field");
    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                {...props}
                {...field}
            />
        </>
    );
};

export default CustomInput;

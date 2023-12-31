import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                {...props}
                {...field}
                className={meta.touched && meta.error ? "error" : ""}
            />
            {meta.touched && meta.error && <p className="error">{meta.error}</p>}
        </>
    );
};

export default CustomInput;

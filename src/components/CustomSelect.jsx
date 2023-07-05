import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor="">{label}</label>
            <select
                {...props}
                {...field}
                className={meta.touched && meta.error ? "error" : ""}
            />

            {meta.touched && meta.error && <p className="error">{meta.error}</p>}
        </>
    );
};

export default CustomSelect;

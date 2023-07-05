import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="checkbox">
                <input
                    {...props}
                    {...field}
                    className={meta.touched && meta.error ? "error" : ""}
                />
                <span>I accept terms and service</span>
            </div>

            {meta.touched && meta.error && <p className="error">{meta.error}</p>}
        </>
    );
};

export default CustomCheckbox;

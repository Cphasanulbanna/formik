import { useField } from "formik";
import React from "react";

const CustomFileinput = ({ props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input
                {...props}
                {...field}
                className={meta.touched && meta.error ? "error" : ""}
            />
            {meta.touched && meta.error && <p className="error">{meta.error}</p>}
        </>
    );
};

export default CustomFileinput;

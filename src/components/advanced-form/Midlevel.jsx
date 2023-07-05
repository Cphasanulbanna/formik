import React from "react";

import "./advanced-form.scss";

import { Form, Formik } from "formik";

import { adVancedSchema } from "../schemas";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomCheckbox from "../CustomCheckbox";

function Midlevel() {
    const initialValues = {
        username: "",
        jobType: "",
        acceptedTos: false,
    };

    const onSubmit = async (values, actions) => {
        await new Promise((ressolve) => setTimeout(ressolve, 1000));
        console.log("submitted");
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={adVancedSchema}
            onSubmit={onSubmit}
        >
            {({ errors, ...props }) => (
                <Form style={{ background: "#111" }}>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />

                    <CustomSelect
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please selecta a job</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                        <option value="other">other</option>
                    </CustomSelect>

                    <CustomCheckbox
                        type="checkbox"
                        name="acceptedTos"
                    />

                    <button
                        disabled={props.isSubmitting || Object.keys(errors).length > 0}
                        className="button"
                        type="submit"
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default Midlevel;

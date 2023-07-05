import React from "react";

import "./advanced-form.scss";

import { Field, Form, Formik, useFormik } from "formik";

import { adVancedSchema, basicSchema } from "../schemas";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomCheckbox from "../CustomCheckbox";

function AdvancedForm() {
    const initialValues = {
        username: "",
        jobType: "",
        acceptedTos: false,
    };

    const onSubmit = async (values, actions) => {
        await new Promise((ressolve) => setTimeout(ressolve, 1000));
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={adVancedSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                    {console.log(props, "props")}

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
                        // disabled={isSubmitting || Object.keys(errors).length > 0}
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

export default AdvancedForm;

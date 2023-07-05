import React from "react";

import "./advanced-form.scss";

import { Field, Form, Formik, useFormik } from "formik";

import { adVancedSchema, basicSchema } from "../schemas";
import CustomInput from "../CustomInput";

function AdvancedForm() {
    return (
        <Formik
            initialValues={{ username: "banna" }}
            validationSchema={adVancedSchema}
        >
            {(props) => (
                <Form>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
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

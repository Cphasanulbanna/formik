import React from "react";

import { Formik, Field, Form } from "formik";
import { checkboxSchcema } from "../schemas";

function Checkboxes() {
    const onSubmit = async (value, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        console.log("form submitted");
    };

    const initialValue = {
        place: "",
        skills: [],
    };

    const skills = ["html", "css", "js", "react", "node"];

    return (
        <Formik
            validationSchema={checkboxSchcema}
            initialValues={initialValue}
            onSubmit={onSubmit}
        >
            {({ errors, values, touched, isSubmitting }) => (
                <Form autoComplete="off">
                    {console.log(values, "values")}
                    {console.log(errors, "errors")}
                    <label htmlFor="place">place</label>
                    <Field
                        type="text"
                        name="place"
                        placeholder="Enter your place"
                    />
                    {errors.place && touched.place && <p className="error">{errors.place}</p>}

                    <label htmlFor="skills">skills</label>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <label key={index}>
                                <Field
                                    type="checkbox"
                                    name="skills"
                                    value={skill}
                                />
                                {skill}
                            </label>
                        ))}
                    </div>
                    {errors.skills && <p className="error">{errors.skills}</p>}

                    <button
                        disabled={isSubmitting || Object.keys(errors).length > 0}
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

export default Checkboxes;

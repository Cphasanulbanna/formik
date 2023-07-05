import React, { useState } from "react";

import { Formik, Field, Form } from "formik";
import { checkboxSchcema } from "../schemas";

function Advanced() {
    const onSubmit = async (value, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        console.log("form submitted");
    };

    const [preview, setPreview] = useState("");

    const initialValue = {
        place: "",
        skills: [],
        gender: "",
        image: "",
    };

    const skills = ["html", "css", "js", "react", "node"];

    return (
        <Formik
            validationSchema={checkboxSchcema}
            initialValues={initialValue}
            onSubmit={onSubmit}
        >
            {({ errors, values, touched, isSubmitting, setFieldValue, ...props }) => (
                <Form
                    autoComplete="off"
                    style={{ background: "rgb(4, 51, 41)" }}
                >
                    {console.log(values, "values")}
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

                    <h2 style={{ fontSize: "16px" }}>Gender</h2>

                    <div className="genders">
                        <label htmlFor="male">Male</label>
                        <Field
                            type="radio"
                            value="male"
                            name="gender"
                            id="male"
                            style={{ width: "20px" }}
                        />

                        <label htmlFor="female">Female</label>
                        <Field
                            index="female"
                            type="radio"
                            value="female"
                            name="gender"
                            style={{ width: "20px" }}
                        />
                    </div>
                    {errors.gender && <p className="error">{errors.gender}</p>}

                    <label htmlFor="image">Image</label>
                    <input
                        name="image"
                        type="file"
                        accept="image/*"
                        style={{ height: "unset", background: "none", padding: 0 }}
                        onChange={(e) => {
                            setFieldValue("image", e.target.files[0]);
                            setPreview(URL.createObjectURL(e.target.files[0]));
                        }}
                    />
                    {errors.image && <p className="error">{errors.image}</p>}

                    {preview && (
                        <div>
                            <img
                                width={"50px"}
                                src={preview}
                                alt="preview"
                            />
                        </div>
                    )}

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

export default Advanced;

import React from "react";

import "./basic-form.scss";

import { useFormik } from "formik";

import { basicSchema } from "../schemas";

function BasicForm() {
    const onSubmit = async (value, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        console.log("form submitted");
    };

    const { values, errors, touched, handleChange, isSubmitting, handleBlur, handleSubmit } =
        useFormik({
            initialValues: {
                email: "",
                age: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });

    console.log(errors, "errors");

    return (
        <form
            id="form1"
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <label htmlFor="age">Age</label>
            <input
                type="number"
                placeholder="Enter your age"
                id="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.age && touched.age ? "error" : ""}
            />
            {errors.age && touched.age && <p className="error">{errors.age}</p>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "error" : ""}
            />
            {errors.password && touched.password && <p className="error">{errors.password}</p>}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.confirmPassword && touched.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
            )}
            <button
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="button"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}

export default BasicForm;

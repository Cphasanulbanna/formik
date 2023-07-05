import React from "react";

import "./basic-form.scss";

import { useFormik } from "formik";

function BasicForm() {
    const { values, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <form autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <label htmlFor="age">Age</label>
            <input
                type="number"
                placeholder="Enter your age"
                id="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button
                className="button"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}

export default BasicForm;

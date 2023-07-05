import React from "react";

import "./basic-form.scss";
import { useFormik } from "formik";

function BasicForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
    });
    return (
        <form autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <label htmlFor="age">Age</label>
            <input
                type="number"
                placeholder="Enter your age"
                id="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    age: yup.number().positive().integer().required("Age is required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please enter a strong password" })
        .required("Paassword is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Paassword is required"),
});

export const adVancedSchema = yup.object().shape({
    username: yup.string().min(3, "Username must be atleast 3 character").required("required"),
    jobType: yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "Invalid job type")
        .required("required"),
    acceptedTos: yup.boolean().oneOf([true], "Please accept the terms and service"),
});

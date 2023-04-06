import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "yup-phone";

const SimpleForm = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phoneNo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Min 3 characters or greater")
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(
          8,
          "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
        )
        .matches(passwordRules, {
          message:
            "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
        })
        .required("Required"),
      phoneNo: Yup.string()
        // .phone("IN", true,"Phone No is Invalid")
        .required("Required"),
    }),
    onSubmit: () => {
      const obj = {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        phone: formik.values.phone,
      };
      console.log("Data", obj);
      // initialValues: {
      //     name: "",
      //     email: "",
      //     password: "",
      //   },
      // console.log(mobile.isValidSync("+919876543210"));
      toast("🦄 Form Submitted SuccessFully..!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      formik.resetForm();
    },
  });
  return (
    <div className="drop-shadow-lg bg-gradient-to-r from-stone-500 via-gray-700 to-gray-950 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-neutral-400 to-slate-600 rounded-lg pt-5 px-14 mx-auto shadow-xl overflow-hidden">
        <h1 className="text-3xl mb-4 font-bold text-white text-center my-3">
          Register
        </h1>
        <p className="text-white text-center mb-4 mt-0 ">
          Create a new account
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-5">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="text-black p-1 rounded-sm px-2 py-1 font-semibold outline-none border-gray-700"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <h1 className="text-[red]">{formik.errors.name}</h1>
            )}
          </div>
          <div className="my-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-black p-1 rounded-sm px-2 py-1 font-semibold outline-none border-gray-700"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <h1 className="text-[red]">{formik.errors.email}</h1>
            )}
          </div>
          <div className="my-5">
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="text-black p-1 rounded-sm px-2 py-1 font-semibold outline-none border-gray-700"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <h1 className="text-[red]">{formik.errors.password}</h1>
            )}
          </div>
          <div className="my-5">
            <input
              type="number"
              name="phoneNo"
              placeholder="Phone Number"
              className="text-black p-1 rounded-sm px-2 py-1 font-semibold outline-none border-gray-700"
              onChange={formik.handleChange}
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo && (
              <h1 className="text-[red]">{formik.errors.phoneNo}</h1>
            )}
          </div>

          <div className="mb-6 ">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-800 to-slate-600 hover:from-purple-700 hover:to-cyan-600 p-2 font-bold rounded-md text-white w-full"
            >
              Sumbit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;

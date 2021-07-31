// Import resources
import React from "react";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";

// Import custom files
import CustomInputFloat from "../components/CustomInputFloat";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomCheckboxRadio from "../components/CustomCheckboxRadio";
import CustomCheckboxInline from "../components/CustomCheckboxInline";
import CustomSelectFloat from "../components/CustomSelectFloat";
import CustomTextareaFloat from "../components/CustomTextareaFloat";

// Component
function Test() {
  // Define radio options
  const radioOptions = [
    { key: "Yes", value: "yes" },
    { key: "No", value: "no" },
  ];

  // Define checkbox options
  const checkboxOptions = [
    { key: "React", value: "react" },
    { key: "Javascript", value: "javascript" },
    { key: "Redux", value: "redux" },
    { key: "Firebase", value: "firebase" },
    { key: "Next.js", value: "nextjs" },
    { key: "Git", value: "git" },
  ];

  // Define select options
  const selectOptions = [
    { key: "Please choose your location", value: "" },
    { key: "Accra", value: "accra" },
    { key: "Kumasi", value: "kumasi" },
    { key: "Tema", value: "tema" },
  ];

  // Define initial form values
  const initialValues = {
    firstName: "",
    emailAddr: "",
    pass: "",
    showHidden: false,
    enjoyCoding: "",
    skills: [],
    location: "",
    comment: "",
  };

  // Define validations
  const validate = Yup.object({
    firstName: Yup.string().required("Required").min(3, "Must be 3 or more"),
    emailAddr: Yup.string().email("Invalid email address").required("Required"),
    pass: Yup.string().required("Required").min(5, "Must be 5 or more"),
    showHidden: Yup.bool(),
    enjoyCoding: Yup.string().required("Required"),
    skills: Yup.array().min(1, "Must select at least one"),
    location: Yup.string().required("Required"),
    comment: Yup.string().required("Required").min(5, "Must be 5 or more"),
  });

  // Define submit function
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    // Alert form values
    alert(JSON.stringify(values, null, 2));

    // Reset form
    resetForm();
    // Set submitting to false
    setSubmitting(false);
  };

  // Return
  return (
    <>
      {/** Formik */}
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} autoComplete="off">
            {/** Debug */}
            {/* {console.log("Form Values:", formik.values)} */}

            {/** First name */}
            <CustomInputFloat
              type="text"
              name="firstName"
              label="First name"
              placeholder="Enter first name"
            />

            {/** Email Address */}
            <CustomInputFloat
              type="email"
              name="emailAddr"
              label="Email Address"
              placeholder="Enter your email address"
            />

            {/** Password */}
            <CustomInputFloat
              type="password"
              name="pass"
              label="Password"
              placeholder="Enter password"
            />

            {/** Checkbox - Check */}
            <CustomCheckbox name="showHidden" label="Show Hidden Input" />

            {/** Hidden input */}
            {formik.values.showHidden && (
              <>
                <Form.Text>
                  <p>This is a hidden input</p>
                </Form.Text>
              </>
            )}

            {/** Checkbox - Radio */}
            <CustomCheckboxRadio
              inline="true"
              label="Do you enjoy Coding?"
              name="enjoyCoding"
              options={radioOptions}
            />

            {/** Checkbox - Inline */}
            <CustomCheckboxInline
              inline="true"
              label="Choose your skllls"
              name="skills"
              options={checkboxOptions}
            />

            {/** Select */}
            <CustomSelectFloat
              label="Choose location"
              name="location"
              options={selectOptions}
            />

            {/** Textarea */}
            <CustomTextareaFloat
              label="Leave a Comment"
              name="comment"
              placeholder="Please leave a comment"
            />

            {/** Button */}
            <Button
              variant="primary"
              type="submit"
              className="btn-lg w-100"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

// Export
export default Test;

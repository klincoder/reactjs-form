// Import resources
import React from "react";
import CustomCard from "../components/CustomCard";
import PageCol from "../components/PageCol";
import PageSection from "../components/PageSection";
import CustomForm from "../components/CustomForm";

// Component
function Home() {
  // Return
  return (
    <>
      {/** Section - Project details */}
      <PageSection sectionClass="section-proj-details" isFluid>
        <PageCol colClass="col-md-12">
          <div className="text-center">
            <h2>Reactjs Form + Formik + Yup</h2>
            <p>
              An easier way to handle form state, validation and submission.
            </p>
          </div>
        </PageCol>
      </PageSection>

      {/** Section - Project demo */}
      <PageSection sectionClass="section-proj-demo">
        <PageCol colClass="col-md-6 offset-md-3">
          <CustomCard className="shadow">
            {/** Form */}
            <CustomForm />
          </CustomCard>
        </PageCol>
      </PageSection>
    </>
  );
}

// Export
export default Home;

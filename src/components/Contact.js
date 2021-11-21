import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import styled from "styled-components/macro";

const Section = styled.section`
  width: 100%;
  height: 100%;
  //   padding: 0rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  background-color: #dfdfdf;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23b6b6b6' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const Contacts = styled.div`
  margin: auto;
  padding: 2rem;
  margin-top: 3rem;
  max-width: 750px;

  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: none;
    resize: none;
    // padding: 5px;
    border: 0;
    border-bottom: 0.125rem solid grey;
    border-radius: 0;
    color: black;
    outline: 0 !important;
    box-shadow: none !important;
    // margin-bottom: 1rem;
    padding-left: 0 !important;
    padding-top: 1.2rem;
  }

  input:focus,
  textarea:focus {
    background-color: rgba(205, 133, 63, 0.4);
    transition: 0.5s ease-in-out;
    margin: 0;
  }

  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
`;

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_o4F5Z0TZVqcajxsdJSbGM";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully!");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <Section>
      <Container>
        <Contacts>
          <div className="text-center">
            <h2>contact</h2>
            <p>Please fill out the form (all fields are required) and Send.</p>
            <span style={{ color: "#cd853f" }}>{successMessage}</span>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="form-container">
                  {/*Name Input */}
                  <input
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                      required: "Please enter a name",
                    })}
                  />

                  <span style={{ color: "#cd853f" }}>
                    {errors.name && errors.name.message}
                  </span>

                  {/*Phone Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    {...register("phone", {
                      required: "Please add your phone number",
                    })}
                  />

                  <span style={{ color: "#cd853f" }}>
                    {errors.phone && errors.phone.message}
                  </span>

                  {/*Email Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: "Please add your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please Enter a valid email address",
                      },
                    })}
                  />

                  <span style={{ color: "#cd853f" }}>
                    {errors.email && errors.email.message}
                  </span>

                  {/*Subject Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject", {
                      required: "OOPS, you forget to add the subject.",
                    })}
                  />

                  <span style={{ color: "#cd853f" }}>
                    {errors.subject && errors.subject.message}
                  </span>

                  {/*Message Input */}
                  <textarea
                    {...register("description")}
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="description"
                    {...register("description", {
                      required: "Please write your message...",
                    })}
                  ></textarea>
                  <div className="line"></div>
                  <span style={{ color: "#cd853f" }}>
                    {errors.description && errors.description.message}
                  </span>
                  <div type="submit">
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        padding: "1rem 3rem",
                        border: 0,
                        marginTop: "1rem",
                      }}
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Contacts>
      </Container>
    </Section>
  );
};

export default Contact;

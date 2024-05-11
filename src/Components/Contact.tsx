import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../Common/Heading.tsx";
import { EMAIL_RECEIPIENT } from "../constants.tsx";

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 5px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap-reverse;
  }
`;
const FormContainer = styled.div`
  background-color: #100d25;
  height: 590px;
  border-radius: 10px;
  width: 100%;
  padding: 20px 30px;
  * {
    background-color: #100d25;
  }
`;
const Tagline = styled.p`
  font-size: 18px;
  color: rgb(170 166 195);
`;
const ContactForm = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.label`
  font-size: 16px;
  margin: 10px 0;
  color: #fff;
  font-weight: 700;
`;
const FormInput = styled.input`
  background-color: #ffdead;
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  border-radius: 7px;
  font-size: 15px;
  border: 0;
  outline: 0;
  font-weight: 700;
`;
const FormTextBox = styled.textarea`
  background-color: #ffdead;
  padding: 10px 20px;
  width: 100%;
  border-radius: 7px;
  border: 0;
  outline: 0;
  font-weight: 700;
  height: 150px;
`;
const FormButton = styled.button`
  background-color: #ffdead;
  border: 0;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
  border-radius: 5px;
  margin-top: 10px;
  align-self: flex-end;
  cursor: pointer;
  &:active {
    background-color: #fff7ea;
    transform: scale(0.9);
  }
`;

const InformationContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 590px;
  background-color: #100d25;
  * {
    background-color: #100d25;
  }
`;
const SocialProfiles = styled.div`
  margin-top: 20px;
  li {
    display: flex;
    align-items: center;
    margin: 8px 0;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;

const RedirectText = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
`;

const Contact = () => {
  const [name, setName] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const encodedMessage = encodeURIComponent(message + "\n\n" + name);

  return (
    <Wrapper id="contact">
      <FormContainer>
        <Tagline>GET IN TOUCH</Tagline>
        <Heading title="Contact" color="#fff" />
        <ContactForm
          action={`mailto:${EMAIL_RECEIPIENT}?body=${encodedMessage}`}
        >
          <FormLabel>Name</FormLabel>
          <FormInput
            required
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target?.value)}
          />
          <FormLabel>Email</FormLabel>
          <FormInput required type="email" placeholder="Enter your email" />
          <FormLabel>Message</FormLabel>
          <FormTextBox
            required
            placeholder="Leave a message"
            onChange={(e) => setMessage(e.target?.value)}
          ></FormTextBox>

          <FormButton>Submit</FormButton>
        </ContactForm>
      </FormContainer>
      <InformationContainer>
        <div>
          <Text>Muhammad Ahmed</Text>
          <Text>Full Stack Developer</Text>
          <Text>Lahore, Pakistan</Text>
          <SocialProfiles>
            <li>
              <img src="/svgs/github.svg" alt="" />
              <RedirectText
                href="https://www.github.com/ahmedazhar2299"
                target="_blank"
              >
                github.com/ahmedazhar2299
              </RedirectText>
            </li>
            <li>
              <img src="/svgs/linkedin.svg" alt="" />
              <RedirectText
                href="https://www.linkedin.com/in/ahmedazhar2299/"
                target="_blank"
              >
                linkedin.com/in/ahmedazhar2299
              </RedirectText>
            </li>
            <li>
              <img src="/svgs/gmail.svg" alt="" />
              <RedirectText href={`mailto:${EMAIL_RECEIPIENT}`} target="_blank">
                ahmed.azhar2299@gmail.com
              </RedirectText>
            </li>
          </SocialProfiles>
        </div>
      </InformationContainer>
    </Wrapper>
  );
};

export default Contact;

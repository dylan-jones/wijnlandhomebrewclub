import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Form,
  FormGrid,
  HiddenLabel,
  Section,
  TwoColumnGrid,
  TextColumn,
} from '../styles/GlobalStyles';
import PrimaryButton from '../components/PrimaryButton';


const ContactSection = styled(Section)`
  background: var(--off-white);
`;

export default function Contact() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Message sent! We'll get back to you.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  };
  return (
    <ContactSection id="contact">
      <Container>
        <TwoColumnGrid>
          <TextColumn>
          <h2>CONTACT US</h2>
          <p>
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
            Drop us a message and one of our committee members will get back to you as soon
            as possible.
          </p>
          <p>Fill out this form and we'll get back to you soon.</p>
          </TextColumn>
        <Form onSubmit={submit}>
          <FormGrid>
            <HiddenLabel htmlFor="contact-fn">First Name</HiddenLabel>
            <input id="contact-fn" name="fn" placeholder="First Name" value={form.fn} onChange={set} autoComplete="given-name" required />
            <HiddenLabel htmlFor="contact-ln">Last Name</HiddenLabel>
            <input id="contact-ln" name="ln" placeholder="Last Name" value={form.ln} onChange={set} autoComplete="family-name" required />
          </FormGrid>
          <FormGrid>
            <HiddenLabel htmlFor="contact-loc">Location</HiddenLabel>
            <input id="contact-loc" name="loc" placeholder="Location" value={form.loc} onChange={set} autoComplete="address-level2" />
            <HiddenLabel htmlFor="contact-tel">Contact Number</HiddenLabel>
            <input id="contact-tel" name="tel" placeholder="Contact Number" value={form.tel} onChange={set} type="tel" autoComplete="tel" />
          </FormGrid>
          <HiddenLabel htmlFor="contact-msg">Message</HiddenLabel>
          <textarea id="contact-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <PrimaryButton type="submit" outline>SUBMIT</PrimaryButton>
        </Form>
        </TwoColumnGrid>
      </Container>
    </ContactSection>
  );
}

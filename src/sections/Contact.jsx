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
  SectionTitle,
} from '../styles/GlobalStyles';
import PrimaryButton from '../components/PrimaryButton';
import backgroundImage from '../assets/contact-bg.jpg';
import { RiMailSendFill } from "react-icons/ri";

const ContactSection = styled(Section)`
  background: var(--off-white);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 4px solid var(--black);
  margin-top: 0.4rem;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 0.2rem;
    background: var(--black);
    display: block;
    position: absolute;
    top: -1rem;
    left: 0;
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();

    if (!form.msg.trim()) {
      setStatus('error');
      setFeedback('Please add a short message before submitting.');
      return;
    }

    setStatus('submitting');
    setFeedback('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Something went wrong while sending your message.');
      }

      setStatus('success');
      setFeedback("Message sent! We'll get back to you soon.");
      setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Unable to send your message right now. Please try again later.');
    }
  };
  return (
    <ContactSection id="contact">
      <Container>
        <TwoColumnGrid>
          <TextColumn style={{ color: 'var(--black)' }}>
            <SectionTitle>CONTACT US</SectionTitle>
            <p>
              Whether you’re looking for more info on our next meeting, want to chat about a recipe, or you're a local brewery looking to collaborate, drop us a message. 
We’re always down to talk shop - or just beer.
            </p>
            <p>Fill out the form and we’ll get back to you once the boil is over.</p>
            <p>
              <a href="mailto:info@wijnlandhomebrewclub.co.za">
                <RiMailSendFill style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                info@wijnlandhomebrewclub.co.za
              </a>
            </p>
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
          <textarea id="contact-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} required />
          <PrimaryButton type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
          </PrimaryButton>
          {feedback && (
            <p role="status" aria-live="polite" style={{ marginTop: '1rem', color: status === 'error' ? '#9f1818' : 'var(--black)' }}>
              {feedback}
            </p>
          )}
        </Form>
        </TwoColumnGrid>
      </Container>
    </ContactSection>
  );
}

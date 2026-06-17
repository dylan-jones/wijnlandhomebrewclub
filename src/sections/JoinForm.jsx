import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Form,
  FormGrid,
  HiddenLabel,
  Section,
  TwoColumnGrid,  
  SectionTitle,
  TextColumn,
} from '../styles/GlobalStyles';
import PrimaryButton from '../components/PrimaryButton';

const JoinSection = styled(Section)`
  background: var(--black);
  z-index: 1;
  position: relative;
`;

export default function JoinForm() {
  const [form, setForm] = useState({ fn: '', ln: '', email: '', loc: '', tel: '', msg: '', formType: 'join' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();

    if (!form.msg.trim()) {
      setStatus('error');
      setFeedback('Please tell us a bit about your interest in joining.');
      return;
    }

    setStatus('submitting');
    setFeedback('Sending your request...');

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
        throw new Error(data?.error || 'Something went wrong while sending your request.');
      }

      setStatus('success');
      setFeedback("Thanks. We'll be in touch soon.");
      setForm({ fn: '', ln: '', email: '', loc: '', tel: '', msg: '', formType: 'join' });
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Unable to send your request right now. Please try again later.');
    }
  };
  return (
    <JoinSection id="join">
      <Container>
        <TwoColumnGrid>
          <TextColumn>
            <SectionTitle style={{color: 'var(--white)'}}>INTERESTED IN JOINING?</SectionTitle>
            <p>
              Ready to see what’s on tap? Whether you’re a seasoned pro with a dedicated brew-shed or you're just starting out with your first plastic bucket, there’s a place for you here.
            </p>
            <p>
              Come through to our next meeting to see what we’re about, or sign up today to become an official member and join the Winelands’ finest collective of fermenters.
            </p>
            <p>For information, fill in the form and we’ll get back to you asap.</p>
          </TextColumn>
          <Form onSubmit={submit}>
            <FormGrid>
            <HiddenLabel htmlFor="join-fn">First Name</HiddenLabel>
            <input id="join-fn" name="fn" placeholder="First Name" value={form.fn} onChange={set} autoComplete="given-name" required />
            <HiddenLabel htmlFor="join-ln">Last Name</HiddenLabel>
            <input id="join-ln" name="ln" placeholder="Last Name" value={form.ln} onChange={set} autoComplete="family-name" required />
            </FormGrid>
            <FormGrid>
            <HiddenLabel htmlFor="join-email">Email Address</HiddenLabel>
            <input id="join-email" name="email" placeholder="Email Address" value={form.email} onChange={set} type="email" autoComplete="email" required />
            <HiddenLabel htmlFor="join-loc">Location</HiddenLabel>
            <input id="join-loc" name="loc" placeholder="Location" value={form.loc} onChange={set} autoComplete="address-level2" />
            </FormGrid>
          <HiddenLabel htmlFor="join-tel">Contact Number</HiddenLabel>
          <input id="join-tel" name="tel" placeholder="Contact Number" value={form.tel} onChange={set} type="tel" autoComplete="tel" />
          <HiddenLabel htmlFor="join-msg">Message</HiddenLabel>
          <textarea id="join-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} required />
          <PrimaryButton type="submit" outline disabled={status === 'submitting'}>
            {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
          </PrimaryButton>
          {feedback && (
            <p role="status" aria-live="polite" style={{ marginTop: '1rem', color: status === 'error' ? '#ffb3b3' : 'var(--white)' }}>
              {feedback}
            </p>
          )}
          </Form>
        </TwoColumnGrid>
      </Container>
    </JoinSection>
  );
}

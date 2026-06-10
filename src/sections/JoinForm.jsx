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
`;

export default function JoinForm() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Thanks! We'll be in touch.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
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
            <HiddenLabel htmlFor="join-loc">Location</HiddenLabel>
            <input id="join-loc" name="loc" placeholder="Location" value={form.loc} onChange={set} autoComplete="address-level2" />
            <HiddenLabel htmlFor="join-tel">Contact Number</HiddenLabel>
            <input id="join-tel" name="tel" placeholder="Contact Number" value={form.tel} onChange={set} type="tel" autoComplete="tel" />
            </FormGrid>
          <HiddenLabel htmlFor="join-msg">Message</HiddenLabel>
          <textarea id="join-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <PrimaryButton type="submit" outline>Submit</PrimaryButton>
          </Form>
        </TwoColumnGrid>
      </Container>
    </JoinSection>
  );
}

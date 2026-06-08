import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Message sent! We'll get back to you.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  };
  return (
    <section className="section contact-section" id="contact">
      <div className="container two-col-grid">
        <div className="col-text">
          <h2>CONTACT US</h2>
          <p>
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
            Drop us a message and one of our committee members will get back to you as soon
            as possible.
          </p>
          <p>Fill out this form and we'll get back to you soon.</p>
        </div>
        <form className="club-form" onSubmit={submit}>
          <div className="form-row">
            <label className="sr-only" htmlFor="contact-fn">First Name</label>
            <input id="contact-fn" name="fn" placeholder="First Name" value={form.fn} onChange={set} autoComplete="given-name" required />
            <label className="sr-only" htmlFor="contact-ln">Last Name</label>
            <input id="contact-ln" name="ln" placeholder="Last Name" value={form.ln} onChange={set} autoComplete="family-name" required />
          </div>
          <div className="form-row">
            <label className="sr-only" htmlFor="contact-loc">Location</label>
            <input id="contact-loc" name="loc" placeholder="Location" value={form.loc} onChange={set} autoComplete="address-level2" />
            <label className="sr-only" htmlFor="contact-tel">Contact Number</label>
            <input id="contact-tel" name="tel" placeholder="Contact Number" value={form.tel} onChange={set} type="tel" autoComplete="tel" />
          </div>
          <label className="sr-only" htmlFor="contact-msg">Message</label>
          <textarea id="contact-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <button type="submit" className="btn btn-dark">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

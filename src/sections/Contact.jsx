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
            <input name="fn" placeholder="First Name" value={form.fn} onChange={set} required />
            <input name="ln" placeholder="Last Name" value={form.ln} onChange={set} required />
          </div>
          <div className="form-row">
            <input name="loc" placeholder="Location" value={form.loc} onChange={set} />
            <input name="tel" placeholder="Contact Number" value={form.tel} onChange={set} />
          </div>
          <textarea name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <button type="submit" className="btn btn-dark">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

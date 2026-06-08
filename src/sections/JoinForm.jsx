import React, { useState } from 'react';

export default function JoinForm() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Thanks! We'll be in touch.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  };
  return (
    <section className="section join-section" id="join">
      <div className="container two-col-grid">
        <div className="col-text">
          <h2>INTERESTED IN JOINING?</h2>
          <p>
            Ready to see what's on tap? Whether you're a seasoned pro or a first-timer, we
            welcome you with a warm pint and open arms. Fill in the form to stay updated on
            meetings, events, and everything Wijnland.
          </p>
          <p>
            Come through to our next meeting to see what we're all about, meet the members,
            discuss all things fermented and maybe enjoy a cold one.
          </p>
          <p>Fill out this form and we'll get back to you soon.</p>
        </div>
        <form className="club-form" onSubmit={submit}>
          <div className="form-row">
            <label className="sr-only" htmlFor="join-fn">First Name</label>
            <input id="join-fn" name="fn" placeholder="First Name" value={form.fn} onChange={set} autoComplete="given-name" required />
            <label className="sr-only" htmlFor="join-ln">Last Name</label>
            <input id="join-ln" name="ln" placeholder="Last Name" value={form.ln} onChange={set} autoComplete="family-name" required />
          </div>
          <div className="form-row">
            <label className="sr-only" htmlFor="join-loc">Location</label>
            <input id="join-loc" name="loc" placeholder="Location" value={form.loc} onChange={set} autoComplete="address-level2" />
            <label className="sr-only" htmlFor="join-tel">Contact Number</label>
            <input id="join-tel" name="tel" placeholder="Contact Number" value={form.tel} onChange={set} type="tel" autoComplete="tel" />
          </div>
          <label className="sr-only" htmlFor="join-msg">Message</label>
          <textarea id="join-msg" name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <button type="submit" className="btn btn-dark">JOIN THE CLUB</button>
        </form>
      </div>
    </section>
  );
}

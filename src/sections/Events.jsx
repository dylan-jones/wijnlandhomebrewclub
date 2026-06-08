import React, { useState, useEffect } from 'react';
import { pic } from '../utils/helpers';

const CALENDAR_ID = 'fa7408367d1882778e4b1ff18d5a1d498c3c39e4743b91c9448b41c25475832d@group.calendar.google.com';
const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

function formatDate(start) {
  const date = start.dateTime ? new Date(start.dateTime) : new Date(start.date + 'T00:00:00');
  return date.toLocaleDateString('en-ZA', { day: '2-digit', month: 'short' }).toUpperCase();
}

function parseLocation(location = '') {
  const parts = location.split(',').map(s => s.trim()).filter(Boolean);
  if (parts.length === 0) return { address: '', city: '' };
  if (parts.length === 1) return { address: parts[0], city: '' };
  const city = parts.at(-1);
  const address = parts.slice(0, -1).join(', ');
  return { address, city };
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(now)}&maxResults=6`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Calendar API error ${res.status}`);
        return res.json();
      })
      .then(data => {
        const mapped = (data.items || []).map(ev => {
          const { address, city } = parseLocation(ev.location);
          return {
            name: ev.summary || 'Untitled Event',
            date: formatDate(ev.start),
            address,
            city,
            desc: ev.description || '',
          };
        });
        setEvents(mapped);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section events-section" id="events">
      <div className="container">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        {loading && <p className="event-meta" aria-live="polite">Loading events...</p>}
        {error && <p className="event-meta" role="alert">Could not load events.</p>}
        {!loading && !error && events.length === 0 && (
          <p className="event-meta">No upcoming events scheduled.</p>
        )}
        <ul className="events-grid" aria-label="Upcoming events">
          {events.map((ev) => (
            <li className="event-card" key={`${ev.name}-${ev.date}-${ev.address || 'n-a'}-${ev.city || 'n-a'}-${ev.desc || 'n-a'}`}>
              <img src={pic(150, 160, `${ev.name}-${ev.date}`)} alt={ev.name} className="event-img" />
              <div className="event-details">
                <h4>{ev.name}</h4>
                <p className="event-meta">{ev.date}</p>
                {ev.address && <p className="event-meta">{ev.address}</p>}
                {ev.city && <p className="event-meta">{ev.city}</p>}
                {ev.desc && <p className="event-desc">{ev.desc}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { pic } from '../utils/helpers';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const EventsSection = styled(Section)`
  background: var(--light-gray);
`;

const EventsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.li`
  background: var(--white);
  display: flex;
  border: 1px solid var(--mid-gray);
  overflow: hidden;
`;

const EventImage = styled.img`
  width: 140px;
  min-height: 160px;
  flex-shrink: 0;
  object-fit: cover;
`;

const EventDetails = styled.div`
  padding: 1.25rem;
  flex: 1;

  h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
`;

const EventMeta = styled.p`
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.9;
`;

const EventDescription = styled.p`
  font-size: 0.8rem;
  color: var(--text);
  line-height: 1.55;
  margin-top: 0.6rem;
`;

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
    <EventsSection id="events">
      <Container>
        <SectionTitle>UPCOMING EVENTS</SectionTitle>
        {loading && <EventMeta aria-live="polite">Loading events...</EventMeta>}
        {error && <EventMeta role="alert">Could not load events.</EventMeta>}
        {!loading && !error && events.length === 0 && (
          <EventMeta>No upcoming events scheduled.</EventMeta>
        )}
        <EventsGrid aria-label="Upcoming events">
          {events.map((ev) => (
            <EventCard key={`${ev.name}-${ev.date}-${ev.address || 'n-a'}-${ev.city || 'n-a'}-${ev.desc || 'n-a'}`}>
              <EventImage src={pic(150, 160, `${ev.name}-${ev.date}`)} alt={ev.name} />
              <EventDetails>
                <h4>{ev.name}</h4>
                <EventMeta>{ev.date}</EventMeta>
                {ev.address && <EventMeta>{ev.address}</EventMeta>}
                {ev.city && <EventMeta>{ev.city}</EventMeta>}
                {ev.desc && <EventDescription>{ev.desc}</EventDescription>}
              </EventDetails>
            </EventCard>
          ))}
        </EventsGrid>
      </Container>
    </EventsSection>
  );
}

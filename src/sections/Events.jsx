import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const EventsSection = styled(Section)`
  background-color: var(--off-white);
  position: relative;
  z-index: 1;
`;

const EventsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.li`
  background: var(--white);
  display: grid;
  grid-template-rows: auto 1fr;
  border: 1px solid var(--mid-gray);
  border-radius: 8px;
  overflow: hidden;
  min-height: 220px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const EventDate = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  padding: 1.6rem;
  border-bottom: 1px solid var(--mid-gray);
  background: var(--light-gray);
`;

const EventDateDay = styled.span`
  font-family: var(--font-space);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
`;

const EventDateMonth = styled.span`
  font-family: var(--font-space);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.9px;
`;

const EventDetails = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;

  h4 {
    font-family: var(--font-space);
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
`;

const EventMeta = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--text-muted);
`;

const EventDescription = styled.p`
  font-size: 1.6rem;
  color: var(--text);
  line-height: 1.55;
  margin-top: 0.7rem;
`;

const CALENDAR_ID = 'fa7408367d1882778e4b1ff18d5a1d498c3c39e4743b91c9448b41c25475832d@group.calendar.google.com';

async function getCalendarApiKey() {
  const localKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  if (typeof localKey === 'string' && localKey.trim()) {
    return localKey.trim();
  }

  try {
    const keyResponse = await fetch('/api/calendar-key');
    if (!keyResponse.ok) {
      throw new Error(`Calendar key endpoint error ${keyResponse.status}`);
    }

    const payload = await keyResponse.json();
    const key = typeof payload?.key === 'string' ? payload.key.trim() : '';
    if (!key) {
      throw new Error('Calendar API key not available');
    }

    return key;
  } catch (err) {
    if (import.meta.env.DEV) {
      throw new Error('Dev mode: VITE_GOOGLE_CALENDAR_API_KEY not found in .env');
    }
    throw new Error(`Production: set GOOGLE_CALENDAR_API_KEY secret in Cloudflare. Details: ${err instanceof Error ? err.message : ''}`);
  }
}

function formatDate(start) {
  const date = start.dateTime ? new Date(start.dateTime) : new Date(start.date + 'T00:00:00');
  return {
    day: date.toLocaleDateString('en-ZA', { day: '2-digit' }),
    month: date.toLocaleDateString('en-ZA', { month: 'short' }).toUpperCase(),
  };
}

function parseLocation(location = '') {
  const parts = location.split(',').map(s => s.trim()).filter(Boolean);
  if (parts.length === 0) return { address: '', city: '' };
  if (parts.length === 1) return { address: parts[0], city: '' };
  const city = parts.at(-1);
  const address = parts.slice(0, -1).join(', ');
  return { address, city };
}

async function fetchCalendarEvents(key) {
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${key}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(now)}&maxResults=6`;

  const res = await fetch(url);
  if (!res.ok) {
    let details = '';
    try {
      const payload = await res.json();
      details = payload?.error?.message || '';
    } catch {
      details = '';
    }

    const suffix = details ? `: ${details}` : '';
    throw new Error(`Calendar API error ${res.status}${suffix}`);
  }

  return res.json();
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const key = await getCalendarApiKey();

        const data = await fetchCalendarEvents(key);
        const mapped = (data.items || []).filter(ev => ev?.start).map(ev => {
          const { address, city } = parseLocation(ev.location);
          const { day, month } = formatDate(ev.start);
          return {
            name: ev.summary || 'Untitled Event',
            day,
            month,
            address,
            city,
            desc: ev.description || '',
          };
        });
        setEvents(mapped);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Could not load events.';
        setError(message);
        console.error('Failed to load calendar events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventsSection id="events">
      <Container>
        <SectionTitle>UPCOMING EVENTS</SectionTitle>
        {loading && <EventMeta aria-live="polite">Loading events...</EventMeta>}
        {error && <EventMeta role="alert">Could not load events. {error}</EventMeta>}
        {!loading && !error && events.length === 0 && (
          <EventMeta>No upcoming events scheduled.</EventMeta>
        )}
        <EventsGrid aria-label="Upcoming events">
          {events.map((ev) => (
            <EventCard key={`${ev.name}-${ev.day}-${ev.month}-${ev.address || 'n-a'}-${ev.city || 'n-a'}-${ev.desc || 'n-a'}`}>
              <EventDate>
                <EventDateDay>{ev.day}</EventDateDay>
                <EventDateMonth>{ev.month}</EventDateMonth>
              </EventDate>
              <EventDetails>
                <h4>{ev.name}</h4>
                {ev.address && <EventMeta>{ev.address}</EventMeta>}
                {ev.desc && <EventDescription>{ev.desc}</EventDescription>}
              </EventDetails>
            </EventCard>
          ))}
        </EventsGrid>
      </Container>
    </EventsSection>
  );
}

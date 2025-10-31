import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function MonthCalendar() {
  const [events, setEvents] = useState([
    {
      title: 'Workshop',
      start: new Date(2025, 9, 30),
      end: new Date(2025, 9, 30),
      allDay: true,
    },
    {
      title: 'Team Meeting',
      start: new Date(2025, 10, 2),
      end: new Date(2025, 10, 2),
      allDay: true,
    },
  ]);

  const handleSelectSlot = (slotInfo) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        allDay: true,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="mt-6 lg:border rounded-2xl bg-white lg:p-6 dark:bg-gray-900">
      <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Calendar
      </h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={['month']}
        selectable
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}

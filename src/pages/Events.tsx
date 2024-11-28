import { EventCard } from '../components/EventCard';

const events = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'December 15, 2023',
    location: 'GDG Gulzar Campus',
    description: 'Learn modern web development techniques with React and Next.js',
    imageUrl: 'https://picsum.photos/seed/event1/800/400',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    date: 'December 20, 2023',
    location: 'Virtual Event',
    description: 'Build your first mobile app using Flutter',
    imageUrl: 'https://picsum.photos/seed/event2/800/400',
  },
];

export function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
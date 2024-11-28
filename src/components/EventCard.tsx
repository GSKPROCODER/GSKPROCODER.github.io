import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export function EventCard({ title, date, location, description, imageUrl }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <CalendarIcon className="w-5 h-5" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPinIcon className="w-5 h-5" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full">Register Now</Button>
      </div>
    </motion.div>
  );
}
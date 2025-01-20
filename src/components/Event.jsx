import { Calendar, Clock, MapPin } from "lucide-react";
import { LandingTitle } from "./LandingTitle";
export function EventCard({title,date,time,location,image}){
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer group">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{title}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                {date}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                {time}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                {location}
              </div>
            </div>
          </div>
        </div>
      );
}

export function EventSection(){
    return (
        <section className="m-3 my-12 drop-shadow-xl">
        <div className="container">
          <LandingTitle title={'Popular Events'} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <EventCard
              title="Tech Startup Meetup 2024"
              date="March 15, 2024"
              time="6:00 PM - 9:00 PM"
              location="Innovation Hub, San Francisco"
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="Art Exhibition: Modern Perspectives"
              date="March 18, 2024"
              time="10:00 AM - 6:00 PM"
              location="Metropolitan Gallery"
              image="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="Fitness & Wellness Workshop"
              date="March 20, 2024"
              time="9:00 AM - 12:00 PM"
              location="Central Park, New York"
              image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
    )
}
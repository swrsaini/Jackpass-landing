import { Users2, ArrowRight } from "lucide-react";
import { LandingTitle } from "./LandingTitle";
export function CommunityCard({ image, description, name, members, isNew }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer group">
          <div className="relative h-48">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {isNew && (
              <span className="absolute top-4 right-4 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-full">
                NEW
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{description}</p>
            <div className="flex items-center text-sm text-gray-600">
              <Users2 className="w-4 h-4 mr-2 text-blue-600" />
              {members}
            </div>
          </div>
        </div>
      );
  }


export function CommunitySection(){
    const communities = [
        {
          clubName: "Football Fans United",
          members: "15k members",
          description: "Join the biggest football community for match discussions, analysis, and fan meetups.",
          isNew: false,
          coverImg: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
        },
        {
          clubName: "Art & Soul",
          members: "8.4k members",
          description: "A creative space for artists to share their work, get feedback, and collaborate.",
          isNew: true,
          coverImg: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
        },
        {
          clubName: "Tech Innovators",
          members: "12k members",
          description: "Connect with fellow tech enthusiasts, share ideas, and stay updated with the latest trends.",
          isNew: false,
          coverImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
        },
        {
          clubName: "Cooking Masters",
          members: "5k members",
          description: "Share recipes, cooking tips, and culinary adventures with passionate food lovers.",
          isNew: true,
          coverImg: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
        },
        {
          clubName: "Cricket Superfans",
          members: "10k members",
          description: "Dive into the world of cricket with fellow superfans, discuss matches, and celebrate victories.",
          isNew: false,
          coverImg: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/indias-captain-suryakumar-yadav-110713252-16x9_0.jpg?VersionId=IymqYig9Gmv1L9YYXnl_AsD7YygemjgO"
        },
      ];
      
      

    return (
        <section className="m-3 my-12 drop-shadow-xl">
        <div className="container mx-auto ">
          <LandingTitle title={"Popular Communities"} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {communities.map((e,index)=>{
                return <div key={index}>
                    <CommunityCard name={e.clubName} members={e.members} isNew={e.isNew} image={e.coverImg} description={e.description} />
                </div>
            })}
          </div>
      </section>
    )
}
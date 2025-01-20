import { ArrowRight } from "lucide-react"
export function LandingTitle({title, onClick}){
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button onClick={onClick} className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
    )
}
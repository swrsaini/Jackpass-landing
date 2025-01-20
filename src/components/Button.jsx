import { Children } from "react";

export function Button({onClick, className, children}){
    return <div>
        <button className= {` ${className} w-26 px-3 md:w-32 md:px-4 py-2 text-sm font-medium text-white bg-transparent backdrop-blur-lg border border-gray-500 rounded-md `}  onClick={onClick}>{children}</button>
    </div>
}
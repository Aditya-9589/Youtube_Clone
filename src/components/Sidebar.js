import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoHomeFill, GoVideo } from "react-icons/go";
import { GrChannel } from "react-icons/gr";
import {
    MdHistory,
    MdOutlineWatchLater,
    MdPlaylistPlay,
    MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <GoHomeFill className='text-xl' />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className='text-xl' />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className='text-xl' />,
      name: "Subscriptions",
    },
  ];

  const youLinks = [
    {
      icon: <GrChannel className='text-xl' />,
      name: "Your Channel",
    },
    {
      icon: <MdHistory className='text-xl' />,
      name: "History",
    },
    {
      icon: <MdPlaylistPlay className='text-xl' />,
      name: "Playlists",
    },
    {
      icon: <GoVideo className='text-xl' />,
      name: "Your videos",
    },
    {
      icon: <MdOutlineWatchLater className='text-xl' />,
      name: "Watch Later",
    },
    {
      icon: <AiOutlineLike className='text-xl' />,
      name: "Liked videos",
    },
  ];

  return (
    <div className="w-2/12 bg-[#1a1a1a] p-2 pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-[#2a2a2a] ${name === "Home" ?  "bg-[#2a2a2a]" :  " "} rounded-xl `}>
              <a href="#" className='flex items-center gap-5' >
                {icon}
                <span className='text-sm tracking-wider' >
                    {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-1 border-gray">
        {youLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-[#2a2a2a] ${name === "Home" ?  "bg-[#2a2a2a]" :  " "} rounded-xl `}>
              <a href="#" className='flex items-center gap-5' >
                {icon}
                <span className='text-sm tracking-wider' >
                    {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import {
  AiOutlineMenu,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

import { images } from "../constants";

const Sidebar = () => {
  return (
    <aside className="bg-palette-chineseBlack text-white h-screen overflow-y-auto">
      <div className="flex flex-col justify-between items-center w-full h-full p-5">
        <img className="w-10 h-auto" src={images.logo} alt="logo" />
        <div>
          <AiOutlineMenu className="w-8 h-8" />
        </div>
        <ul className="space-y-2">
          <li>
            <a
              href="https://twitter.com/mmdrz003"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="w-5 h-5 hover:scale-110" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mohammadrz003"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="w-5 h-5 hover:scale-110" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/moonfo_dev/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="w-5 h-5 hover:scale-110" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

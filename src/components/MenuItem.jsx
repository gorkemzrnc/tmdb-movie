import React from "react";
import { FaHeart, FaPoll } from "react-icons/fa";
import { FaCalendar, FaCircleDot } from "react-icons/fa6";

function RenderIcon({ title, selected }) {
  let icon;
  let style = `text-gray-500 ${selected ? "text-gray-950" : ""}`;

  switch (title) {
    case "Popular":
      icon = <FaHeart className={style} />;
      break;
    case "Top Rated":
      icon = <FaPoll className={style} />;
      break;
    case "Upcoming":
      icon = <FaCalendar className={style} />;
      break;
    default:
      icon = <FaCircleDot className={style} />;
  }
  return icon;
}

const MenuItem = ({ name, selected }) => {
  return (
    <div
      className={`font-normal text-xs text-gray-500 font-open-sans flex gap-2 px-2 py-[2px] items-center rounded-xl ${
        selected == name ? "outline outline-1 text-gray-950" : ""
      }`}
    >
      <RenderIcon title={name} selected={selected == name} />
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;

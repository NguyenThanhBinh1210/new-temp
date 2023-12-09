import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
}
const Section = ({ children, title }: Props) => {
  return (
    <div>
      <div className="mb-[27px]">
        <div className="bg-blue-400 text-[16px] text-white px-3 py-1 w-max">
          {title}
        </div>
        <div className="w-full h-[3px] bg-blue-400"></div>
      </div>
      {children}
    </div>
  );
};

export default Section;

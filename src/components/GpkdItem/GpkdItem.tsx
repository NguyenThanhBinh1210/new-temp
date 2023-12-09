import { Link } from "react-router-dom";

const GpkdItem = ({
  img,
  title,
  link,
}: {
  img: string;
  title: string;
  link?: string;
}) => {
  return (
    <Link to={link || "/"} className="cursor-pointer">
      <div className="w-full">
        <img src={img} alt="Image" />
      </div>
      <p className="leading-5 py-4 border-b">{title}</p>
    </Link>
  );
};

export default GpkdItem;

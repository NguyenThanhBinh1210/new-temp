import { useEffect, useState } from "react";
import axios from "axios";
import RepComment from "./repComent";

interface CommentProps {
  datas: any;
}
function hideEmail(email: string): string {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    return email;
  }
  const hiddenPart = email.substring(0, atIndex).slice(0, -3) + "****";
  const visiblePart = email.substring(atIndex);
  return hiddenPart + visiblePart;
}
const Comment: React.FC<CommentProps> = ({ datas }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [reloadKey, setReloadKey] = useState(Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReloadKey(Date.now()); // Cập nhật key để reload component
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reloadKey, datas]);

  const date = new Date(datas.createdAt);
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} lúc ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const email = datas.email;
  const hiddenEmail = hideEmail(email);

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-fullxl mx-auto mt-4 ">
      <div className=" items-center mb-4 w-full">
        <div className="comment">
          <div className="flex h-7">
            <div className="w-7 h-full rounded-full bg-blue-600 items-center mr-3">
              {datas.img ? (
                <img src="{data.img}" />
              ) : (
                <div className="text-center text-gray-50">
                  {datas.email[0]?.toUpperCase()}
                </div>
              )}
            </div>
            {datas.isAdmin ? (
              <h4 style={{ color: "#ef981e" }}>Quản trị viên</h4>
            ) : datas.isStaff ? (
              <h4 style={{ color: "rgb(69 156 80)" }}>Nhân viên</h4>
            ) : (
              <h4>{hiddenEmail}</h4>
            )}

            <p className="ml-2 text-base text-gray-500"> | {formattedDate}</p>
          </div>

          <p className="text-gray-700 mt-2"> {datas.content}</p>
          <div className="mt-4 flex">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsVisible(!isVisible)}
            >
              Trả lời
            </button>
            <div className="ml-2 w-6 h-6 rounded-full bg-blue-600 mr-3 text-center text-gray-50">
              ?
            </div>
          </div>
        </div>
        {isVisible && (
          <RepComment
            apiEndpoint={[
              "https://api.ketoanalpha.pro.vn:444/api/v1/comment/replies",
              datas._id,
            ]}
          />
        )}
        <div className="ml-4">
          {datas.replies &&
            datas.replies.map((replys: any) => (
              <Comment key={replys.id} datas={replys} />
            ))}
        </div>
      </div>
    </div>
  );
};

function AllComent() {
  const [commentxs, setComments] = useState([]);
  const [reloadKey, setReloadKey] = useState(Date.now());

  const [currentPage, setCurrentPage] = useState(1);
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 5;
        const response = await axios.get(
          `https://api.ketoanalpha.pro.vn:444/api/v1/comment/get-all-comment?page=${currentPage}&limit=${limit}`,
        ); // Đường dẫn API lấy tất cả comments
        setComments(response.data.comments);
      } catch (error) {
        console.error("Lỗi khi tải comments:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      setReloadKey(Date.now()); // Cập nhật key để reload component
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentPage, reloadKey]);

  return (
    <div className="p-5">
      {commentxs.map((commentData: any) => (
        <div>
          <Comment key={commentData._id} datas={commentData} />
        </div>
      ))}
      <div className="m-auto text-center mt-5 mb-10">
        <button
          className="text-white bg-green-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          onClick={loadMore}
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default AllComent;

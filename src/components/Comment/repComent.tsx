import { useState } from "react";

interface Prop {
  apiEndpoint: string[];
}

const RepComment: React.FC<Prop> = (datax) => {
  console.log(datax.apiEndpoint[1]);
  const id = datax.apiEndpoint[1];
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Hồ Chí Minh");
  const handleSubmit = async () => {
    try {
      const response = await fetch(datax.apiEndpoint[0], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          phone: phoneNumber,
          email: email,
          address: city,
          content: text,
        }),
      });
      setText("");
      setPhoneNumber("");
      setEmail("");
      console.log(phoneNumber, email, city, text);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
  return (
    <div>
      {" "}
      <div className="p-12">
        <div className="bg-white p-4 rounded-md shadow-lg">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Viết nội dung câu hỏi..."
            className="p-2 border rounded w-full mb-4"
          />
          <div className="flex justify-between">
            <span>SDT và email sẽ được ẩn để bảo mật thông tin của bạn</span>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              GỬI NHANH
            </button>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="fixed top-0  w-full left-0">
          <div
            className="opacity-70 bg-gray-800 ray-100 flex justify-center items-center z min-h-screen min-w-full"
            onClick={() => setIsVisible(!isVisible)}
          >
            {" "}
          </div>
          <div className="bg-white p-6 rounded shadow-lg w-96 z-100 w-full left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-md max-h-full absolute ">
            <div className="text-lg font-bold mb-4">
              GẦN XONG! HÃY GIÚP CHÚNG TÔI TRẢ LỜI BẠN.
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Số điện thoại (để nhận phản hồi qua điện thoại)
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Email (để nhận phản hồi qua email)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                // Thêm các lựa chọn khác tại đây
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-500 text-white py-2 rounded"
            >
              <div onClick={() => setIsVisible(!isVisible)}>HOÀN THÀNH</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepComment;

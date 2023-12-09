import { useRef } from "react";
import Lienhe from "~/assets/images/bt-lien-he.png";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  function validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const emailInput = formData.get("email") as string | null;
    if (!emailInput || !validateEmail(emailInput)) {
      alert("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
      return;
    }

    const data = {
      name: formData.get("name") as string | null,
      phone: formData.get("phone") as string | null,
      email: emailInput,
      content: formData.get("content") as string | null,
    };

    fetch("https://api.ketoanalpha.pro.vn:444/api/v1/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Gửi thông tin thành công");
        } else {
          alert("Có lỗi xảy ra khi gửi thông tin");
        }
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };

  return (
    <div className="container">
      {/* <div className='col-span-2 md:col-span-1' style={{ marginTop: '1rem' }}>
        <img src={Banner} className='w-full mb-3' alt='Banner Liên Hệ' />
      </div> */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        style={{ marginTop: "1.8rem" }}
      >
        <div className="col-span-2 md:col-span-1 ">
          <h3 className="font-bold text-primary text-2xl">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h3>
          <p className="text-muted my-3">
            Hãy để lại thông tin, chuyên viên của chúng tôi sẽ nhanh chóng hỗ
            trợ bạn.
          </p>
          {/* Gửi thông tin */}
          <div className="mb-10">
            <form
              className="space-y-6"
              action="#"
              autoComplete="false"
              ref={formRef}
              // onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Họ và Tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Họ và Tên"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Số điện thoại"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className=" text-sm font-medium text-gray-900  dark:text-white"
                >
                  Nội dung
                </label>
                <div className="mt-2">
                  <div className="relative">
                    <textarea
                      name="content"
                      id="content"
                      className="block min-h-max w-full px-4 py-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nội dung"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center">
            <a role="button" id="btnclick" onClick={handleSubmit}>
              <img src={Lienhe} alt="Liên Hệ" className="w-40" />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 ml-1">
          <h4 className="font-bold text-primary text-2xl mb-4">
            CÔNG TY DỊCH VỤ KẾ TOÁN ALPHA
          </h4>
          <div className="flex mb-2">
            <div>
              <p className="text-primary font-bold mb-2">DỊCH VỤ PHÁP LÝ</p>
              <p className="mb-2">
                <small className="text-lg">
                  <b>Miền Bắc:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0984477711">
                    0971 559 971
                  </a>{" "}
                  | <b>Miền Trung:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0903003779">
                    0971 559 971
                  </a>{" "}
                  | <b>Miền Nam:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0938268123">
                    0971 559 971
                  </a>
                </small>
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="text-primary font-bold mb-2">DỊCH VỤ KẾ TOÁN</p>
              <p className="mb-2">
                <small className="text-lg">
                  <b>Miền Bắc:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0901042555">
                    0971 559 971
                  </a>{" "}
                  | <b>Miền Trung:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0939356866">
                    0971 559 971
                  </a>{" "}
                  | <b>Miền Nam:</b>{" "}
                  <a style={{ color: "#ea5644" }} href="tel:0902602345">
                    0971 559 971
                  </a>
                </small>
              </p>
            </div>
          </div>
          <div className="mb-3">
            <small className="text-lg">
              <b style={{ color: "#ea5644" }} rel="nofollow">
                dichvuketoanalpha@gmail.com
              </b>
            </small>
          </div>
          <div className="mb-10" style={{ height: "430px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.964684785942!2d106.6944026170953!3d10.79293230269992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cbbaf97683%3A0x1c83ad487ab14bf1!2zTmd1eeG7hW4gxJDDrG5oIENoaeG7g3UvMyBI4bq7bSAxMDAsIEtodSBwaOG7kSA2LCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1701467266914!5m2!1svi!2s"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

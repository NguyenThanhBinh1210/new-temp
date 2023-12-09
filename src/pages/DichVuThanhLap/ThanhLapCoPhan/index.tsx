import Img from "~/assets/images/thành lập công ty cổ phần 1.png";

const index = () => {
  return (
    <div className="pt-4 doi-dia-chi">
      <div id="main-content" className="main-wrapper sv-single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="main-page">
                <h2 className="page-title text-[22px] uppercase font-semibold mb-3">
                  CÔNG TY CỔ PHẦN
                </h2>
                <div className="page-content clearfix">
                  <article className="entry-detail">
                    <div className="entry-photo w-[60%] mb-3 mx-auto border rounded-sm p-2">
                      <img src={Img} className="" />
                    </div>{" "}
                    <div className="entry-content clearfix">
                      <h5 style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontFamily: "helvetica, arial, sans-serif",
                            fontSize: "12pt",
                          }}
                        >
                          <strong>I. Thông tin cần cung cấp</strong>
                        </span>
                      </h5>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Tên Công ty (Lưu ý: nếu tên kết thúc bằng tiếng nước
                            ngoài hoặc ký tự không phải tiếng Việt sẽ không chắc
                            chắn 100% có được hay không)
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Địa chỉ: Chi tiết nhất có thể (Ví dụ: Đến số nhà,
                            thôn/ xóm/ tổ…)
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Mô tả lĩnh vực kinh doanh để tư vấn các mã ngành
                            nghề phù hợp
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Vốn điều lệ
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            CMND/CCCD/Hộ chiếu của các cổ đông. Tỷ lệ góp vốn
                            của các cổ đông
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Giấy tờ cần chuẩn bị: 01 bản sao công chứng của
                            CMND/CCCD/Hộ chiếu của các cổ đông
                          </span>
                        </li>
                      </ul>
                      <p style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontFamily: "helvetica, arial, sans-serif",
                            fontSize: "12pt",
                          }}
                        >
                          Lưu ý: Tối thiểu phải có 3 cổ đông, không giới hạn tối
                          đa
                        </span>
                      </p>
                      <h5 style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontFamily: "helvetica, arial, sans-serif",
                            fontSize: "12pt",
                          }}
                        >
                          <strong>II. Thời gian thực hiện</strong>
                        </span>
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontFamily: "helvetica, arial, sans-serif",
                            fontSize: "12pt",
                          }}
                        >
                          Khoảng 5- 7 ngày làm việc
                        </span>
                      </p>
                      <h5 style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontFamily: "helvetica, arial, sans-serif",
                            fontSize: "12pt",
                          }}
                        >
                          <strong>III. Kết quả</strong>
                        </span>
                      </h5>
                      <ul>
                        <li style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Giấy phép ĐKKD (Số giấy phép ĐKKD chính là mã số
                            thuế của Công ty)
                          </span>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontFamily: "helvetica, arial, sans-serif",
                              fontSize: "12pt",
                            }}
                          >
                            Dấu tròn Công ty
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="entry-tags">
                      <span>
                        <i className="fa fa-tags" aria-hidden="true" /> Tags:
                      </span>
                      No Tag{" "}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

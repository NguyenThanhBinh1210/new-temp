import Img from "~/assets/images/hoàn thuế 1.png";

const index = () => {
  return (
    <div className="pt-4 doi-dia-chi">
      <div id="main-content" className="main-wrapper sv-single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="main-page">
                <h2 className="page-title text-[22px] uppercase font-semibold mb-3">
                  HOÀN THUẾ GTGT
                </h2>
                <div className="page-content clearfix">
                  <article className="entry-detail">
                    <div className="entry-photo w-[60%] mb-3 mx-auto border rounded-sm p-2">
                      <img src={Img} className="" />
                    </div>{" "}
                    <div className="entry-content clearfix">
                      <p style={{ textAlign: "justify" }}>
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          <strong>I- CÔNG VIỆC THỰC HIỆN</strong>
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          1. Hướng dẫn khách hàng chuẩn bị chứng từ, sổ sách kế
                          toán để hoàn thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          2. Tư vấn, hướng dẫn khách hàng đều chỉnh hồ sơ hoàn
                          thuế GTGT.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          3. Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          4. Soạn thảo hồ sơ hoàn thuế GTGT.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          5. Chuẩn bị hồ sơ đề nghị hoàn thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          6. Thay mặt doanh nghiệp nộp hồ sơ hoàn thuế tại cơ
                          quan thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          7. Theo dõi, cập nhật thông tin hồ sơ hoàn thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          8. Thay mặt doanh nghiệp giải trình với cơ quan thuế
                          các nội dung có liên quan đến hồ sơ hoàn thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          9. Nhận quyết định hoàn thuế tại cơ quan thuế.
                        </span>
                        <br />
                        <span
                          style={{ fontFamily: "helvetica, arial, sans-serif" }}
                        >
                          Khách hàng chuẩn bị và cung cấp chứng từ, số sách kế
                          toán theo yêu cầu.
                        </span>
                      </p>
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

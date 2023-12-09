import Img from "~/assets/images/quyết toán 1.png";

const index = () => {
  return (
    <div className="pt-4 doi-dia-chi">
      <div id="main-content" className="main-wrapper sv-single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="main-page">
                <h2 className="page-title text-[22px] uppercase font-semibold mb-3">
                  SOÁT XÉT SỔ SÁCH{" "}
                </h2>
                <div className="page-content clearfix">
                  <article className="entry-detail">
                    <div className="entry-photo w-[60%] mb-3 mx-auto border rounded-sm p-2">
                      <img src={Img} className="" />
                    </div>{" "}
                    <div className="entry-content clearfix">
                      <div>
                        <strong>I- CÔNG VIỆC KẾ TOÁN THỰC HIỆN</strong>
                        <br />
                        1. Kiểm tra sự phù hợp của các chứng từ kế toán;
                        <br />
                        2. Kiểm tra việc hạch toán các nghiệp vụ kinh tế phát
                        sinh;
                        <br />
                        3. Kiểm tra việc lập và kê khai báo cáo thuế VAT hàng
                        tháng;
                        <br />
                        4. Kiểm tra lập báo cáo quyết toán thuế thu nhập doanh
                        nghiệp;
                        <br />
                        5. Kiểm tra hồ sơ quyết toán thuế thu nhập cá nhân;
                        <br />
                        6. Kiểm tra việc lập báo cáo tài chính theo quy định;
                        <br />
                        7. Tư vấn, điều chỉnh cho doanh nghiệp các sai sót, chưa
                        phù hợp với quy định của pháp luật;
                        <br />
                        8. Tư vấn điều chỉnh các báo cáo thuế khi có sai lệch;
                      </div>
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

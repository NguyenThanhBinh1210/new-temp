import Rating from "~/components/Rating";
import "./css.css";
import CallNow from "~/components/CallNow/CallNow";
import LapBaoCaoTaiChinh1 from "~/assets/images/lap-bao-cao-tai-chinh-cuoi-nam-02.jpg";
import DichVuKeToanThueTronGoi from "~/assets/images/Dich-vu-ke-toan-tron-goi-01.jpg";
import Thue from "~/assets/images/dich-vu-hoan-thue-thu-nhap-ca-nhan-TNCN.jpg";
import Cac from "~/assets/images/cac-khoan-thue-phai-nop-sau-khi-thanh-lap-cong-ty.jpg";
const KeToanThueTronGoi = () => {
  return (
    <section className="py-3 px-3 lg:grid lg:grid-cols-3 gap-x-8">
      <div className="container lg:col-span-2">
        <div className="row g-2 g-lg-5">
          <div id="ContentBody_fullpage" className="col-lg-8">
            <h1
              id="ContentBody_post_title"
              className="text-[#2a4e9a] font-[400] text-[25px] page-title h4 fs-xxxl-3 fs-xl-4 text-primary"
            >
              Dịch vụ nhận làm Báo Cáo Tài Chính cuối năm - Từ 1.000.000đ
            </h1>
            <div
              id="ContentBody_post_body"
              className="news-body mb-4 text-justify"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    ".table-post-custom tr:nth-child(odd){background:#ffc28b;}\n              .table-post-custom tr:nth-child(even){background:#ffe7d4;}\n              .table-post-custom tr:first-child,.table-post-custom tr:nth-of-type(2){\n                background:#f97c26;\n  }\n              .table-post-custom tr td{min - width:80px}\n            ",
                }}
              />
              <p>
                <img
                  alt="BaoCaoTaiChinh1"
                  src={DichVuKeToanThueTronGoi}
                  style={{ width: "100%" }}
                />
              </p>
              <p className="py-3" style={{ textAlign: "justify" }}>
                <strong>
                  Với kinh nghiệm 16&nbsp;năm cung cấp dịch vụ lập bảng báo cáo
                  tài chính, Alpha cam kết hỗ trợ doanh nghiệp tăng chi phí hợp
                  lý và tối ưu thuế theo đúng quy định pháp luật.&nbsp;
                </strong>
              </p>
              <div className="custom-muc-luc toc_root ">
                <p className="toc-title">Nội dung chính:</p>
                <ul className="noi-dung-chinh ml-4 mb-4 mt-3">
                  <li>
                    <a href="#Chi-phi-dich-vu-lam-bao-cao-tai-chinh">
                      Chi phí dịch vụ làm báo cáo tài chính
                    </a>
                  </li>
                  <li>
                    <a href="#Doanh-nghiep-can-cung-cap-nhung-gi-khi-lam-bao-cao-tai-chinh-(BCTC)-tai-Alpha?">
                      Doanh nghiệp cần cung cấp những gì khi làm báo cáo tài
                      chính (BCTC) tại Alpha?
                    </a>
                  </li>
                  <li>
                    <a href="#Thoi-han-nop-bao-cao-tai-chinh-nam-2023 va-cac-quy-dinh-xu-phat">
                      Thời hạn nộp báo cáo tài chính năm 2023&nbsp;và các quy
                      định xử phạt
                    </a>
                  </li>
                  <li>
                    <a href="#Nhiem-vu-cua-Alpha-khi-nhan-lam-bao-cao-tai-chinh">
                      Nhiệm vụ của Alpha khi nhận làm báo cáo tài chính
                    </a>
                  </li>
                  <li>
                    <a href="#Cac-cau-hoi-thuong-gap-khi-lam bao-cao-tai-chinh">
                      Các câu hỏi thường gặp khi làm&nbsp;báo cáo tài chính
                    </a>
                  </li>
                </ul>
              </div>
              <h3
                className="sub-title"
                id="Chi-phi-dich-vu-lam-bao-cao-tai-chinh"
              >
                <a id="buoc1">Chi phí dịch vụ làm báo cáo tài chính</a>
              </h3>
              <p className="my-2">
                Áp dụng trên toàn hệ thống của Alpha bao gồm Hà Nội, Đà Nẵng,
                TP. HCM, Đồng Nai, Bình Dương
              </p>
              <table className="table-post-custom" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Nhóm ngành Tư vấn dịch vụ</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Số hóa đơn đầu vào, </strong>
                        </span>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>đầu ra/năm</strong>
                        </span>
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Phí dịch vụ</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Không có hóa đơn</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>2.500.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 20</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>5.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 40</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>7.500.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 60</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>9.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 80</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>10.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 100</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>11.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 130</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>13.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 150</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>14.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Từ 150 trở lên</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>
                        Vui lòng gọi{" "}
                        <strong>
                          <a
                            href="tel:0902602345"
                            rel="nofollow"
                            target="_blank"
                          >
                            0902 60 2345
                          </a>
                        </strong>{" "}
                        để Alpha tư vấn và báo giá
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
              <table className="table-post-custom" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Nhóm ngành Thương mại</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Số hóa đơn</strong>
                        </span>
                      </p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Không có tờ khai hải quan</strong>
                        </span>
                      </p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Có tờ khai hải quan</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Không có hóa đơn</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>2.500.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>2.500.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 20</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>4.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>6.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 40</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>6.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>8.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 70</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>8.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>10.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 100</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>10.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>12.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 130</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>12.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>14.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 150</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>13.500.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>15.500.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 180</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>15.000.000đ</p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>17.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Từ 180 trở lên</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>
                        Vui lòng gọi{" "}
                        <strong>
                          <a
                            href="tel:0902602345"
                            rel="nofollow"
                            target="_blank"
                          >
                            0902 60 2345
                          </a>
                        </strong>{" "}
                        để Alpha tư vấn và báo giá
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
              <table className="table-post-custom" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>
                            Nhóm ngành Thi công xây dựng - Trang trí nội thất
                          </strong>
                        </span>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>
                            Sản xuất - Gia công - Nhà hàng - Lắp đặt
                          </strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Số hóa đơn</strong>
                        </span>
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Phí dịch vụ</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Không có hóa đơn</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>2.500.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 10</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>5.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 20</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>8.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 40</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>12.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dưới 60</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>15.000.000đ</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Từ 60 trở lên</p>
                    </td>
                    <td colSpan={2}>
                      <p style={{ textAlign: "center" }}>
                        Vui lòng gọi{" "}
                        <strong>
                          <a
                            href="tel:0902602345"
                            rel="nofollow"
                            target="_blank"
                          >
                            0902 60 2345
                          </a>
                        </strong>{" "}
                        để Alpha tư vấn và báo giá
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <CallNow></CallNow>
              <h3
                className="sub-title mt-4"
                id="Doanh-nghiep-can-cung-cap-nhung-gi-khi-lam-bao-cao-tai-chinh-(BCTC)-tai-Alpha?"
              >
                <a id="buoc2" className="mt-3">
                  Doanh nghiệp cần cung cấp những gì khi làm báo cáo tài chính
                  (BCTC) tại Alpha?
                </a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                Khi chọn dịch vụ báo cáo tài chính tại Alpha, bạn chỉ cần cung
                cấp các hồ sơ sau:
              </p>
              <p>
                <strong>
                  <img
                    className="lazy"
                    src={LapBaoCaoTaiChinh1}
                    style={{ width: "100%" }}
                  />
                </strong>
              </p>
              <p style={{ textAlign: "justify" }}>
                <u>Lưu ý:</u> Nếu doanh nghiệp vừa thành lập tại năm báo cáo thì
                không cần cung cấp bảng cân đối tài khoản năm trước báo cáo.
              </p>
              <h3
                className="sub-title"
                id="Thoi-han-nop-bao-cao-tai-chinh-nam-2023 va-cac-quy-dinh-xu-phat"
              >
                <a id="buoc3">
                  Thời hạn nộp báo cáo tài chính năm 2023&nbsp;và các quy định
                  xử phạt
                </a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                <strong>
                  1. Thời gian nộp báo cáo tài chính năm 2023:&nbsp;
                </strong>
              </p>
              <p className="py-2" style={{ textAlign: "justify" }}>
                Báo cáo tài chính của năm trước phải được nộp chậm nhất vào ngày
                thứ 90, kể từ ngày kết thúc năm dương lịch hoặc năm tài chính.
              </p>
              <p className="py-2" style={{ textAlign: "justify" }}>
                Theo đó, phải nộp báo cáo tài chính năm 2023&nbsp;chậm nhất là
                ngày 31/03/2024.
              </p>
              <p style={{ textAlign: "justify" }}>
                <strong>2. Mức phạt chậm nộp báo cáo tài chính:</strong>
              </p>
              <p className="py-2" style={{ textAlign: "justify" }}>
                Theo Nghị định 41/2018/NĐ-CP về việc xử phạt vi phạm hành chính
                trong việc nộp trễ, nộp sai báo cáo tài chính như sau:
              </p>
              <table className="table-post-custom" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Nội dung vi phạm</strong>
                        </span>
                      </p>
                    </td>
                    <td>
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#ffffff" }}>
                          <strong>Mức phạt</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#ffe7d4" }}>
                      <p>
                        Chậm nộp, chậm công khai BCTC dưới 3 tháng so với thời
                        hạn quy định
                      </p>
                    </td>
                    <td rowSpan={3} style={{ backgroundColor: "#ffe7d4" }}>
                      <p style={{ textAlign: "left" }}>
                        5.000.000đ - 10.000.000đ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Nộp BCTC không đủ nội dung theo quy định</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Hạch toán không đúng theo quy định tài khoản kế toán
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Chậm nộp, chậm công khai BCTC từ 3 tháng trở lên so với
                        thời hạn quy định
                      </p>
                    </td>
                    <td rowSpan={2}>
                      <p style={{ textAlign: "left" }}>
                        10.000.000đ - 20.000.000đ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Không đính kèm báo cáo kiểm toán khi nộp BCTC và khi
                        công khai BCTC (đối với các trường hợp đã được quy định)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Số liệu công khai BCTC không đúng với số liệu kế toán,
                        chứng từ kế toán
                      </p>
                    </td>
                    <td rowSpan={2} style={{ backgroundColor: "#ffe7d4" }}>
                      <p style={{ textAlign: "left" }}>
                        20.000.000đ - 30.000.000đ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Các trường hợp thỏa thuận/ép buộc cung cấp thông tin, số
                        liệu kế toán sai lệch thực tế hoặc giả mạo BCTC
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              &nbsp;
              <h3
                className="sub-title"
                id="Nhiem-vu-cua-Alpha-khi-nhan-lam-bao-cao-tai-chinh"
              >
                <a id="buoc4">
                  Nhiệm vụ của Alpha khi nhận làm báo cáo tài chính
                </a>
              </h3>
              <ol>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    1. Thu thập các hóa đơn, chứng từ, sổ sách của doanh nghiệp;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    2. Thu thập thông báo về chế độ, hình thức kế toán áp dụng,
                    phương pháp khấu hao TSCĐ;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    3. Khảo sát tình hình thực tế, quy trình hoạt động của doanh
                    nghiệp;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    4. Rà soát chứng từ, sổ sách kế toán, phân loại và sắp xếp
                    chứng từ;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    5. Loại bỏ và điều chỉnh các chứng từ không phù hợp;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    6. Lập các bảng phân bổ công cụ, dụng cụ, phí trả trước, phí
                    chờ kết chuyển;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    7. Kiểm tra chi phí lương, BHYT, BHXH…;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    8. Tính và lập các bảng khấu hao TSCĐ;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    9. Hạch toán kế toán trên phần mềm kế toán chuyên nghiệp;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    10. Bàn luận với doanh nghiệp các nội dung, nghiệp vụ có
                    liên quan đến kết quả thực hiện;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    11. Kết chuyển, tổng hợp thông tin để lập sổ sách kế toán,
                    kết quả kinh doanh, thuyết minh BCTC;
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    12. Tư vấn cho doanh nghiệp các nội dung liên quan trong quá
                    trình tổng hợp để lập BCTC…
                  </p>
                </li>
                <li className="my-2" aria-level={1}>
                  <p style={{ textAlign: "justify" }}>
                    13. In báo cáo tài chính, sổ sách kế toán theo quy định.
                  </p>
                </li>
              </ol>
              <p style={{ textAlign: "justify" }}>
                <u>Lưu ý</u>: Hỗ trợ lập bảng báo cáo tài chính miễn phí nếu
                khách hàng đang sử dụng “Dịch vụ kế toán trọn gói” tại Alpha.
              </p>
              <p>
                <em
                  aria-hidden="true"
                  className="fa-angle-double-right fas"
                  style={{ color: "#e5451b" }}
                />
                &nbsp;
                <span style={{ color: "#e5451b" }}>
                  <strong>Xem thêm:</strong>
                </span>
                &nbsp;
                <a href="https://ketoanAlpha.vn/dich-vu-ke-toan-tron-goi.html">
                  Dịch vụ kế toán trọn gói
                </a>
                .
              </p>
              <h3
                className="sub-title"
                id="Cac-cau-hoi-thuong-gap-khi-lam bao-cao-tai-chinh"
              >
                <a id="buoc5">
                  Các câu hỏi thường gặp khi làm&nbsp;báo cáo tài chính
                </a>
              </h3>
              <div id="faq">
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>1. Báo cáo tài chính cuối năm gồm những gì?</strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px] ">
                  <p style={{ textAlign: "justify" }}>
                    Báo cáo tài chính cuối năm gồm bảng cân đối kế toán, báo cáo
                    kết quả hoạt động sản xuất kinh doanh, lưu chuyển tiền tệ,
                    bảng cân đối tài khoản và thuyết minh BCTC.
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>2. Thời hạn nộp báo cáo tài chính?</strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px] ">
                  <p style={{ textAlign: "justify" }}>
                    Để tránh bị xử phạt chậm nộp báo cáo tài chính, mức phạt lên
                    đến 20.000.000đ, bạn cần lưu ý thời hạn nộp báo cáo tài
                    chính, chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm tài
                    chính/năm dương lịch.
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>
                    3. Bảng giá dịch vụ làm báo cáo tài chính tại Alpha?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px] ">
                  <p style={{ textAlign: "justify" }}>
                    Dịch vụ làm báo cáo tài chính tại Alpha được chia theo nhóm
                    ngành: tư vấn dịch vụ; thương mại; thi công xây dựng, trang
                    trí nội thất, sản xuất, gia công, nhà hàng, lắp đặt. Bạn xem
                    chi tiết tại link bên dưới&nbsp;hoặc gọi Alpha theo số
                    <strong>
                      &nbsp;
                      <a href="tel:0901042555" rel="nofollow" target="_blank">
                        0901 042 555 (Miền Bắc)
                      </a>
                      ,&nbsp;
                      <a href="tel:0939356866" rel="nofollow" target="_blank">
                        0939 35 6866 (Miền Trung)
                      </a>
                    </strong>{" "}
                    hoặc{" "}
                    <strong>
                      <a href="tel:0902602345" rel="nofollow" target="_blank">
                        0902 60 2345 (Miền Nam)
                      </a>
                      &nbsp;
                    </strong>
                    để được báo giá chính xác.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    &nbsp;
                    <strong>
                      <span style={{ color: "#e5451b" }}>Tham khảo:</span>&nbsp;
                    </strong>
                    <a href="http://localhost:3000/bao-cao-tai-chinh#buoc1">
                      Chi phí dịch vụ làm báo cáo tài chính
                    </a>
                    .
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>4. Mức phạt nộp chậm báo cáo tài chính?</strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px] ">
                  <p style={{ textAlign: "justify" }}>
                    Tùy vào từng trường hợp và thời gian chậm nộp báo cáo tài
                    chính của doanh nghiệp mà mức phạt sẽ khác nhau. Cụ thể:
                    5.000.000đ - 10.000.000đ nếu chậm nộp dưới 3 tháng;
                    10.000.000đ - 20.000.000đ nếu chậm nộp từ 3 tháng trở lên.
                    Chi tiết các trường hợp và mức phạt chậm nộp báo cáo tài
                    chính bạn xem tại link dưới đây.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    &nbsp;
                    <strong>
                      <span style={{ color: "#e5451b" }}>Tham khảo:</span>&nbsp;
                    </strong>
                    <a href="http://localhost:3000/bao-cao-tai-chinh#buoc3">
                      Thời hạn nộp báo cáo tài chính và quy định xử phạt nộp
                      chậm
                    </a>
                    .
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>
                    5. Lý do doanh nghiệp nên thuê dịch vụ báo cáo tài chính là
                    gì?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px] ">
                  <p style={{ textAlign: "justify" }}>
                    Nếu doanh nghiệp có quy mô vừa, nhỏ và siêu nhỏ; đang trong
                    thời gian biến động nhân sự kế toán; kế toán viên chưa có
                    kinh nghiệm lập bảng BCTC… thì nên cân nhắc việc sử dụng
                    dịch vụ báo cáo tài chính tại Alpha. Bởi:
                    <br />
                    - Tiết kiệm tối đa chi phí so với việc thuế kế toán viên;
                    <br />
                    - Được tư vấn chi tiết về chi phí khi tính thuế TNDN một
                    cách nhanh chóng; &nbsp;
                    <br />
                    - Đảm bảo thời gian nộp báo cáo tài chính và chịu toàn bộ
                    trách nhiệm về số liệu do Alpha thực hiện;
                    <br />- Số liệu kế toán sẽ được thực hiện một cách rõ ràng
                    và chính xác nhất bởi sự lành nghề của đội ngũ kế toán
                    Alpha.
                  </p>
                </blockquote>
                <hr />
                <p className="my-2" style={{ textAlign: "justify" }}>
                  Gọi cho chúng tôi theo số
                  <strong>
                    &nbsp;
                    <a href="tel:0901042555" rel="nofollow" target="_blank">
                      0901 042 555 (Miền Bắc)
                    </a>
                    ,&nbsp;
                    <a href="tel:0939356866" rel="nofollow" target="_blank">
                      0939 35 6866 (Miền Trung)
                    </a>
                  </strong>{" "}
                  hoặc{" "}
                  <strong>
                    <a href="tel:0902602345" rel="nofollow" target="_blank">
                      0902 60 2345 (Miền Nam)
                    </a>
                    &nbsp;
                  </strong>
                  để được hỗ trợ.
                </p>
              </div>
            </div>
            <div className="row mt-10">
              <div className="col-12">
                <div className="border-bottom border-2 my-4">
                  <h5 className="border-start border-3 border-secondary fw-bold ps-2 text-primary">
                    BÀI VIẾT LIÊN QUAN
                  </h5>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-12 col-xl-3">
                <div className="border-bottom border-lg shadow-lg-sm shadow-0 rounded py-2 py-lg-0 h-100">
                  <div className="row align-items-center">
                    <div className="col-5 col-lg-12">
                      <a
                        href="/cach-tinh-tien-phat-cham-nop-thue.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/dich-vu-ke-toan.png"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/cach-tinh-tien-phat-cham-nop-thue.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Cách Tính Tiền Phạt Chậm Nộp Thuế - Có ví dụ cụ thể
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3">
                <div className="border-bottom border-lg shadow-lg-sm shadow-0 rounded py-2 py-lg-0 h-100">
                  <div className="row align-items-center">
                    <div className="col-5 col-lg-12">
                      <a
                        href="/chi-phi-ke-toan-va-chi-phi-thue-thu-nhap-doanh-nghiep.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/dich-vu-ke-toan.png"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/chi-phi-ke-toan-va-chi-phi-thue-thu-nhap-doanh-nghiep.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Chi Phí Kế Toán Và Chi Phí Thuế Thu Nhập Doanh Nghiệp
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3">
                <div className="border-bottom border-lg shadow-lg-sm shadow-0 rounded py-2 py-lg-0 h-100">
                  <div className="row align-items-center">
                    <div className="col-5 col-lg-12">
                      <a
                        href="/dang-ky-gia-han-va-huong-dan-su-dung-chu-ky-so.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/dang-ky-gia-han-va-huong-dan-su-dung-chu-ky-so.jpg"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/dang-ky-gia-han-va-huong-dan-su-dung-chu-ky-so.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Thủ tục đăng ký, gia hạn &amp; hướng dẫn cách sử dụng
                          chữ ký số
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3">
                <div className="border-bottom border-lg shadow-lg-sm shadow-0 rounded py-2 py-lg-0 h-100">
                  <div className="row align-items-center">
                    <div className="col-5 col-lg-12">
                      <a
                        href="/dich-vu-hoan-thue-gtgt.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/post/164-moi/dich-vu-hoan-thue-gia-tri-gia-tang-GTGT.jpg"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/dich-vu-hoan-thue-gtgt.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Dịch vụ hoàn thuế GTGT hàng xuất khẩu, dự án đầu tư -
                          nhanh
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Rating></Rating>
            {/* <div className='text-center pt-4'>
              <p className='fw-bold h3'>BÌNH LUẬN - HỎI ĐÁP</p>
              <p className='fw-bold text-secondary h5'>
                Hãy để lại câu hỏi của bạn, chúng tôi sẽ trả lời <span className='text-primary'>TRONG 15 PHÚT</span>
              </p>
            </div>
            <div className='bg-light p-3 border-bottom'>
              <div className='form-floating'>
                <textarea
                  className='form-control'
                  placeholder='Viết nội dung câu hỏi'
                  rows={2}
                  cols={2}
                  name='comment'
                  id='txtcomment'
                  defaultValue={''}
                />
                <label htmlFor='txtcomment'>Viết nội dung câu hỏi...</label>
              </div>
              <div className='mt-3 d-flex justify-content-between align-items-center'>
                <small className='form-text text-success fs-xxxl-6'>
                  SĐT và email sẽ được ẩn để bảo mật thông tin của bạn
                </small>
                <button
                  id='ContentBody_btcommentpage'
                  type='button'
                  className='btn btn-primary text-nowrap px-xxxl-3'
                  data-page-id={101}
                >
                  <i className='far fa-paper-plane pe-2' />
                  GỬI NHANH
                </button>
              </div>
            </div>
            <div id='bdcomment' className='my-3 mb-xxxl-0'></div>
            <div className='text-center'>
              <button id='btloadmore' type='button' className='btn btn-info rounded px-5 text-white d-none'>
                XEM THÊM HỎI ĐÁP
              </button>
            </div> */}
            <div className="tagclouds mt-3 text-justify">
              <a href="#">
                tags <i className="fa fa-tags" aria-hidden="true" />
              </a>
              <a
                rel="nofollow"
                className="text-gray-500 bg-gray-100 py-1 mb-2 capitalize mr-2 text-muted bg-light px-2 ms-1 text-capitalize"
                href="/bao-cao-tai-chinh"
              >
                <small>báo cáo tài chính</small>
              </a>
              <a
                rel="nofollow"
                className="text-gray-500 bg-gray-100 py-1 mb-2 capitalize mr-2 text-muted bg-light px-2 ms-1 text-capitalize"
                href="/lap-bao-cao-tai-chinh-cuoi-nam"
              >
                <small>lập báo cáo tài chính cuối năm</small>
              </a>
              <a
                rel="nofollow"
                className="text-gray-500 bg-gray-100 mb-2 py-1 capitalize mr-2 text-muted bg-light px-2 ms-1 text-capitalize"
                href="/xu-phat-bao-cao-tai-chinh"
              >
                <small>xử phạt báo cáo tài chính</small>
              </a>
              <a
                rel="nofollow"
                className="text-gray-500 bg-gray-100 py-1 capitalize mr-2 mb-2 text-muted bg-light px-2 ms-1 text-capitalize"
                href="/dich-vu-ke-toan"
              >
                <small>dịch vụ kế toán</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 bg-gray-100">
        <div className=" h-max top-0  p-lg-4 p-5 pt-lg-2 pb-lg-1 bg-light">
          <div id="tham-khao-them" className="pb-4 text-justify">
            <div className="border-bottom border-2 my-3">
              <h5 className="bg-[#2a4e9a] text-white font-normal text-[20px] py-1 pl-5 border-l-[4px] border-red-500">
                THAM KHẢO THÊM
              </h5>
            </div>
            <a className="text-primary" href="/dich-vu-bao-cao-thue.html">
              <img
                data-src="https://ketoanAlpha.vn/uploads/images/post/160-cu/dich-vu-bao-cao-thue.jpg"
                className="img-fluid lazy"
                alt="Dịch vụ báo cáo thuế, BCTC cuối năm - Chỉ từ 500.000đ/tháng"
                src="https://ketoanAlpha.vn/uploads/images/post/160-cu/dich-vu-bao-cao-thue.jpg"
              />
              <p className="my-3 pb-3 text-[#2a4e9a] border-b font-semibold border-bottom border-1 fw-bold">
                Dịch vụ báo cáo thuế, BCTC cuối năm - Chỉ từ 500.000đ/tháng
              </p>
            </a>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/thoi-han-nop-cac-loai-bao-cao-va-to-khai-thue-trong-nam.html"
              >
                Thời hạn nộp tờ khai thuế, báo cáo thuế theo quý &amp; theo
                tháng
              </a>
            </div>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/huong-dan-cach-dang-ky-va-nop-thue-dien-tu.html"
              >
                Hướng Dẫn Cách Đăng Ký Và Nộp Thuế Điện Tử
              </a>
            </div>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/thu-tuc-ke-khai-bao-cao-thue.html"
              >
                Thủ tục kê khai thuế các vi phạm &amp; mức phạt về BÁO CÁO THUẾ
              </a>
            </div>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/nop-to-khai-thue-qua-mang-dien-tu.html"
              >
                Hướng dẫn cách nộp Tờ khai thuế qua mạng điện tử - Mới nhất
              </a>
            </div>
          </div>
          <div id="dich-vu-lien-quan" className="pb-5">
            <div className="card border border-primary rounded-md border-[#2a4e9a] overflow-hidden">
              <h5 className="bg-[#2a4e9a] text-white font-normal text-[20px] py-1 pl-5 border-l-[4px] border-red-500">
                DỊCH VỤ LIÊN QUAN
              </h5>
              <ul className="list-group border-top-0 list-group-flush">
                <li className="bg-white border-b pl-4 list-group-item py-3 text-capitalize">
                  <i className="fas fa-angle-double-right me-2 text-secondary" />
                  <a
                    className="text-reset"
                    title="Dịch vụ kế toán trọn gói"
                    href="https://ketoanAlpha.vn/dich-vu-ke-toan-tron-goi.html"
                  >
                    Dịch vụ kế toán trọn gói
                  </a>
                </li>
                <li className=" bg-white border-b pl-4 list-group-item py-3 text-capitalize">
                  <i className="fas fa-angle-double-right me-2 text-secondary" />
                  Dịch vụ{" "}
                  <a
                    className="text-reset"
                    title="làm lại sổ sách kế toán"
                    href="https://ketoanAlpha.vn/dich-vu-lam-so-sach-ke-toan.html"
                  >
                    làm lại sổ sách kế toán
                  </a>
                </li>
                <li className=" bg-white border-b pl-4 list-group-item py-3 text-capitalize">
                  <i className="fas fa-angle-double-right me-2 text-secondary" />
                  <a
                    className="text-reset"
                    title="Dịch vụ khai thuế ban đầu"
                    href="https://ketoanAlpha.vn/thue-ban-dau-va-mua-hoa-don.html"
                  >
                    Dịch vụ khai thuế ban đầu
                  </a>
                </li>
                <li className="bg-white border-b pl-4 list-group-item py-3 text-capitalize">
                  <i className="fas fa-angle-double-right me-2 text-secondary" />
                  Bảng giá{" "}
                  <a
                    className="text-reset"
                    title="hóa đơn điện tử Viettel"
                    href="https://ketoanAlpha.vn/dich-vu-hoa-don-dien-tu-viettel-va-easyinvoice.html"
                  >
                    hóa đơn điện tử Viettel
                  </a>{" "}
                  - Easyinvoice
                </li>
              </ul>
            </div>
          </div>
          <div id="cung-chuyen-muc" className="pb-4 text-justify">
            <div className="border-bottom border-2 mb-3">
              <h5 className="bg-[#2a4e9a] text-white font-normal text-[20px] py-1 pl-5 border-l-[4px] border-red-500">
                CÙNG CHUYÊN MỤC
              </h5>
            </div>
            <div className="clearfix border-bottom border-1 mb-4">
              <a
                className="flex text-reset fs-xxxl-5 fs-6"
                href="/thu-tuc-khai-thue-khi-thue-tai-san-cua-ca-nhan.html"
              >
                <img
                  data-src="/uploads/images/dich-vu-ke-toan.png"
                  className="w-[40%] col-5 img-fluid float-start pe-4 pb-4 lazy"
                  src={DichVuKeToanThueTronGoi}
                />
                Thủ tục khai thuế khi thuê tài sản của cá nhân
              </a>
            </div>
            <div className="clearfix border-bottom border-1 mb-4">
              <a
                className="flex text-reset fs-xxxl-5 fs-6"
                href="/cac-khoan-giam-tru-doanh-thu.html"
              >
                <img
                  data-src="/uploads/images/dich-vu-ke-toan.png"
                  className="w-[40%] col-5 img-fluid float-start pe-4 pb-4 lazy"
                  src={DichVuKeToanThueTronGoi}
                />
                Các Khoản Giảm Trừ Doanh Thu - Cập nhật mới và có ví dụ
              </a>
            </div>
            <div className="clearfix border-bottom border-1 mb-4">
              <a
                className="flex text-reset fs-xxxl-5 fs-6"
                href="/dich-vu-hoan-thue-tncn.html"
              >
                <img
                  data-src="/uploads/images/post/165-moi/dich-vu-hoan-thue-thu-nhap-ca-nhan-TNCN.jpg"
                  className="w-[40%] col-5 img-fluid float-start pe-4 pb-4 lazy"
                  src={Thue}
                />
                Dịch vụ hoàn thuế thu nhập cá nhân (TNCN) - Chỉ 800.000 đồng
              </a>
            </div>
            <div className="clearfix border-bottom border-1 mb-4">
              <a
                className="flex text-reset fs-xxxl-5 fs-6"
                href="/cac-khoan-thue-phai-nop-sau-khi-thanh-lap-cong-ty.html"
              >
                <img
                  data-src="/uploads/images/post/144/cac-khoan-thue-phai-nop-sau-khi-thanh-lap-cong-ty.jpg"
                  className="w-[40%] col-5 img-fluid float-start pe-4 pb-4 lazy"
                  src={Cac}
                />
                Thuế là gì? Thuế doanh nghiệp phải nộp sau thành lập công ty
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeToanThueTronGoi;

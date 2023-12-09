import DoiTen1 from "~/assets/images/doi-ten-cong-ty-01.jpg";
import DoiTen2 from "~/assets/images/doi-ten-cong-ty-02.png";
import DoiTen3 from "~/assets/images/doi-ten-cong-ty-03.png";
import CallNow from "~/components/CallNow/CallNow";
import DichVuKeToan from "~/assets/images/dich-vu-ke-toan.png";
import Thue from "~/assets/images/dich-vu-hoan-thue-thu-nhap-ca-nhan-TNCN.jpg";
// import Cac from '~/assets/images/cac-khoan-thue-phai-nop-sau-khi-thanh-lap-cong-ty.jpg'
const DichVuThayDoiTen = () => {
  return (
    <section className="py-3 px-3 lg:grid lg:grid-cols-3 gap-x-8">
      <div className="container lg:col-span-2">
        <div className="row g-2 g-lg-5">
          <div id="ContentBody_fullpage" className="col-lg-8">
            <h1
              id="ContentBody_post_title"
              className="text-[#2a4e9a] font-[400] text-[25px] page-title h4 fs-xxxl-3 fs-xl-4 text-primary"
            >
              Dịch vụ làm thủ tục thay đổi tên công ty - Phí dịch vụ 500.000đ
            </h1>
            <div
              id="ContentBody_post_body"
              className="news-body mb-4 text-justify"
            >
              <p>
                <img alt="" src={DoiTen1} style={{ width: "100%" }} />
              </p>
              <p className="py-2" style={{ textAlign: "justify" }}>
                <strong>
                  Trong vòng 3 ngày, Alpha sẽ hoàn thành bộ hồ sơ thay đổi tên
                  doanh nghiệp nói chung hay thay đổi tên công ty cổ phần/thay
                  đổi tên công ty TNHH nói riêng. Thủ tục thay đổi tên công ty
                  có khá nhiều điểm cần lưu ý trước và sau khi thực hiện. Vậy
                  nên, hãy tham khảo dịch vụ đổi tên doanh nghiệp tại Alpha để
                  tránh các sai sót không nên có.
                </strong>
              </p>
              <div className="custom-muc-luc ">
                <p className="toc-title ">Nội dung chính:</p>
                <ul className="noi-dung-chinh ml-4 mb-4 mt-3">
                  <li>
                    <a href="#Tong-chi-phi-thay-doi-ten-cong-ty,-doanh-nghiep">
                      Tổng chi phí thay đổi tên công ty, doanh nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#Thoi-gian-hoan-thanh-thu-tuc-thay-doi-ten-cong-ty,-doanh-nghiep">
                      Thời gian hoàn thành thủ tục thay đổi tên công ty, doanh
                      nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#2-thong-tin-doanh-nghiep-can-cung-cap">
                      2 thông tin doanh nghiệp cần cung cấp
                    </a>
                  </li>
                  <li>
                    <a href="#7-viec-Alpha-thay-ban-thuc-hien-khi-lam-thu-tuc-doi-ten-cong-ty">
                      7 việc Alpha thay bạn thực hiện khi làm thủ tục đổi tên
                      công ty
                    </a>
                  </li>
                  <li>
                    <a href="#4-luu-y-sau-khi-thay-doi-ten-doanh-nghiep">
                      4 lưu ý sau khi thay đổi tên doanh nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#Cac-cau-hoi-thuong-gap-khi-thay-doi-ten-cong-ty">
                      Các câu hỏi thường gặp khi thay đổi tên công ty
                    </a>
                  </li>
                </ul>
              </div>
              <h3
                className="sub-title"
                id="Tong-chi-phi-thay-doi-ten-cong-ty,-doanh-nghiep"
              >
                <a id="buoc1">
                  Tổng chi phí thay đổi tên công ty, doanh nghiệp
                </a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                Để thay đổi tên công ty cổ phần, thay đổi tên công ty TNHH hay
                bất cứ loại hình doanh nghiệp nào, bạn cần chuẩn bị các khoản
                phí sau:
              </p>
              <p>
                <strong>
                  <img
                    className="lazy"
                    data-src="/uploads/images/doi-ten-cong-ty-02.png"
                    src={DoiTen2}
                    style={{ width: "100%" }}
                  />
                </strong>
              </p>
              <p style={{ textAlign: "justify" }}>
                <span style={{ color: "#3472b8" }}>
                  <strong>Phí dịch vụ tại Alpha: 500.000 đồng</strong>
                </span>
              </p>
              <p style={{ textAlign: "justify" }}>
                <span style={{ color: "#3472b8" }}>
                  <strong>Lệ phí nộp nhà nước: 900.000 đồng</strong>
                </span>
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    200.000 đồng lệ phí nộp hồ sơ và cấp GPKD mới tại Sở
                    KH&amp;ĐT;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    400.000 đồng lệ phí khắc dấu và công bố mẫu dấu mới;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    300.000 đồng lệ phí công bố thay đổi tên công ty ở Cổng
                    thông tin quốc gia.
                  </p>
                </li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                Khi sử dụng dịch vụ thay đổi tên công ty, doanh nghiệp tại
                Alpha, bạn tiết kiệm tối đa không chỉ thời gian mà còn các khoản
                phí như giấy, mực in ấn, đi lại… Bạn chỉ cần thanh toán tổng chi
                phí trọn gói là 1.400.000 đồng.<strong>&nbsp;</strong>
              </p>
              <p style={{ textAlign: "justify" }}>&nbsp;</p>
              <h3
                className="sub-title"
                id="Thoi-gian-hoan-thanh-thu-tuc-thay-doi-ten-cong-ty,-doanh-nghiep"
              >
                <a id="buoc2">
                  Thời gian hoàn thành thủ tục thay đổi tên công ty, doanh
                  nghiệp
                </a>
              </h3>
              <p>
                <strong>
                  <img
                    className="lazy"
                    data-src="/uploads/images/doi-ten-cong-ty-03.png"
                    src={DoiTen3}
                    style={{ width: "100%" }}
                  />
                </strong>
              </p>
              <p style={{ textAlign: "justify" }}>
                Tên công ty ảnh hưởng trực tiếp đến các giấy tờ, công văn của
                doanh nghiệp trong quá trình hoạt động. Do vậy, dịch vụ thay đổi
                tên công ty của Alpha luôn đảm bảo tốc độ hoàn thành nhanh
                chóng, chỉ từ 3-4 ngày làm việc.
              </p>
              <p style={{ textAlign: "justify" }}>
                Sau khi Alpha hoàn thành bộ hồ sơ thay đổi tên công ty và nộp hồ
                sơ tại Sở KH&amp;ĐT. Trong vòng 3 ngày làm việc, Sở KH&amp;ĐT sẽ
                kiểm tra và giải quyết hồ sơ cho doanh nghiệp.
              </p>
              <CallNow></CallNow>
              <p style={{ textAlign: "justify" }}>&nbsp;</p>
              <h3
                className="sub-title"
                id="2-thong-tin-doanh-nghiep-can-cung-cap"
              >
                <a id="buoc3">2 thông tin doanh nghiệp cần cung cấp</a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                Hãy để Alpha thay bạn hoàn thành tất cả mọi thủ tục pháp lý rườm
                rà. Bạn chỉ cần cung cấp cho Alpha 2 thông tin cơ bản sau:
              </p>
              <div className="custom-quote">
                <p style={{ textAlign: "justify" }}>
                  <strong>1.</strong> MST công ty;
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>2.</strong> Tên công ty dự kiến thay đổi.
                </p>
              </div>
              <div className="mb-4 w-full ratio ratio-16x9">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder={0}
                  className="w-full h-[300px] md:h-[380px] lg:h-[450px]"
                  src="https://www.youtube.com/embed/sNN-Oq3VFU4"
                  title="YouTube video player"
                />
              </div>
              <h3
                className="sub-title"
                id="7-viec-Alpha-thay-ban-thuc-hien-khi-lam-thu-tuc-doi-ten-cong-ty"
              >
                <a id="buoc4">
                  7 việc Alpha thay bạn thực hiện khi làm thủ tục đổi tên công
                  ty
                </a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                Trên thực tế, nếu bạn tự thực hiện thủ tục thay đổi tên doanh
                nghiệp, bạn sẽ phải chuẩn bị khá nhiều hồ sơ cùng danh sách dài
                những việc phải làm. Vì thế, hãy đơn giản hóa mọi việc và để
                Alpha hỗ trợ bạn nhé.
              </p>
              <ol>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Hỗ trợ tư vấn miễn phí và kiểm tra tên công ty dự kiến thay
                    đổi có bị trùng/sai quy định;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Soạn toàn bộ hồ sơ thay đổi tên doanh nghiệp theo đúng quy
                    định Sở KH&amp;ĐT;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Trình khách hàng ký hồ sơ tận nơi;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Nộp hồ sơ thay đổi tên công ty tại Sở KH&amp;ĐT;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Đăng ký khắc dấu và nộp hồ sơ công bố mẫu dấu theo tên công
                    ty mới;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Nhận kết quả thực hiện thủ tục thay đổi tên công ty tại Sở
                    KH&amp;ĐT;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Bàn giao GPKD mới và con dấu (nếu có) tận nơi.
                  </p>
                </li>
              </ol>
              <p style={{ textAlign: "justify" }}>
                <u>Lưu ý:</u>&nbsp;
              </p>
              <p style={{ textAlign: "justify" }}>
                Toàn bộ quá trình giao nhận hồ sơ, giấy tờ đều được Alpha sử
                dụng dịch vụ miễn phí tận nơi.
              </p>
              <h3
                className="sub-title"
                id="4-luu-y-sau-khi-thay-doi-ten-doanh-nghiep"
              >
                <a id="buoc5">4 lưu ý sau khi thay đổi tên doanh nghiệp</a>
              </h3>
              <p style={{ textAlign: "justify" }}>
                Sau khi hoàn thành thủ tục đổi tên công ty, để tránh bị xử phạt
                các lỗi pháp lý, bạn cần lưu ý thực hiện những vấn đề sau:
              </p>
              <ol>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Khắc dấu và công bố mẫu dấu mới - 400.000 đồng;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Làm bảng hiệu mới - 200.000 đồng/bảng hiệu;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Trả con dấu cũ cho cơ quan công an;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    Xử lý hóa đơn cũ và làm thông báo phát hành hóa đơn theo tên
                    công ty mới;
                  </p>
                </li>
              </ol>
              <p>
                <em
                  aria-hidden="true"
                  className="fa-angle-double-right fas"
                  style={{ color: "#e5451b" }}
                />
                &nbsp;
                <span style={{ color: "#e5451b" }}>
                  <strong>Xem chi tiết:</strong>
                </span>
                &nbsp;
                <a href="https://ketoanAlpha.vn/ho-so-thay-doi-ten-cong-ty.html">
                  Hồ sơ và thủ tục thay đổi tên công ty
                </a>
                .
              </p>
              <h3
                className="sub-title"
                id="Cac-cau-hoi-thuong-gap-khi-thay-doi-ten-cong-ty"
              >
                <a id="buoc6">
                  Các câu hỏi thường gặp khi thay đổi tên công ty
                </a>
              </h3>
              <div id="faq">
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>1. Sau khi thay đổi tên công ty cần làm gì?</strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Sau khi hoàn tất thủ tục thay đổi tên công ty, bạn lưu ý
                    thực hiện các việc sau: làm bảng hiệu với tên công ty vừa
                    thay đổi; trả con dấu cũ cho cơ quan công an; khắc và công
                    bố mẫu dấu mới; thông báo phát hành hóa đơn theo tên công ty
                    mới.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    <em aria-hidden="true" />
                    &nbsp;
                    <span style={{ color: "#e5451b" }}>
                      <strong>Xem chi tiết:</strong>
                    </span>
                    &nbsp;
                    <a href="https://ketoanAlpha.vn/doi-ten-cong-ty.html#buoc5">
                      Những lưu ý sau khi thay đổi công ty
                    </a>
                    .
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>2. Đổi tên công ty có được không?</strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Được. Tùy vào định hướng phát triển mà doanh nghiệp thực
                    hiện thủ tục thay đổi tên công ty. Tuy nhiên, để tránh những
                    sai phạm không nên có, hãy liên hệ Alpha theo số&nbsp;
                    <strong>
                      <a href="tel:0984477711 " rel="nofollow" target="_blank">
                        0984 477 711 (Miền Bắc)
                      </a>
                    </strong>
                    ,&nbsp;
                    <strong>
                      <a href="tel:0903003779" rel="nofollow" target="_blank">
                        0903 003 779 (Miền Trung)
                      </a>
                      &nbsp;
                    </strong>
                    hoặc&nbsp;
                    <strong>
                      <a href="tel:0938268123" rel="nofollow" target="_blank">
                        0938 268 123 (Miền Nam)
                      </a>
                    </strong>
                    &nbsp;để được hỗ trợ tư vấn miễn phí.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    <em aria-hidden="true" />
                    &nbsp;
                    <span style={{ color: "#e5451b" }}>
                      <strong>Xem chi tiết:</strong>
                    </span>
                    <strong>&nbsp;</strong>
                    <a href="https://ketoanAlpha.vn/loi-sai-khi-thay-doi-giay-phep-kinh-doanh.html">
                      Các lưu ý và lỗi sai cần tránh khi thay đổi tên công ty
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
                    3. Thủ tục đổi tên giấy phép kinh doanh gồm những gì?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Tùy vào loại hình doanh nghiệp mà hồ sơ thay đổi tên công ty
                    cổ phần hay hồ sơ thay đổi tên công ty TNHH sẽ có vài điểm
                    khác nhau. Bạn có thể xem chi tiết tại link bài viết ngay
                    bên dưới hoặc chọn lựa dịch vụ thay đổi tên công ty của
                    Alpha - phí dịch vụ 500.000 đồng để đơn giản hóa mọi thủ
                    tục.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    <em aria-hidden="true" />
                    &nbsp;
                    <span style={{ color: "#e5451b" }}>
                      <strong>Tham khảo:</strong>
                    </span>
                    <strong>&nbsp;</strong>
                    <a href="https://ketoanAlpha.vn/ho-so-thay-doi-ten-cong-ty.html">
                      Hồ sơ, thủ tục thay đổi tên công ty - Có file mẫu
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
                    4. Chi phí trọn gói đổi tên doanh nghiệp tại Alpha?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Tổng chi phí trọn gói thay đổi tên công ty tại Alpha là
                    1.400.000 đồng, bao gồm phí dịch vụ 500.000 đồng và lệ phí
                    nộp nhà nước 900.000 đồng.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    <em aria-hidden="true" />
                    &nbsp;
                    <span style={{ color: "#e5451b" }}>
                      <strong>Xem chi tiết:</strong>
                    </span>
                    <strong>&nbsp;</strong>
                    <a href="https://ketoanAlpha.vn/doi-ten-cong-ty.html#buoc1">
                      Tổng chi phí thay đổi tên doanh nghiệp
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
                    5. Thủ tục đổi tên doanh nghiệp thực hiện trong mấy ngày?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Với dịch vụ thay đổi tên công ty tại Alpha, chỉ cần 3 ngày
                    để Sở KH&amp;ĐT xét duyệt hồ sơ và cấp GPKD mới. Hãy liên hệ
                    Alpha theo số&nbsp;
                    <strong>
                      <a href="tel:0984477711 " rel="nofollow" target="_blank">
                        0984 477 711 (Miền Bắc)
                      </a>
                    </strong>
                    ,&nbsp;
                    <strong>
                      <a href="tel:0903003779" rel="nofollow" target="_blank">
                        0903 003 779 (Miền Trung)
                      </a>
                      &nbsp;
                    </strong>
                    hoặc&nbsp;
                    <strong>
                      <a href="tel:0938268123" rel="nofollow" target="_blank">
                        0938 268 123 (Miền Nam)
                      </a>
                    </strong>
                    &nbsp;để hồ sơ xin đổi tên doanh nghiệp được hoàn thành
                    nhanh chóng.
                  </p>
                </blockquote>
                <hr />
                <p style={{ textAlign: "justify" }}>
                  <span className="mr-2 font-bold text-[20px] text-[#e5451b]">
                    +
                  </span>
                  <strong>
                    6. Cách xử lý hóa đơn sau khi thay đổi tên công ty?
                  </strong>
                </p>
                <blockquote className="pl-3 mt-3 border-[#e5451b] border-l-[2px]">
                  <p style={{ textAlign: "justify" }}>
                    Tùy vào loại hóa đơn doanh nghiệp sử dụng mà cách xử lý hóa
                    đơn khi thay đổi tên công ty sẽ khác nhau.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <em aria-hidden="true" />
                    &nbsp;
                    <em
                      aria-hidden="true"
                      className="fa-angle-double-right fas"
                      style={{ color: "#e5451b" }}
                    />
                    <em aria-hidden="true" />
                    &nbsp;
                    <span style={{ color: "#e5451b" }}>
                      <strong>Xem chi tiết:</strong>
                    </span>
                    <strong>&nbsp;</strong>
                    <a href="https://ketoanAlpha.vn/doi-ten-cong-ty.html#buoc5">
                      Những lưu ý sau khi thay đổi tên công ty
                    </a>
                    .
                  </p>
                </blockquote>
                <hr />
              </div>
              <p className="my-2">
                Gọi cho chúng tôi theo số&nbsp;
                <strong>
                  <a href="tel:0984477711 " rel="nofollow" target="_blank">
                    0984 477 711 (Miền Bắc)
                  </a>
                </strong>
                ,&nbsp;
                <strong>
                  <a href="tel:0903003779" rel="nofollow" target="_blank">
                    0903 003 779 (Miền Trung)
                  </a>
                  &nbsp;
                </strong>
                hoặc&nbsp;
                <strong>
                  <a href="tel:0938268123" rel="nofollow" target="_blank">
                    0938 268 123 (Miền Nam)
                  </a>
                </strong>
                &nbsp;để được hỗ trợ.
              </p>
            </div>
            <div className="row">
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
                        href="/ho-so-thay-doi-ten-cong-ty.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/ho-so-thay-doi-ten-cong-ty.jpg"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/ho-so-thay-doi-ten-cong-ty.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Hồ sơ, thủ tục thay đổi tên công ty, doanh nghiệp - Có
                          file mẫu
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
                        href="/cach-dat-ten-cong-ty.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/cach-dat-ten-cong-ty(2).png"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/cach-dat-ten-cong-ty.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Cách đặt tên công ty, doanh nghiệp hay và đúng - Có ví
                          dụ
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
                        href="/thay-doi-giay-phep-kinh-doanh.html"
                        className="text-reset"
                      >
                        <img
                          data-src="/uploads/images/thay-doi-giay-phep-kinh-doanh.jpg"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/thay-doi-giay-phep-kinh-doanh.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Dịch vụ thay đổi Giấy Phép Đăng Ký Kinh Doanh, chỉ
                          500.000đ
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
                      <a href="/doi-tru-so-cong-ty.html" className="text-reset">
                        <img
                          data-src="/uploads/images/doi-tru-so-cong-ty.jpg"
                          className="img-fluid lazy"
                        />
                      </a>
                    </div>
                    <div className="col-7 col-lg-12">
                      <a
                        href="/doi-tru-so-cong-ty.html"
                        className="text-reset overflow-hidden line-clamp-xxxl-3 d--webkit-box box-orient"
                      >
                        <p className="fw-bold mb-0 text-justify text-lg-start p-lg-2 p-0">
                          Dịch vụ làm thủ tục thay đổi địa chỉ trụ sở công ty,
                          chỉ 500.000đ
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tagclouds mt-3 text-justify">
              <a href="#">
                tags <i className="fa fa-tags" aria-hidden="true" />
              </a>
              <a
                rel="nofollow"
                className="text-muted bg-light px-2 ms-1 text-capitalize"
                href="/doi-ten-cong-ty"
              >
                <small>đổi tên công ty</small>
              </a>
              <a
                rel="nofollow"
                className="text-muted bg-light px-2 ms-1 text-capitalize"
                href="/doi-ten-doanh-nghiep"
              >
                <small>đổi tên doanh nghiệp</small>
              </a>
              <a
                rel="nofollow"
                className="text-muted bg-light px-2 ms-1 text-capitalize"
                href="/thay-doi-ten-cong-ty"
              >
                <small>thay đổi tên công ty</small>
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
                Thủ tục thay đổi Giấy Phép Kinh Doanh trực tiếp và qua mạng
              </p>
            </a>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/thoi-han-nop-cac-loai-bao-cao-va-to-khai-thue-trong-nam.html"
              >
                Hồ sơ, thủ tục đăng ký giấy phép kinh doanh online cho công ty
              </a>
            </div>
            <div className="my-3 pb-2 text-[#2a4e9a] border-b  border-bottom border-1">
              <a
                className="text-primary  "
                href="/huong-dan-cach-dang-ky-va-nop-thue-dien-tu.html"
              >
                Thủ tục xin cấp lại giấy phép kinh doanh do bị mất, cháy, rách…
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
                    Dịch vụ đổi địa chỉ công ty
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
                    Dịch vụ thay đổi người đại diện pháp luật
                  </a>
                </li>
                <li className=" bg-white border-b pl-4 list-group-item py-3 text-capitalize">
                  <i className="fas fa-angle-double-right me-2 text-secondary" />
                  <a
                    className="text-reset"
                    title="Dịch vụ khai thuế ban đầu"
                    href="https://ketoanAlpha.vn/thue-ban-dau-va-mua-hoa-don.html"
                  >
                    Đăng ký thêm mã ngành kinh doanh
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
                    Dịch vụ thay đổi giấy phép kinh doanh
                  </a>{" "}
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
                  src={DichVuKeToan}
                />
                Thủ tục và hồ sơ chuyển nhượng vốn góp trong Công Ty TNHH
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
                  src={DichVuKeToan}
                />
                Thủ tục và hồ sơ chuyển nhượng vốn góp trong Công Ty TNHH
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
                Các lưu ý & lỗi sai cần tránh khi thay đổi Giấy Phép Kinh Doanh
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DichVuThayDoiTen;

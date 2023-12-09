import GpkdItem from "~/components/GpkdItem/GpkdItem";
import Section from "~/components/Section/Section";
import ViewestItem from "~/components/Viewest/ViewestItem";
import ImageCompany from "~/assets/images/thanh-lap-cong-ty.jpg";
// import DichVuKeToan from "~/assets/images/dich-vu-ke-toan.jpg";
import DichVuKeToanTronGoi from "~/assets/images/thanh-lap-ctcp-1.png";
// import DichVuThanhLap from "~/assets/images/dich-vu-thanh-lap-cong-ty.jpg";
// import HoKinhDoanhCaThe from "~/assets/images/ho-kinh-doanh-ca-the.jpg";
// import DauTuNuocNgoai from "~/assets/images/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai.jpg";
import ThuTucThanhLap from "~/assets/images/thu-tuc-thanh-lap-cong-ty.jpg";
import CachDatTen from "~/assets/images/cach-dat-ten-cong-ty-doanh-nghiep-150x105.jpg";
import ThueLaGi from "~/assets/images/thue-mon-bai-la-gi-150x 05.jpg";
import VonDieuLe from "~/assets/images/von-dieu-le-la-gi-150x105.jpg";
import CongTyHopDanh from "~/assets/images/cong-ty-hop-danh.png";
import DichVuBaoCao from "~/assets/images/thành lập công ty TNHH 1.png";
import CongTy from "~/assets/images/cong-ty-tnhh-hay-co-phan.jpg";
import ThanhLapCongTY from "~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg";
// import ThanhLapCongTY1 from "~/assets/images/thanh-lap-cong-ty-tnhh-mot-thanh-vien.jpg";
import TDND1 from "~/assets/images/tdnd-1.jpg";
import TDND2 from "~/assets/images/tdnd2.jpg";
import TDND3 from "~/assets/images/tdnd-3.jpg";
import Banner1 from "~/assets/images/baner1.jpg";
import Banner2 from "~/assets/images/baner2.jpg";
import Banner3 from "~/assets/images/baner3.jpg";
import Banner4 from "~/assets/images/baner4.jpg";
// import ThanhLapCongTY2 from "~/assets/images/thanh-lap-cong-ty-tnhh-hai-thanh-vien-tro-len.jpg";
import HinhDoanhNghiep from "~/assets/images/cac-loai-hinh-doanh-nghiep.jpg";
import HayHoKinhDoanh from "~/assets/images/thanh-lap-cong-ty-hay-ho-kinh-doanh.jpg";
import TraCuuMa from "~/assets/images/tra-cuu-ma-nganh-nghe-kinh-doanh.jpg";
import ThueLaGis from "~/assets/images/thue-la-gi.jpg";
import ThuTucDangKy from "~/assets/images/thu-tuc-dang-ky-ho-kinh-doanh-ca-the.jpg";
import CacLoaiThue from "~/assets/images/cac-loai-thue-va-cach-tinh-thue-cho-ho-kinh-doanh-ca-the.jpg";
import GiaThe from "~/assets/images/soát xét 1.png";
import ThayDoiTen from "~/assets/images/dich-vu-thay-doi-ten-cong-ty.jpg";
import ThayDiaDiem from "~/assets/images/dich-vi-thay-doi-dia-chi-cong-ty.jpg";
import BoSung from "~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg";
import TangVon from "~/assets/images/dich-vu-lam-thu-tuc-tang-von-dieu-le-cong-ty.jpg";
import TangDong from "~/assets/images/lam-thu-tuc-tang-giam-co-dong-cong-ty.jpg";
import DoiDaiDien from "~/assets/images/dich-vu-doi-dai-dien-phap-luat-cong-ty.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-3 lg:grid lg:grid-cols-3 gap-x-6 mt-3">
      <div className="lg:col-span-3 lg:grid grid-cols-2 lg:gap-x-3 lg:mb-6">
        <Link to="/thay-doi-gpkd" className="relative">
          <img className="w-full" src={TDND1} alt="DichVuKeToan" />
          <div className="w-[370px] lg:h-full lg:w-full">
            {/* <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div> */}
            {/* <p className="absolute bottom-4 mx-2 h-[12%] font-medium text-white text-[17px]">
              Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng
            </p> */}
          </div>
        </Link>
        <div className="w-[100%] overflow-x-scroll lg:overflow-x-auto mt-2 lg:mt-0 mb-6 lg:mb-0">
          <div className="w-max flex gap-x-3 lg:flex-col lg:gap-y-3 lg:w-full lg:h-full">
            <div
              className="flex gap-x-3 lg:grid lg:grid-cols-2"
            >
              <Link
                to="/thanh-lap-cong-ty-nuoc-ngoai" className="relative w-[370px] lg:w-full lg:h-full h-[300px] lg:col-span-1">
                <img
                  className="object-fill"
                  src={Banner4}
                  alt="HoKinhDoanhCaThe"
                />
              </Link>
              <Link
                to="/thanh-lap-cong-ty-nuoc-ngoai" className="relative w-[370px] lg:w-full lg:h-full h-[300px] lg:col-span-1">
                <img
                  className="object-fill"
                  src={Banner2}
                  alt="DauTuNuocNgoai"
                />
              </Link>
            </div>
            <div
              className="flex gap-x-3 lg:grid lg:grid-cols-2"
            >
              <Link
                to="/thanh-lap-cong-ty-tnhh" className="relative w-[370px] lg:w-full lg:h-full h-[300px] lg:col-span-1">
                <img
                  className="object-fill"
                  src={Banner3}
                  alt="HoKinhDoanhCaThe"
                />
              </Link>
              <Link
                to="/thanh-lap-cong-ty-tnhh" className="relative w-[370px] lg:w-full lg:h-full h-[300px] lg:col-span-1">
                <img
                  className="object-fill"
                  src={Banner1}
                  alt="DauTuNuocNgoai"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <Section title="Chia sẻ kinh nghiệm">
          <div className="md:grid md:grid-cols-2 md:gap-x-6">
            <div>
              <ComponentImg
                img={ThuTucThanhLap}
                title="Hồ sơ, thủ tục và cách đăng ký thành lập công ty, doanh nghiệp"
                describe="16 năm thành lập hơn 70.000 doanh nghiệp. Alpha tự tin cung cấp dịch vụ thành lập công ty chỉ 250.000đ tại Hà Nội, Tphcm và các tỉnh lân cận"
              />
            </div>
            <div>
              <ItemSmall
                img={CachDatTen}
                title="Cách đặt tên công ty/doanh nghiệp - Hay Và Đúng (Có ví dụ)"
              />
              <ItemSmall
                img={ThueLaGi}
                title="Thuế môn bài là gì? Các bậc thuế & hạn nộp thuế môn bài 2023"
              />
              <ItemSmall
                img={VonDieuLe}
                title="Vốn điều lệ là gì? Có cần phải chứng minh vốn khi thành lập công ty"
              />
              <ItemSmall
                img={CongTy}
                title="Nên thành lập công ty trách nhiệm hữu hạn (TNHH) hay công ty cổ phần"
              />
            </div>
          </div>
        </Section>
        <Section title="Hồ sơ - thủ tục">
          <div>
            <div className="md:grid md:grid-cols-2 md:gap-x-6">
              <ComponentImg
                img={HinhDoanhNghiep}
                describe="Bài viết tập trung phân tích ưu nhược điểm của các loại hình doanh nghiệp tại Việt Nam gồm công ty TNHH 1 thành viên, công ty TNHH 2 thành viên trở lên, công ty cổ phần và doanh nghiệp tư nhân, công ty hợp danh. Nếu có dự định thành lập công ty bạn không thể bỏ qua bài viết này."
                title="Các loại hình Doanh Nghiệp và ưu nhược điểm - Ngắn, dễ hiểu"
              />
              <ComponentImg
                img={HayHoKinhDoanh}
                describe="Bạn nên thành lập công ty hay đăng ký hộ kinh doanh cá thể? Ưu điểm và nhược điểm của từng loại hình này như thế nào? Hiện nay, đăng ký theo loại hình nào thì phổ biến hơn? Đọc xong bài viết này bạn sẽ trả lời được những câu hỏi trên."
                title="Nên thành lập công ty hay hộ kinh doanh - Đọc xong bạn sẽ BIẾT"
              />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-6">
              <ItemSmall
                img={TraCuuMa}
                title="Tra cứu thông tin mã ngành nghề kinh doanh Việt Nam"
              />
              <ItemSmall
                img={ThueLaGis}
                title="Thuế là gì? Các khoản thuế phải nộp sau khi thành lập công ty"
              />
              <ItemSmall
                img={CacLoaiThue}
                title="Các loại thuế và cách tính thuế cho Hộ Kinh Doanh Cá Thể - Mới Nhất"
              />
              <ItemSmall
                img={ThuTucDangKy}
                title="Thủ tục đăng ký hộ kinh doanh cá thể và những lưu ý phải biết"
              />
            </div>
          </div>
        </Section>
      </div>
      <div className="lg:col-span-1">
        <Section title="Công ty TNHH">
          <div className="mb-8">
            <Link to="/thanh-lap-cong-ty-tnhh" className="relative">
              <img src={ThanhLapCongTY} alt="ThanhLapCongTY" />
              <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
              <p className="absolute bottom-4 left-4 font-medium text-white text-[17px]">
                Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
              </p>
            </Link>
            <div className="grid grid-cols-2 gap-x-4">
              <Link to="/thay-doi-gpkd" className="mt-4">
                <div>
                  <img src={TDND2} alt="ImageCompany-s" />
                </div>
                {/* <p className="mt-2 text-[16px] text-[#2a4e9a]">
                  Thành lập công ty TNHH 1 thành viên - 250.000đ (Không Phát
                  Sinh)
                </p> */}
              </Link>
              <Link to="/thay-doi-gpkd" className="mt-4">
                <div>
                  <img src={TDND3} alt="ImageCompany-s" />
                </div>
                {/* <p className="mt-2 text-[16px] text-[#2a4e9a]">
                  Dịch vụ thành lập Công ty TNHH 2 thành viên trở lên năm 2023
                </p> */}
              </Link>
            </div>
          </div>
        </Section>
        <Section title="Bài viết xem nhiều">
          <div className="md:grid md:grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-y-0">
            <ViewestItem
              title="Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ -【 250.000đ 】"
              img={ThanhLapCongTY}
              link="thanh-lap-cong-ty-co-phan"
            />
            <ViewestItem
              title="Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng"
              img={DichVuKeToanTronGoi}
              link="ke-toan-thue-tron-goi"
            />
            <ViewestItem
              title="Dịch vụ thành lập công ty hợp danh - Phí 250.000 đồng, 3 ngày"
              img={CongTyHopDanh}
              link="thanh-lap-cong-ty-tnhh"
            />
            <ViewestItem
              title="Dịch vụ báo cáo thuế, BCTC cuối năm - Chỉ từ 500.000đ/tháng"
              img={DichVuBaoCao}
              link="ke-toan-thue-tron-goi"
            />
            <ViewestItem
              title="Dịch vụ làm thủ tục giải thể công ty, doanh nghiệp - 1.500.000đ"
              img={GiaThe}
            />
          </div>
        </Section>
      </div>
      <div className="lg:col-span-3">
        <Section title="">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 pb-8">
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch vụ Thay Đổi Tên Công Ty - Chỉ 500.000đ (Không Phát Sinh Phí)"
              img={ThayDoiTen}
            />
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch vụ thay đổi địa chỉ công ty - Chỉ 500.000đ (Không Phát Sinh)"
              img={ThayDiaDiem}
            />
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch Vụ Bổ Sung Ngành Nghề Kinh Doanh 2023 - PHÍ CHỈ 500.000đ"
              img={BoSung}
            />
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch vụ làm thủ tục tăng vốn điều lệ công ty, doanh nghiệp - 500.000đ"
              img={TangVon}
            />
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch vụ làm thủ tục tăng giảm cổ đông công ty - Trọn gói 500.000đ"
              img={TangDong}
            />
            <GpkdItem
              link="/thay-doi-gpkd"
              title="Dịch Vụ Đổi Đại Diện Pháp Luật (giám đốc) Công Ty - Phí 500.000đ"
              img={DoiDaiDien}
            />
          </div>
        </Section>
      </div>
    </div>
  );
};
export const ItemSmall = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="py-4 lg:py-0 lg:mb-6 flex border-b md:border-none">
      <div className="md:w-[30%]">
        <img src={img} alt="ImageTest1" />
      </div>
      <div className="w-[60%] ml-auto">{title}</div>
    </div>
  );
};
interface PropsComponentImg {
  img: string;
  describe: string;
  title: string;
}
export const ComponentImg = ({ img, describe, title }: PropsComponentImg) => {
  return (
    <div>
      <div className="mb-2">
        <img src={img || ImageCompany} alt="ádasd" />
      </div>
      <h2 className="border-b py-4 text-[20px] text-[#2a4e9a] mb-2">{title}</h2>
      <p className="text-[#6c757d] mb-8">{describe}</p>
    </div>
  );
};
export default Home;

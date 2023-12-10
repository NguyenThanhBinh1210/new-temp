import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/Home";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Contact from "./pages/Contact";
import BaoCaoTaiChinh from "./pages/DichVuKeToanAll/BaoCaoTaiChinh";
import DichVuThayDoiTen from "./pages/DichVuThayDoiTen";
import QuyetToanThue from "./pages/DichVuKeToanAll/QuyetToanThue";
import ThanhLapTNHH from "./pages/DichVuThanhLap/ThanhLapTNHH";
import ThanhLapCoPhan from "./pages/DichVuThanhLap/ThanhLapCoPhan";
import RaSoatSoSach from "./pages/DichVuKeToanAll/RaSoatSoSach";
import HoanThue from "./pages/DichVuKeToanAll/HoanThue";
import KeToanThueTronGoi from "./pages/DichVuKeToanAll/KeToanTronGoi";
import DoiDiaChi from "./pages/DoiDiaChi/DoiDiaChi";
import ThanhLapCongTyNN from "./pages/DichVuThanhLap/ThanhLapCongTyNN/ThanhLapCongTyNN";
import HoKinhDoanhCaThe from "./pages/DichVuThanhLap/HoKinhDoanhCaThe";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    ),
  },
  {
    path: "/intro",
    element: (
      <HomeLayout>
        <Intro />
      </HomeLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <HomeLayout>
        <Contact />
      </HomeLayout>
    ),
  },
  {
    path: "/bao-cao-tai-chinh",
    element: (
      <HomeLayout>
        <BaoCaoTaiChinh />
      </HomeLayout>
    ),
  },
  {
    path: "/quyet-toan-thue",
    element: (
      <HomeLayout>
        <QuyetToanThue />
      </HomeLayout>
    ),
  },
  {
    path: "/soat-xet-so-sach",
    element: (
      <HomeLayout>
        <RaSoatSoSach />
      </HomeLayout>
    ),
  },
  {
    path: "/hoan-thue",
    element: (
      <HomeLayout>
        <HoanThue />
      </HomeLayout>
    ),
  },
  {
    path: "/thanh-lap-cong-ty-tnhh",
    element: (
      <HomeLayout>
        <ThanhLapTNHH />
      </HomeLayout>
    ),
  },
  {
    path: "/thanh-lap-cong-ty-nuoc-ngoai",
    element: (
      <HomeLayout>
        <ThanhLapCongTyNN />
      </HomeLayout>
    ),
  },
  {
    path: "/dang-ky-kinh-doanh-ho-ca-the",
    element: (
      <HomeLayout>
        <HoKinhDoanhCaThe />
      </HomeLayout>
    ),
  },
  {
    path: "/thanh-lap-cong-ty-co-phan",
    element: (
      <HomeLayout>
        <ThanhLapCoPhan />
      </HomeLayout>
    ),
  },
  {
    path: "/dich-vu-thay-doi-ten",
    element: (
      <HomeLayout>
        <DichVuThayDoiTen />
      </HomeLayout>
    ),
  },
  {
    path: "/thay-doi-gpkd",
    element: (
      <HomeLayout>
        <DoiDiaChi />
      </HomeLayout>
    ),
  },
  {
    path: "/ke-toan-thue-tron-goi",
    element: (
      <HomeLayout>
        <KeToanThueTronGoi />
      </HomeLayout>
    ),
  },
  {
    path: "*",
    element: <div>Loi</div>,
  },
]);
export default router;

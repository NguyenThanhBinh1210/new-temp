import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "~/contexts/app.context";
interface itemMenu {
  id: number | string;
  path: string;
  title: string;
  children?: itemMenu[];
}
const dataMenu = [
  {
    id: 1,
    path: "/intro",
    title: "Giới thiệu",
  },
  {
    id: 2,
    path: "",
    title: "Dịch vụ thành lập",
    children: [
      {
        id: 8,
        path: "/thanh-lap-cong-ty-co-phan",
        title: "Công ty cổ phần",
      },
      {
        id: 9,
        path: "/thanh-lap-cong-ty-tnhh",
        title: "Công ty TNHH",
      },
      {
        id: 21,
        path: "/thanh-lap-cong-ty-nuoc-ngoai",
        title: "Công ty vốn nước ngoài",
      },
      {
        id: 23,
        path: "/dang-ky-kinh-doanh-ho-ca-the",
        title: "Hộ kinh doanh cá thể",
      },
    ],
  },
  {
    id: 3,
    path: "",
    title: "Dịch vụ kế toán",
    children: [
      {
        id: 11,
        path: "/ke-toan-thue-tron-goi",
        title: "Kế toán thuế trọn gói",
      },
      {
        id: 12,
        path: "/bao-cao-tai-chinh",
        title: "Báo cáo tài chính",
      },
      {
        id: 13,
        path: "/quyet-toan-thue",
        title: "quyết toán thuế",
      },
      {
        id: 14,
        path: "/soat-xet-so-sach",
        title: "soát xét sổ sách",
      },
      {
        id: 15,
        path: "/hoan-thue",
        title: "Hoàn thuế gtgt",
      },
    ],
  },
  {
    id: 4,
    path: "/thay-doi-gpkd",
    title: "Thay đổi gpkd",
    // children: [
    // {
    //   id: 16,
    //   path: '/dich-vu-thay-doi-ten',
    //   title: 'Thay đổi tên'
    // },
    // {
    //   id: 17,
    //   path: '/thay-doi-dia-chi',
    //   title: 'Đổi địa chỉ'
    // },
    // {
    //   id: 18,
    //   path: '',
    //   title: 'Thêm ngành nghề'
    // },
    // {
    //   id: 19,
    //   path: '',
    //   title: 'Tăng vốn điều lệ'
    // },
    // {
    //   id: 20,
    //   path: '',
    //   title: 'thêm cổ đông'
    // },
    // {
    //   id: 21,
    //   path: '',
    //   title: 'Đổi đại diện pháp luật'
    // },
    // {
    //   id: 23,
    //   path: '',
    //   title: 'Tạm ngừng hoạt động'
    // },
    // {
    //   id: 22,
    //   path: '',
    //   title: 'Giải thể'
    // },
    // ]
  },
  {
    id: 5,
    path: "/contact",
    title: "Liên hệ",
  },
];
const Menu = () => {
  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 && setMenu(false);
      window.innerWidth >= 1024 && setMenu(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { menu, setMenu } = React.useContext(AppContext);
  return (
    <div
      className={`${!menu && "h-0 overflow-hidden"
        } transition-all flex flex-col lg:flex-row px-3`}
    >
      {dataMenu.map((item: itemMenu) => (
        <Link
          to={item.path}
          key={item.id}
          className=" text-[16px] group flex flex-col lg:px-4 cursor-pointer relative uppercase font-medium"
        >
          <div className="py-2 flex items-center gap-x-1">
            {item.title}
            {item?.children && (
              <div className="w-[8px] h-[6px]">
                <img
                  src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-down-arrows-those-icons-fill-those-icons-6.png"
                  alt="external-down-arrows-those-icons-fill-those-icons-6"
                />
              </div>
            )}
          </div>

          {item?.children && (
            <div className=" group-hover:flex uppercase z-10 lg:absolute top-8 lg:border lg:w-max hidden flex-col bg-white mt-2">
              {item.children.map((itemMenu: itemMenu) => (
                <Link
                  key={itemMenu.id}
                  to={itemMenu.path}
                  className="p-2 hover:bg-blue-300 uppercase hover:text-white transition-all lg:font-normal"
                >
                  {itemMenu.title}
                </Link>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Menu;

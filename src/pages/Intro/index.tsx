// import Slider from 'react-slick'
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import ImageCompany from '~/assets/images/thanh-lap-cong-ty.jpg'
// import DichVuKeToanTronGoi from '~/assets/images/Dich-vu-ke-toan-tron-goi.jpg'
// import DichVuDangKyThuongHieu from '~/assets/images/dich-vu-dang-ky-thuong-hieu(1).jpg'
// import DangKykinhDoanh from '~/assets/images/dang-ky-kinh-doanh-ho-ca-the.jpg'
import Comment from "~/components/Comment";
import AllComent from "~/components/Comment/comment";
const allReviews = [
  {
    name: "Quốc Anh Nguyễn",
    date: "15-03-2023 lúc 01:04",
    rating: 5,
    content: "good",
    usefulCount: 26,
  },
  {
    name: "trang",
    date: "12-05-2022 lúc 17:16",
    rating: 4,
    content: "dịch vụ tốt",
    usefulCount: 17,
  },
  {
    name: "Huyình Bắc",
    date: "01-12-2021 lúc 21:44",
    rating: 5,
    content: "Ngày mình hợp tác với Alpha có 3 nhân viên...",
    usefulCount: 37,
  },
  {
    name: "Nguyen Bich Ngoc",
    date: "19-11-2021 lúc 23:21",
    rating: 5,
    content:
      "Sử dụng dịch vụ của Alpha 7 năm rồi và rất hài lòng, nhưng năm vừa rồi là năm đầu tiên Alpha không tặng quà trung thu cho mình, làm mình cứ chờ, bớt hài lòng rồi :)",
    usefulCount: 19,
  },
  {
    name: "Ok",
    date: "10-06-2021 lúc 15:42",
    rating: 5,
    content: "Quá tuyệt vời",
    usefulCount: 1,
  },
  {
    name: "Nguyễn Xuân Tùng",
    date: "08-03-2021 lúc 09:46",
    rating: 5,
    content: "Tốt",
    usefulCount: 0,
  },
  {
    name: "Hồ Xuân Tùng",
    date: "04-12-2020 lúc 21:23",
    rating: 5,
    content:
      "3 năm đồng hành cùng Alpha chưa bao giờ phải phàn nàn, công ty từ 3 nhân viên giờ giấn trăm nhân viên, thuậ sức thuê kế toán riêng, riêng mảng thuế vẫn tin tưởng giao phó hoàn toàn cho Alpha. cảm ơn các bạn, nhất là bạn Hương kế toán trưởng và bạn Xuân kế toán phụ trách công ty mình.",
    usefulCount: 1,
  },
  {
    name: "Khổng Thị Minh Giang",
    date: "13-09-2018 lúc 18:53",
    rating: 5,
    content:
      "Alpha đồng hành cùng công ty Kỳ Sóng Rồng Việt từ những ngày bắt đầu 2008. 10 năm qua vẫn luôn đặt niềm tin vào các bạn, sự tư vấn kịp thời, chính xác của các bạn góp phần không nhỏ góng sự thành công của Rồng Việt ngày hôm nay. Sẽ tiếp tục tin tưởng các dịch vụ của các bạn, cảm ơn rất nhiều.",
    usefulCount: 1,
  },
];

// const posts = [
//   {
//     img: ImageCompany,
//     link: '/thanh-lap-cong-ty',
//     text: 'Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ -【 250.000đ 】'
//   },
//   {
//     img: DichVuKeToanTronGoi,
//     link: '/dich-vu-ke-toan-tron-goi',
//     text: 'Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng'
//   },
//   {
//     img: DichVuDangKyThuongHieu,
//     link: '/dich-vu-dang-ky-thuong-hieu',
//     text: 'Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền 1.000.000đ'
//   },
//   {
//     img: DangKykinhDoanh,
//     link: '/dang-ky-kinh-doanh-ho-ca-the',
//     text: 'Dịch vụ đăng ký giấy phép Hộ Kinh Doanh Cá Thể - 1.500.000đ'
//   }
// ]
const ReviewComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadMoreReviews = () => {
    if (currentIndex + 3 < allReviews.length) {
      setCurrentIndex((prevIndex) => prevIndex + 3);
    }
  };

  const loadPreviousReviews = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 3);
    }
  };

  const currentReviews = allReviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="rounded-lg p-6 border border-[#e5451b]">
      <div className="grid grid-cols-10 mb-5">
        <h4 className="text-[24px] text-center text-[#2a4e9a] font-semibold col-span-6">
          Đánh giá chất lượng dịch vụ, bạn nhé!
        </h4>
        <div className="col-span-4 flex flex-col items-center justify-center">
          <div className="text-yellow-400 text-[36px] font-semibold">
            5.0 <span className="ml-[1px]">★</span>
          </div>
          <div className="">30 đánh giá</div>
        </div>
      </div>
      <div className="bg-[#e5451b]">
        <p className="text-white font-semibold text-[20px] py-2 px-2 flex gap-x-2">
          Chọn đánh giá{" "}
          <span className="cursor-pointer flex gap-x-1">
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
          </span>
        </p>
      </div>

      {currentReviews.map((review, index) => (
        <div key={index} className="mb-4 mt-3">
          <div className="flex items-center mb-2 text-md font-semibold">
            <strong className="text-[#428bca]">{review.name}</strong>
            <span className="ml-2 text-gray-500">{review.date}</span>
          </div>
          <div className="flex items-center mb-2">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i} className="text-yellow-500">
                ★
              </span>
            ))}
          </div>
          <p>{review.content}</p>
          <div className="flex items-center mt-2">
            <span className="mr-4">{review.usefulCount} Hữu ích</span>
            <span>Thảo luận</span>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={loadPreviousReviews}
          disabled={currentIndex === 0}
          className="text-blue-500 hover:underline"
        >
          Quay lại
        </button>
        <button
          onClick={loadMoreReviews}
          disabled={currentIndex + 3 >= allReviews.length}
          className="text-blue-500 hover:underline"
        >
          Xem tiếp
        </button>
      </div>
    </div>
  );
};
// const ImageCarousel = () => {
//   const images = ['1-02', '2-02', '3-02', '5-02', '6-02', '7-02']

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true,
//     autoplaySpeed: 9000,
//     responsive: [
//       {
//         breakpoint: 980, // breakpoint from width 768 up
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }

//   return (
//     <div className='row gutter my-3 '>
//       <div className='col-md-12 col-lg-12'>
//         <div className="wrap-slide bg-[url('https://ketoanAlpha.vn/uploads/images/post/about-background-01.png')]">
//           <Slider {...settings}>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   className='w-100 p-5'
//                   src={`https://ketoanAlpha.vn/uploads/images/post/${image}.jpg`}
//                   alt={image}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// }

const Intro = () => {
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="hidden md:block lg:block">
          {/* <img
            alt=''
            src={`https://ketoanAlpha.vn/uploads/images/icons/Alpha-hon-ca-su-mong-doi.jpg`}
            className='w-full'
          /> */}
        </div>

        <div className="flex items-center justify-center my-4">
          <div className="border-t border-red-500 w-4/12"></div>
          <h1 className="mx-4 text-5xl font-bold text-center">VỀ CHÚNG TÔI</h1>
          <div className="border-t border-red-500 w-4/12"></div>
        </div>
      </div>
      <div className="flex flex-col md:px-0 lg:px-0">
        <p className="text-justify italic mb-4">
          “Trong xu thế nền kinh tế ngày càng hội nhập và phát triển, nhu cầu
          đầu tư vào tất cả các lĩnh vực kinh doanh ngày càng cao, nhiều công ty
          gặp khó khăn trong vấn đề pháp lý và kế toán khi vận hành. Liệu rằng
          các doanh nghiệp có cân nhắc lựa chọn sử dụng dịch vụ pháp lý và kế
          toán, ngay từ những ngày đầu và sau đó?”
        </p>
        <p className="text-justify italic mb-4">
          “Đối với doanh nghiệp nước ngoài việc thành lập công ty tại Việt Nam
          nên chuẩn bị hồ sơ, thủ tục và các bước thực hiện như thế nào là hợp
          pháp và tiết kiệm?”
        </p>
        <p className="text-justify italic mb-4">
          “Vì sao các doanh nghiệp không lựa chọn giải pháp tối ưu hơn về các
          vấn đề liên quan đến lĩnh vực Kế toán và Pháp lý?”
        </p>
        <p className="text-justify italic mb-4">
          “Các doanh nghiệp đã lựa chọn được đơn vị đồng hành cùng họ trong các
          giai đoạn hoạt động phù hợp?”
        </p>
        <p className="text-justify mb-4">
          Thực tế, không phải một, mà là một vài vấn đề đặt ra như bạn thấy. Và
          những vấn đề này, chính là khởi nguồn động lực cho chúng tôi quyết
          định thành lập công ty Kế toán Alpha, với mong muốn tạo ra công cụ phù
          hợp, chuyên nghiệp, tối ưu về hai mảng Kế toán và Pháp lý, giúp doanh
          nghiệp tiết kiệm thời gian, chi phí, nhân lực và tập trung hơn vào
          phát triển kinh doanh.
        </p>

        <p className="text-justify mb-4">
          Ngày nay, từ một công ty trẻ, quyết tâm và đầy tham vọng, Kế toán
          Alpha đã có mặt tại 5 tỉnh, thành phố của Việt Nam. Mỗi năm, chúng tôi
          hỗ trợ hơn 20.000 doanh nghiệp vừa và nhỏ hoạt động hiệu quả, đúng
          pháp luật, chuyên sâu về các gói dịch vụ: tư vấn thủ tục pháp lý về
          thành lập doanh nghiệp, thay đổi giấy phép kinh doanh, kê khai, quyết
          toán thuế… và trở thành đơn vị đứng đầu trong lĩnh vực Kế toán và Pháp
          lý tại HN, TP. HCM.
        </p>
        <p className="text-justify mb-4">
          Trong nhiều năm đồng hành phát triển với các doanh nghiệp trong và
          ngoài nước, Alpha luôn cố gắng mang lại cho khách hàng trải nghiệm An
          Tâm Tuyệt Đối. Không chỉ vậy, chúng tôi tiếp tục hoàn thiện để trở
          thành "phiên bản tốt nhất của chính mình" với: giải pháp tối ưu, tiết
          kiệm chi phí, minh bạch thông tin, nghiệp vụ chính xác.
        </p>
        <p className="text-justify">
          Tại Alpha, hoàn thành nhiệm vụ và mang đến cho khách hàng trải nghiệm
          Hơn Cả Sự Mong Đợi là trách nhiệm bắt buộc đối với tất cả cán bộ nhân
          viên.
        </p>
      </div>
      <picture className=" pt-5">
        <source
          media="(max-width: 768px)"
          srcSet="https://ketoanAlpha.vn/uploads/images/post/about-background-mobile-2.jpg"
        />
        {/* <img
          src='https://ketoanAlpha.vn/uploads/images/post/about-background-02.jpg'
          alt='Description of Image'
          className='w-full object-cover'
        /> */}
      </picture>
      <div className="my-4">
        <div className="border-b-2 mb-4">
          <h5 className="border-l-3 border-secondary font-bold pl-2 text-primary">
            TOP ĐÁNH GIÁ
          </h5>
        </div>
      </div>
      <ReviewComponent />
      <Comment apiEndpoint="https://api.ketoanalpha.pro.vn:444/api/v1/comment/create" />
      <AllComent />
    </div>
  );
};

export default Intro;

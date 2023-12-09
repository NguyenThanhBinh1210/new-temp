import CopyRightIcon from "~/assets/images/_dmca_premi_badge_4.png";
const Copyright = () => {
  return (
    <div className="bg-[#343a40] pl-3 text-white lg:flex gap-x-2 py-2">
      <div className="lg:w-[1250px] mx-auto lg:flex justify-around lg:gap-x-2">
        <div>
          <div className="font-semibold text-[18px]">Thông tin liên hệ:</div>
          <div>Địa chỉ : Tầng 3. Số 4 nguyễn đình chiểu. Dakao quận 1.</div>
          <div>Hotline tư vấn: 0971.559.971 </div>
        </div>
        <div>
          <p className="mb-2 lg:mb-2">
            © 2007 Công ty Kế Toán Alpha giữ bản quyền nội dung trên website
            này.
          </p>
          <p className="w-max">
            <img
              className="w-[135px] h-[28px]"
              src={CopyRightIcon}
              alt="CopyRightIcon"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

import MienBac from "~/assets/images/call-KT-MB.png";
import MienTrung from "~/assets/images/call-KT-MT.png";
import MienMan from "~/assets/images/call-KT-MN.png";
const CallNow = () => {
  return (
    <>
      <p className="text-center">
        <span className="text-[#2a4e9a]">
          <span className="text-[24px]">
            <strong>GỌI NGAY</strong>
          </span>
        </span>
      </p>
      <div className="animate w-max flex flex-col mx-auto md:gap-x-[60px] gap-y-2 mt-4 md:flex-row">
        <img
          className="w-[348px] h-[118px] md:w-[160px] md:h-[54.5px]"
          src={MienBac}
          alt="MienBac"
        />
        <img
          className="w-[348px] h-[118px] md:w-[160px] md:h-[54.5px]"
          src={MienTrung}
          alt="MienBac"
        />
        <img
          className="w-[348px] h-[118px] md:w-[160px] md:h-[54.5px]"
          src={MienMan}
          alt="MienBac"
        />
      </div>
    </>
  );
};

export default CallNow;

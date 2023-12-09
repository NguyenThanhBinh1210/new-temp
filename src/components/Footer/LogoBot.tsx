import logoBot from "~/assets/images/logo-bot.jpg";
const LogoBot = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[40%] h-[2px] bg-orange-600"></div>
        <img className="w-[20%] mx-auto" src={logoBot} alt="logoBot" />
        <div className="w-[40%] h-[2px] bg-orange-600"></div>
      </div>
      {/* <h1 className='text-[#2a4e9a] font-semibold text-[30.77px] text-center py-6'>CÔNG TY KẾ TOÁN ALPHA</h1> */}
    </div>
  );
};

export default LogoBot;

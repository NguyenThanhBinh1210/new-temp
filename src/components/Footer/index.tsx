import Copyright from "./Copyright";
import LogoBot from "./LogoBot";
// import phone from '~/assets/images/icons8-phonecall-50.png'
// import mobilePhone from '~/assets/images//icons8-phone-50.png'
// import address from '~/assets/images/icons8-address-50.png'
// import send from '~/assets/images/icons8-send-30.png'
// const dataAddress = [
//   {
//     title: 'Trụ sở TP.hcm',
//     address: '202 Lê Lai, Phường Bến Thành, Quận 1',
//     mail: 'cskh@ketoanAlpha.vn',
//     phone: '(028) 62.704.111',
//     mobilePhone: '0971 559 971'
//   },
//   {
//     title: 'Trụ sở TP.hcm',
//     address: '202 Lê Lai, Phường Bến Thành, Quận 1',
//     mail: 'cskh@ketoanAlpha.vn',
//     phone: '(028) 62.704.111',
//     mobilePhone: '0971 559 971'
//   },
//   {
//     title: 'Trụ sở TP.hcm',
//     address: '202 Lê Lai, Phường Bến Thành, Quận 1',
//     mail: 'cskh@ketoanAlpha.vn',
//     phone: '(028) 62.704.111',
//     mobilePhone: '0971 559 971'
//   },
//   {
//     title: 'Trụ sở TP.hcm',
//     address: '202 Lê Lai, Phường Bến Thành, Quận 1',
//     mail: 'cskh@ketoanAlpha.vn',
//     phone: '(028) 62.704.111',
//     mobilePhone: '0971 559 971'
//   },
//   {
//     title: 'Trụ sở TP.hcm',
//     address: '202 Lê Lai, Phường Bến Thành, Quận 1',
//     mail: 'cskh@ketoanAlpha.vn',
//     phone: '(028) 62.704.111',
//     mobilePhone: '0971 559 971'
//   }
// ]
const Footer = () => {
  return (
    <div>
      <div className="max-w-[1250px] mx-auto px-3">
        <LogoBot></LogoBot>
        {/* <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5'>
          {dataAddress?.map((item, index) => (
            <div key={index}>
              <div className='mb-2'>
                <p className='bg-[#2a4e9a] text-center uppercase font-semibold py-2 text-white rounded-tr-2xl rounded-bl-2xl'>
                  {item.title}
                </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='w-4 h-4'>
                  <img src={address} alt='mobilePhone' />
                </div>
                {item.address}
              </div>
              <div className='mb-4 flex items-center gap-x-2'>
                <div className='w-4 h-4'>
                  <img src={send} alt='mobilePhone' />
                </div>
                {item.mail}
              </div>
              <div className=' text-red-400 flex items-center gap-x-2 hover:text-blue-500 cursor-pointer'>
                <div className='w-4 h-4'>
                  <img src={mobilePhone} alt='mobilePhone' />
                </div>
                {item.mobilePhone}
              </div>
              <div className='mb-4 text-red-400 flex items-center gap-x-2 hover:text-blue-500 cursor-pointer'>
                <div className='w-4 h-4'>
                  <img src={phone} alt='phone' />
                </div>
                {item.phone}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Copyright></Copyright>
    </div>
  );
};

export default Footer;

import React from 'react';

const IpInfo = ({ ipAddress }) => {
  return (
    <div className='flex items-center text-center md:text-left z-2'>
      <div className='flex flex-col sm:flex-row w-7/8 px-14 md:p-9 sm:mt-32 bg-white mt-5 rounded-xl p-3 z-20'>
        <div className='ip-address p-2'>
          <h3 className='text-sm'>IP ADDRESS</h3>
          <p className='font-bold'>{ipAddress.ip}</p>
        </div>
        <div className='location p-2'>
          <h3 className='text-sm'>LOCATION</h3>
          <p className='font-bold'>
            {ipAddress.city}, {ipAddress.state_prov} {ipAddress.zipcode}
          </p>
        </div>
        <div className='timezone p-2'>
          <h3 className='text-sm'>TIMEZONE</h3>
                  {ipAddress ? <p className='font-bold'>{ ipAddress.time_zone.name}</p> : null}
          {/* <p className='font-bold'></p> */}
        </div>
        <div className='isp p-2'>
          <h3 className='text-sm'>ISP</h3>
          <p className='font-bold'>{ipAddress.isp}</p>
        </div>
      </div>
    </div>
  );
  // return (
  //     <div className='flex items-center text-center md:text-left z-2'>
  //         <div className='flex flex-col sm:flex-row w-7/8 px-14 md:p-9 sm:mt-32 bg-white mt-5 rounded-xl p-3 z-20'>
  //             <div className='ip-address p-2'>
  //                 <h3 className='text-sm'>IP ADDRESS</h3>
  //                 <p className='font-bold'>{ipAddress.ip}</p>
  //             </div>
  //             <div className='location p-2'>
  //                 <h3 className='text-sm'>LOCATION</h3>
  //                 <p className='font-bold'>
  //                     {ipAddress.city}, {ipAddress.state_prov} {ipAddress.zipcode}
  //                 </p>
  //             </div>
  //             <div className='timezone p-2'>
  //                 <h3 className='text-sm'>TIMEZONE</h3>
  //                 <p className='font-bold'>{ipAddress.time_zone.name}</p>
  //             </div>
  //             <div className='isp p-2'>
  //                 <h3 className='text-sm'>ISP</h3>
  //                 <p className='font-bold'>{ipAddress.isp}</p>
  //             </div>
  //         </div>
  //     </div>
  // );
};

export default IpInfo;

import React from 'react';
import { ResponseType } from './map/ClientComponent';

const Info = ({ ipInfo }: { ipInfo: ResponseType | null }) => {
  {
    return ipInfo ? (
      <div className='bg-white rounded-xl h-full grid grid-cols-4 flex-wrap divide-x items-center text-left'>
        <div className='px-4'>
          <h3 className='text-xs pb-1 text-gray-600'>IP ADDRESS</h3>
          <p className='font-bold'>{ipInfo.ip}</p>
        </div>
        <div className='px-4'>
          <h3 className='text-xs pb-1 text-gray-600'>LOCATION</h3>
          <p className='font-bold'>{ipInfo.location.city} {ipInfo.location.region} {ipInfo.location.postalCode}</p>
        </div>
        <div className='px-4'>
          <h3 className='text-xs pb-1 text-gray-600'>TIMEZONE</h3>
          <p className='font-bold'>UTC{ipInfo.location.timezone}</p>
        </div>
        <div className='px-4'>
          <h3 className='text-xs pb-1 text-gray-600'>ISP</h3>
          <p className='font-bold'>{ipInfo.isp}</p>
        </div>
      </div>
    ) : (
      <div className='bg-white rounded-xl h-full text-center'>No IP Address Found</div>
    );
  }
};

export default Info;

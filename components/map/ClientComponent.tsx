'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Input from '@/components/Input';
import Info from '@/components/Info';
import Map from '@/components/map';
import axios from 'axios';

export type ResponseIpType = {
  ip: string;
  isp: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
};

const ClientComponent = () => {
  const [error, setError] = useState(false);
  const [response, setResponse] = useState<ResponseIpType | null>(null);

  const getIpAddress = async (searchIpQuery: string) => {
    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${searchIpQuery}&domain=${searchIpQuery}`
      );
      setResponse(res.data);
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    getIpAddress('');
  }, []);

  return (
    <div className='h-full w-full flex'>
      <div className='relative h-60 z-10'>
        <div className='absolute inset-0 z-0 flex justify-center w-screen'>
          <Image
            src='/assets/images/pattern-bg.png'
            alt='background image'
            fill
          />
          <div className='relative md:w-2/6 w-10/12 flex flex-col items-center mt-14 h-full'>
            <Input getIpAddress={getIpAddress} />
          </div>
          {/* -bottom-14 */}
          <div className='sm:h-28 z-50 absolute mx-auto -bottom-40 sm:-bottom-14 h-60 sm:w-4/6 px-3'>
            <Info ipInfo={response} />
          </div>
        </div>
      </div>
      <div className='flex-grow h-screen'>
        <Map lat={response?.location.lat} lng={response?.location.lng} />
      </div>
    </div>
  );
};

export default ClientComponent;

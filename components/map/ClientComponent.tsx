'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Input from '@/components/Input';
import Info from '@/components/Info';
import Map from '@/components/map';
import axios from 'axios';

export type ResponseType = {
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
  const [response, setResponse] = useState<ResponseType | null>(null);

  const getIpAddress = async () => {
    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setResponse(res.data);
    } catch (err: any) {
      setError(err);
    }
  };

    useEffect(() => {
      getIpAddress();
    }, []);
  
  return (
    <>
      <div className='relative h-30v z-10'>
        <div className='absolute inset-0 z-0 flex items-center justify-center'>
          <Image
            src='/assets/images/pattern-bg.png'
            alt='background image'
            fill
          />
          <div className='relative w-2/6 flex flex-col items-center pt-4 h-full'>
            <Input />
          </div>
          <div className='border rounded-xl h-28 z-50 absolute mx-auto -bottom-14 w-4/6'>
            <Info ipInfo={response} />
          </div>
        </div>
      </div>
      <div className='h-70v w-full'>
        <Map lat={response?.location.lat} lng={response?.location.lng} />
      </div>
    </>
  );
};

export default ClientComponent;

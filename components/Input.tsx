import React from 'react';
import Image from 'next/image';

const Input = ({
  getIpAddress,
}: {
  getIpAddress: (searchIpQuery: string) => Promise<void>;
}) => {
  const [searchIpQuery, setSearchIpQuery] = React.useState('');
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-2xl text-white pb-3'>IP Address Tracker</h1>
      <div className='w-72 md:w-96 bg-white px-2 relative rounded-xl'>
        <input
          type='text'
          value={searchIpQuery}
          onChange={(e) => setSearchIpQuery(e.target.value)}
          className='p-2 outline-none'
          placeholder='Search for any IP address or domain'
        />
        <button
          className='bg-black p-4 rounded-r-xl absolute right-0'
          onClick={(e) => {
            e.preventDefault();
            getIpAddress(searchIpQuery);
            setSearchIpQuery('');
          }}
        >
          <Image
            src={'/assets/images/icon-arrow.svg'}
            alt='arrow'
            height={8}
            width={8}
          />
        </button>
        {/* {Ip ? <IpInfo ipAddress={Ip} /> : <p>Oh no something went wrong! <br></br>{ error}</p>} */}
      </div>
    </div>
  );
};

export default Input;

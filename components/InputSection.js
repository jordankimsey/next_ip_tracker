
import React, {useState} from 'react';
import mainImg from '../assets/images/pattern-bg.png';
import arrow from '../assets/images/icon-arrow.svg';
import IpInfo from '../components/IpInfo'


const InputSection = ({ Ip, error, childToParent }) => {
  
  const [search, setSearch] = useState('')
  
  //child to parent needs to pass value 
  const sendToParent = () => {
    childToParent(search)
  }
  
  const handleSearchQuery = (e) => {
    setSearch(e)
  }


    return (
      <div>
        <div
          className=''
          style={{
            backgroundImage: 'url(' + mainImg + ')',
            height: '40vh',
            width: '100vw',
          }}
        >
          <div className='z-10 flex flex-col items-center'>
            <h1 className='text-xl text-white p-6'>IP Address Tracker</h1>
            <div className='w-80 px-3 relative'>
              <input type='text' onChange={e => handleSearchQuery(e.target.value)} className='p-2 w-full rounded-xl z-2' />
              <button onClick={sendToParent} className='bg-black p-4 rounded-r-xl  absolute right-3'>
                <img src={arrow} alt='arrow' />
              </button>
            </div>
            {Ip ? <IpInfo ipAddress={Ip} /> : <p>Oh no something went wrong! <br></br>{ error}</p>}
          </div>
        </div>
      </div>
    );
};

export default InputSection;

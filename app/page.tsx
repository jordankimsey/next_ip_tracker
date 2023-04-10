import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-red-200">
       <p>Hello World</p>
      </div>
    </main>
  )
}


//old code

// import React, { useState, useEffect } from 'react';
// import InputSection from './components/InputSection';
// import './App.css';
// import IpMap from './components/IpMap';
// import axios from 'axios';

// function App() {
//   const apiKey = '781abd3153454ae892b7609492aa6035';

//   const [searchIpQuery, setSearchIpQuery] = useState('');
//   const [ip, setIp] = useState('');
//   const [error, setError] = useState(null);

//   const childToParent = (e) => {
//     setSearchIpQuery(e);
//   };

//   const getApi = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
//       );
//       console.log(res.data);
//       setIp(res.data);
//       setError(null);
//     } catch (err) {
//       console.log(err);
//       setError(err.message);
//     }
//   };

//   const searchIp = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${searchIpQuery}`
//       );
//       setIp(res.data);
//       setError(null);
//     } catch (err) {
//       console.log(err);
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     getApi();
//   }, []);

//   return (
//     <div className='App'>
//       <InputSection Ip={ip} error={error} childToParent={childToParent} />
//       <IpMap location={ip} />
//     </div>
//   );
// }

// export default App;
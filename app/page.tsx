import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import ClientComponent from '@/components/map/ClientComponent';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <ClientComponent/>
    </main>
  );
}


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

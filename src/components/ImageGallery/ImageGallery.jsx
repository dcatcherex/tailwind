import  { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';

const ImageGallery = () => {
  const pictures = [
    "https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/d8qgtvjzcrx5h4z0ct2z",
    "https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/fbjyiyft0jmb8mgsxex2","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/gtcyksin6whrhs9hu2p3","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/t0spc5toid0roxdfnxkm","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/cnfuzh9stoxvkdgpxmbl","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/rjz7jvvlfuo5ges6hsyq","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ed0r85myzbwcuzgjzgdr","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/wqtrwkdlpdatkvaioqfj","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/qjnk2pnnbitfwurszezl","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/jzdvjzelpv0bln4gtzxo","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/sxs94uv2a3ktcgnosabo","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/phbh4sxdcgwtxmeevvib","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hafyhtblolxjyfxwkowr","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/yvraw0wcu5vseiw3zxil","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/e3qgyylf6nsqsvsewlee","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/j42y6oic4fi3amfcknoy","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/kq7w7fkngucb2c9ugd81","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/oika2x6oskhjprxdgtai","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/h31xze3swqijq5werd9n","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hxcbsvothbd2ep7lf9pb","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/f3ib8nvriyeits5kkqu6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/lwudmkj5wc3uzqfnstnp","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/dnb8lmjyamfcspwyyolp","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/awhrh595cdql8ztj6vi0","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ja07ryizzioxr9nhehae","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/doffhvactxxkowhqt1rk","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/elczfzjxp4kgsokppcaj","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/xrg0unxywhhr2pwpuqrf","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/dlar04h5bu4ux0fzgmhx","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hdee1pnhjvgoo7bnso8g","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/g84otb2qzmlbpdmkqz9k","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/qwyzqvf1lacz0bbcfyu5","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/nnyowhqj1wlkbyjjfiow","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/tnwmnagecsetocqgz2d4","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/yybkyvz34qhjje4spigq","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/odartmfpbiwbrufbdc3b","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ipasdmxwpzktz2ib8ewf","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/otstjz3cqu4kynzbjzf6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/iuekcsge7fr9gmeuweg6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/x8trcv5pl5llxeffgku7","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/zoiuv8orgdltmcbmv9r5","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/pa8hnmp8b6cxjlbeznde","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/f6muap6hdkkpqt0f9w4z","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ns3oruy0ryfwpdca4hph"
    // Add more picture URLs here
  ];

  const [currentPicture, setCurrentPicture] = useState('');

  const getRandomPicture = () => {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    setCurrentPicture(pictures[randomIndex]);
  };

  const clearPicture = () => {
    setCurrentPicture('');
  };

  return (
    <div>
      <button onClick={getRandomPicture} className='w-12 text-white opacity-30 hover:opacity-100 hover:text-dimviolet'><PhotoIcon /></button>
      {currentPicture && (
        <>
          <img src={currentPicture} alt="Random Picture" className='rounded-lg ' />
          <button onClick={clearPicture}><XCircleIcon className='w-8 h-8 text-white mt-2 hover:opacity-100 hover:text-dimviolet' /></button>
        </>
      )}
    </div>
    // <div>
    //   <button onClick={getRandomPicture} className='w-12 text-white opacity-30 hover:opacity-100 hover:text-dimviolet'><PhotoIcon /></button>
    //   {currentPicture && <img src={currentPicture} alt="Random Picture" className='rounded-lg w-full h-60 object-cover' />}
    // </div>
  );
};

export default ImageGallery;
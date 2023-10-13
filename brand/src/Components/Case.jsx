import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import CaseCard from './CaseCard'
// import { cases } from '../constants'


const Case = () => {
  const endPointUrl = 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/'
  const [data, setData] = useState([]);
  // useEffect is used to fetch the data, we indicated [] so that we run the fetch only once;
  useEffect(() => {
    fetch(endPointUrl)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => {
      console.error('Error', error);
    });
  }, []);

  return (
    <div className='mb-20'>
      <Heading headingText={'Case Studies'} />
      <div className='grid grid-cols-3 space-x-5 mt-20 snap-y'> {/** I implemented a grid structure to place the images */}
      {
        data.map((item, index) => (
          <CaseCard key={index} url={item.imageUrl} title={item.title} body={item.description}/> // this loops through the list and creates the various case component using the CaseCard component
        ))
      }
      </div>
    </div>
  )
}

export default Case

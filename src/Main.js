import React from 'react'
import ProfileCard from './ProfileCard';

function Main({data, setData}) {
  return (
    <div className="main">
{data?.map((value) => (
    <ProfileCard username={value.username} name={value.name} phone={value.phone} email={value.email} website={value.website} setData={setData} id={value.id} data={data}/>
     ))}
    </div>
   
  )
}

export default Main
import React, { useEffect, useState } from 'react'

import axios from './ttb_apis/ttb-2210900004'
import TtbListTableName from './ttb_components/TtbListTableName';
import TtbFormTableName from './ttb_components/TtbFormTableName';


export default function TtbApp() {
  const[TtbListTableName,setTtbListTableName]=useState([])
  const TtbGetTableName = async ()=>{
    let TtbResp= await axios.get("TtbTableName");
    console.log("App list:",TtbResp.data);
    setTtbListTableName(TtbResp.data);
  }
  useEffect(()=>{
    TtbGetTableName();
  },[])

  const TtbHanldeDelete=async (TtbId)=>{
    let TtbRes= await axios.delete("TtbTableName/"+TtbId);
    TtbGetTableName();
  }
  const TtbObjTableName={
    "TtbTbName": "Pham Cong Hieu",
    "TtbTbEmail": "phamconghieu@gmail.com",
    "TtbTbphone": "512512344",
    "TtbTbStatus": true,
    "TtbId": "2210900101"
  };
  const [TtbTableName,setTtbTableName]=useState(TtbObjTableName);
 const TtbHandleAdd =()=>{
   TtbGetTableName();
 }
// const TtbHandelEdit =()=>{
//   TtbGetTableName();
// }
const TtbHandleEdit=(TtbObjEditTableName)=>{
  setTtbTableName(TtbObjEditTableName);
}
  return (
    <div className='container border my-3'>
      <h1>bài đánh giá hết học phần - Trần Trọng Bình:2210900004</h1>
      <hr/>
       <TtbListTableName renderTtbListTableName={TtbListTableName} onTtbDelete={TtbHanldeDelete}/>
      <TtbFormTableName renderTtbTableName={TtbTableName} onTtbAdd={TtbHandleAdd}/>
    </div>
  )
}

import axios from '../ttb_apis/ttb-2210900004'
import React, { useEffect, useState } from 'react'

export default function ttbFormTableName({renderttbTableName,onttbAdd}) {
    const[ttbId,setttbId]=useState(renderttbTableName.ttbId)
    const[ttbTbName,setttbTbName]=useState(renderttbTableName.ttbTbName)
    const[ttbTbEmail,setttbTbEmail]=useState(renderttbTableName.ttbTbEmail)
    const[ttbTbphone,setttbTbphone]=useState(renderttbTableName.ttbTbphone)
    const[ttbTbStatus,setttbTbStatus]=useState(renderttbTableName.ttbTbStatus)

    const ttbHandleSumit= async (ttbEvent)=>{
        ttbEvent.preventDefault();
        const ttbObjTableName={
            "ttbTbName": ttbTbName,
            "ttbTbEmail": ttbTbEmail,
            "ttbTbphone":ttbTbphone,
            "ttbTbStatus": ttbTbStatus,
            "ttbId": ttbId,
        }
        console.log(ttbObjTableName);
        await axios.post ("ttbTableName",ttbObjTableName);
        onttbAdd();
    }
  return (
    <div>
        <h2>form xu ly du lieu them moi</h2>
        <form>
        <div className="input-group mb-3">
             <span className="input-group-text" id="ttbId">ttbId</span>
            <input type="text" className="form-control" placeholder="ttbId" 
            name='ttbId'
            value={ttbId}
            onChange={(ttbEv)=>setttbId(ttbEv.target.value)}
            aria-label="ttbId" 
            aria-describedby="ttbId"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="ttbTbName">ttbTbName</span>
            <input type="text" className="form-control" placeholder="ttbTbName" 
            name='ttbTbName'
            value={ttbTbName}
            onChange={(ttbEv)=>setttbTbName(ttbEv.target.value)}

            aria-label="ttbTbName" 
            aria-describedby="ttbTbName"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="ttbTbEmail">ttbTbEmail</span>
            <input type="text" className="form-control" placeholder="khoavu27082k4@gmail.com" 
            name='ttbTbEmail'
            value={ttbTbEmail}
            onChange={(ttbEv)=>setttbTbEmail(ttbEv.target.value)}

            aria-label="ttbTbEmail" 
            aria-describedby="ttbTbEmail"/>
        </div> 
        <div className="input-group mb-3">
             <span className="input-group-text" id="ttbTbphone">ttbTbphone</span>
            <input type="text" className="form-control" placeholder="0567699711" 
            name='ttbTbphone'
            value={ttbTbphone}
            onChange={(ttbEv)=>setttbTbphone(ttbEv.target.value)}

            aria-label="ttbTbphone" 
            aria-describedby="ttbTbphone"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="ttbTbStatus">ttbTbStatus</span>
            <select id='ttbTbStatus' className='form-control'
            name='ttbTbStatus'
            value={ttbTbStatus}
            onChange={(ttbEv)=>setttbTbStatus(ttbEv.target.value)}

            >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary' name='btnttbSave' onClick={ttbHandleSumit}>ttb: save</button>
        </form>
    </div> 
  )
}

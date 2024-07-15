import axios from '../pch_apis/pch-2210900010'
import React, { useEffect, useState } from 'react'

export default function pchFormTableName({renderpchTableName,onpchEdit}) {
    const[pchId,setpchId]=useState(renderpchTableName.pchId)
    const[pchTbName,setpchTbName]=useState(renderpchTableName.pchTbName)
    const[pchTbEmail,setpchTbEmail]=useState(renderpchTableName.pchTbEmail)
    const[pchTbphone,setpchTbphone]=useState(renderpchTableName.pchTbphone)
    const[pchTbStatus,setpchTbStatus]=useState(renderpchTableName.pchTbStatus)

useEffect(()=>{
    setpchId(renderpchTableName.pchId)
    setpchTbName(renderpchTableName.pchTbName)
    setpchTbEmail(renderpchTableName.pchTbEmail)
    setpchTbphone(renderpchTableName.pchTbphone)
    setpchTbStatus(renderpchTableName.pchTbStatus)
},[renderpchTableName])

    const pchHandleSumit= async (pchEvent)=>{
        pchEvent.preventDefault();
        const pchObjTableName={
            "pchTbName": pchTbName,
            "pchTbEmail": pchTbEmail,
            "pchTbphone":pchTbphone,
            "pchTbStatus": pchTbStatus,
            "pchId": pchId,
        }
        console.log(pchObjTableName);
        await axios.put ("pchTableName/"+pchObjTableName.pchId,pchObjTableName);
        onpchEdit();
    }
  return (
    <div>
        <h2>form xu ly du lieu them moi</h2>
        <form>
        <div className="input-group mb-3">
             <span className="input-group-text" id="pchId">pchId</span>
            <input type="text" className="form-control" placeholder="pchId" 
            name='pchId'
            value={pchId}
            onChange={(pchEv)=>setpchId(pchEv.target.value)}
            aria-label="pchId" 
            aria-describedby="pchId"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="pchTbName">pchTbName</span>
            <input type="text" className="form-control" placeholder="pchTbName" 
            name='pchTbName'
            value={pchTbName}
            onChange={(pchEv)=>setpchTbName(pchEv.target.value)}

            aria-label="pchTbName" 
            aria-describedby="pchTbName"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="pchTbEmail">pchTbEmail</span>
            <input type="text" className="form-control" placeholder="khoavu27082k4@gmail.com" 
            name='pchTbEmail'
            value={pchTbEmail}
            onChange={(pchEv)=>setpchTbEmail(pchEv.target.value)}

            aria-label="pchTbEmail" 
            aria-describedby="pchTbEmail"/>
        </div> 
        <div className="input-group mb-3">
             <span className="input-group-text" id="pchTbphone">pchTbphone</span>
            <input type="text" className="form-control" placeholder="0567699711" 
            name='pchTbphone'
            value={pchTbphone}
            onChange={(pchEv)=>setpchTbphone(pchEv.target.value)}

            aria-label="pchTbphone" 
            aria-describedby="pchTbphone"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="pchTbStatus">pchTbStatus</span>
            <select id='pchTbStatus' className='form-control'
            name='pchTbStatus'
            value={pchTbStatus}
            onChange={(pchEv)=>setpchTbStatus(pchEv.target.value)}

            >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary' name='btnpchSave' onClick={pchHandleSumit}>pch: save</button>
        </form>
    </div> 
  )
}

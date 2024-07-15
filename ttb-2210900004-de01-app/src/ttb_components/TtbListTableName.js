import React from 'react'

export default function TtbListTableName({renderTtbListTableName,onTtbDelete,onTtbEdit}) {
    console.log("list:",renderTtbistTableName);
    //hien thi du lieu
    const TtbElementTableName = renderTtbListTableName.map((TtbItem,TtbIndex)=>{
        return(
            <tr key={TtbIndex}>
                <td>{TtbItem.TtbId}</td>
                <td>{TtbItem.TtbTbName}</td>
                <td>{TtbItem.TtbTbEmail}</td>
                <td>{TtbItem.TtbTbphone}</td>
                <td>{(TtbItem.TtbTbStatus===true||TtbItem.TtbTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                    onClick={()=>TtbHandelEdit(TtbItem)}
                    >Ttb-edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>TtbHanldeDelete(TtbItem.TtbId)}
                    >Ttb-delete</button>
                </td>
            </tr>
        );
    })
    const TtbHanldeDelete=(TtbId)=>{
        if(window.confirm('ban co muon xoa'+TtbId)){
            onTtbDelete(TtbId);
        }
    }
    const TtbHandelEdit=(TtbObjTableName)=>{
        onTtbEdit(TtbObjTableName);
    }
  return (
    <div>
        <h2>danh sách thông tin ......</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <th>TtbId</th>
                <th>TtbTbName</th>
                <th>TtbTbEmail</th>
                <th>TtbTbphone</th>
                <th>TtbTbStatus</th>
                <th>Ttb: chuc nang</th>

            </thead>
            <tbody>
                {TtbElementTableName}
            </tbody>
        </table>
    </div>
  )
}

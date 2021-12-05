import Topbar from '../../components/topbar/Topbar';
import {DataGrid} from "@material-ui/data-grid";
import './mypage.scss';
import { useState } from 'react';
import { classRows } from '../../public/dummyData';
import { ShoppingBasketOutlined } from '@material-ui/icons';

export default function Mypage() {
  const [data, setData] = useState(classRows);
  const columns = [
    {
      field:"signup",
      headerName:"신청",
      width:110,
      renderCell:(params) =>{
        return(

          <button className="signUp">신청</button>
        )
      }
  },
    {field:"division", headerName:"이수구분", width:140},
    {
      field:"id", 
      headerName:"과목번호",
      width:140
    },
    {
      field:'classname',
      headerName:"과목명",
      width:230
    },
    {
      field:"score",
      headerName:"학점/시간",
      width:140
    },
    {
      field:"professor",
      headerName:"담당교수",
      width:140
    },
    {
      field:"classroom",
      headerName:"강의실(시간)",
      width:200
    },
    {
      field:"area",
      headerName:"영역",
      width:110
    },
    {
      field:"isremote",
      headerName:"원격여부",
      width:140
    },
    {
      field:"delete",
      headerName:"삭제",
      width:110,
      renderCell:(params) =>{
        return(

          <button className="deleteBtn">삭제</button>
        )
      }
  }
  ]


  const columns2 = [
    
    {field:"division", headerName:"이수구분", width:140},
    {
      field:"id", 
      headerName:"과목번호",
      width:140
    },
    {
      field:'classname',
      headerName:"과목명",
      width:230
    },
    {
      field:"score",
      headerName:"학점/시간",
      width:140
    },
    {
      field:"professor",
      headerName:"담당교수",
      width:140
    },
    {
      field:"classroom",
      headerName:"강의실(시간)",
      width:200
    },
    {
      field:"area",
      headerName:"영역",
      width:110
    },
    {
      field:"isremote",
      headerName:"원격여부",
      width:140
    },
    {
      field:"delete",
      headerName:"취소",
      width:110,
      renderCell:(params) =>{
        return(

          <button className="deleteBtn cancle">수강취소</button>
        )
      }
  }
  ]


  return (
    <div className="mypage">
      <Topbar />
      <div className="mypageWrapper">
        <h1 className="title">
          나의 수강신청 장바구니
          <ShoppingBasketOutlined className="icon"/>
        </h1>
       

        <div className="classList">
          <DataGrid rows={data}
          columns={columns}
          pageSize={0}
          disableSelectionOnClick
          />
        </div>

        <h1 className="title">
          나의 수강신청 내역
          
        </h1>
       

        <div className="classList">
          <DataGrid rows={data}
          columns={columns2}
          pageSize={8}
          disableSelectionOnClick
          checkboxSelection
          />
        </div>

        
      </div>
    </div>
  )
}

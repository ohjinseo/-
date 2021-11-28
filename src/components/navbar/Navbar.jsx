import './navbar.scss';
import {  SearchOutlined,  SentimentVeryDissatisfiedOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import { useState } from 'react';
import etImg from '../../public/everytime.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="title">
          <img src="https://w.namu.la/s/a2c257b24c6bc7f7c2d9f9fc26d44ca40b034e6941b851790e5c86f6a2e9c360e97c81432c1d3f643394e6e4232f3525c468146412cb5d561f6f14480f8e6c4159a6ba340cc6892352e4c21ced2c52329b6c34d059e9e57281e4ec1da156a996"  className="deuImg" alt="" />
          동의대 수강신청
        </div>

        <ul className="menu">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}} >
          <li className="item active">
            <SearchOutlined className="icon" />
            강의 조회하기
          </li>
          </Link>

          <Link to="/mypage" style={{color:"inherit", textDecoration:"none"}} >
          <li className="item">
            <ShoppingBasketOutlined className="icon" />
            수강 신청하기
          </li>
          </Link>
        </ul>

        <div className="gradeBox">
          <h3 className="gradeTitle">
            현재 나의 학점은?
           <SentimentVeryDissatisfiedOutlined className="icon"/>
          </h3>

          <h3 className="score">
            17.5 / 21.5
          </h3>
        </div>

        <div className="imgBox">
          시간표 넣는곳
        </div>

        
      </div>
    </div>
  )
}

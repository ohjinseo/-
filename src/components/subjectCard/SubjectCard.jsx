import { Box, Modal, Typography } from '@material-ui/core';
import { MenuBookOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './subjectCard.scss';
import logo from "../../public/logo192.png";
import { lecture } from '../../public/dummyData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function SubjectCard({propsData}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

      <div className="subjectCard">
        <div className="box">
          <div className="iconBox">
          <MenuBookOutlined className="icon" onClick={handleOpen}/>

          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={logo} alt="" />
        </Box>
      </Modal>

          <p>수업계획서</p>
          </div>

          <div className="iconBox">
          <ShoppingBasketOutlined className="icon"/>
          <p>강의담기</p>

          </div>
        </div>
      <div className="subjectCardWrapper">
        <div className="cardTop">
          <h3>{propsData.name}</h3>
          <button>{propsData.division}</button>
        </div>

        <div className="cardCenter">
          <button>{propsData.score}</button>
          <button>{propsData.grade}</button>
          <button>{propsData.day}</button>
        </div>

        <div className="cardBottom">
          <p className="professor">담당교수 : {propsData.professor}</p>
          <p className="people">제한인원 : {propsData.people}</p>
          <p className="class">개설학과 : {propsData.department}</p>
        </div>
      </div>
    </div>
    )
    
}

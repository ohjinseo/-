import { Box, Modal, Typography } from '@material-ui/core';
import { MenuBookOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './subjectCard.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function SubjectCard() {
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
          sdf
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
          <h3>융합 창의력 개발</h3>
          <button>자유선택</button>
        </div>

        <div className="cardCenter">
          <button>2학점</button>
          <button>2학년</button>
          <button>수[2-3], 목[3-4]</button>
        </div>

        <div className="cardBottom">
          <p className="professor">담당교수 : 양근숙</p>
          <p className="people">제한인원 : 40</p>
          <p className="class">개설학과 : 컴퓨터 공학과</p>
        </div>
      </div>
    </div>
  )
}

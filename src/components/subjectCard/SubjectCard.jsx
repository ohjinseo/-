import { MenuBookOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import './subjectCard.scss';


export default function SubjectCard() {
  return (
    <div className="subjectCard">
        <div className="box">
          <div className="iconBox">
          <MenuBookOutlined className="icon"/>
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

import { Chip } from '@material-ui/core'

import { Search } from '@material-ui/icons'
import SubjectCard from '../../components/subjectCard/SubjectCard'
import Topbar from '../../components/topbar/Topbar'
import "./home.scss"

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeWrapper">
        <div className="searchBox">
          <h1 className="searchTitle">
            강의 조회는 여기서!
          </h1>

          <div className="searchbar">
          <input placeholder="ex) 융합 창의력" className="searchInput" />
          <Search className="searchIcon"/>
          </div>
        </div>

        <div className="searchConditionBox">
          <h1 className="title">
            너의 입맛대로 골라봐~
          </h1>

          <ul className="conditionList">
            <li>
              <button>
                과목유형
              </button>
            </li>
      
            <li>
              <button>개설학과</button>
            </li>

            <li>
              <button>이수구분</button>
            </li>

            <li>
              <button>학년</button>
            </li>

            <li>
              <button>요일</button>
            </li>

            <li>
              <button>학점</button>
            </li>

            <li>
              <button>교수</button>
            </li>

            <li>
              <button>강의실</button>
            </li>


          </ul>

          <div className="chipBox">
          
          </div>

          <div className="homeBottom">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}

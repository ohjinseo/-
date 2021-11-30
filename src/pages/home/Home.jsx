import { Box, Checkbox, Chip, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import ListItemButton from '@mui/material/ListItemButton'
import { useState } from 'react'
import { FixedSizeList } from 'react-window'
import SubjectCard from '../../components/subjectCard/SubjectCard'
import Topbar from '../../components/topbar/Topbar'
import "./home.scss"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  p: 1,
};



export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


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
              <button onClick={handleOpen}>
                과목유형
              </button>

              <Modal
              
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {["교양", "전공","교양부전공","교직","자유선택"].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
        </Box>
      </Modal>

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

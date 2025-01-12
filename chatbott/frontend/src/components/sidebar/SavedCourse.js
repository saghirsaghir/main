import React from 'react'
import styled from 'styled-components'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogsSettings from './additionalstuff/SavedDialogs'
import ProgressBar from './additionalstuff/ProgressBar';
import SnackSave from './additionalstuff/SnackSave';
import SnackDelete from './additionalstuff/SnackDelete';
function SavedCourse() {
    const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {
      setOpen(true);
    };

    
    const [openSlack, setOpenSlack] = React.useState(false);
    
      const handleClick = () => {
        setOpenSlack(true);
      };
    return (<>
        <Container>
             <CourseAvatar>
            <img src="https://cdn.auth0.com/blog/illustrations/react.png"/>
            </CourseAvatar>
            <CourseDetails>
                <div style={{fontStyle:"italic" ,fontSize: "18px" }}>Course name</div>
                <ProgressBar Coursename="angular"  percentage="40" />
            </CourseDetails>
            <Func>
                <div>
                <DetailButton onClick={()=>handleClickOpen()}>
                <OpenInNewIcon className="detail"/>
                </DetailButton>
               <DetailButton onClick={()=>handleClick()}>
                <DeleteIcon className="delete"/>
               </DetailButton>
                </div>
            </Func>
        </Container>
          <DialogsSettings open={open} setOpen={setOpen} />
          <SnackDelete  openSlack={openSlack} setOpenSlack={setOpenSlack} />
          </>
    )
}

export default SavedCourse

const Container = styled.div`
padding :2px;
  margin-top :10px;
  width: 100%;
  height:70px;
  display: grid;
  grid-template-columns: minmax(0, 80px) 60% 20%; 
  background-color : white;
  border-radius: 8px;

  :hover {
    box-shadow :inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    background: #dff3fe;
}
`
const CourseAvatar = styled.div`
    padding :5px;
    width: 100%;
    height: 100%;
    display : flex ; 
    align-items : center ;
    justify-content : center ;
    overflow: hidden;
    margin-left: 8px;
    img {
        margin-right : 13px;
        width: 90%;
        border-radius: 50%;
        border : 0.1px solid grey;
    }
`
const img = styled.img`
height : 10px;
width : 10px;
`
const CourseDetails = styled.div`
margin-left:10px;
padding :  5px 10px;
font-family: Times New Roman , cursive;


`

const Func = styled.div`
height:100%;
width:100%;
padding  : 5px;
display: flex ;
align-items : center;
    .detail:hover{
        color : #fee103;
        cursor : pointer;
    }
    .delete:hover{
        color:red;
        cursor ; pointer;
    }

    
    
`

const DetailButton = styled.button`
border : none ;
background-color : transparent;
:focus{outline: none;}
` 
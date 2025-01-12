import React, { useEffect } from 'react'
import styled from 'styled-components'
import Course from './Course'
import SavedCourse from './SavedCourse'
import SavedDialogs from './additionalstuff/Dialogs'
import {initialingData,fetchCourses,selectCourses} from '../../Redux/courseSlice'
import { useDispatch , useSelector} from 'react-redux'


function LeftsideBar() {
  const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {
      setOpen(true);
    };

    const courses =  useSelector(selectCourses)

    const  dispatch = useDispatch();
    useEffect(() => {  
            dispatch(fetchCourses())
    }, [])

    useEffect(() => {
      console.log( courses );
    },[courses])

    return (
        <Container>
            <Logo>
               <Head>
                <img src="/flashboticon.PNG"/>
               </Head>
               <div>
                 FlashBot 
               </div>
            </Logo>
            <SavedCourses>
              <SavedCoursesBox>
                <Header>
                <strong style={{fontFamily:'cursive'}}>Saved Courses :
                  </strong>  
                  <SavedDialogs  open={open} setOpen={setOpen}/>
                  <span onClick={()=>{handleClickOpen()}}>See all</span>
                </Header>
              
                <SavedCourse/>
                <SavedCourse/>
              </SavedCoursesBox>
            </SavedCourses>

            <RecommandedCourses>
                <RecommandedCoursesBox>
                <strong style={{fontFamily:'cursive'}}>Recommanded Courses : </strong>  
                   <Course/>
                   <Course/>
                   <Course/>
                   <Course/>
                   <Course/>
                </RecommandedCoursesBox>
            </RecommandedCourses>
        </Container>
    )
}

export default LeftsideBar

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 240px 435px ;
  `
const Logo = styled.div`
width: 100%;
height: 100%;
display : flex ;
justify-content :flex-start ;
align-items : center ;
padding-left:10%;
div{
  margin-left:2%;
  font-family:Verdana;
}
`
const Head = styled.div`
background-color : red;
height:100%;
 img{
   height : 50px;
   width : 50px;
 }

`
const Header = styled.div`
display : flex ;
justify-content : space-between;
 span  {
   color: grey;
   font-style : italic;
   :hover{
     color :gold;
     cursor : pointer;
   }
 }
`
const SavedCourses = styled.div`
padding : 15px;
width: 100%;
height: 100%;
border-bottom : 0.8px solid grey ;
  `
const SavedCoursesBox = styled.div`
padding : 15px ;
width: 100%;
height: 100%;
background-color :white;
border-radius: 8px;
overflow : hidden;
box-shadow :0 4px 6px -2px rgba(0, 0, 0, 0.4);
  `
const RecommandedCourses = styled.div`
padding : 2px 15px;
width: 100%;
height: 100%;
  `
const RecommandedCoursesBox = styled.div`
padding : 5px 15px;
width: 100%;
height: 100%;
background-color :white;
display : grid ;
grid-template-rows: 23px auto ;
overflow : hidden;
border-bottom : 0.8px solid grey ;

`
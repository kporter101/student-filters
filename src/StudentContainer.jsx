import { mockStudentData } from './mockData.js';
import Student from './Student.jsx';
import styled from 'styled-components';

const StudentFlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 180px;
  width: 1350px;
  align-items: start;
  justify-content: flex-start;
  margin: auto;
`

const StudentContainer = ({filterState}) => {
  //create a Student component whose filters include the one that is currently selected
  const students = mockStudentData.filter((student)=>student.filterIds.includes(filterState)).map((student) => {
      const {
        _id,
        name,
        university,
        gpa,
        enrolledPrograms,
        completedPrograms,
        intent,
        skillPoints,
        profilePic
      }=student;

      return <Student
      key={_id}
      name={name}
      uni={university}
      gpa={gpa}
      enrolled={enrolledPrograms}
      completed={completedPrograms}
      intent={intent}
      skill={skillPoints}
      profilePic={profilePic}
    />
  })

  return(
    <StudentFlexBox>
      {students}
    </StudentFlexBox>
  )
}

export default StudentContainer;
import styled from 'styled-components';
import studentImgFile from './StudentPic.png';

const StudentCard = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 .2px 1px 0 rgba(0,0,0,0.19), 0 3px 6px 0 rgba(0,0,0,0.1);
  height: 180px;
  width: 375px;
  color: black;
  font-size: 17px;
  text-align: left;
  position: relative;
  margin: auto 60px auto 0px;
`;

const NoBulletList = styled.ul`
  list-style: none;
  position: absolute;
  left: 70px;
  top: 5px;
`;

const StudentName = styled.label`
  font-weight: bold;
`;

const StudentPic = styled.img`
  position: absolute;
  left: 25px;
  top: 20px;
`;

const Student = ({
  _id,
  name,
  uni,
  gpa,
  enrolled,
  completed,
  intent,
  skill,
  profilePic
}) => {

  return(
    <StudentCard>
      <StudentPic src={studentImgFile} alt='Student Profile pic'/>
      <NoBulletList>
        <StudentName>{name}</StudentName>
        <li>{uni}</li>
        <li>GPA: {gpa}</li>
        <li>Enrolled in {enrolled}</li>
        <li>Completed {completed}</li>
        <li>Intent Score: {intent}</li>
        <li>Skill Score: {skill}</li>
      </NoBulletList>
    </StudentCard>

  )
}

export default Student;
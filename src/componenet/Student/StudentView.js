 import React, { useEffect, useState} from 'react'
 import axios from 'axios';
 
 const StudentView = () => {
    const[Student, setStudent] = useState([]);
    useEffect(() => {
        loadStudent();
    }
    ,[]);
       const loadStudent = async () => {
       const result=await axios.get("http://localhost:8080/student/get-All",{
        validateStatus:()=>{
            return true;
        },
       }
    );
       if(result.status===200){
           console.log(result.data);
         setStudent(result.data);
        }
       };
   return (
     <section>
    <table>
        <thead>
            <tr>
              <th>Student ID</th>  
              <th>Studen Name</th>
             <th>Adreees</th> 
             <th>age</th>
             <th>Gender</th> 
            </tr>
        </thead>
        <tbody>
        {Student.map((student, index) => (
            <tr key={index}>
                <th scope='row'key={index}>{index+1}</th>
                <td>{student.StudentID}</td>
                <td>{student.StudentName}</td>
                <td>{student.Address}</td>
                <td>{student.Age}</td>
                <td>{student.Gender}</td>
                <td>View</td>
                <td>Update</td> 
               < td>Delete</td>           
            </tr> 
        ))}

        </tbody>
    </table>

       
     </section>
   )
 }
 
 export default StudentView
 
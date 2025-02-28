 import React, { useEffect, useState} from 'react'
 import axios from 'axios';
 
 const StudentView = () => {
    const[Student, setStudent] = useState([{id: 52, name: "John Doe", adrees: "123 Main Street"}]);
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
      
         
            
        
         console.log(Student);
         
        }
    }
return (
    <section>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='text-center'>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th colSpan="3">Actions</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {Student.map((student, index) => (
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.adrees}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                        <td className='mx-2'>
                            <button className='btn btn-primary'>View</button>
                        </td>
                        <td className='mx-2'>
                            <button className='btn btn-warning'>Update</button>
                        </td>
                        <td className='mx-2'>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
)
 }
 
 export default StudentView
 
import { useState } from "react"

const StudentList = () => {
  const[list,setList]=useState([
      {sno:1,regno:111723203001,name:"Aakash",},
      {sno:2,regno:111723203002,name:"Abishek",},
      {sno:3,regno:111723203003,name:"Abinaya",},
      {sno:4,regno:111723203004,name:"Adithya Baba",},
      {sno:5,regno:111723203005,name:"Agila",},
      {sno:6,regno:111723203006,name:"Ajith Kumar",},
      {sno:7,regno:111723203007,name:"Anandhi",},
      {sno:8,regno:111723203008,name:"Anusuya",},
      {sno:9,regno:111723203009,name:"Arul Jothee",},
      {sno:10,regno:111723203010,name:"Bhavadharani",},
      {sno:11,regno:111723203011,name:"Bhuvaneswari K",},
      {sno:12,regno:111723203012,name:"Bhuvaneshwari S",},
      {sno:13,regno:111723203013,name:"Shruthi",},
      {sno:14,regno:111723203014,name:"Chendraya Saravanan",},
      {sno:15,regno:111723203015,name:"Vinishiya",},
      {sno:16,regno:111723203016,name:"Deepakraj",},
      {sno:17,regno:111723203017,name:"Deepika",},
      {sno:18,regno:111723203018,name:"Dega Dhanush",},
      {sno:19,regno:111723203019,name:"Deivanai",},
      {sno:20,regno:111723203020,name:"Devasri",},
      {sno:21,regno:111723203021,name:"Dhanesh",},
      {sno:22,regno:111723203022,name:"Dhanraj",},
      {sno:23,regno:111723203023,name:"Dharshini",},
      {sno:24,regno:111723203024,name:"Dhinesh",},
      {sno:25,regno:111723203025,name:"Divyadharshini",},
      {sno:26,regno:111723203026,name:"Ganesan",},
      {sno:27,regno:111723203027,name:"Ganga",},
      {sno:28,regno:111723203028,name:"Gnaanesh",},
      {sno:29,regno:111723203029,name:"Gokul",},
      {sno:30,regno:111723203030,name:"Gowtham",},
      {sno:31,regno:111723203031,name:"Gracelin",},
      {sno:32,regno:111723203032,name:"Harini",},
      {sno:33,regno:111723203033,name:"Harirajan",},
      {sno:34,regno:111723203034,name:"Harish",},
      {sno:35,regno:111723203035,name:"Harishta",},
      {sno:36,regno:111723203036,name:"Harry Joel",},
      {sno:37,regno:111723203037,name:"Hemanth Kumar",},
      {sno:38,regno:111723203038,name:"Jagadish",},
      {sno:39,regno:111723203039,name:"Jaishree",},
      {sno:40,regno:111723203040,name:"Jaisurya",},
      {sno:41,regno:111723203121,name:"Ragul",},
      {sno:42,regno:111723203124,name:"Manoj",}
    ]
  )
  return (
    <div className="student">
      <h1>STUDENT LIST</h1>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>REG.NO</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
        {list.map((lists)=>(<tr key={lists.sno}>
          <td>{lists.sno}</td>
          <td>{lists.regno}</td>
          <td>{lists.name}</td>
        </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
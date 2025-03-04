import { useState } from "react"
const Attendance = ({ updateAttendance }) => {
  const [list, setList] = useState([
    { sno: 1, regno: 111723203001, name: "Aakash", status: "" },
    { sno: 2, regno: 111723203002, name: "Abishek", status: "" },
    { sno: 3, regno: 111723203003, name: "Abinaya", status: "" },
    { sno: 4, regno: 111723203004, name: "Adithya Baba", status: "" },
    { sno: 5, regno: 111723203005, name: "Agila", status: "" },
    { sno: 6, regno: 111723203006, name: "Ajith Kumar", status: "" },
    { sno: 7, regno: 111723203007, name: "Anandhi", status: "" },
    { sno: 8, regno: 111723203008, name: "Anusuya", status: "" },
    { sno: 9, regno: 111723203009, name: "Arul Jothee", status: "" },
    { sno: 10, regno: 111723203010, name: "Bhavadharani", status: "" },
    { sno: 11, regno: 111723203011, name: "Bhuvaneswari K", status: "" },
    { sno: 12, regno: 111723203012, name: "Bhuvaneshwari S", status: "" },
    { sno: 13, regno: 111723203013, name: "Shruthi", status: ""},
    { sno: 14, regno: 111723203014, name: "Chendraya Saravanan", status: ""},
    { sno: 15, regno: 111723203015, name: "Vinishiya", status: ""},
    { sno: 16, regno: 111723203016, name: "Deepakraj", status: ""},
    { sno: 17, regno: 111723203017, name: "Deepika", status: ""},
    { sno: 18, regno: 111723203018, name: "Dega Dhanush", status: ""},
    { sno: 19, regno: 111723203019, name: "Deivanai",status: "" },
    { sno: 20, regno: 111723203020, name: "Devasri",status: "" },
    { sno: 21, regno: 111723203021, name: "Dhanesh", status: ""},
    { sno: 22, regno: 111723203022, name: "Dhanraj",status: "" },
    { sno: 23, regno: 111723203023, name: "Dharshini",status: "" },
    { sno: 24, regno: 111723203024, name: "Dhinesh",status: "" },
    { sno: 25, regno: 111723203025, name: "Divyadharshini", status: ""},
    { sno: 26, regno: 111723203026, name: "Ganesan",status: "" },
    { sno: 27, regno: 111723203027, name: "Ganga",status: "" },
    { sno: 28, regno: 111723203028, name: "Gnaanesh", status: ""},
    { sno: 29, regno: 111723203029, name: "Gokul", status: ""},
    { sno: 30, regno: 111723203030, name: "Gowtham",status: "" },
    { sno: 31, regno: 111723203031, name: "Gracelin", status: ""},
    { sno: 32, regno: 111723203032, name: "Harini",status: "" },
    { sno: 33, regno: 111723203033, name: "Harirajan",status: "" },
    { sno: 34, regno: 111723203034, name: "Harish",status: "" },
    { sno: 35, regno: 111723203035, name: "Harishta", status: ""},
    { sno: 36, regno: 111723203036, name: "Harry Joel", status: ""},
    { sno: 37, regno: 111723203037, name: "Hemanth Kumar",status: "" },
    { sno: 38, regno: 111723203038, name: "Jagadish",status: "" },
    { sno: 39, regno: 111723203039, name: "Jaishree", status: ""},
    { sno: 40, regno: 111723203040, name: "Jaisurya",status: "" },
    { sno: 41, regno: 111723203121, name: "Ragul",status: "" },
    { sno: 42, regno: 111723203124, name: "Manoj",status: "" }
  ])
  const markAttendance = (regno, status) => {
    const updatedList = list.map((lists) => lists.regno === regno ? { ...lists, status } : lists
    )
    setList(updatedList)
    updateAttendance(updatedList)
  }
  return (
    <div className="attendance">
      <h1>ATTENDANCE</h1>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>REG.NO</th>
            <th>NAME</th>
            <th>PRESENT</th>
            <th>ABSENT</th>
          </tr>
        </thead>
        <tbody>
          {list.map((lists) => (<tr key={lists.sno}>
            <td>{lists.sno}</td>
            <td>{lists.regno}</td>
            <td>{lists.name}</td>
            <td><button className="mark" onClick={() => markAttendance(lists.regno, "PRESENT")}>PRESENT</button></td>
            <td><button className="mark" onClick={() => markAttendance(lists.regno, "ABSENT")}>ABSENT</button> </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}
export default Attendance
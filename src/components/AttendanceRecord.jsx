
const AttendanceRecord = ({attendance}) => {
  return (
    <div className="atrecord">
      <h1>ATTENDANCE RECORD</h1>
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
          {attendance.map((lists)=>(<tr key={lists.sno}>
            <td>{lists.sno}</td>
            <td>{lists.regno}</td>
            <td>{lists.name}</td>
            <td>{lists.status === "PRESENT" ? "✅" : "-"}</td>
            <td>{lists.status === "ABSENT" ? "❌" : "-"}</td>

          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceRecord
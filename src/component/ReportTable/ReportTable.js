import React from 'react'

function ReportTable() {
  return (
    <div>
    <table border="1">
<thead>
<th>Patient name</th>
<th>Patient Id</th>
<th>Patient age</th>
<th>Patient height</th>
<th>Patient weight</th>
<th>Patient bp</th>
<th>Report</th>
<th>Remarks</th>

</thead>
<tbody>
<tr>
    <td>Pavan Patil</td>
    <td>AB990157</td>
    <td>34</td>
    <td>5'4</td>
    <td>85</td>
    <td>120/80</td>
    <table border="1">
        <thead>
            <th>Report1</th>
            <th>Report1</th>
            <th>Report1</th>
            <th>Report1</th>
            <th>Report1</th>
        </thead>
        <tbody>
        <tr>
            <td>4.5</td>
            <td>66%</td>
            <td>4.5</td>
            <td>66%</td>
            <td>11.5</td>
        </tr>

        </tbody>


    </table>


</tr>

</tbody>


    </table>
    </div>
  )
}

export default ReportTable

import React from "react";

function EmployeeTable(props) {
   return (
      <tr>
         <th scope="row">{props.id}</th>
         <td key={props.firstName.toString()}>{props.firstName}</td>
         <td key={props.lastName.toString()}>{props.lastName}</td>
         <td key={props.position.toString()}>{props.position}</td>
         <td key={props.salesman.toString()}>{props.salesman}</td>
         <td key={props.management.toString()}>{props.management}</td>
      </tr>
   );
}

export default EmployeeTable;
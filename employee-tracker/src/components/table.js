import React from "react";


// change to function
function Table(props) {
   return [
      <table className="table table-striped">
         <thead>
            <tr>
               <th onClick={props.onSortNumber('id')} id="id" scope="col">
                  #
                  <span className={props.setArrow('id')}></span>
               </th>
               <th onClick={props.onSort('firstName')} id="firstName" scope="col">
                  First
                  <span className={props.setArrow('firstName')}></span>
               </th>
               <th onClick={props.onSort('lastName')} id="lastName" scope="col">
                  Last
                  <span className={props.setArrow('lastName')}></span>
               </th>
               <th onClick={props.onSort('position')} id="position" scope="col">
                  Position
                  <span className={props.setArrow('position')}></span>
               </th>
               <th onClick={props.onSortNumber('salesman')} id="salesman" scope="col">
                  Salesman
                  <span className={props.setArrow('salesman')}></span>
               </th>
               <th onClick={props.onSortNumber('salesman')} id="management" scope="col">
                  Management
                  <span className={props.setArrow('management')}></span>
               </th>
            </tr>
         </thead>
         <tbody>
            {props.handleTableValues}
         </tbody>
      </table>
   ]
}

export default Table;
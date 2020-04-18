import React, { Component } from "react";
import EmployeeTable from "./components/employee.js";
import Wrapper from "./components/wrapper.js";
import Header from "./components/header.js";
import Table from "./components/table.js";
import employees from "./employees.json";
import Scroll from "./components/scrollmenu";


class App extends Component {

   state = {
    employees,
      manageValue: "Select",
      sort: {
         column: null,
         direction: 'desc'
      },
   };



   onSort = (column) => (e) => {
      const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
      const sortedData = this.state.employees.sort((a, b) => {
         console.log(column)
         if (column === 'firstName') {
            const nameA = a.firstName.toUpperCase();
            const nameB = b.firstName.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         } if (column === "lastName") {
            const nameA = a.lastName.toUpperCase();
            const nameB = b.lastName.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         } else  {
            const nameA = a.position.toUpperCase();
            const nameB = b.position.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         }
      });

      if (direction === 'desc') {
         sortedData.reverse();
      }

      this.setState({
         employees: sortedData,
         sort: {
            column,
            direction
         }
      });
   };

   onSortNumber = (column) => (e) => {
      const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
      const sortedData = this.state.employees.sort((a, b) => {

         if (column === "id") {
            const numA = a.id;
            const numbB = b.id;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         } else if (column === "salesman") {
            const numA = a.salesman;
            const numbB = b.salesman;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         } else {
            const numA = a.management;
            const numbB = b.management;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         }
      });

      if (direction === 'desc') {
         sortedData.reverse();
      }

      this.setState({
         employees: sortedData,
         sort: {
            column,
            direction
         }
      });
   };


   setArrow = (column) => {
      let className = 'sort-direction';

      if (this.state.sort.column === column) {
         className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
      }

      console.log(className);

      return className;
   };

   handleSubmit = (event) => {
      event.preventDefault();
   }
   handleChange = (event) => {
      this.setState({ manageValue: event.target.value });
   }


   handleTableValues() {
      if (this.state.manageValue === "Management") {
         return this.state.employees.filter(employee => employee.management === 1).map(employee =>
            <EmployeeTable
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               salesman={employee.salesman}
               management={employee.management}
            />
         )
      } else if (this.state.manageValue === "Salesman") {
         return this.state.employees.filter(employee => employee.management === 0).map(employee =>
            <EmployeeTable
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               salesman={employee.salesman}
               management={employee.management}
            />
         )
      } else if (this.state.manageValue === "Both") {
         return this.state.employees.filter(employee => employee.management === 1).map(employee =>
            <EmployeeTable
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               salesman={employee.salesman}
               management={employee.management}
            />
         )
      } else {
         return this.state.employees.map(employee =>
            <EmployeeTable
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               salesman={employee.salesman}
               management={employee.management}
            />
         )
      }
   }

   render() {
      return (
         <Wrapper>
            <Header>Employee Directory</Header>
            <Scroll
               manageValue={this.state.manageValue}
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
            ></Scroll>
            <Table
               handleTableValues={this.handleTableValues()}
               onSort={this.onSort}
               setArrow={this.setArrow}
               onSortNumber={this.onSortNumber}
            ></Table>
         </Wrapper>
      )
   }
}


export default App;
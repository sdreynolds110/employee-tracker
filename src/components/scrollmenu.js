import React from "react";

function Scroll(props) {

   return (
      <form onSubmit={props.handleSubmit} className="mx-auto">
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">Filter: </label>
            <div className="col-sm-6">
               <select value={props.manageValue} className="form-control" onChange={props.handleChange} id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} manageValue=" Select " selected disabled>Select</option>
                  <option key={"Manage"} value="Management">Management</option>
                  <option key={"Sales"} value="Contractors">Salesman</option>
                  <option key={"All"} value="">All</option>
               </select>
            </div>
         </div>
      </form>
   );
}

export default Scroll;
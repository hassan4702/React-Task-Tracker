import React from "react";

const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"></input>
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time"></input>
      </div>

      <div className="form-control
      form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <div >
        <input className='btn btn-block' type="Submit" value='Save task'/>
      </div>
    </form>
  );
};

export default AddTask;

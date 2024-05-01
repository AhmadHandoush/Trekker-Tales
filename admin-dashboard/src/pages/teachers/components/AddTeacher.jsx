function AddTeacher({ setAdd }) {
  return (
    <div className="add-box center">
      <div className="close">
        <span onClick={() => setAdd(false)}>X</span>
      </div>
      <form className="flex column">
        <h2>Add Teacher</h2>
        <div className="input flex column">
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="Enter the teacher's name" />
        </div>
        <div className="input flex column">
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Enter the teacher's email" />
        </div>
        <div className="input flex column">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter the teacher's password" />
        </div>
        <button type="submit" className="added">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;

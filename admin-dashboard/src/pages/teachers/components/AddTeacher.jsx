function AddTeacher() {
  return (
    <div className="add-box center">
      <form className="flex column">
        <h2>Add Teacher</h2>
        <input type="text" placeholder="Enter the teacher's name" />
        <input type="email" />
        <input type="text" />
        <button type="submit" className="add-teacher">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;

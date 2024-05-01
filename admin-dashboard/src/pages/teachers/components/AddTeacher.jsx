function AddTeacher() {
  return (
    <div className="add-box">
      <form>
        <h2>Add Teacher</h2>
        <input type="text" placeholder="Enter the teacher's name" />
        <input type="email" />
        <input type="text" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default AddTeacher;

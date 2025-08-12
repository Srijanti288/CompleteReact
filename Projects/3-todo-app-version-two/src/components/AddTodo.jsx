function AddTodo(){
    return (
      // <div class="container">
        <div className="row sr-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success sr-button">Add</button>
          </div>
        </div>
        // </div>
    );
}

export default AddTodo;
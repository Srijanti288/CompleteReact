function TodoItem2(){

    let todoName = "Go to college";
    let todoDate = "20/11/2024";
    return (
      <div class="container">
      <div class="row sr-row">
      <div class="col-6">
        {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger sr-button">Delete</button>
      </div>
    </div>
     </div>
    );
}

export default TodoItem2;
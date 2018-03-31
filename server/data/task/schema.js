const Task = `

  # Main Schema
  type Task {
    _id: String
    title: String
    board: Board
  }

  # Define doc here
  input TaskDocInput {
    _id: String
    title: String
    boardId: String
  }

`;

export default Task;

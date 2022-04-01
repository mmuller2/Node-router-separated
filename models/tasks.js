import { users as data } from '../data.js?';
const getTasks = (req, res, next) => {
  res.json({ success: true, payload: data }).status(200);

  // next();
};

const getTaskByID = (req, res) => {
  const { id } = req.params;
  const found = data.find((task) => task.id === Number(id));
  if (found) {
    res.json({ success: true, payload: found }).status(200);
  } else {
    res.json({ success: false, payload: 'Could not find' }).status(404);
  }
};

const createTask = (req, res) => {
  const { task } = req.body;
  const newTask = {
    id: data.length + 1,
    task,
    isDone: false,
  };

  data.push(newTask);

  res.json({ success: true, payload: newTask }).status(200);
};

const updateTaskByID = (req, res) => {
  const { task } = req.body;
  const { id } = req.params;
  const found = data.findIndex((task) => task.id === Number(id));
  data[found].task = task;
  res.json({ success: true, payload: data[found] }).status(200);
};

const deleteTaskByID = (req, res) => {
  const { id } = req.params;
  const numberID = Number(id);
  const found = data.findIndex((task) => task.id === numberID);

  console.log({ found, numberID });
  // if (found != null) {
  if (!null) {
    const deletedTask = data.splice(found, 1);
    console.log('deleted', deletedTask);
    res.json({ success: true, payload: deletedTask }).status(200);
  } else {
    res
      .json({ success: false, payload: 'Could not find task for deletion' })
      .status(404);
  }
};

export { getTasks, getTaskByID, createTask, updateTaskByID, deleteTaskByID };

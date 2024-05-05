// Define the structure of each task item
interface Task {
	content: string;
	done: boolean;
  }
  
  // Define the state structure
  export const state = (): { tasks: Task[] } => ({
	tasks: []
  });
  
  // Mutation types for better autocompletion and error checking
  export const mutations = {
	ADD_TASK(state: { tasks: Task[] }, task: string) {
	  const newTask: Task = { content: task, done: false };
	  state.tasks = [newTask, ...state.tasks];
	},
	REMOVE_TASK(state: { tasks: Task[] }, task: Task) {
	  const index = state.tasks.indexOf(task);
	  if (index !== -1) {
		state.tasks.splice(index, 1);
	  }
	},
	TOGGLE_TASK(state: { tasks: Task[] }, task: Task) {
	  task.done = !task.done;
	}
  };
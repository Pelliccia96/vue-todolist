const { createApp } = Vue;

createApp({
    data () {
      return {
        title: "To Do List",
        taskList: [],
        newTask: {
            text: "",
            done: null,
        },
      };
    },
    methods: {
        onSubmit () {
            this.taskList.push({
                text: this.newTask.text,
                done: this.newTask.text,
            });
            this.newTask.text = "";
        },
        deleteTask(index) {
            this.taskList.splice(index, 1);
        },
        clearAll() {
            this.taskList = [];
        },
    },
}).mount("#app");

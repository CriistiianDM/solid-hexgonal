import AddEvent from "./application/controllers/controller";

const addTask = new AddEvent({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: () => {
        alert("Im Best!!!")
    }
});

const initForm = new AddEvent({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: (e) => {
        console.log("aaaaaaaa")
        e.preventDefault();
        alert("This Form")
    }
});


/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
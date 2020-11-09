export const choose = (worker) => ({type: 'CHOOSE', worker});

export const changeDate = (value, worker) => ({type: "CHANGE_DATE", value, worker});

export const changeSex = (value, worker) => ({type: "CHANGE_SEX", value, worker});

export const changeFired = (worker) => ({type: "CHANGE_FIRED", worker});

export const changeName = (value, worker) => ({type: "CHANGE_NAME", value, worker});

export const changePosition = (value, worker) => ({type: "CHANGE_POSITION", value, worker});

export const deleteWorker = (worker) => ({type: "DELETE_WORKER", worker});

export const addWorker = () => ({type: "ADD_WORKER"});
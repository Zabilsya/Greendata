export const choose = (worker) => ({type: 'CHOOSE', value: worker});

export const changeDate = (date) => ({type: "CHANGE_DATE", value: date});

export const changeSex = (value) => ({type: "CHANGE_SEX", value});

export const changeFired = () => ({type: "CHANGE_FIRED"});

export const changeName = (value) => ({type: "CHANGE_NAME", value});

export const changePosition = (value) => ({type: "CHANGE_POSITION", value});

export const deleteWorker = () => ({type: "DELETE_WORKER"});

export const addWorker = () => ({type: "ADD_WORKER"});
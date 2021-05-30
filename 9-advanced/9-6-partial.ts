{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    }

    function updateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {...toDo, ...fieldsToUpdate};
    }

    const toDo: ToDo = {
        title: 'study',
        description: 'listen dream coding lecture',
        label: 'red',
        priority: 'high'
    }

    const updatedToDo = updateToDo(toDo, {title: 'coding study'});
    console.log(updatedToDo);
}
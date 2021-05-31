"use strict";
{
    function updateToDo(toDo, fieldsToUpdate) {
        return Object.assign(Object.assign({}, toDo), fieldsToUpdate);
    }
    const toDo = {
        title: 'study',
        description: 'listen dream coding lecture',
        label: 'red',
        priority: 'high'
    };
    const updatedToDo = updateToDo(toDo, { title: 'coding study' });
    console.log(updatedToDo);
}

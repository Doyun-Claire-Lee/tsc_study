{
    type ToDo = {
        title: string;
        description: string;
    }

    function display(toDo: Readonly<ToDo>) {
        // toDo.title = 'change';   // Readonly Type으로 받아왔기 때문에 수정할 경우 에러가 발생함.
    }
}
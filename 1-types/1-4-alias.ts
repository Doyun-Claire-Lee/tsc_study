{
    /*
     * Type Aliases
     * 다양한 타입을 만들어 지정할 수 있음.
     */

    type Text = string;
    const name: Text = "ellie";
    const address: Text = "korea";
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'ellie',
        age: 12
    };

    /*
     * String Literal Type
     * 값 자체를 타입으로 결정할 수 있음.
     */

    type Name = "name";
    let ellieName: Name;
    ellieName = 'name';
    type JSON = 'json'
    const json: JSON = 'json';





}
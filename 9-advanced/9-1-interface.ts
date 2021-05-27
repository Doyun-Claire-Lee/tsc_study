type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

/* Can be both */
// 1. Object
const obj1: PositionType = {
    x: 1,
    y: 2
};

const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3
};

// 2. class
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

/* extends */
interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & {z: number};

// only interfaces can be merged.
interface PositionInterface {
    z: number;
}
// type PositionType = {} 에러 발생

/* Type aliases can use computed properties */
// 인터페이스로는 불가능한 작업들
type Person = {
    name: string;
    age: number;
}
type Name = Person['name']; // string
type NumberType = number;   // 단순 타입
type Direction = 'left' | 'right';  // Union Type

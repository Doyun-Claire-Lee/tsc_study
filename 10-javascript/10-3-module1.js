/*
 * 내보내고자 하는 변수, 함수 앞에 export 키워드를 붙여서 사용
 * default 라는 키워드는 한 파일 내에 한 번만 사용 가능
 */

export default function add(a, b) {
    return a + b;
}
export const number = 123;
export function print() {
    console.log('print');
}


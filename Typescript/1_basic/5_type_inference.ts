/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;
booleanType = 'false'; // string 넣으려고 하니까 에러남

const constStringType = 'const string';
// string 타입이 나올줄 알았는데
// "const string" 타입이 나옴.
// "const string" 이라는 글자만 입력할 수 있다는 뜻
// == 스트링 리터럴 타입!
const constBooleanType = true;

let yuJin = {
  name: '안유진',
  year: 2003,
};

const yuJin2 = {
  name: '안유진',
  year: 2003,
};
// 타입 추론돼서 타입이 구체적으로 될 줄 알았는데
// 그냥 string, number임
yuJin2.name = '변경'; // 됨

// 객체에서 각 property 를 좀 더 구체화 된 타입으로 유추하고 싶을 때는
// 끝에 캐스팅을 해줘야함
const yuJin3 = {
  name: '안유진' as const,
  year: 2003 as const,
};
// 이렇게 캐스팅해주면 name 은 구체적인 '안유진'이라는 타입이됨
yuJin3.name = '변경'; // 안됨
yuJin3.name = '안유진'; // 됨

// 아주 훌륭한 기능! typeScript 쓰면 데이터의 타입의 흐름을 정확하게 파악할 수 있다!

/**
 * Array
 *
 * Array 도 타입 추론이 잘 됨
 */
let numbers = [1, 2, 3, 4, 5]; // :number[]
let numbersAndString = [1, 2, 3, '4', '5', '6']; // (string | number)[]

numbers.push('6');
const number = numbers[0];
// 0번째 인덱스가 숫자 1이니까 number 라고 추론까지는 안하고
// number | string 이다.까지만 추론함
const nos = numbersAndString[0];
const nos2 = numbersAndString[6];
// 5번 인덱스까지 밖에 없는데 인지 못함
// 타입스크립트는 array 선언했을 때 길이 넘는 인덱스 가져왔는지 모른다

const twoNumbers = [1, 3] as const;
const oneNumber = twoNumbers[0];
// 캐스팅을 해주니까 1인거까지 추론함
// 이거 tuple
// 정확히 몇번째에 무슨 값이 있어야하는지 정확히 알 수 있음!
const first = twoNumbers[3];
// tuple 은 없는 값 가져오면 바로 에러난다

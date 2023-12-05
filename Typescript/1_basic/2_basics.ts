/**
 * Types
 */
let helloText: string = 'Hello';
// helloText = true;

/**
 * JS 에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(9999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS 에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키 타입
let anyVar: any;
anyVar = 100;
anyVar = 'any';
anyVar = true;

// any 는 다른 어떤 타입의 변수에도 할당할 수 있다!
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = 'unknown';
unknownType = true;

// any 와 가장 큰 차이는 이렇게 다른 타입 변수에는 할당할 수 없다는 것
let testNumber2: number = unknownType;
let testString2: string = unknownType;
let testBoolean2: boolean = unknownType;
// unknown, any 타입에만 할당 가능
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
let neverType: never = null;
let neverType: never = undefined;
let neverType: never = 'test';

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['a', 'b', 'c'];
const booleanList: boolean[] = [true, false, true];

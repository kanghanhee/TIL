"use strict";
/**
 * Types
 */
let helloText = 'Hello';
// helloText = true;
/**
 * JS 에 존재하는 타입
 * 7개의 타입
 */
const stringVar = 'String';
const numberVar = 3;
const bigIntVar = BigInt(9999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS 에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키 타입
let anyVar;
anyVar = 100;
anyVar = 'any';
anyVar = true;
// any 는 다른 어떤 타입의 변수에도 할당할 수 있다!
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = 'unknown';
unknownType = true;
// any 와 가장 큰 차이는 이렇게 다른 타입 변수에는 할당할 수 없다는 것
let testNumber2 = unknownType;
let testString2 = unknownType;
let testBoolean2 = unknownType;
// unknown, any 타입에만 할당 가능
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
let neverType = null;
let neverType = undefined;
let neverType = 'test';
/**
 * 리스트 타입
 */
const koreanGirlGroup = ['a', 'b', 'c'];
const booleanList = [true, false, true];

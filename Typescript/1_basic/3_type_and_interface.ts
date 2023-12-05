/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS 의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: '안유진',
  year: 2002,
};

/**
 * Interface
 *
 * 인터페이스와 타입은 겹치는 점이 굉장히 많다.
 * 인터페이스가 타입보다 훨씬 나중에 생겨난 개념임.
 * 타입과 가장 큰 차이는 interface는 기본적으로 객체 형태임
 * 따라서 타입처럼 그냥 primitive 를 나열할 수는 없음
 */
// 타입은 type 이름 = {} 처럼 = 이 있는데 인터페이스는 그냥 쓰면됨
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2002,
};

// 직접 만든 새로운 타입으로도 만들 수 있음
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: '안유진',
  year: 2002,
};

// 옵셔널 가능(type 정의에도 가능)
interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: '안유진',
};

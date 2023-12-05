/**
 * Enum 타입
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */
function runWork() {
  let state = 'INITIAL';

  try {
    state = 'LOADING';
    // 작업을 한다.

    state = 'DONE';
  } catch (error) {
    state = 'ERROR';
  } finally {
    return state;
  }
}

console.log(runWork() === 'DONNE');
// 스펠링 오류 날 가능성 큼
// 선언해서 쓰면 오류 좀 줄어듬

const startState = 'INITIAL';
const loadingState = 'LOADING';
const doneState = 'DONE';
const errorState = 'ERROR';

function runWork2() {
  let state = startState;

  try {
    state = loadingState;
    // 작업을 한다.

    state = doneState;
  } catch (error) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);

// 여기서 한 단계 나아간 것이 Enum
enum State {
  DONE,
  LOADING,
  INITIAL,
  ERROR,
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (error) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()); // DONE 아니고 0임
// string 으로 하고 싶으면
enum StateString {
  DONE = 'DONE',
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
  ERROR = 'ERROR',
}

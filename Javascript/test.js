const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
for (const a of iterable) console.log(a);

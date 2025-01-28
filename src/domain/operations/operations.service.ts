export function CreateList(times: number): {id: number, message: string}[] {
  let list = [];
  let count = 0;
  while (times > count) {
    list.push({
      id: count + 1,
      message: `This is the message number ${count + 1}`,
    });
    count++;
  }
  return list;
}

export function FibonacciSum(n: number): number {
  let fib = []
  if (n <= 0) {
    return 0
  }
  fib.push(0)
  fib.push(1)
  let sum = fib[0] + fib[1]
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
    sum += fib[i]
  }
  return sum
}

export function FibonacciList(n: number): number[] {
  let fib = []
  if (n < 0) {
    return []
  } else if (n == 0) {
    return [0]
  }
  fib.push(0)
  fib.push(1)
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
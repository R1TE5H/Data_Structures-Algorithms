function fibonacci(iterations: number): number[] {
  if (!Number.isInteger(iterations) || iterations <= 0) {
    throw new Error("Iterations should be a positive integer");
  }

  const sequence: number[] = [];
  let n1: number = 0;
  let n2: number = 1;

  for (let i = 0; i < iterations; i++) {
    sequence.push(n1);
    const nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return sequence;
}

try {
  const result = fibonacci(10);
  console.log(result);
} catch (e) {
  console.error(e);
}

const a = 200;

function add(n1, n2): number {
  return n1 + n2;
}

add(a, 1);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function isEqual(n1: number, n2: number) {
  return n1 === n2;
}

isEqual(1, 1);

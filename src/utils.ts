import { BinaryHeapType, IMapWeight } from './reducers';

export function _parent(n) {
  return Math.floor((n + 1) / 2) - 1;
}

export function _left(n) {
  return (n + 1) * 2;
}

export function _right(n) {
  return _left(n) - 1;
}

export function _bubbleUp(
  n,
  mapWeights: IMapWeight<any>,
  type: BinaryHeapType
) {
  const element = this[n];
  const score = mapWeights(element);

  while (n > 0) {
    const parentN = _parent(n);
    const parent = this[parentN];

    if (
      (type === BinaryHeapType.MIN && score >= mapWeights(parent)) ||
      (type === BinaryHeapType.MAX && score <= mapWeights(parent))
    ) {
      break;
    }

    this[parentN] = element;
    this[n] = parent;
    n = parentN;
  }
}

export function _sinkDown(
  n,
  mapWeights: IMapWeight<any>,
  type: BinaryHeapType
) {
  const length = this.length;
  const element = this[n];
  const elemScore = mapWeights(element);

  while (true) {
    const leftChild = _left(n);
    const rightChild = _right(n);
    let swap = null;
    let child1Score;

    if (rightChild < length) {
      let child1 = this[rightChild];
      child1Score = mapWeights(child1);
      if (type === BinaryHeapType.MIN && child1Score < elemScore) {
        swap = rightChild;
      } else if (type === BinaryHeapType.MAX && child1Score > elemScore) {
        swap = rightChild;
      }
    }

    if (leftChild < length) {
      let child2 = this[leftChild],
        child2Score = mapWeights(child2);

      if (
        type === BinaryHeapType.MIN &&
        child2Score < (swap === null ? elemScore : child1Score)
      ) {
        swap = leftChild;
      } else if (
        type === BinaryHeapType.MAX &&
        child2Score > (swap === null ? elemScore : child1Score)
      ) {
        swap = leftChild;
      }
    }

    if (swap === null) break;

    this[n] = this[swap];
    this[swap] = element;
    n = swap;
  }
}

export function _heapify(
  array,
  mapWeights: IMapWeight<any>,
  type: BinaryHeapType
) {
  const bubble = _bubbleUp.bind(array);
  const sink = _sinkDown.bind(array);
  const l = array.length;
  for (let rootIndex = _parent(l); rootIndex >= 0; rootIndex--) {
    bubble(rootIndex, mapWeights, type);
    sink(rootIndex, mapWeights, type);
  }
}

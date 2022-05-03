/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0;
  let currL1 = l1;
  let currL2 = l2;

  let resultHead: ListNode = { val: -1, next: null };
  let currRes = resultHead;

  while (currL1 || currL2 || carry > 0) {
    const sum = (currL1?.val || 0) + (currL2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    const newNode = {
      val: digit,
      next: null,
    };
    currRes.next = newNode;
    currRes = newNode;
    currL1 = currL1?.next || null;
    currL2 = currL2?.next || null;
  }
  return resultHead.next;
}

export function addTwoNumbersRecursive(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
  if (!l1 && !l2 && carry === 0) return null;
  const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
  const nextCarry = Math.floor(sum / 10);
  const digit = sum % 10;
  const res: ListNode = {
    val: digit,
    next: addTwoNumbersRecursive(l1?.next || null, l2?.next || null, nextCarry),
  };
  return res;
}

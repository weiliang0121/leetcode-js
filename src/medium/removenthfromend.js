/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

// [1, 2, 3, 4, 5] 2

// 耗内存极大
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_arr = function (head, n) {
  let cur = head;

  const nodes = [];

  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  const i = nodes.length - n;
  if (i === 0) return head.next;
  nodes[i - 1].next = nodes[i - 1].next.next;

  return head;
};

// 快慢指针？确实是扫描一遍 空间也小 ???//??????????/

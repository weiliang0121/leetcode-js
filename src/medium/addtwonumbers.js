/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const h = new ListNode();
  let cur = h;
  let p = l1;
  let q = l2;

  let carry = 0;
  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;

    const sum  = carry + x + y;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (p) p = p.next;
    if (q) q = q.next;
  }

  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return h.next;
};

// 针对链表游走 返回新链表 一般是需要一个指向头指针的表头指针 一个生成链表的游走指针
// 循环的条件 是思考的重点
// 不要忘记更新指针
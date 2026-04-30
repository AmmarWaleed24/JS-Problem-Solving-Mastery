/**
 * Problem: Merge Two Sorted Lists
 * Description: Merge two sorted linked lists into one sorted list.
 * Complexity: Time O(n + m) | Space O(1)
 */

function mergeTwoLists(list1, list2) {
    // إنشاء عقدة وهمية (Dummy Node) لتبسيط عملية البناء
    let dummy = { val: -1, next: null };
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // إذا انتهت إحدى القائمتين، ألحق ما تبقى من القائمة الأخرى
    current.next = list1 === null ? list2 : list1;

    return dummy.next;
}

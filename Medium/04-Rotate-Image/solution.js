/**
 * Problem: 04. Rotate Image
 * Description: Rotate a square matrix by 90 degrees (clockwise) in-place.
 * Technique: Transpose + Reverse
 * Complexity: Time O(n^2) | Space O(1)
 */

function rotate(matrix) {
    const n = matrix.length;

    // الخطوة الأولى: Transpose (تبديل الصفوف بالأعمدة)
    // بنخلي matrix[i][j] مكان matrix[j][i]
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // الخطوة الثانية: Reverse كل صف
    // بنعكس ترتيب العناصر في كل صف عشان نحقق الدوران 90 درجة
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

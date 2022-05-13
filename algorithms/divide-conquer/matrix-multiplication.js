function multiply(A, B, C) {
    for (let i = 0; i <= A.length; i++) {
        for (let j = 0; j <= B.length; j++) {
            C[i][j] = 0;
            for (let k = 0; k <= C.length; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

module.exports = multiply
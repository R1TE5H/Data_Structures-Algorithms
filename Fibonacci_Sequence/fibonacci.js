function fibonacci(iterations) {
    if (!Number.isInteger(iterations) || iterations <= 0) {
        throw new Error("Iterations should be a positive integer");
    }
    var sequence = [];
    var n1 = 0;
    var n2 = 1;
    for (var i = 0; i < iterations; i++) {
        sequence.push(n1);
        var nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return sequence;
}
try {
    var result = fibonacci(10);
    console.log(result);
}
catch (e) {
    console.error(e);
}

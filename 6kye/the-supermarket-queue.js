// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//     input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required
// assert.strictEqual(queueTime([], 1), 0);
// assert.strictEqual(queueTime([1,2,3,4], 1), 10);
// assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
// assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);

const queueTime = (customers, n) => {
    const tail = new Array(n).fill(0)
    for (let i = 0; i < customers.length; i++) {
        const index = tail.indexOf(Math.min(...tail))
        tail[index] += customers[i]
    }
    return Math.max(...tail)
}

console.log(queueTime([2,2,3,3,4,4], 2))
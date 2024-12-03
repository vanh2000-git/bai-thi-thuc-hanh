function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = +prompt("Nhập số lượng phần tử của mảng (n <= 50): ");
if (n <= 50 && n > 0) {
    let a = [];
    let b = [];

    for (let i = 0; i < n; i++) {
        let value = +prompt(`Nhập phần tử thứ ${i + 1} của mảng: `);
        a.push(value);
    }

    console.log("Mảng a vừa nhập: ", a);

    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i])) {
            b.push(a[i]);
        }
    }

    console.log("Mảng b chứa các số nguyên tố: ", b);
} else {
    console.log("Số lượng phần tử mảng phải từ 1 đến 50.");
}

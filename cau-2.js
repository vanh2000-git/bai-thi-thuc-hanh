function areFractionsEqual(a1, b1, a2, b2) {
    return a1 * b2 === a2 * b1;
}

let a1 = +prompt("Nhập tử số của phân số thứ nhất: ");
let b1 = +prompt("Nhập mẫu số của phân số thứ nhất: ");
let a2 = +prompt("Nhập tử số của phân số thứ hai: ");
let b2 = +prompt("Nhập mẫu số của phân số thứ hai: ");


if (areFractionsEqual(a1, b1, a2, b2)) {
    console.log(`Hai phân số ${a1}/${b1} và ${a2}/${b2} là bằng nhau.`);
} else {
    console.log(`Hai phân số ${a1}/${b1} và ${a2}/${b2} là không bằng nhau.`);
}
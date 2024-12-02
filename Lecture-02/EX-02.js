function equation(text) {
    text = text.split(/(?=[+\-*/])|(?<=[+\-*/])/); // แยกตัวเลขและตัวดำเนินการ
    let sum = [];
    let iterationLimit = 100; // จำกัดจำนวนรอบเพื่อป้องกันลูปค้าง

    while (text.length > 1 && iterationLimit-- > 0) {
        for (operator of ['*', '/', '+', '-']) {
            let index = text.indexOf(operator);
            if (index >= 0) {
                let a = parseFloat(text[index - 1]);
                let b = parseFloat(text[index + 1]);
                let result;

                switch (operator) {
                    case '*': result = a * b; break;
                    case '/': result = a / b; break;
                    case '+': result = a + b; break;
                    case '-': result = a - b; break;
                }

                text.splice(index - 1, 3, result); // แทนค่าที่คำนวณแล้วกลับเข้า array
                break; // ออกจากลูป `for` เพื่อเริ่มประมวลผลใหม่
            }
        }
    }

    if (iterationLimit <= 0) {
        throw new Error("Infinite loop detected! Please check the input format.");
    }

    console.log(text[0])
    return text[0]; // ผลลัพธ์สุดท้ายอยู่ใน text[0]
}



// ทดสอบการทำงาน
equation("1+1"); // 2
equation("7*4-2"); // 26
equation("1+1+1+1+1"); // 5

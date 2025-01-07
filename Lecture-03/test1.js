let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];

function check(values1, values2, values3) {
    for (let index = 0; index < values1.length; index++) {
        if (values1[index] === values2[index]) {
            console.log(values1[index] + "เหมือนกับ" + values2[index]);
        } 
        else if (values1[index] === values3[index]) {
            console.log(values1[index] + "เหมือนกับ" + values3[index]);
        }
        else{
            console.log("ไม่มี")
        }
        
    }
}

check(values1, values2, values3);


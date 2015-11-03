//1, let data=[1,2,3,4,5,6,7,8,9,10],求数组中平方大于20的所有元素的和。
/*
Array.prototype.sum = function() {
  return this.reduce(function(l,r){
    return l+r;
  });
};


let data1 = [1,2,3,4,5,6,7,8,9,10];
let result = data1.map(e =>(e*e)).filter(e => (e>20)).sum();
//console.log(result);



Array.prototype.sum = function() {
  return this.reduce(function(l,r){
    return l+r;
  });
};

String.prototype.
console.log("start ...");
console.log([1,2,3,4].sum());
console.log("end ...");

*/

//2,  let data=["ab33c","edf","ssff","eee"]; 打印长度大于3的所有元素，并且首字母大写。



/*
//4,
let data4 =[{age:20,name: "Tom",address:"xxxx",dogs:[{name:"aa",age:2}]},
            {age:15,name: "Kimi",address:"Axxx",dogs:[{name:"aa",age:1}]},
            {age:16,name: "Tim",address:"abcd",dogs:[{name:"aa",age:1},{name:"aa",age:3}] },
            {age:23,name: "Sherry",address:"xxxx",dogs:[{name:"aa",age:3}] }];


// 4.1 求所有名字長度等於3，年齡小於18且地址首字母大寫的人有多少條狗
// 4.2 求名字首字母爲T的人狗的年齡總和
//4.3 求名字長度大於3小於7，且只有1條狗的人的地址
//4.4按照年齡從小到大打印所有人的名字，並且所有字母大寫
//4.5 求有一條狗的年紀大於2的人的名字
//4.6求所有狗年紀都大於2的人的名字
//let [age,name,address,dogs] = data4;
data4.map(e=>console.log(e.age));
//console.log(age);


let result1 =  data4.filter (e=>(e.name.length==4))
    .filter(e=>e.age<18)
    .filter(e=>e.address.slice(0,1).toUpperCase()===e.address.slice(0,1));



let [res] = result1;
//let [dogs] = res.dogs;
//console.log(dogs.name);


let ages=[];
let age = data4.map (e => ages.push(e.age));
console.log(ages);


if(ages.every(e => e>20)){
    console.log(`[${ages}]>20`);
}else{
    console.log(`[${ages}] is not every one more than 20`);
}

console.log(ages.lastIndexOf(23));

let dogs = data4.map(e => console.log(e.dogs));

var matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
let dogres =matrix.reduceRight((previous,crrent) => previous.concat(crrent));
console.log(dogres);

*/


//ES5中新增了写数组方法，如下：
//forEach (js v1.6)
//map (js v1.6)
//filter (js v1.6)
//some (js v1.6)
//every (js v1.6)
//indexOf (js v1.6)
//lastIndexOf (js v1.6)
//reduce (js v1.8)
//reduceRight (js v1.8)

/*
//1,找出元素 item 在给定数组 arr 中的位置
function indexOf(arr, item) {
        return arr.indexOf(item);
}

//2,计算给定数组 arr 中所有元素的总和
function sum(arr) {
    return arr.reduce((a,b)=>a+b);
}

let sum1 = sum([1,2,3,4,5]);
//console.log(sum1);

//3,移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组




function remove(arr,item) {
    return arr.filter(e=>e!=item);
}

console.log(remove([1, 2, 3, 4, 2],2));
//remove([1, 2, 3, 4, 2],2);

//remove([1, 2, 3, 4, 2], 2);



//5,在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
    return console.log(arr.concat(item));
}

append([1, 2, 3, 4],  10);



//6, 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

function truncate(arr) {
    return console.log(arr.slice(0,arr.length-1));
}

truncate([1, 2, 3, 4]);



//7,在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组


//8, 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
function curtail(arr) {
    return console.log(arr.slice(1,arr.length));
}

curtail([1, 2, 3, 4]);


//9,合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

function concat(arr1, arr2) {
    return console.log(arr1.concat(arr2));
}

concat([1, 2, 3, 4], ['a', 'b', 'c', 1]);


//10, 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {
    let pre_arr =  arr.slice(0,index);
    let post_arr = arr.slice(index);
    let result = pre_arr.concat(item,post_arr);
  //    let result = [...pre_arr, item, ...post_arr];
    return result;
}
let data = [11, 22, 33, 44];
console.log(insert([1, 2, 3, 4], 'z', 2));

*/


//11, 统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {

    let new_arr = arr.filter(function(e) {
        return e == item;
   });
    return [new_arr,arr];

}

console.log(count([1, 2, 4, 4, 3, 4, 3], 4));

let data = ['aaa','ddd'];
console.log(data.valueOf(0,'ccc'));

const twoSum = (arr: number[], target: number): number[] | undefined => {
    if (arr.length < 2) return;

    let hashMap: Map<number, number> = new Map();

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let targetNum = target - curNum;
        if (hashMap.has(targetNum)) {
            let mapValue = hashMap.get(targetNum)!;
            return [i, mapValue];
        } else {
            hashMap.set(arr[i], i);
        }
    }
};

let arr1 = [4, 9, 6, 2, 7, 8, 1];
let target1 = 20;
// let target1 = 5;

let result = twoSum(arr1, target1);

console.log("result :>> ", result);

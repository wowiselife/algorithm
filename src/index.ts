
const isAnagram = (str1: string, str2: string): boolean => {

  if (str1.length !== str2.length) return false

  let anagramMap: Map<string, number> = new Map()

  for (let i = 0, length = str1.length; i < length; i++) {
    if (anagramMap.has(str1[i])) {
      // 问题一、键值不是使用str[i]
      // anagramMap.set(str1, anagramMap.get(str1[i]) + 1)
      // 问题三、直接获取 map 的值，会报错
      // anagramMap.set(str1[i], anagramMap.get(str1[i]) + 1)
      let char = str1[i]
      anagramMap.set(str1[i], (anagramMap.get(char) || 0) + 1)
    } else {
      anagramMap.set(str1[i], 1)
    }

    // 问题二、这里使用了str2[1]，而不是str2[i]
    // if (anagramMap.has(str2[1])) {
    if (anagramMap.has(str2[i])) {
      // anagramMap.set(str2[i], anagramMap.get(str2[i]) - 1)
      let char = str2[i]
      anagramMap.set(str2[i], (anagramMap.get(char) || 0) - 1)
    } else {
      anagramMap.set(str2[i], -1)
    }

  }

  let anagramArr = Array.from(anagramMap.values())

  return anagramArr.every((item) => item === 0)
}

// let str1 = 'qweadsczx', str2 = 'qazewdscx'
// let str1 = 'qweadsczxrvf', str2 = 'qazewdscrfvx'
let str1 = 'qweadsczxrvf', str2 = 'qazewdsclfvx'

let result = isAnagram(str1, str2)

console.log('result >>', result);
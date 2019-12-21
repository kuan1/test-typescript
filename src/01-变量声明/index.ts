// /**
//  * 声明格式
//  * 语法：(变量/函数): type
//  */

// // 原始类型
// let bool: Boolean = true
// let hello: String = 'hello typescript'
// let num: Number = 1234
// let n: Boolean | undefined | Number = 3

// // 数组类型
// let arr: number[] = [1, 2, 3, 4, 5]
// let arr2: Array<number | string> = [1, '2', 3, 4, 5]

// // 元组，可以使用push, 但是不可以访问
// let tuple: [number, string] = [1, '2']
// tuple.push(2)
// // console.log(tuple, tuple[2])

// // 函数声明
// let add = (x: number, y: number) => x + y

// // 对象类型
// let obj: { x: number, y: number } = { x: 1, y: 2 }

// // Symbol
// let s: symbol = Symbol()

// // undefind/null
// let a: null = null
// let b: undefined = undefined

// // void
// let noReturn = () => { }

// // any
// let c = 1
// c = 2
// c = 3

// // never
// let error = () => {
//   throw new Error()
// }

// // enum 数字枚举 可以反向映射
// enum Role {
//   a = 1,
//   b,
//   c,
//   d
// }

// // 数字枚举 不可以反向映射
// enum Role2 {
//   a = '测试',
//   b = '测试2'
// }


// // 常量枚举 只可以访问属性
// const enum Role3 {
//   a,
//   b,
//   c
// }

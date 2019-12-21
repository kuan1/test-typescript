// /**
//  * 范型
//  */

// // 范型函数
// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }

// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// // type Log = <T>(value: T) => T

// // const myLog: Log = log


// // 范型接口
// interface Log<T = string> {
//   (value: T): T
// }

// let myLog: Log<number> = log

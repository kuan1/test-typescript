// interface Item {
//   readonly id: number,
//   name: string | number,
//   age?: string | number
//   // [x: string]: any
// }

// interface Result {
//   data: Item[]
// }

// function render(res: Result) {
//   const item: Item = res.data[0] || {}
//   if (item.age) {
//     console.log(item.age)
//   }
//   console.log(res)
// }

// let res: Result = {
//   data: [{ id: 1, name: "test", age: 3 }]
// }

// render(res)

// // render({
// //   data: [{ id: 1, name: "test", age: 3, age2: 30 }]
// // })



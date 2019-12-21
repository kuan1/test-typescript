// /**
//  * ts中类
//  */

// class Dog {
//   constructor(name: string) {
//     this.name = name
//   }
//   name: string
//   run() { }
//   // 只能当前类访问
//   private pri() { }
//   // 继承访问或者当前类访问
//   protected pro() { }
//   // 只读
//   readonly a: number = 10
//   // 静态方法
//   static s() { }
// }

// console.log(Dog.prototype)

// const d = new Dog('aa')
// // d.pri()
// // d.pro()
// // Dog.s()

// console.log(d)


// class Husky extends Dog {
//   constructor(props: string, public color: string) {
//     super(props)
//     this.color = color
//   }
// }

/**
 * 条件类型
 */

// T extends U ? X : Y
type TypeName<T> = T extends string
	? 'string'
	: T extends number
	? 'number'
	: T extends boolean
	? 'boolen'
	: T extends undefined
	? 'undefined'
	: T extends Function
	? 'function'
	: 'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

type Diff<T, U> = T extends U ? never : T

type T3 = Diff<'a' | 'b' | 'c', 'b'>

type T4 = Extract<'a' | 'b', 'b' | 'c'>

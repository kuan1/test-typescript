declare function globalLib(options: globalLib.Options): void

declare namespace globalLib {
	const version: number | string
	function doSomething(): void
	interface Options {
		[key: string]: any
	}
}

export = globalLib

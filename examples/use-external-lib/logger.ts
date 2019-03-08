// use .d.ts from @types/chalk
import chalk from 'chalk'

/**
 * 第三方库没有类型声明文件时，可以
 * 使用自定义类型声明或通过dts-gen生成类型声明。
 * 且需在package.json中通过types字段进行引入：
 * "types": "types/envinfo.d.ts"
 */
import envinfo from 'envinfo'


interface Options {
  prefix?: string
}

class Logger {
  options: Options

  constructor (options?: Options) {
    this.options = options || {prefix: 'Vot'}
  }

  setOptions(options: Options) {
    Object.assign(this.options, options)
  }

  log (...args: any[]) {
    console.log(chalk.white(this.options.prefix), ...args)
  }
  warn (...args: any[]) {
    console.log(chalk.yellow(this.options.prefix), ...args)
  }
  fatal (...args: any[]) {
    console.log(chalk.cyan(this.options.prefix), ...args)
  }
  success (...args: any[]) {
    console.log(chalk.green(this.options.prefix), ...args)
  }
}

export default new Logger()

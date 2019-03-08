// use .d.ts from @types/chalk
import chalk from 'chalk'

/**
 * 第三方库没有类型声明文件时，可以
 * 使用自定义类型声明或通过dts-gen生成类型声明。
 * 且需在package.json中通过types字段进行引入：
 * "types": "types/envinfo.d.ts"
 */
import envinfo from 'envinfo'

class Logger {
  log () {

  }
  fatal () {

  }
}
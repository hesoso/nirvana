/** 基本主题 */
type BaseTheme = 'dark' | 'light'

/** 通用函数 */
type BaseFunc = (args: ArgsProps) => void

/** 面包屑导航item类型 */
type BaseBreadcrumbType = {
  key: string
  title: string
  icon?: string
}

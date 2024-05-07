/**
 * 图片加载组件属性
 */
export interface LoadImageProps {
  /**
   * 展位图
   */
  defaultImage: string

  /**
   * 是否使用Webp格式
   */
  useWebp: boolean

  /**
   * 图片裁剪、缩放的模式
   */
  mode: string

  /**
   * 图片加载分辨率-宽度
   */
  width?: number

  /**
   * 开启图片懒加载
   */
  lazyLoad: boolean

  /**
   * 图片地址
   */
  src: string
}

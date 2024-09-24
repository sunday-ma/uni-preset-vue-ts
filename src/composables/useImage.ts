/**
 * 预览图片
 * @param {number} current - 当前显示图片的链接/索引值
 * @param {string[]} urls - 需要预览的图片链接列表
 */
function preview(current: number, urls: string[]) {
  uni.previewImage({
    current,
    urls,
  })
}

export function useImage() {
  const tempFiles = ref<UniApp.MediaFile[]>([])

  /**
   * 选择图片
   * @param {number} total - 最多可以选择的文件个数 默认9个文件
   */
  function choose(total: number = 9) {
    uni.chooseMedia({
      count: total,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      success: (res) => {
        tempFiles.value = tempFiles.value?.concat(res.tempFiles) ?? res.tempFiles
      },
    })
  }

  /**
   * 移除图片
   * @param {string} path - 图片路径
   */
  function remove(path: string) {
    uni.showModal({
      title: '提示',
      content: '是否删除该图片？',
      success: (res) => {
        if (res.confirm) {
          const index = tempFiles.value.findIndex(item => item.tempFilePath === path)
          tempFiles.value.splice(index, 1)
        }
      },
    })
  }

  return {
    choose,
    remove,
    preview,
    tempFiles,
  }
}

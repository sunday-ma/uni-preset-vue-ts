export function useImage() {
  const tempFiles = ref<UniApp.MediaFile[]>([])

  function chooseImage() {
    uni.chooseMedia({
      count: 9,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      success: (res) => {
        console.log(res.tempFiles)

        tempFiles.value = tempFiles.value?.concat(res.tempFiles) ?? res.tempFiles
      },
    })
  }

  function removeImage(path: string) {
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

  function previewImage(current: number, urls: string[]) {
    uni.previewImage({
      current,
      urls,
    })
  }

  return {
    chooseImage,
    removeImage,
    previewImage,
    tempFiles,
  }
}

export function useCopy() {
  function setClipboard(text: string) {
    uni.setClipboardData({
      data: text,
      success: () => {
        uni.showToast({
          title: '复制成功',
          icon: 'none',
        })
      },
      fail: () => {
        uni.showToast({
          title: '复制失败',
          icon: 'none',
        })
      },
    })
  }

  return {
    setClipboard,
  }
}

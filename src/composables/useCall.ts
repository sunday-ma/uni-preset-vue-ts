function phoneCall(phone: string) {
  uni.makePhoneCall({
    phoneNumber: phone,
    fail: () => {
      uni.showToast({
        title: '已取消',
        icon: 'none',
        mask: true,
        duration: 500,
      })
    },
  })
}

export function useCall() {
  return {
    phoneCall,
  }
}

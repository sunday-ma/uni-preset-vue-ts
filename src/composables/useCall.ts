export function useCall() {
  function phoneCall(phone: string) {
    uni.makePhoneCall({
      phoneNumber: phone, // 仅为示例
    })
  }

  return {
    phoneCall,
  }
}

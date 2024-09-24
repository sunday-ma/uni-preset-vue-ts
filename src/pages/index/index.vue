<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页'
  },
}
</route>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { debounce, throttle } from '@/utils/lodash'
// import dayjs from 'dayjs'

// const { query } = useQuery()

const useCounter = useCounterStore()

const { phoneCall } = useCall()

const btnClick1 = throttle(() => {
  console.log('节流')
}, 1000)

const btnClick2 = debounce(() => {
  console.log('防抖')
}, 1000)

const showBottom = ref(false)
const phone = ref('')
const code = ref('')
function showPopup() {
  showBottom.value = true
}

/**
 * 摇一摇
 */
const lastTime = ref(0)
const vector = ref({
  x: 0,
  y: 0,
  z: 0,
  // lastX: 0,
  // lastY: 0,
  // lastZ: 0,
})
const shakeSpeed = ref(100)

// const vector = ref({
//   lastX: 0,
//   lastY: 0,
//   lastZ: 0,
// })

// const shakeThreshold = ref(5)

function shake(res: UniNamespace.OnAccelerometerChangeSuccess) {
  const nowTime = new Date().getTime()
  if (nowTime - lastTime.value > 100) {
    const diffTime = nowTime - lastTime.value
    lastTime.value = nowTime
    vector.value.x = res.x
    vector.value.y = res.y
    vector.value.z = res.z

    // const speed = Math.abs(vector.value.x + vector.value.y + vector.value.z - vector.value.lastX - vector.value.lastY - vector.value.lastZ) / diffTime * 10000
    const speed = Math.abs(vector.value.x + vector.value.y + vector.value.z) / diffTime * 10000

    if (speed > shakeSpeed.value) {
      uni.offAccelerometerChange(shake)
      uni.vibrateLong({
        success: () => {
          console.log('success')
          uni.stopAccelerometer()
        },
      })
      // vector.value.lastX = vector.value.x
      // vector.value.lastY = vector.value.y
      // vector.value.lastZ = vector.value.z
    }
  }
  // const { x, y, z } = res
  // const diffX = Math.abs(x - vector.value.lastX)
  // const diffY = Math.abs(y - vector.value.lastY)
  // const diffZ = Math.abs(z - vector.value.lastZ)

  // if (diffX > shakeThreshold.value || diffY > shakeThreshold.value || diffZ > shakeThreshold.value) {
  //   uni.stopAccelerometer()
  //   uni.vibrateLong({
  //     success() {
  //       console.log('success')
  //     },
  //   })
  // }

  // vector.value.lastX = x
  // vector.value.lastY = y
  // vector.value.lastZ = z
}

function handleShake() {
  uni.onAccelerometerChange(shake)
}

onLoad(() => {
  // console.log(DateTime.timeFrom('2024-09-23'))
})
</script>

<template>
  <view class="page">
    <view class="flex flex-col gap-20rpx">
      <nut-button type="primary">
        主要按钮
      </nut-button>
      <nut-button type="primary" @click="btnClick1">
        节流
      </nut-button>
      <nut-button type="primary" @click="btnClick2">
        防抖
      </nut-button>
      <nut-button type="primary" @click="showPopup">
        拉起手机号短信验证
      </nut-button>
      <nut-button type="primary" @click="handleShake">
        摇一摇
      </nut-button>
      <nut-button type="primary" @click="phoneCall('110')">
        拨打电话
      </nut-button>
      <nut-button type="primary" @click="useCounter.increment">
        {{ useCounter.count }}
      </nut-button>
    </view>

    <!-- #region 手机号短信验证 -->
    <nut-popup
      v-model:visible="showBottom"
      round
      position="bottom"
      :custom-style="{ height: '70%', background: '#F3F3F3' }"
      :close-on-click-overlay="false"
      :safe-area-inset-bottom="true"
    >
      <view class="phone-sms-verify p-58rpx">
        <view class="flex items-center" @click="showBottom = false">
          <image
            src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
            mode="aspectFill"
            class="mr-12rpx h-50rpx w-50rpx rounded-full"
          />
          <text class="text-28rpx text-#000 font-bold">
            测试小程序
          </text>
        </view>

        <view class="mt-40rpx flex flex-col">
          <text class="text-32rpx text-#000 font-bold">
            申请获取并验证你的手机号
          </text>
          <text class="mt-.5em text-24rpx text-#999">
            获取该用户相关接口数据
          </text>
        </view>

        <view class="mt-50rpx rounded-18rpx bg-#fff p-20rpx">
          <nut-input v-model="phone" :border="false" placeholder="请输入手机号" />
          <nut-input v-model="code" :border="false" placeholder="请输入验证码" />
          <view class="mt-10rpx w-100%">
            <nut-button
              type="primary"
              disabled
              :custom-style="{ width: '100%', borderRadius: '8rpx' }"
            >
              登录
            </nut-button>
          </view>
        </view>
      </view>
    </nut-popup>
    <!-- #endregion 手机号短信验证 -->
  </view>
</template>

<style lang="scss" scoped>

</style>

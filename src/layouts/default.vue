<script lang="ts" setup>
</script>

<template>
  <nut-config-provider>
    <!-- #region 全局返回顶部  -->
    <!-- <nut-backtop>
      <template #content>
        <view class="pb-safe">
          <slot />
        </view>
      </template>
    </nut-backtop> -->
    <!-- #endregion -->
    <view class="pb-safe">
      <slot />
    </view>
  </nut-config-provider>
</template>

<style>
</style>

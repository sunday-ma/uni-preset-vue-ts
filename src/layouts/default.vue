<script lang="ts" setup>
const themeVars = reactive({})
</script>

<template>
  <nut-config-provider :theme-vars="themeVars">
    <nut-backtop>
      <template #content>
        <view class="pb-safe">
          <slot />
        </view>
      </template>
    </nut-backtop>
  </nut-config-provider>
</template>

<style>
</style>

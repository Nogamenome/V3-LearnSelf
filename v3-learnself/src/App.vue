<script setup lang="ts">
import { ElNotification } from "element-plus"

/** 作者的小心思 */
ElNotification({
  title: "Hello!",
  type: "success",
  dangerouslyUseHTMLString: true,
  message: "本项目仅用作个人学习",
  duration: 0,
  position: "bottom-right",
}) 
</script>


<!-- App.vue -->
<template>
  <el-config-provider >
    <router-view />
  </el-config-provider>
</template>

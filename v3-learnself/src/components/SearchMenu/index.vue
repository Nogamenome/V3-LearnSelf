<template>
    <div>
        <el-tooltip effect="dark" content="搜索菜单" placement="bottom">
            <SvgIcon name="search" @click="handleOpen" />
        </el-tooltip>
        <SearchModal />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

/** 控制 modal 显隐 */
const modalVisible = ref<boolean>(false)
/** 打开 modal */
const handleOpen = () => {
    modalVisible.value = true
} 
</script>

<style>

</style>
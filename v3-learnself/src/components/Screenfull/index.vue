<template>
    <div>
        <!-- 全屏 -->
        <el-tooltip v-if="!content" effect="dark" :content="fullscreenTips" placement="bottom" >
            <SvgIcon :name="fullscreenSvgName" @click="handleFullscreenClick" />
        </el-tooltip> 
        <!-- 内容区 -->
        <el-dropdowm v-else :disabled="isFullscreen">
            <SvgIcon :name="contentLargeSvgName" />
        </el-dropdowm>
    </div>
</template>

<script>
import { ElMessage } from "element-plus"
import { computed, ref, watchEffect } from "vue"
import screenfull from "screenfull"

interface Props {
    /** 全屏的元素， 默认是Html */ 
    element?: string
    /** 打开全屏提示 */ 
    openTips?: string 
    /** 关闭全屏提示 */
    exitTips?: string
    /** 是否只针对内容区 */
    content?: boolean 

}

const props = withDefaults(defineProps<Props>(), {
    element: "html",
    openTips: "全屏",
    exitTips: "退出全屏",
    content: false
})

// #region 全屏
const isFullscreen = ref<boolean>(false)
const fullscreenTips = computed(() => {
    return isFullscreen.value ? props.exitTips : props.openTips
})
const fullscreenSvgName = computed(() => {
    return isFullscreen.value ? "fullscreen-exit" : "fullscreen"
})
const handleFullscreenClick = () => {
    const dom = document.querySelector(props.element) || undefined
    screenfull.isEnabled ? screenfull.toggle(dom) : ElMessage.warning("您的浏览器无法工作")
}
const handleFullscreenChange = () => {
    isFullscreen.value = screenfull.isFullscreen
    // 退出全屏时清除所有的 class
    isFullscreen.value || (document.body.className = "")
}
watchEffect((onCleanup) => {
    // 挂载组件时自动执行
    screenfull.on("change", handleFullscreenChange)
    // 卸载组件时自动执行
    onCleanup(() => {
        screenfull.isEnabled && screenfull.off("change", handleFullscreenChange)
    })
})
// #endregion

// #region 内容区
const isContentLarge = ref<boolean>(false)
const contentLargeTips = computed(() => {
    return isContentLarge.vlaue ? "内容区复原" : "内容区放大"
})
const contentLargeSvgName = computed(() => {
    return isContentLarge.vlaue ? "fullscreen-exit" : "fullscreen"
})
const handleContentLargeClick = () => {
    isContentLarge.value = !isContentLarge.value
    // 内容区放大时,将不需要的组件隐藏
    document.body.className = isContentLarge.value ? "content-large" : ""
}
const handleContentFullClick = () => {
    // 取消内容区放大
    isContentLarge.value && handleContentLargeClick()
    // 内容区全屏时，将不需要的组件隐藏
    document.body.className = "content-full"
    // 开启全屏
    handleFullscreenClick()
}
</script>

<style>

</style>
<template>
    <div class="notify" >
        <el-popover placement="bottom" :width="popoverWidth" trigger="click">
            <template #reference>
                <el-badge :value="badgeValue" :max="badgeMax" :hidden="badgeValue === 0">
                    <el-tooltip effect="dark" content="消息通知" placement="bottom">
                        <el-icon :size="20">
                            <Bell />
                        </el-icon>
                    </el-tooltip>
                </el-badge>
            </template>
            <template #default>
                <el-tabs v-model="activeTab" >
                    <el-tab-pane v-for="(item, index) in data" :key="index" :name="item.name">
                        <template #label>
                            {{ item.name }}
                            <el-badge :value="item.list.length" :max="badgeMax" :type="item.type"></el-badge>
                        </template>
                        <el-scrollbar height="400px">
                            <NotifyList :list="item.list"/>
                        </el-scrollbar>
                    </el-tab-pane>
                </el-tabs>
                <div class="notify-history" >
                    <el-button link @click="handleHistory"> 查看{{ activeTab }}历史 </el-button>
                </div>
            </template>
        </el-popover>
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus"
import { ref, computed } from "vue"
import { Bell } from "@element-plus/icons-vue"
import { notifyData, messageData, todoData, type ListItem } from "./data"
import NotifyList from "./NotifyList.vue"

type TabName = "通知" | "消息" | "待办"

interface DataItem {
    name: TabName
    type: "primary" | "success" | "warning" | "danger" | "info"
    list: ListItem[]    
}

/** 角标值 */
const badgeValue = computed(() => {
    return data.value.reduce((sum, item) => sum + item.list.length,0)
}) 
/** 当前 Tab */
const activeTab = ref<TabName>("通知") 
/** 气泡卡片宽度 */
const popoverWidth = 350 
/** 角标最大值 */
const badgeMax = 99  
/** 所有数据 */
const data = ref<DataItem[]>([
    // 通知数据
    {
        name: "通知",
        type: "primary",
        list: notifyData
    },
    // 消息数据
    {
        name: "消息",
        type: "danger",
        list: messageData
    },
    // 待办数据
    {
        name: "待办",
        type: "warning",
        list: todoData
    }
]) 

const handleHistory = () => {
    ElMessage.success(`跳转到${activeTab.value}历史页面`)
}
</script>

<style lang="scss" scoped>
.notify {
    margin-right: 10px;
}

.notify-history {
    text-align: center;
    padding: 12px;
    border-top: 1px solid var(--el-border-color);
}
</style>
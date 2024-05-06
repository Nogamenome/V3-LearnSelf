/** 统一处理 localStorage */ 
import CacheKey from "@/constants/cache-key"
import { type ThemeName } from "@/hooks/useTheme" 

//#region 正在应用的主题名称
export const getActiveThemeName = () => {
    return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as ThemeName | null
}
export const setActiveThemeName = (themeName: ThemeName) => {
    localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
}
//#endregion 

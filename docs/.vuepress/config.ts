import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'zh-CN',
    title: '音乐APP全栈开发',
    description: '程序猿依力直播间实战项目',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
    },
})

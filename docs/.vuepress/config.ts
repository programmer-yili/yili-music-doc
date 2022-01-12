import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    base: '/yili-music-doc/',
    lang: 'zh-CN',
    title: '音乐APP全栈开发',
    description: '程序猿依力直播间实战项目',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        repo: 'https://github.com/programmer-yili/yili-music-doc',
        repoLabel: '文档仓库',
        contributors: true,
        navbar: [
            {
                text: '概览',
                link: '/overview/'
            },
            {
                text: '服务端 (SpringBoot)',
                link: '/service/'
            },
            {
                text: '后台 (Vue3)',
                link: '/admin/'
            },
            {
                text: '小程序 (原生)',
                link: '/mp/'
            },
            {
                text: 'APP (Flutter)',
                link: '/app/'
            }
        ],
        editLinkText: '编辑此页',
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        notFound: ['哎呀！这个页面不存在耶'],
        tip: '提示',
        warning: '警告',
        danger: '危险'
    },
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ]
    ]
})

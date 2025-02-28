module.exports = {
    title: '前端宝典',
    description: 'XXX',
    theme: 'reco',
    base: "/blog/",
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: "首页", link: "/" },
            {
                text: "婷的博客",
                items: [
                    { text: "Github", link: "https://github.com/tingtingxiao0706" }
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "基础篇",
                path: "/handbook/base/1",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/handbook/base/1" },
                    { title: "第二篇", path: "/handbook/base/2" },
                ]
            }
        ]
    }
}

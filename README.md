# uni-app开发模板

## ⚙️ 环境

- node>=18
- pnpm>=7.30

## &#x1F4C2; 快速开始

执行 `pnpm i` 安装依赖

执行 `pnpm dev:mp-weixin` 运行 `微信小程序`

## 📦 运行（支持热更新）

- web平台： `pnpm dev:h5`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。
- weixin平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。

## 🔗 发布

- web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
- weixin平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。

## ⚡️ 插件

|                插件名                | 作用                                                         |
| :----------------------------------: | :----------------------------------------------------------- |
|      @dcloudio/vite-plugin-uni       | **最核心的 `uni 插件`**，没有它就不能在 vite 项目跑 uniapp，其他所有的 `uni插件` 都需要经通过它的手来编译，所以写法上，都是先写 `UniXXX`，再写 `Uni` |
|  @uni-helper/vite-plugin-uni-pages   | `uni 插件`，可以直接在本文件就能设置页面的路元信息，无需跑去 `pages.json` 配置，同时支持 `pages.config.ts` 编写 `pages.json` |
| @uni-helper/vite-plugin-uni-layouts  | `uni 插件`，支多种 `layouts` 布局，可以脑洞大开，充分利用这个特性实现平时不容实现的写法 |
| @uni-helper/vite-plugin-uni-manifest | `uni 插件`，支持 `manifest.config.ts` 编写 `manifest.json`   |
|         @uni-helper/uni-env          | 在 `uni-app` 中判断当前环境                                  |
|       @uni-helper/uni-promises       | `uni-app` promise 化的 `API`                                 |
|      @uni-helper/uni-app-types       | `uni-app`内置组件提供 `TypeScript` 类型                      |
|         @antfu/eslint-config         | Anthony大佬的`ESLint`配置预设                                |
|         unplugin-auto-import         | 按需自动导入`API`                                            |
|      @types/wechat-miniprogram       | 微信小程序`API`的类型定义                                    |
|         unocss/unocss-applet         | 按需使用的原子 `CSS` 引擎和`uniapp`适配器                    |
|           @iconify-json/*            | `iconify` 图标库，拥有 `10万+` 的海量图标                    |

## 🦾 代码实践

- 微信小程序CI上传代码：使用前需要使用小程序管理员身份访问"微信公众平台-开发-开发设置"后下载代码上传密钥，并配置 IP 白名单，才能进行上传、预览操作。

    注意事项：

        1. 代码上传密钥拥有预览、上传代码的权限

        2. 代码上传密钥不会明文存储在微信公众平台上，一旦遗失必须重置，请妥善保管

        3. 未配置IP白名单的，将无法使用 `miniprogram-ci` 进行预览和上传

        4. 可选择不对IP进行限制，但务必明白风险

    配置：

        1. 将上传密钥粘贴到根目录的 `conf` 中 （文件名：private.appid.key）

    脚本调用：

        1. 运行 `pnpm build:mp-weixin`

        2. 运行 `pnpm upload:weixin`

        3. 观察控制台的日志
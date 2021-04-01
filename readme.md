## 创建
```shell
yarn create @vitejs/app vue3-template --template vue
```
或者是
```shell
# npm 6.x
npm init @vitejs/app vue3-template --template vue

# npm 7+, 需要额外的双横线：
npm init @vitejs/app vue3-template -- --template vue
```
## DEV运行
```json5
{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}
```
### 额外选项
可以指定额外的命令行选项，如 --port 或 --https。运行 npx vite --help 获得完整的命令行选项列表。


### 文件系统缓存
Vite 会将预构建的依赖缓存到 node_modules/.vite。它根据几个源来决定是否需要重新运行预构建步骤:

package.json 中的 dependencies 列表
包管理器的 lockfile，例如 package-lock.json, yarn.lock，或者 pnpm-lock.yaml
可能在 vite.config.js 相关字段中配置过的
只有当上面的一个步骤发生变化时，才需要重新运行预构建步骤。

如果出于某些原因，你想要强制 Vite 重新绑定依赖，你可以用 --force 命令行选项启动开发服务器，或者手动删除 node_modules/.vite 目录。

# domain-design

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


ci功能：
- 优化git commit 格式
- 自动生成changeLog
- 使用lint-staged只检查当前改动文件格式
- 测试覆盖率以及报告https://www.kancloud.cn/sllyli/npm-script/1243454 nyc
- 拓展脚手架，添加自定义命令，生成模板，生成业务模块
- 使用e2e和unit做测试
- 使用本地自定义eslint规则，检查领域事件注册代码格式

模板feature
- 封装通用的request模块
- 添加一系列通用工具方法（src/utils/）
- 添加nginx配置，并强制不使用前端html文件缓存

todo：
- 支持失效时间的localStorage，支持手动失效的localStorage（失效时间从后端取）
- 添加Auth模块，提供统一的多端登录以及获取用户信息类
- codecov优化代码review流程


<!-- HUSKY_SKIP_HOOKS

开发流程说明：
- 代码提交 统一使用yarn commit提交代码

commit选项说明：
feat 新功能
fix Bug 修复
docs 文档更新
style 代码的格式，标点符号的更新
refactor 代码重构
perf 性能优化
test 测试更新
build 构建系统或者包依赖更新
ci CI 配置，脚本文件等更新
chore 非 src 或者 测试文件的更新
revert commit 回退 -->
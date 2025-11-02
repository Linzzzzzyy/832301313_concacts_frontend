一、总体原则

Python 代码遵循 PEP 8 风格，包括命名、缩进、注释等。

前端代码（HTML/CSS/JS）遵循各自标准（JS 可参考 Google JS Style Guide、HTML/CSS 遵循 W3C 标准）。

前后端分离，前端通过 RESTful API 与后端交互，跨域通过 CORS 配置处理。

使用 自动化工具（Flake8、Black、Prettier、ESLint）在提交/CI 中强制风格。

二、项目目录结构
832301313_frontend/
├── src/                   # 前端源码
├── concacts.html/  # 页面文件
├── ...其他文件
├── README.md
└── codestyle.md

三、前端代码规范

HTML：符合 W3C 标准，标签缩进 2 空格，尽量语义化。

CSS：class 命名清晰，可选 BEM 规范，尽量避免内联样式。

JS：遵循 Google JS Style Guide，使用 const/let，箭头函数，模块化导入。

RESTful API 调用统一封装，避免散落在页面组件中。

使用 ESLint / Prettier 自动格式化。

四、测试与类型检查

Python 单元测试：pytest。

JS 前端单元测试：Vitest / Jest。

Python 可启用 mypy 检查类型。

五、日志与错误处理

避免输出敏感信息。

前端使用统一的 Toast / Message 显示错误。

后端 API 错误应标准化，返回 JSON。

六、代码审查重点

命名是否清晰，函数/模块是否职责单一？

是否有测试覆盖？

是否遵循各语言风格规范？

是否有注释或文档说明？

九、工具链示例

{
  "scripts": {
    "lint:py": "flake8 StudentID_concacts_backend/",
    "format:py": "black StudentID_concacts_backend/",
    "lint:js": "eslint --ext .js StudentID_concacts_frontend/src/",
    "format:js": "prettier --write StudentID_concacts_frontend/src/**/*.{js,css,html}"
  }
}

十、可选团队约定

是否强制 type hints？

是否统一前端框架？

是否使用 Tailwind 或传统 CSS？

十一、参考资料

PEP 8 Python 风格指南
https://peps.python.org/pep-0008/

Flask 官方文档
https://flask.palletsprojects.com/

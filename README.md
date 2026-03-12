# awacat.cc 导航页

这是一个纯静态导航首页，用于 `awacat.cc` 根域名，集中跳转到各个子域站点（如 `blog.awacat.cc`）。

## 本地预览

最简单方式：直接双击打开 `index.html`。

如果想用本地服务器（可选）：

```bash
python -m http.server 8080
```

然后访问：`http://localhost:8080`

## 如何新增/修改导航项

编辑 `assets/script.js` 中的 `NAV_LINKS`：

- `name`: 卡片标题
- `domain`: 展示的域名
- `url`: 跳转链接（建议使用 `https://`）
- `description`: 简短说明
- `status`: 状态标签（可留空）

保存后刷新页面即可。

## 部署到 Cloudflare Pages

有两种常见方式：直接在 Cloudflare Pages 控制台创建项目（手动连接仓库），或使用 GitHub Actions 自动部署。仓库已包含一个示例工作流：[@/.github/workflows/deploy.yml](.github/workflows/deploy.yml)。

自动部署（GitHub Actions）：

1. 在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`：需要包含 Pages 写入权限的 API Token（Scopes: `Pages:Edit`，建议限制为特定账户/资源）。
   - `CLOUDFLARE_ACCOUNT_ID`：你的 Cloudflare 账户 ID。
2. 打开 `/.github/workflows/deploy.yml`，把 `projectName` 替换为你在 Cloudflare Pages 创建的项目名（或保持默认并在 Cloudflare 控制台对应项目名称）。
3. 推送到 `main` 分支会触发工作流并把仓库目录（或你在 workflow 中指定的目录）部署到 Cloudflare Pages。

手动在 Pages 控制台创建项目：

1. 将本目录推送到 Git 仓库并在 Cloudflare Pages 新建项目，连接到该仓库。
2. 构建设置：
   - Framework preset: `None`
   - Build command: 留空（若你有构建步骤，填写相应命令）
   - Build output directory: `/` 或你的构建产物目录（如 `public` 或 `dist`）
3. 在 Pages 项目中绑定自定义域名 `awacat.cc`，并确保 DNS 解析指向 Cloudflare。

## 目录结构

```
.
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ script.js
└─ README.md
```
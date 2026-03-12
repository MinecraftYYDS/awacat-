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

1. 将本目录推送到 Git 仓库。
2. 在 Cloudflare Pages 新建项目并连接该仓库。
3. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
4. 在 Pages 项目中绑定自定义域名 `awacat.cc`。
5. 确保子域（如 `blog.awacat.cc`、`me.awacat.cc`）已有正确 DNS 记录并可访问。

## 目录结构

```
.
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ script.js
└─ README.md
```
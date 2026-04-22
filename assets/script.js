const NAV_LINKS = [
  {
    name: "博客",
    domain: "blog.awacat.cc",
    url: "https://blog.awacat.cc",
    description: "文章、笔记与更新记录。",
    status: "已上线"
  },
  {
    name: "联系方式",
    domain: "me.awacat.cc",
    url: "https://me.awacat.cc",
    description: "我的各种各样的社交网络账号",
    status: "已上线"
  },
  {
    name: "虚无",
    domain: "null.awacat.cc",
    url: "https://null.awacat.cc",
    description: "未知",
    status: "已上线"
  },
  {
    name: "语录图生成",
    domain: "quote.awacat.cc",
    url: "https://quote.awacat.cc",
    description: "生成语录图片的工具。",
    status: "已上线"

  },
  {
    name: "牛子小助手",
    domain: "dick.awacat.cc",
    url: "https://dick.awacat.cc",
    description: "一个牛子小助手工具。(复刻自 zzzdajb/DickHelper 并删除广告)",
    status: "已上线"

  },
  {
    name: "今天吃什么",
    domain: "eat.awacat.cc",
    url: "https://eat.awacat.cc",
    description: "帮你决定今天吃什么。(复刻自 ryanuo/whatToEat 并删除一些动画)",
    status: "已上线"
  },
  {
    name: "网盘(个人使用)",
    domain: "drive.awacat.cc",
    url: "https://drive.awacat.cc",
    description: "个人使用的网盘。",
    status: "个人使用"
  }
];

function createCard(item) {
  const statusHtml = item.status ? `<span class="status">${item.status}</span>` : "";

  return `
    <a class="card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <div class="card-title-row">
        <h2>${item.name}</h2>
        ${statusHtml}
      </div>
      <p class="desc">${item.description}</p>
      <span class="domain">${item.domain}</span>
    </a>
  `;
}

function renderNav() {
  const grid = document.getElementById("nav-grid");
  grid.innerHTML = NAV_LINKS.map(createCard).join("");
}

function setYear() {
  const year = document.getElementById("year");
  year.textContent = String(new Date().getFullYear());
}

function renderQQBots() {
  const QQ_BOTS = [
    {
      name: '机器人管理界面',
      domain: 'bot.awacat.cc',
      url: 'https://bot.awacat.cc',
      description: '管理QQ机器人在群里的界面。'
    },
    {
      name: '机器人napcat后台',
      domain: 'napcat.awacat.cc',
      url: 'https://napcat.awacat.cc',
      description: 'QQ机器人napcat后台。'
    },
    {
      name: '机器人git远程管理',
      domain: 'botgit.awacat.cc',
      url: 'https://botgit.awacat.cc',
      description: 'QQ机器人git远程管理界面。'
    }
  ];

  const navGrid = document.getElementById('nav-grid');
  const navSection = navGrid.closest('section');

  const hr = document.createElement('hr');

  const section = document.createElement('section');
  section.className = 'qq-bots';
  section.setAttribute('aria-label', 'QQ 机器人相关');

  const h2 = document.createElement('h2');
  h2.textContent = 'QQ机器人相关:';
  section.appendChild(h2);

  const gridDiv = document.createElement('div');
  gridDiv.className = 'grid';
  gridDiv.innerHTML = QQ_BOTS.map(createCard).join('');
  section.appendChild(gridDiv);

  if (navSection && navSection.parentNode) {
    navSection.parentNode.insertBefore(hr, navSection.nextSibling);
    navSection.parentNode.insertBefore(section, hr.nextSibling);
  } else {
    document.querySelector('.container').appendChild(hr);
    document.querySelector('.container').appendChild(section);
  }
}

renderNav();
renderQQBots();
setYear();
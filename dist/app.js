(() => {
  'use strict';
  const zh = {
    skip:'跳到主要内容',navWork:'项目',navExperience:'履历',navCreative:'工作之外',
    heroTitle:'产品运营，<br>也有自己的节奏。',heroIntro:'在音乐与游戏平台之间，把内容、用户和系统连接起来。',explore:'了解我的项目',viewExperience:'查看履历',profileRole:'产品运营 / 贝斯',profileCity:'期望城市：杭州',
    workTitle:'代表项目',workSubtitle:'从内容出发，让系统运转。',context:'项目背景',contribution:'我的工作',
    case1Title:'游戏分发体系',case1Desc:'内容标签、用户标签与分发规则',case1Company:'浙江畅唐网络 · 2025年至今',
    case1Context:'面对多终端、多个包体的游戏平台，需要建立一致的内容组织方式，理解用户偏好，并评估游戏分发的业务价值。',
    case1Contribution:'负责多端各包体的游戏分发体系及价值评估体系建设；统筹内容标签、用户标签与分发规则，以经营目标推动策略落地。',
    case1Note:'工作重点：平台能力建设、分发策略与跨团队协作。',
    case2Title:'音乐内容发现',case2Desc:'曲库标签与面向不同国家的内容池',case2Company:'传易互联 · 2023–2024',
    case2Context:'不同版权方传入的标签缺少统一分类。面向非洲多个国家的音乐市场，还需要理解当地曲风、艺人与听众偏好。',
    case2Contribution:'重建曲库标签分类分级体系和版权方标签映射；从零搭建算法标签生产链路及主要国家内容池，并建立同名艺人内容关联错误的反馈闭环。',
    case2Note:'项目结果：提升标签与内容关联准确性，为歌单发现和播放提供更可靠的内容基础。',
    case3Title:'内容运营系统',case3Desc:'伴奏库、音频算法与站内搜索',case3Company:'网易云音乐 · 2019–2023',
    case3Context:'伴奏库需要稳定的入库链路与结构化信息，支持 K 歌、搜索以及多个终端上的内容发现。',
    case3Contribution:'从零搭建伴奏库入库链路，通过数据爬虫、预处理迭代生产流程；负责音频算法对接、验收与数据保障，协同搜索团队优化 query 和曲库字段，并带领音频专业运营团队。',
    case3Note:'支持音街 App、站内 K 歌、歌词、音质、音乐百科及垂类专区等业务。',
    experienceTitle:'工作履历',date1:'2025.04 — 至今',date2:'2023.11 — 2024.11',date3:'2019.08 — 2023.06',company1:'浙江畅唐网络',company2:'传易互联',company3:'网易云音乐',role1:'产品运营 · 游戏平台',role2:'产品运营 · 音乐内容发现',role3:'产品运营 · 内容系统',
    education:'教育经历',university:'南通大学杏林学院',degree:'本科 · 人文地理与城乡规划',workingWith:'工作能力',skills:'分发策略 · 内容标签体系 · 流程设计 · 跨团队协同',language:'语言',languageDetail:'中文 · 英语用于邮件和即时消息等书面工作沟通',
    creativeTitle:'另一种，<br>属于自己的节奏<span class="dot">。</span>',creativeIntro:'贝斯、录音，以及创作中的尝试。',creativeBody:'工作之外，我演奏贝斯，探索录音、编曲，以及音乐与影像之间的联系。',makingTitle:'用 AI，把想法做出来',makingBody:'从自己的健身需求出发，做过 App 和小程序。让日常遇到的问题，变成真正可以使用的小工具。',makingNote:'个人实践 · 音乐与小型软件创作',
    top:'回到顶部'
  };
  const nodes = [...document.querySelectorAll('[data-i]')];
  const en = Object.fromEntries(nodes.map(el => [el.dataset.i, el.innerHTML]));
  let current = 'en';
  function setLanguage(lang, persist) {
    current = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
    for (const el of nodes) el.innerHTML = (current === 'zh' ? zh : en)[el.dataset.i];
    for (const button of document.querySelectorAll('[data-lang]')) button.setAttribute('aria-pressed', String(button.dataset.lang === current));
    document.querySelector('[data-a="nav"]').setAttribute('aria-label', current === 'zh' ? '主要导航' : 'Main navigation');
    document.querySelector('[data-a="portrait"]').alt = current === 'zh' ? '张子墨本人照片' : 'Portrait of Zimmer Zhang';
    document.querySelector('.languages').setAttribute('aria-label', current === 'zh' ? '语言选择' : 'Language');
    document.title = current === 'zh' ? '张子墨 · Zimmer Zhang — 产品运营' : 'Zimmer Zhang · 张子墨 — Product Operations';
    if (persist) {
      try { localStorage.setItem('zimmer-language',current); } catch (_) {}
      const url = new URL(window.location.href);
      url.searchParams.set('lang',current);
      history.replaceState(null,'',url);
    }
  }
  let initial = new URLSearchParams(location.search).get('lang');
  if (!initial) { try { initial = localStorage.getItem('zimmer-language'); } catch (_) {} }
  setLanguage(initial || 'en',false);
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang,true)));
})();

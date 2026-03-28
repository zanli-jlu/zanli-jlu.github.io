(function () {
  var LANGUAGE_STORAGE_KEY = "zanli-home-lang";

  var translations = {
    zh: {
      pageTitle: "李赞 - 个人学术主页",
      nav: ["简介", "经历", "项目", "论文", "课程"],
      sections: ["Biography", "Research Experience", "Education Experience", "Academic Projects", "Selected publications", "Teaching Courses"],
      sectionTitles: ["个人简介", "工作经历", "教育经历", "科研项目", "代表性论文", "教学课程"],
      hero: {
        titleZh: "教授｜博士生导师",
        titleEn: "Professor · Ph.D. Supervisor",
        affiliation: "吉林大学通信工程学院",
        summary: "研究方向：无线通信、智能感知、频谱感知、群智定位"
      },
      biography:
        "就职于吉林大学通信工程学院，教授，博士生导师，唐敖庆青年学者；信息科学实验室负责人；入选吉林省青年成长科技计划，吉林大学优秀青年教师（重点资助）。曾任阿里巴巴资深算法工程师负责传感器融合定位，北京波尔通信技术研发总监。2016年在瑞士伯尔尼大学获得博士学位（summa cum laude，最高荣誉毕业生），当年唯一获得 Fritz-Kutter Award 博士毕业生（瑞士计算机博士最佳论文）。请对无线通信、智能感知、频谱感知方向感兴趣的同学联系我。我们将一起合作进行国际前沿的科学研究，并提供弹性工作时间、国际交流和公司实习机会。",
      research: [
        ["教授", "吉林大学", "2025年 - 今"],
        ["博士生导师", "吉林大学", "2024年 - 今"],
        ["副教授", "吉林大学", "2019年 - 2025年"],
        ["讲师", "吉林大学", "2017年 - 2019年"],
        ["技术研发总监", "北京波尔通信", "2020年 - 2023年"],
        ["资深算法工程师", "阿里巴巴集团", "2016年 - 2017年"]
      ],
      education: [
        ["博士-计算机科学（最高荣誉毕业生，瑞士最佳博士论文）", "瑞士伯尔尼大学", "2012年 - 2016年"],
        ["硕士-通信与信息技术", "德国不来梅大学", "2009年 - 2011年"],
        ["学士-电子信息工程", "山东大学", "2005年 - 2009年"]
      ],
      projects: [
        ["面向智慧消防的毫米波人体目标与状态识别系统开发", "吉林省科技厅重点研发（企业关键技术），参加单位负责人", "2026 - 2028"],
        ["多智能体协同的毫米波雷达自主定位技术研究", "吉林省科技厅（国际合作项目），项目负责人", "2025 - 2027"],
        ["基于毫米波点云的众包自主室内定位技术研究", "国家自然基金面上项目，项目负责人", "2022 - 2025"],
        ["基于毫米波雷达的高精度室内 SLAM 技术研究", "吉林省科技厅青年成长科技计划，项目负责人", "2021 - 2022"],
        ["5G 网络环境下的多信息融合群智感知定位技术研究", "吉林省科技厅（学科布局项目），项目负责人", "2020 - 2022"],
        ["基于多类地标和深度强化学习轨迹融合的群智感知室内定位算法研究", "国家自然基金委（青年项目），项目负责人", "2019 - 2021"],
        ["吉林大学优秀青年教师重点资助项目", "吉林大学，项目负责人", "2020 - 2022"],
        ["吉林大学海外人才引进启动项目", "吉林大学，项目负责人", "2017 - 2019"],
        ["SwissSenseSynergy（基于传感器融合的室内定位）", "瑞士国家科学基金，参与", "2015 - 2016"],
        ["In3DGuide（基于 SDR 的被动定位）", "FP7 Eurostar（欧洲第七框架项目），参与", "2012 - 2013"],
        ["智能信号分析系统研发", "北京波尔通信", "2025 - 2027"],
        ["智能化估价信息系统开发", "企业合作方", "2025"],
        ["无线电监测数据库", "北京波尔通信", "2024 - 2025"],
        ["电磁频谱地图系统研发", "北京波尔通信", "2023 - 2025"],
        ["DVB-S2 系统仿真", "清华大学", "2020 - 2021"],
        ["电磁频谱大数据平台", "北京波尔通信", "2022 - 2023"],
        ["智能频谱分析", "北京波尔通信", "2020"],
        ["基于智能手机的智能导诊定位平台开发", "企业合作方", "2019 - 2020"],
        ["多传感器融合的众包定位", "阿里巴巴集团", "2016 - 2017"],
        ["基于软件无线电技术的 OFDM 传输平台开发", "企业合作方", "2015 - 2016"]
      ],
      projectColumns: ["纵向项目", "横向（企业）项目"],
      publications: ["期刊论文", "会议论文"],
      courses: {
        groups: ["本科生课程", "研究生课程"],
        undergraduate: [
          "通信原理（2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026）",
          "通信原理综合实验（2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026）",
          "智能无线感知与通信（2026）",
          "数字信号处理综合实验（2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025）",
          "MIMO-OFDM（2018）"
        ],
        master: ["信号检测与估计理论（2021, 2022, 2023, 2024, 2025, 2026）"]
      }
    },
    en: {
      pageTitle: "Prof. Zan Li - Academic Homepage",
      nav: ["Biography", "Experience", "Projects", "Publications", "Courses"],
      sections: ["Biography", "Research Experience", "Education Experience", "Academic Projects", "Selected Publications", "Teaching Courses"],
      sectionTitles: ["Biography", "Research Experience", "Education Experience", "Academic Projects", "Selected Publications", "Teaching Courses"],
      hero: {
        titleZh: "教授｜博士生导师",
        titleEn: "Professor · Ph.D. Supervisor",
        affiliation: "College of Communication Engineering, Jilin University",
        summary: "Research Areas: Wireless Communications, Intelligent Sensing, Spectrum Sensing, and Crowdsourced Positioning"
      },
      biography:
        "Prof. Zan Li is currently with the College of Communication Engineering, Jilin University, where he serves as Professor and Ph.D. Supervisor. He is a Tang Aoqing Young Scholar and leads the Key Laboratory of Information Science under the Ministry of Industry and Information Technology. He was selected for the Jilin Province Young Talent Growth Program and the Jilin University Outstanding Young Faculty Program. He previously worked as a Senior Algorithm Engineer at Alibaba on sensor-fusion positioning and served as R&D Director at Beijing Bo'er Communication. In 2016, he received his Ph.D. from the University of Bern with summa cum laude distinction and was the sole recipient of the Fritz Kutter Award for the best computer science dissertation in Switzerland. Students interested in wireless communications, intelligent sensing, and spectrum sensing are welcome to get in touch. The group offers flexible working arrangements, international collaboration, and industry internship opportunities.",
      research: [
        ["Professor", "Jilin University", "2025 - Present"],
        ["Ph.D. Supervisor", "Jilin University", "2024 - Present"],
        ["Associate Professor", "Jilin University", "2019 - 2025"],
        ["Lecturer", "Jilin University", "2017 - 2019"],
        ["R&D Director", "Beijing Bo'er Communication", "2020 - 2023"],
        ["Senior Algorithm Engineer", "Alibaba Group", "2016 - 2017"]
      ],
      education: [
        ["Ph.D. in Computer Science (summa cum laude, Best Dissertation in Switzerland)", "University of Bern, Switzerland", "2012 - 2016"],
        ["M.Sc. in Communication and Information Technology", "Bremen University, Germany", "2009 - 2011"],
        ["B.Sc. in Electronics and Information Engineering", "Shandong University", "2005 - 2009"]
      ],
      projects: [
        ["Millimeter-Wave Human Target and State Recognition System for Smart Fire Safety", "Jilin Province Key R&D Program (Enterprise Key Technology), Participating Unit PI", "2026 - 2028"],
        ["Multi-Agent Cooperative Autonomous Localization with Millimeter-Wave Radar", "Jilin Provincial Department of Science and Technology (International Cooperation), Principal Investigator", "2025 - 2027"],
        ["Crowdsourced Autonomous Indoor Localization Using Millimeter-Wave Point Clouds", "National Natural Science Foundation of China, General Program, Principal Investigator", "2022 - 2025"],
        ["High-Precision Indoor SLAM with Millimeter-Wave Radar", "Jilin Province Young Talent Growth Program, Principal Investigator", "2021 - 2022"],
        ["Multi-Source Fusion Crowdsensing Localization in 5G Networks", "Jilin Province Discipline Layout Program, Principal Investigator", "2020 - 2022"],
        ["Crowdsensed Indoor Positioning via Multi-Landmark and Deep Reinforcement Learning-based Trajectory Fusion", "NSFC Youth Program, Principal Investigator", "2019 - 2021"],
        ["Jilin University Outstanding Young Faculty Key Support Program", "Jilin University, Principal Investigator", "2020 - 2022"],
        ["Jilin University Overseas Talent Start-up Program", "Jilin University, Principal Investigator", "2017 - 2019"],
        ["SwissSenseSynergy (Sensor Fusion Based Indoor Positioning)", "Swiss National Science Foundation, Participant", "2015 - 2016"],
        ["In3DGuide (Passive Positioning Based on SDR)", "FP7 Eurostar, Participant", "2012 - 2013"],
        ["Intelligent Signal Analysis System Development", "Beijing Bo'er Communication", "2025 - 2027"],
        ["Intelligent Valuation Information System Development", "Enterprise Partner", "2025"],
        ["Radio Monitoring Database", "Beijing Bo'er Communication", "2024 - 2025"],
        ["Electromagnetic Spectrum Map System Development", "Beijing Bo'er Communication", "2023 - 2025"],
        ["DVB-S2 System Simulation", "Tsinghua University", "2020 - 2021"],
        ["Electromagnetic Spectrum Big Data Platform", "Beijing Bo'er Communication", "2022 - 2023"],
        ["Intelligent Spectrum Analysis", "Beijing Bo'er Communication", "2020"],
        ["Smart Outpatient Guidance and Localization Platform Based on Smartphones", "Enterprise Partner", "2019 - 2020"],
        ["Crowdsourced Positioning with Multi-Sensor Fusion", "Alibaba Group", "2016 - 2017"],
        ["OFDM Transmission Platform Development Based on Software Defined Radio", "Enterprise Partner", "2015 - 2016"]
      ],
      projectColumns: ["Funded Research Projects", "Industry Collaboration Projects"],
      publications: ["Journal Publications", "Conference Publications"],
      courses: {
        groups: ["Undergraduate Courses", "Master Courses"],
        undergraduate: [
          "Communication Theory (2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026)",
          "Experimental Course of Communication Theory (2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026)",
          "Intelligent Wireless Sensing and Communications (2026)",
          "Experimental Course of Signal Processing (2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025)",
          "MIMO-OFDM (2018)"
        ],
        master: ["Theory of Signal Detection and Estimation (2021, 2022, 2023, 2024, 2025, 2026)"]
      }
    }
  };

  function normalizeText(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function parsePublication(rawText) {
    var text = normalizeText(rawText);
    var yearMatch = text.match(/(19|20)\d{2}/g);
    var year = yearMatch && yearMatch.length ? yearMatch[yearMatch.length - 1] : "";
    var firstComma = text.indexOf(",");

    if (firstComma === -1) {
      return {
        title: text,
        meta: "",
        year: year
      };
    }

    return {
      title: normalizeText(text.slice(0, firstComma)),
      meta: normalizeText(text.slice(firstComma + 1)),
      year: year
    };
  }

  function translatePublicationMeta(meta, lang) {
    var result = meta;

    if (lang === "en") {
      result = result.replace(/\(中科院一区\)/g, "(CAS Q1)");
      result = result.replace(/\(中科院二区\)/g, "(CAS Q2)");
    } else {
      result = result.replace(/\(CAS Q1\)/g, "(中科院一区)");
      result = result.replace(/\(CAS Q2\)/g, "(中科院二区)");
    }

    result = result.replace(/\(Corresponding Author\)/g, lang === "zh" ? "(通讯作者)" : "(Corresponding Author)");
    result = result.replace(/\(通讯作者\)/g, lang === "en" ? "(Corresponding Author)" : "(通讯作者)");
    result = result.replace(/\(Best Paper Award\)/g, lang === "zh" ? "(最佳论文奖)" : "(Best Paper Award)");
    result = result.replace(/\(最佳论文奖\)/g, lang === "en" ? "(Best Paper Award)" : "(最佳论文奖)");

    return result;
  }

  function renderPublicationNode(contentNode, lang) {
    var title = contentNode.dataset.pubTitle || "";
    var meta = translatePublicationMeta(contentNode.dataset.pubMeta || "", lang);
    var year = contentNode.dataset.pubYear || "";
    var yearTag = year ? '<span class="pub-year">' + year + "</span>" : "";
    
    // Bold "Zan Li" in meta
    meta = meta.replace(/\bZan Li\b/g, '<b>Zan Li</b>');
    
    var metaHtml = meta ? '<div class="pub-meta">' + meta + "</div>" : "";

    contentNode.innerHTML = '<div class="pub-entry"><div class="pub-title">' + title + "</div>" + metaHtml + yearTag + "</div>";
  }

  function enhancePublications() {
    var publicationSection = document.getElementById("C5");
    if (!publicationSection) {
      return;
    }

    var publicationList = publicationSection.querySelector(".publication-list");
    if (!publicationList) {
      return;
    }

    var items = publicationList.children;
    var currentType = "";
    var currentLang = document.body.getAttribute("data-lang") || "zh";

    for (var i = 0; i < items.length; i += 1) {
      var node = items[i];
      if (node.tagName === "H3") {
        var headingText = normalizeText(node.textContent).toLowerCase();
        if (headingText.indexOf("journal") !== -1) {
          currentType = "journal";
        } else if (headingText.indexOf("conference") !== -1) {
          currentType = "conference";
        }
        continue;
      }

      if (node.tagName !== "LI") {
        continue;
      }

      node.classList.add("pub-item");
      if (currentType === "journal") {
        node.classList.add("publication-journal");
      } else if (currentType === "conference") {
        node.classList.add("publication-conference");
      }

      var contentNode = node.querySelector("div") || node;
      if (!contentNode.dataset.pubTitle) {
        var parsed = parsePublication(contentNode.textContent);
        contentNode.dataset.pubTitle = parsed.title;
        contentNode.dataset.pubMeta = parsed.meta;
        contentNode.dataset.pubYear = node.dataset.year || parsed.year;
      }

      renderPublicationNode(contentNode, currentLang);
    }
  }

  function applyTripletList(selector, items) {
    var rows = document.querySelectorAll(selector);
    rows.forEach(function (row, index) {
      var item = items[index];
      if (!item) {
        return;
      }

      var titleNode = row.querySelector(".resume-degree");
      var orgNode = row.querySelector(".resume-degree-org");
      var timeNode = row.querySelector(".resume-degree-time");

      if (titleNode) {
        titleNode.innerHTML = highlightDegreeHonors(item[0]);
      }
      if (orgNode) {
        orgNode.textContent = item[1];
      }
      if (timeNode) {
        timeNode.textContent = item[2];
      }
    });
  }

  function highlightDegreeHonors(text) {
    var value = text || "";

    value = value.replace(
      "（最高荣誉毕业生，瑞士最佳博士论文）",
      '<span class="degree-honor-note">（最高荣誉毕业生，瑞士最佳博士论文）</span>'
    );

    value = value.replace(
      "(summa cum laude, Best Dissertation in Switzerland)",
      '<span class="degree-honor-note">(summa cum laude, Best Dissertation in Switzerland)</span>'
    );

    return value;
  }

  function applySingleLineList(selector, items) {
    var rows = document.querySelectorAll(selector);
    rows.forEach(function (row, index) {
      if (items[index]) {
        row.textContent = items[index];
      }
    });
  }

  function applyLanguage(lang) {
    var data = translations[lang] || translations.zh;
    var body = document.body;
    var toggle = document.getElementById("lang-toggle");
    var navLinks = document.querySelectorAll("#site-nav .nav-link");
    var sectionTitles = document.querySelectorAll(".resume-section-title");
    var pubHeads = document.querySelectorAll("#C5 .publication-list h3 font");
    var courseHeads = document.querySelectorAll("#C6 .course-list h3 font");
    var projectColumnHeads = document.querySelectorAll("#C4 .project-column-title");
    var publicationContent = document.querySelectorAll("#C5 .publication-list > li > div");

    body.setAttribute("data-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = data.pageTitle;

    if (toggle) {
      toggle.textContent = lang === "zh" ? "EN" : "中文";
      toggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    }

    navLinks.forEach(function (link, index) {
      if (data.nav[index]) {
        link.textContent = data.nav[index];
      }
    });

    sectionTitles.forEach(function (title, index) {
      if (data.sectionTitles[index]) {
        title.textContent = data.sectionTitles[index];
      }
    });

    var heroTitle = document.querySelector(".resume-header .title");
    var heroTitleEn = document.querySelector(".hero-title-en");
    var heroAffiliation = document.querySelector(".hero-affiliation");
    var heroSummary = document.querySelector(".hero-summary");
    var bio = document.querySelector("#C1 .resume-section-content .mb-0");

    if (heroTitle) {
      heroTitle.textContent = data.hero.titleZh;
    }
    if (heroTitleEn) {
      heroTitleEn.textContent = data.hero.titleEn;
    }
    if (heroAffiliation) {
      heroAffiliation.textContent = data.hero.affiliation;
    }
    if (heroSummary) {
      heroSummary.textContent = data.hero.summary;
    }
    if (bio) {
      bio.textContent = data.biography;
    }

    applyTripletList("#C3 .timeline-list > li", data.research);
    applyTripletList(".experience-row .col-lg-6:nth-child(2) .timeline-list > li", data.education);
    applyTripletList("#C4 .project-grid > li", data.projects);
    projectColumnHeads.forEach(function (head, index) {
      if (data.projectColumns && data.projectColumns[index]) {
        head.textContent = data.projectColumns[index];
      }
    });
    applySingleLineList("#C6 .course-list:first-of-type > li .resume-degree", data.courses.undergraduate);
    applySingleLineList("#C6 .course-list:last-of-type > li .resume-degree", data.courses.master);

    pubHeads.forEach(function (head, index) {
      if (data.publications[index]) {
        head.textContent = data.publications[index];
      }
    });

    courseHeads.forEach(function (head, index) {
      if (data.courses.groups[index]) {
        head.textContent = data.courses.groups[index];
      }
    });

    publicationContent.forEach(function (node) {
      if (node.dataset.pubTitle) {
        renderPublicationNode(node, lang);
      }
    });

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (error) {
      /* ignore storage failures */
    }
  }

  function setupLanguageToggle() {
    var toggle = document.getElementById("lang-toggle");
    if (!toggle) {
      return;
    }

    var savedLang = "zh";
    try {
      savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || "zh";
    } catch (error) {
      savedLang = "zh";
    }

    applyLanguage(savedLang === "en" ? "en" : "zh");

    toggle.addEventListener("click", function () {
      var currentLang = document.body.getAttribute("data-lang") || "zh";
      applyLanguage(currentLang === "zh" ? "en" : "zh");
    });
  }

  function setupNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) {
      return;
    }

    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var sectionIds = links
      .map(function (link) {
        return link.getAttribute("href").slice(1);
      })
      .filter(Boolean);

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        if (!href || href.length < 2) {
          return;
        }

        var target = document.getElementById(href.slice(1));
        if (!target) {
          return;
        }

        event.preventDefault();
        var navHeight = nav.offsetHeight;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });

    var io = new IntersectionObserver(
      function (entries) {
        var visibleSections = entries.filter(function (e) {
          return e.isIntersecting;
        });

        if (visibleSections.length === 0) {
          return;
        }

        // Find the section closest to the top of viewport
        var closestSection = visibleSections.reduce(function (closest, current) {
          var closestDist = Math.abs(closest.boundingClientRect.top);
          var currentDist = Math.abs(current.boundingClientRect.top);
          return currentDist < closestDist ? current : closest;
        });

        var id = closestSection.target.id;
        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + id;
          link.classList.toggle("active", active);
        });
      },
      {
        rootMargin: "-50px 0px -50% 0px",
        threshold: [0]
      }
    );

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) {
        io.observe(section);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    enhancePublications();
    setupLanguageToggle();
    setupNav();
  });
})();

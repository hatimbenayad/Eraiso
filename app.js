/* ==========================================================================
   SESCAM Radiodiagnostics — Team A.05 Multi-Page Portal Controller
   ========================================================================== */

(function () {
  const DATA = window.PORTAL_DATA;
  const PAGE = document.body.dataset.page || "progress";

  const NAV_ITEMS = [
    { id: "progress", href: "index.html", label: "Progress" },
    { id: "must-fix", href: "must-fix.html", label: "Must Fix" },
    { id: "blunders", href: "blunders.html", label: "Blunders" },
    { id: "todo-by", href: "todo-by.html", label: "To-Do By" },
    { id: "milestones", href: "milestones.html", label: "Milestones" },
    { id: "meetings", href: "meetings.html", label: "Meetings" },
    { id: "roadmap", href: "roadmap.html", label: "Roadmap" },
    { id: "team", href: "team.html", label: "Team" }
  ];

  /* ------------------------------------------------------------------------
     UTILITIES: HTML ESCAPE, TOAST, CLIPBOARD, DOWNLOAD, MODAL
     ------------------------------------------------------------------------ */
  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  let toastTimer = null;
  function showToast(message) {
    let el = document.getElementById("portal-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "portal-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast(successMsg || "Copied to clipboard!"),
        () => fallbackCopy(text, successMsg)
      );
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(successMsg || "Copied to clipboard!");
    } catch (e) {
      showToast("Copy failed — use Preview or Download .md instead.");
    }
    document.body.removeChild(ta);
  }

  function downloadMarkdown(filename, content) {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${filename}`);
  }

  let currentModalContext = { title: "", filename: "context.md", content: "" };

  function ensureModal() {
    if (document.getElementById("context-modal")) return;
    const wrap = document.createElement("div");
    wrap.id = "context-modal";
    wrap.className = "modal-backdrop";
    wrap.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-head">
          <h3 id="modal-title">AI Agent Context Pack (.md)</h3>
          <button class="btn" id="modal-close-btn" aria-label="Close">Close</button>
        </div>
        <div class="modal-body">
          <pre class="context-pre" id="modal-content"></pre>
        </div>
        <div class="modal-foot">
          <button class="btn" id="modal-download-btn">Download .md</button>
          <button class="btn btn-primary" id="modal-copy-btn">Copy Context</button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) wrap.classList.remove("open");
    });
    document.getElementById("modal-close-btn").addEventListener("click", () => {
      wrap.classList.remove("open");
    });
    document.getElementById("modal-copy-btn").addEventListener("click", () => {
      copyToClipboard(currentModalContext.content, "AI Context copied to clipboard!");
    });
    document.getElementById("modal-download-btn").addEventListener("click", () => {
      downloadMarkdown(currentModalContext.filename, currentModalContext.content);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") wrap.classList.remove("open");
    });
  }

  function openContextModal(title, filename, content) {
    ensureModal();
    currentModalContext = { title, filename, content };
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-content").textContent = content;
    document.getElementById("context-modal").classList.add("open");
  }

  /* ------------------------------------------------------------------------
     SHARED NAVBAR, THEME & FOOTER
     ------------------------------------------------------------------------ */
  function initChrome() {
    const navMount = document.getElementById("site-navbar");
    if (navMount) {
      navMount.innerHTML = `
        <nav class="navbar">
          <div class="navbar-inner">
            <a class="brand" href="index.html">
              <span class="brand-mark">A5</span>
              <span>SESCAM Radiodiagnostics</span>
              <span class="brand-sub">ISO2 · Team A.05</span>
            </a>
            <ul class="nav-links">
              ${NAV_ITEMS.map(item => `
                <li><a href="${item.href}" class="${item.id === PAGE ? "active" : ""}">${esc(item.label)}</a></li>
              `).join("")}
            </ul>
            <div class="nav-actions">
              <a class="nav-btn" href="${DATA.meta.repoUrl}" target="_blank" rel="noopener">GitHub Repo</a>
              <button class="nav-btn" id="theme-toggle" type="button">Dark</button>
              <button class="nav-btn" id="print-page" type="button">Print</button>
            </div>
          </div>
        </nav>
      `;
    }

    const footerMount = document.getElementById("site-footer");
    if (footerMount) {
      footerMount.innerHTML = `
        <footer class="site-footer">
          <div class="footer-inner">
            <div>
              <strong>SESCAM Radiodiagnostics Management System</strong> · Software Engineering II (UCLM ESI) · Team A.05
            </div>
            <div>
              Last synchronized: <strong>${esc(DATA.meta.lastUpdated)}</strong> ·
              <a href="${DATA.meta.repoUrl}" target="_blank" rel="noopener">Repository</a> ·
              <a href="${DATA.meta.wikiUrl}" target="_blank" rel="noopener">Project Wiki</a>
            </div>
          </div>
        </footer>
      `;
    }

    // Theme persistence
    const savedTheme = localStorage.getItem("sescam-portal-theme") || "light";
    applyTheme(savedTheme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("sescam-portal-theme", next);
        applyTheme(next);
      });
    }

    const printBtn = document.getElementById("print-page");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "Light" : "Dark";
  }

  function statusBadge(status) {
    switch (status) {
      case "done": return '<span class="badge badge-done">Done / Closed</span>';
      case "in-progress": return '<span class="badge badge-progress">In Progress</span>';
      case "open": return '<span class="badge badge-open">Open</span>';
      case "planned": return '<span class="badge badge-planned">Planned</span>';
      case "freeze": return '<span class="badge badge-neutral">Academic Break</span>';
      default: return `<span class="badge badge-neutral">${esc(status)}</span>`;
    }
  }

  /* ------------------------------------------------------------------------
     PAGE RENDERERS
     ------------------------------------------------------------------------ */

  // 1. MUST FIX PAGE
  function renderMustFix() {
    const activeMount = document.getElementById("must-fix-active");
    const resolvedMount = document.getElementById("must-fix-resolved");
    if (!activeMount) return;

    activeMount.innerHTML = DATA.mustFixActive.map(item => `
      <article class="issue-card ${item.priority === "CRITICAL" ? "status-critical" : "status-open"}">
        <div class="issue-top">
          <div class="issue-badges">
            <span class="badge ${item.priority === "CRITICAL" ? "badge-critical" : item.priority === "HIGH" ? "badge-open" : "badge-progress"}">${esc(item.priority)}</span>
            <span class="badge badge-neutral">${esc(item.id)}</span>
          </div>
          <span class="badge badge-neutral">Branch / Area: <code>${esc(item.branch)}</code></span>
        </div>
        <div class="issue-title">${esc(item.title)}</div>
        <p class="issue-desc">${esc(item.description)}</p>
        <div class="issue-meta">
          <span><strong>Owner:</strong> ${esc(item.owner)}</span>
          <span><strong>Next Action:</strong> ${esc(item.action)}</span>
        </div>
      </article>
    `).join("");

    if (resolvedMount) {
      resolvedMount.innerHTML = DATA.mustFixResolved.map(r => `
        <article class="issue-card status-done">
          <div class="issue-top">
            <div class="issue-badges">
              <span class="badge badge-done">Resolved</span>
              <span class="badge badge-neutral">${esc(r.ref)}</span>
            </div>
          </div>
          <div class="issue-title">${esc(r.title)}</div>
          <p class="issue-desc" style="margin-bottom:0">${esc(r.note)}</p>
        </article>
      `).join("");
    }
  }

  // 2. TO-DO BY MEMBER PAGE
  function renderTodoBy() {
    const filterMount = document.getElementById("todo-member-filters");
    const listMount = document.getElementById("todo-member-cards");
    if (!filterMount || !listMount) return;

    let activeMember = "all";

    function draw() {
      filterMount.innerHTML = `
        <button class="filter-btn ${activeMember === "all" ? "active" : ""}" data-member="all">All Members (${DATA.team.length})</button>
        ${DATA.team.map(m => `
          <button class="filter-btn ${activeMember === m.id ? "active" : ""}" data-member="${m.id}">${esc(m.name.split(" ")[0])} (${m.currentTasks.length})</button>
        `).join("")}
      `;

      filterMount.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          activeMember = btn.dataset.member;
          draw();
        });
      });

      const members = activeMember === "all" ? DATA.team : DATA.team.filter(m => m.id === activeMember);

      listMount.innerHTML = members.map(m => `
        <section class="section-card" style="margin-bottom:18px;">
          <div class="section-header">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="avatar">${esc(m.initials)}</div>
              <div>
                <h2 style="font-size:1.1rem;">${esc(m.name)} <span class="badge badge-neutral" style="font-weight:600;">@${esc(m.handle)}</span></h2>
                <p>${esc(m.role)} · ${esc(m.actorScope)} · <strong>${esc(m.availability)}</strong></p>
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-primary" data-copy-member="${m.id}">Copy Context (.md)</button>
              <button class="btn" data-download-member="${m.id}">Download .md</button>
              <button class="btn" data-preview-member="${m.id}">Preview</button>
            </div>
          </div>

          <div class="issue-list">
            ${m.currentTasks.map(t => `
              <div class="issue-card status-${t.status === "in-progress" ? "progress" : t.status}">
                <div class="issue-top">
                  <div class="issue-badges">
                    ${statusBadge(t.status)}
                    ${t.issue ? `<a class="badge badge-neutral" href="${DATA.meta.repoUrl}/issues/${t.issue}" target="_blank" rel="noopener">Issue #${t.issue}</a>` : `<span class="badge badge-neutral">New Sub-Issue</span>`}
                  </div>
                  <span style="font-size:0.81rem;color:var(--text-muted);">Branch: <code>${esc(t.branch)}</code></span>
                </div>
                <div class="issue-title">${esc(t.title)}</div>
                <p class="issue-desc" style="margin-bottom:0;">${esc(t.details)}</p>
              </div>
            `).join("")}
          </div>
        </section>
      `).join("");

      listMount.querySelectorAll("[data-copy-member]").forEach(btn => {
        btn.addEventListener("click", () => {
          const member = DATA.team.find(x => x.id === btn.dataset.copyMember);
          copyToClipboard(window.buildMemberContextMd(member), `Copied ${member.name}'s AI context!`);
        });
      });
      listMount.querySelectorAll("[data-download-member]").forEach(btn => {
        btn.addEventListener("click", () => {
          const member = DATA.team.find(x => x.id === btn.dataset.downloadMember);
          downloadMarkdown(`${member.id}-ai-context.md`, window.buildMemberContextMd(member));
        });
      });
      listMount.querySelectorAll("[data-preview-member]").forEach(btn => {
        btn.addEventListener("click", () => {
          const member = DATA.team.find(x => x.id === btn.dataset.previewMember);
          openContextModal(`AI Context Pack — ${member.name}`, `${member.id}-ai-context.md`, window.buildMemberContextMd(member));
        });
      });
    }

    draw();
  }

  // 3. MILESTONES & ISSUES PAGE (WITH COPY CONTEXT BUTTON!)
  function renderMilestones() {
    const msFilterMount = document.getElementById("milestone-filters");
    const statusFilterMount = document.getElementById("status-filters");
    const searchInput = document.getElementById("issue-search");
    const listMount = document.getElementById("issues-container");
    const countLabel = document.getElementById("issue-count-label");
    if (!msFilterMount || !listMount) return;

    let selectedMilestone = "all";
    let selectedStatus = "all";
    let query = "";

    const STATUSES = [
      { id: "all", label: "All Statuses" },
      { id: "in-progress", label: "In Progress" },
      { id: "open", label: "Open" },
      { id: "done", label: "Done / Closed" },
      { id: "planned", label: "Planned (It3/It4)" }
    ];

    function drawFilters() {
      msFilterMount.innerHTML = DATA.milestones.map(ms => `
        <button class="filter-btn ${selectedMilestone === ms.id ? "active" : ""}" data-ms="${ms.id}">${esc(ms.label)}</button>
      `).join("");
      msFilterMount.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          selectedMilestone = btn.dataset.ms;
          drawFilters();
          drawIssues();
        });
      });

      statusFilterMount.innerHTML = STATUSES.map(st => `
        <button class="filter-btn ${selectedStatus === st.id ? "active" : ""}" data-st="${st.id}">${esc(st.label)}</button>
      `).join("");
      statusFilterMount.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          selectedStatus = btn.dataset.st;
          drawFilters();
          drawIssues();
        });
      });
    }

    function drawIssues() {
      const q = query.trim().toLowerCase();
      const filtered = DATA.issues.filter(issue => {
        if (selectedMilestone !== "all" && issue.milestone !== selectedMilestone) return false;
        if (selectedStatus !== "all" && issue.status !== selectedStatus) return false;
        if (q) {
          const hay = [
            issue.title,
            issue.summary,
            issue.uc,
            issue.step,
            issue.branch,
            (issue.assignees || []).join(" "),
            issue.ghNumber ? "#" + issue.ghNumber : issue.key
          ].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${DATA.issues.length} tracked milestone items`;
      }

      if (filtered.length === 0) {
        listMount.innerHTML = `<div class="section-card" style="text-align:center;color:var(--text-muted);">No issues match the current filters. Try clearing search or selecting All Milestones.</div>`;
        return;
      }

      listMount.innerHTML = filtered.map(issue => `
        <article class="issue-card status-${esc(issue.status)}">
          <div class="issue-top">
            <div class="issue-badges">
              ${statusBadge(issue.status)}
              <span class="badge badge-neutral">${esc(issue.milestoneLabel)}</span>
              <span class="badge badge-neutral">${esc(issue.step)}</span>
              <span class="badge badge-neutral">${esc(issue.uc)}</span>
            </div>
            ${issue.ghNumber
              ? `<a class="btn" href="${DATA.meta.repoUrl}/issues/${issue.ghNumber}" target="_blank" rel="noopener">GitHub #${issue.ghNumber} ↗</a>`
              : `<span class="badge badge-neutral">${esc(issue.key)}</span>`}
          </div>

          <div class="issue-title">${esc(issue.title)}</div>
          <p class="issue-desc">${esc(issue.summary)}</p>

          <div class="issue-meta">
            <span><strong>Assignees:</strong> ${(issue.assignees || []).map(a => `@${esc(a)}`).join(", ")}</span>
            <span><strong>RADIT:</strong> ${(issue.radit || []).join(" · ")}</span>
            <span><strong>Branch:</strong> <code>${esc(issue.branch)}</code></span>
          </div>

          <div class="issue-actions">
            <button class="btn btn-primary" data-copy-issue="${esc(issue.key)}">Copy Context</button>
            <button class="btn btn-accent" data-download-issue="${esc(issue.key)}">Download .md</button>
            <button class="btn" data-preview-issue="${esc(issue.key)}">Preview Context</button>
          </div>
        </article>
      `).join("");

      listMount.querySelectorAll("[data-copy-issue]").forEach(btn => {
        btn.addEventListener("click", () => {
          const issue = DATA.issues.find(i => i.key === btn.dataset.copyIssue);
          copyToClipboard(
            window.buildIssueContextMd(issue),
            `Copied AI Context (.md) for ${issue.ghNumber ? "Issue #" + issue.ghNumber : issue.key}!`
          );
        });
      });

      listMount.querySelectorAll("[data-download-issue]").forEach(btn => {
        btn.addEventListener("click", () => {
          const issue = DATA.issues.find(i => i.key === btn.dataset.downloadIssue);
          const fname = `context-${issue.ghNumber ? "issue-" + issue.ghNumber : issue.key.toLowerCase()}.md`;
          downloadMarkdown(fname, window.buildIssueContextMd(issue));
        });
      });

      listMount.querySelectorAll("[data-preview-issue]").forEach(btn => {
        btn.addEventListener("click", () => {
          const issue = DATA.issues.find(i => i.key === btn.dataset.previewIssue);
          const fname = `context-${issue.ghNumber ? "issue-" + issue.ghNumber : issue.key.toLowerCase()}.md`;
          openContextModal(
            `AI Agent Context — ${issue.ghNumber ? "Issue #" + issue.ghNumber : issue.key}`,
            fname,
            window.buildIssueContextMd(issue)
          );
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        query = e.target.value;
        drawIssues();
      });
    }

    drawFilters();
    drawIssues();
  }

  // 4. ROADMAP PAGE
  function renderRoadmap() {
    const timelineMount = document.getElementById("roadmap-timeline");
    const decisionsMount = document.getElementById("roadmap-decisions");
    if (!timelineMount) return;

    timelineMount.innerHTML = DATA.roadmap.map(step => `
      <div class="timeline-item ${step.status === "in-progress" ? "active-phase" : ""} ${step.status === "freeze" ? "freeze-phase" : ""}">
        <div class="timeline-left">
          <div class="timeline-phase-tag">${esc(step.iter)} · ${esc(step.phase)}</div>
          <div class="timeline-dates">${esc(step.dates)}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;">
            ${statusBadge(step.status)}
            <span class="badge badge-neutral">${esc(step.version)}</span>
            <span class="badge badge-neutral">${esc(step.hours)}</span>
          </div>
        </div>
        <div>
          <div style="font-weight:700;font-size:0.98rem;margin-bottom:6px;color:var(--text-main);">
            ${esc(step.useCases)}
          </div>
          <p style="font-size:0.89rem;color:var(--text-secondary);margin-bottom:8px;">
            <strong>Deliverables:</strong> ${esc(step.deliverables)}
          </p>
          <p style="font-size:0.86rem;color:var(--text-muted);">
            <strong>Dependency Rationale (Why Here):</strong> ${esc(step.why)}
          </p>
        </div>
      </div>
    `).join("");

    if (decisionsMount) {
      decisionsMount.innerHTML = DATA.decisions.map(d => `
        <tr>
          <td><strong><code>${esc(d.id)}</code></strong></td>
          <td><strong>${esc(d.title)}</strong></td>
          <td>${esc(d.summary)}</td>
        </tr>
      `).join("");
    }
  }

  // 5. TEAM PAGE
  function renderTeam() {
    const gridMount = document.getElementById("team-roster-grid");
    if (!gridMount) return;

    gridMount.innerHTML = DATA.team.map(m => `
      <article class="member-card">
        <div class="member-header">
          <div class="avatar">${esc(m.initials)}</div>
          <div>
            <div class="member-name">${esc(m.name)}</div>
            <div class="member-role">${esc(m.role)} · <a href="https://github.com/${esc(m.handle)}" target="_blank" rel="noopener">@${esc(m.handle)}</a></div>
          </div>
        </div>
        <div class="member-kv"><strong>Actor / Domain Scope:</strong> ${esc(m.actorScope)}</div>
        <div class="member-kv"><strong>Availability:</strong> ${esc(m.availability)}</div>
        <div class="member-kv"><strong>Peer Reviewer:</strong> ${esc(m.peerReviewer)}</div>
        <div class="member-kv"><strong>Active Iteration 2 Focus:</strong> ${esc(m.focusNow)}</div>
        <div style="margin-top:auto;padding-top:10px;border-top:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;">
          <a class="btn btn-primary" href="todo-by.html">View Assigned Tasks</a>
          <button class="btn" data-team-copy="${m.id}">Copy Personal AI Context</button>
        </div>
      </article>
    `).join("");

    gridMount.querySelectorAll("[data-team-copy]").forEach(btn => {
      btn.addEventListener("click", () => {
        const member = DATA.team.find(x => x.id === btn.dataset.teamCopy);
        copyToClipboard(window.buildMemberContextMd(member), `Copied ${member.name}'s AI Context (.md)!`);
      });
    });
  }

  // 6. MEETINGS & DECISIONS PAGE
  function renderMeetings() {
    const meetingsMount = document.getElementById("meetings-log");
    const decisionsMount = document.getElementById("meetings-decisions-table");
    if (!meetingsMount) return;

    meetingsMount.innerHTML = DATA.meetings.map(m => `
      <article class="issue-card ${m.status === "in-progress" ? "status-progress" : "status-done"}">
        <div class="issue-top">
          <div class="issue-badges">
            ${m.status === "in-progress" ? '<span class="badge badge-progress">Upcoming Session</span>' : '<span class="badge badge-done">Logged</span>'}
            <span class="badge badge-neutral">${esc(m.id)}</span>
            <span class="badge badge-neutral">${esc(m.date)}</span>
          </div>
          <div class="issue-badges">
            ${(m.decisionsLinked || []).map(d => `<span class="badge badge-neutral"><code>${esc(d)}</code></span>`).join("")}
          </div>
        </div>
        <div class="issue-title">${esc(m.type)}</div>
        <ul class="clean-list" style="margin-top:8px;">
          ${(m.agenda || []).map(point => `<li>${esc(point)}</li>`).join("")}
        </ul>
      </article>
    `).join("");

    if (decisionsMount) {
      decisionsMount.innerHTML = DATA.decisions.map(d => `
        <tr>
          <td><strong><code>${esc(d.id)}</code></strong></td>
          <td><strong>${esc(d.title)}</strong></td>
          <td>${esc(d.summary)}</td>
        </tr>
      `).join("");
    }
  }

  // 7. BLUNDERS (??) & RECOVERY PLAYBOOK (!!) PAGE
  function renderBlunders() {
    const mount = document.getElementById("blunders-list");
    const filterMount = document.getElementById("blunder-filters");
    if (!mount) return;

    let activeSeverity = "ALL";
    const SEVS = ["ALL", "CRITICAL", "HIGH", "MEDIUM", "RESOLVED"];

    function draw() {
      if (filterMount) {
        filterMount.innerHTML = SEVS.map(s => `
          <button class="filter-btn ${activeSeverity === s ? "active" : ""}" data-sev="${s}">
            ${s === "ALL" ? `All Blunders (${DATA.blunders.length})` : s}
          </button>
        `).join("");
        filterMount.querySelectorAll(".filter-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            activeSeverity = btn.dataset.sev;
            draw();
          });
        });
      }

      const items = activeSeverity === "ALL"
        ? DATA.blunders
        : DATA.blunders.filter(b => b.severity === activeSeverity);

      mount.innerHTML = items.map(b => `
        <article class="issue-card ${b.severity === "CRITICAL" ? "status-critical" : b.severity === "HIGH" ? "status-open" : b.severity === "RESOLVED" ? "status-done" : "status-progress"}">
          <div class="issue-top">
            <div class="issue-badges">
              <span class="badge ${b.severity === "CRITICAL" ? "badge-critical" : b.severity === "HIGH" ? "badge-open" : b.severity === "RESOLVED" ? "badge-done" : "badge-progress"}">${esc(b.notation)}</span>
              <span class="badge badge-neutral">${esc(b.id)}</span>
              <span class="badge badge-done">Recovery Gain: ${esc(b.scoreGain)}</span>
            </div>
            <span style="font-size:0.81rem;color:var(--text-muted);"><strong>Owner:</strong> ${esc(b.owner)}</span>
          </div>

          <div class="issue-title">${esc(b.title)}</div>

          <div class="two-col" style="margin-top:12px;">
            <div class="panel danger-accent" style="padding:14px 16px;">
              <h3 style="font-size:0.92rem;color:var(--danger);margin-bottom:8px;">?? What We Might Be Doing Wrong</h3>
              <p style="font-size:0.87rem;color:var(--text-secondary);margin-bottom:8px;">${esc(b.whatWrong)}</p>
              <p style="font-size:0.83rem;color:var(--text-muted);"><strong>Risk / Impact:</strong> ${esc(b.impact)}</p>
            </div>
            <div class="panel success-accent" style="padding:14px 16px;">
              <h3 style="font-size:0.92rem;color:var(--success);margin-bottom:8px;">!! Best Move — How to Recover</h3>
              <p style="font-size:0.87rem;color:var(--text-secondary);margin-bottom:0;">${esc(b.recovery)}</p>
            </div>
          </div>

          ${b.stepByStep && b.stepByStep.length ? `
            <div class="panel" style="margin-top:12px;padding:14px 16px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-sm);">
              <h3 style="font-size:0.92rem;color:var(--text-primary);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
                <span>📋</span> Step-by-Step Solution
              </h3>
              <ol class="clean-list" style="padding-left:18px;margin:0;font-size:0.87rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:6px;">
                ${b.stepByStep.map(s => `<li>${esc(s)}</li>`).join("")}
              </ol>
            </div>
          ` : ""}

          ${b.aiPrompt ? `
            <div class="panel" style="margin-top:12px;padding:14px 16px;background:var(--bg-primary);border:1px solid var(--border);border-left:4px solid var(--accent);border-radius:var(--radius-sm);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
                <h3 style="font-size:0.92rem;color:var(--accent);margin:0;display:flex;align-items:center;gap:6px;">
                  <span>🤖</span> Full AI Agent Prompt (Copy &amp; Run)
                </h3>
                <button class="nav-btn" data-copy-prompt="${b.id}" style="padding:6px 12px;font-size:0.8rem;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);cursor:pointer;font-weight:600;">
                  📋 Copy AI Prompt
                </button>
              </div>
              <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px;">
                <strong>Target Branch:</strong> <code>feature/CU10-CU11-CU16-orders-backend-service</code> &middot; Ready to paste directly into Cursor, Claude Code, or ChatGPT to generate and test the complete service layer.
              </p>
              <pre style="max-height:240px;overflow-y:auto;background:var(--bg-card);padding:10px 12px;border-radius:var(--radius-sm);border:1px solid var(--border);font-family:var(--font-mono, monospace);font-size:0.8rem;white-space:pre-wrap;color:var(--text-secondary);line-height:1.45;">${esc(b.aiPrompt)}</pre>
            </div>
          ` : ""}
        </article>
      `).join("");

      mount.querySelectorAll("[data-copy-prompt]").forEach(btn => {
        btn.addEventListener("click", () => {
          const blunder = DATA.blunders.find(b => b.id === btn.dataset.copyPrompt);
          if (blunder && blunder.aiPrompt) {
            copyToClipboard(blunder.aiPrompt, "AI Agent prompt copied to clipboard!");
          }
        });
      });
    }

    draw();
  }

  /* ------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    if (PAGE === "must-fix") renderMustFix();
    if (PAGE === "blunders") renderBlunders();
    if (PAGE === "todo-by") renderTodoBy();
    if (PAGE === "milestones") renderMilestones();
    if (PAGE === "meetings") renderMeetings();
    if (PAGE === "roadmap") renderRoadmap();
    if (PAGE === "team") renderTeam();
  });
})();

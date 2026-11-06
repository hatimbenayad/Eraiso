// Project Tracker & Status Dashboard for ISO2 2026/27 Team A.05 (SESCAM Radiodiagnostics)

const PROJECT_DATA = {
  meta: {
    title: "Comprehensive Management System for Radiodiagnostics and Medical Imaging (SESCAM)",
    course: "Software Engineering II (ISO2) · Academic Year 2026/27",
    university: "Escuela Superior de Informática de Ciudad Real (UCLM)",
    teamGroup: "Team A.05",
    repoUrl: "https://github.com/hatimbenayad/2026-ISO2-A.05",
    currentPhase: "Iteration 0 — Inception Phase",
    deadlines: {
      theory1: "November 13, 2026 (Theoretical Assignment 1: Planning, SCM, SQA)",
      labFinal: "December 15, 2026 (Final Practical Lab Submission: Unified Code, Tests, Maintenance, Wiki)"
    }
  },
  team: [
    { name: "Hatim Ben Ayad", role: "Coordinator", tasks: "Meeting coordination, tracking, Admin actor (RF19–RF26), general client diagram assembly", status: "Active" },
    { name: "Felipe Dionisio Becerra Sangeorzan", role: "Secretary", tasks: "Meeting minutes, Decision logging, System Admin actor (RF27–RF32)", status: "Active" },
    { name: "Berke Taha Özdemir", role: "Git Expert", tasks: "Git Flow governance, Server use case diagram (SCU01–SCU13), PR reviews", status: "Active" },
    { name: "Beyzanur Balota", role: "Git Expert", tasks: "Git Flow support, Team availability, Constraints & Assumptions table (Issue #18, #31)", status: "Active" },
    { name: "Mina Özdoğan", role: "Maven Expert", tasks: "Maven architecture, Patient actor (RF01–RF09), client diagram review", status: "Active" },
    { name: "Ayça Görgülü", role: "Maven Expert", tasks: "Maven module setup, Physician actor (RF10–RF18), Physician-Patient inheritance", status: "Active" },
    { name: "Ismael Caballero", role: "Professor / Academic Monitor", tasks: "Continuous repository audit and academic evaluation", status: "Advisor" }
  ],
  checklist: [
    // 1. CONSTRAINTS
    {
      id: "c-1",
      category: "constraints",
      done: true,
      title: "UP 4-Phase Lifecycle & Milestones Constraint",
      description: "The project must strictly adhere to the 4 Unified Process phases: Inception (LCO / It0), Elaboration (architectural baseline & core entities), Construction (IOC / remaining UCs), and Transition (ItN / final integration, packaging, deployment, user manuals).",
      source: "01-Project Spec p. 5, 04-Kickoff Slide 26",
      statusText: "Documented in Wiki Planification.md as C07",
      phase: "Overall Project"
    },
    {
      id: "c-2",
      category: "constraints",
      done: true,
      title: "Fixed Human Labor Cost Constraint (€1,000 It0 & €2,000 ItN)",
      description: "Fixed human labor baseline budget of €1,000 for Iteration 0 and €2,000 for concluding Iteration N. Intermediate iterations must be estimated by human hours without tooling markups.",
      source: "01-Project Spec p. 5, 04-Kickoff Slide 26",
      statusText: "Documented in Wiki Planification.md as A04",
      phase: "Overall Project"
    },
    {
      id: "c-3",
      category: "constraints",
      done: true,
      title: "Labor Rate & Work Week Constraint (40h/week, €25/h)",
      description: "One working week is defined as 40 billable professional hours for a human consultant at a baseline standard rate of €25/hour. Actual student hours are bounded by weekly academic availability.",
      source: "01-Project Spec p. 5, 04-Kickoff Slide 26-27",
      statusText: "Documented in Wiki Planification.md as A05",
      phase: "Overall Project"
    },
    {
      id: "c-4",
      category: "constraints",
      done: true,
      title: "AI Labor & Review Latency Constraint",
      description: "AI agents operate 24/7 without fatigue, but project schedules must realistically account for latency incurred while agents await human review, verification, and merge approvals.",
      source: "01-Project Spec p. 5, 04-Kickoff Slide 29",
      statusText: "Documented in Wiki Planification.md as C15 & A05",
      phase: "Overall Project"
    },
    {
      id: "c-5",
      category: "constraints",
      done: true,
      title: "Academic Deadlines Constraint (Nov 13 & Dec 15)",
      description: "Mandatory non-negotiable delivery dates: Theoretical Assignment 1 submission on November 13, 2026. Practical Laboratory Deliverable final submission on December 15, 2026. Santa Tecla non-working week included.",
      source: "01-Project Spec p. 9, 04-Kickoff Slide 26, 31",
      statusText: "Documented in Wiki Planification.md as C17 & C18",
      phase: "Milestones"
    },
    {
      id: "c-6",
      category: "constraints",
      done: false,
      title: "Team Weekly Availability & Limitations Table",
      description: "Weekly available hours and exam/travel restrictions for each of the 6 team members must be recorded in Planification.md §3.",
      source: "04-Kickoff Slide 26, Planification.md §3, Issue #31",
      statusText: "Pending table completion in Planification.md §3",
      phase: "Inception (It0)"
    },
    {
      id: "c-7",
      category: "constraints",
      done: true,
      title: "Multi-Module Maven & Java Technology Stack",
      description: "Core development must be in Java, using Visual Studio Code / Eclipse, Visual Paradigm, with a root multi-module pom.xml and individual submodules.",
      source: "01-Project Spec p. 4, 8; 04-Kickoff Slide 11",
      statusText: "Documented in Wiki Planification.md as C01 & C02",
      phase: "Elaboration / Construction"
    },
    {
      id: "c-8",
      category: "constraints",
      done: true,
      title: "Software Product Quality Constraint (ISO/IEC 25010)",
      description: "Must systematically elicit and derive functional and non-functional requirements grounded in ISO/IEC 25010 quality characteristics (Quality by Design).",
      source: "01-Project Spec p. 9",
      statusText: "Documented in Wiki Planification.md as C09",
      phase: "Quality Assurance"
    },
    {
      id: "c-9",
      category: "constraints",
      done: true,
      title: "Man-in-the-Loop Human Accountability Constraint",
      description: "'The Engineer designs the Interfaces; the AI implements the Contracts'. Ultimate accountability for delivery and verification rests exclusively on each human team member.",
      source: "01-Project Spec p. 4, 8",
      statusText: "Documented in Wiki Planification.md as C14 & C16",
      phase: "Governance"
    },

    // 2. ASSUMPTIONS
    {
      id: "a-1",
      category: "assumptions",
      done: true,
      title: "1 Functional Requirement = 1 Use Case Heuristic (1:1)",
      description: "Baseline heuristic maps each elicited Functional Requirement directly to exactly one Use Case (RF01–RF32 maps to CU01–CU32).",
      source: "01-Project Spec p. 5, DECISIONS.md D-001, Wiki §4",
      statusText: "Approved and mapped in wiki §4",
      phase: "Inception (It0)"
    },
    {
      id: "a-2",
      category: "assumptions",
      done: true,
      title: "1 Use Case = 1 Development Iteration Heuristic (1:1)",
      description: "Baseline heuristic assumes each Use Case is realized within one and only one development iteration for initial scheduling simplification.",
      source: "01-Project Spec p. 5, 04-Kickoff Slide 27",
      statusText: "Adopted as foundational planning heuristic",
      phase: "Inception (It0)"
    },
    {
      id: "a-3",
      category: "assumptions",
      done: true,
      title: "1 Iteration = 1 Component Release Heuristic (1:1)",
      description: "Each development iteration yields one software component whose evolution is tracked via explicit Semantic Versioning target releases.",
      source: "01-Project Spec p. 7",
      statusText: "Adopted for component roadmap structuring",
      phase: "Inception (It0)"
    },
    {
      id: "a-4",
      category: "assumptions",
      done: true,
      title: "AI Model Zero Monetary Cost Assumption (€0)",
      description: "AI development tools (VS Code Copilot Chat and Google Antigravity) are acquired via UCLM student licenses, incurring zero monetary licensing cost for the project budget.",
      source: "01-Project Spec p. 4, DECISIONS.md D-001",
      statusText: "Documented in DECISIONS.md; zero model budget verified",
      phase: "Inception (It0)"
    },
    {
      id: "a-5",
      category: "assumptions",
      done: true,
      title: "External Hospital Systems Simulated via Adapters",
      description: "Corporate SSO (E01), EHR (E02), Admissions (E03), and RIS/PACS (E04) are integrated through mock adapter classes conforming to interface contracts.",
      source: "01-Project Spec p. 1, 04-Kickoff Slide 25, Wiki §1.2",
      statusText: "Verified in Server Use Case Diagram (PR #32)",
      phase: "Elaboration Baseline"
    },
    {
      id: "a-6",
      category: "assumptions",
      done: true,
      title: "Client-Server Decoupled Architecture Assumption",
      description: "System is strictly partitioned into a server backend and heterogeneous client applications (desktop, web, mobile) communicating via interface contracts.",
      source: "01-Project Spec p. 1, 04-Kickoff Slide 11, 25",
      statusText: "Modeled in Server vs Client diagram separation",
      phase: "Architecture"
    },
    {
      id: "a-7",
      category: "assumptions",
      done: true,
      title: "Visual Paradigm as Canonical Modeling Tool",
      description: "Visual Paradigm chosen as the official UML tool for diagramming, with editable .vpp and readable exports committed to the repository.",
      source: "01-Project Spec p. 5, Meeting 2 Minutes",
      statusText: "Enforced across all diagram deliverables",
      phase: "Inception (It0)"
    },

    // 3. COMPONENTS ARCHITECTURE
    {
      id: "comp-1",
      category: "components",
      done: false,
      title: "Root Multi-Module Maven POM (pom.xml)",
      description: "Root aggregator pom.xml declaring shared dependencies, compiler plugin, JaCoCo code coverage plugin, and Surefire test runner across submodules.",
      source: "01-Project Spec p. 7, 04-Kickoff Slide 11",
      statusText: "Pending initial scaffolding in Iteration 1",
      phase: "Elaboration (It1)"
    },
    {
      id: "comp-2",
      category: "components",
      done: false,
      title: "Server Backend Module (servidor/)",
      description: "Maven submodule housing the server application: API Controllers, Domain Models, Services, and Persistence layer.",
      source: "01-Project Spec p. 1, 04-Kickoff Slide 11",
      statusText: "Pending scaffolding",
      phase: "Elaboration / Construction"
    },
    {
      id: "comp-3",
      category: "components",
      done: false,
      title: "Web Client Module (cliente-web/)",
      description: "Maven submodule for web client application implementing the Model-View-Controller (MVC) architectural pattern.",
      source: "01-Project Spec p. 1, 04-Kickoff Slide 11",
      statusText: "Pending scaffolding",
      phase: "Construction"
    },
    {
      id: "comp-4",
      category: "components",
      done: false,
      title: "Mobile Client Module (cliente-movil/)",
      description: "Maven submodule / stub for Android/iOS mobile client interface.",
      source: "01-Project Spec p. 1, 04-Kickoff Slide 11",
      statusText: "Pending scaffolding",
      phase: "Construction"
    },
    {
      id: "comp-5",
      category: "components",
      done: false,
      title: "Interface & Adapter Contracts Module",
      description: "Common contracts module defining API interfaces between clients and server, and external adapters for SSO, EHR, Admissions, and RIS/PACS.",
      source: "01-Project Spec p. 8, 04-Kickoff Slide 11",
      statusText: "Pending interface definitions",
      phase: "Elaboration (It1)"
    },
    {
      id: "comp-6",
      category: "components",
      done: true,
      title: "Architectural Boundary Decomposition",
      description: "Formal separation between Client Context (CU01–CU32) and Server Context (SCU01–SCU13) established in design models.",
      source: "04-Kickoff Slide 25, Wiki §5.2",
      statusText: "Completed in Server Diagram (PR #32) and Meeting 2",
      phase: "Inception (It0)"
    },

    // 4. VERSIONS & ROADMAP
    {
      id: "v-1",
      category: "versions",
      done: true,
      title: "Semantic Versioning Scheme Formally Defined",
      description: "Standard SemVer 2.0.0 (MAJOR.MINOR.PATCH) agreed for all releases, Git Flow tags, and Maven artifact versions.",
      source: "01-Project Spec p. 8-9, 04-Kickoff Slide 9",
      statusText: "Agreed in kickoff; documented in project specs",
      phase: "Inception (It0)"
    },
    {
      id: "v-2",
      category: "versions",
      done: true,
      title: "Milestone It0 – Inception (v0.0.1)",
      description: "Initial repository kickoff milestone on GitHub tracking Iteration 0 deliverables.",
      source: "GitHub Milestone #1",
      statusText: "Active milestone on GitHub with 10 open and 11 closed issues",
      phase: "Inception (It0)"
    },
    {
      id: "v-3",
      category: "versions",
      done: false,
      title: "Release v0.1.0 — Architectural Baseline",
      description: "Target version concluding Elaboration phase: Maven multi-module skeleton, core domain entities, and external adapters operational.",
      source: "01-Project Spec p. 7, 04-Kickoff Slide 9, 26",
      statusText: "Scheduled for Elaboration phase completion",
      phase: "Elaboration"
    },
    {
      id: "v-4",
      category: "versions",
      done: false,
      title: "Releases v0.2.0 - v0.x.0 — Construction Increments",
      description: "Sequential SemVer minor releases delivering functional use-case components according to priority schedule.",
      source: "01-Project Spec p. 7, 04-Kickoff Slide 9",
      statusText: "Scheduled across Construction iterations",
      phase: "Construction"
    },
    {
      id: "v-5",
      category: "versions",
      done: false,
      title: "Release v1.0.0 — Production Build Deliverable",
      description: "Final consolidated release for Dec 15: all components integrated, tests verified (>80% coverage), packaged into executable JAR with user manual.",
      source: "01-Project Spec p. 7, 9; 04-Kickoff Slide 26",
      statusText: "Final submission milestone (Dec 15, 2026)",
      phase: "Transition (ItN)"
    },
    {
      id: "v-6",
      category: "versions",
      done: false,
      title: "Release Calendar in Planification.md §11",
      description: "Complete table in wiki listing each iteration, deliverable component, target version, start/finish dates, responsible members, and issue links.",
      source: "Planification.md §11",
      statusText: "Currently marked [To agree] in wiki",
      phase: "Inception (It0)"
    },

    // 5. SCM & REPOSITORY INFRASTRUCTURE
    {
      id: "scm-1",
      category: "scm",
      done: true,
      title: "Repository Initialized (hatimbenayad/2026-ISO2-A.05)",
      description: "Public GitHub repository created with README.md and Java .gitignore.",
      source: "04-Kickoff Slide 5",
      statusText: "Complete on GitHub",
      phase: "Inception (It0)"
    },
    {
      id: "scm-2",
      category: "scm",
      done: true,
      title: "All 6 Team Members + Professor Added as Collaborators",
      description: "Hatim, Felipe, Berke, Beyzanur, Mina, Ayça and Professor Ismael Caballero (IsmaelCaballero) added without pending invites.",
      source: "04-Kickoff Slide 7",
      statusText: "Verified: 7 collaborators active",
      phase: "Inception (It0)"
    },
    {
      id: "scm-3",
      category: "scm",
      done: true,
      title: "develop Branch Configured as Default Branch",
      description: "Branch 'develop' created from main and set as default branch on GitHub repository.",
      source: "04-Kickoff Slide 12",
      statusText: "Verified: HEAD is origin/develop",
      phase: "Inception (It0)"
    },
    {
      id: "scm-4",
      category: "scm",
      done: true,
      title: "Branch Protection Ruleset Active (main & develop)",
      description: "Ruleset protecting main and develop: direct pushes prohibited, PR required, 1 peer approval required, bypass list empty.",
      source: "04-Kickoff Slide 13",
      statusText: "Verified: Ruleset active on repository",
      phase: "Inception (It0)"
    },
    {
      id: "scm-5",
      category: "scm",
      done: true,
      title: "Initial PR Merged (feature/CU00-initial-structure)",
      description: "First pull request created by non-coordinator, reviewed, and merged into develop.",
      source: "04-Kickoff Slide 12",
      statusText: "Merged via PR #1 and PR #5",
      phase: "Inception (It0)"
    },
    {
      id: "scm-6",
      category: "scm",
      done: true,
      title: "Use Case Issue Template Merged (.github/ISSUE_TEMPLATE/use-case.md)",
      description: "Standardized issue template with RADIT disciplines, contracts, acceptance criteria, effort estimates, and DECISIONS links merged into develop.",
      source: "04-Kickoff Slide 17",
      statusText: "Merged via PR #4 and PR #11",
      phase: "Inception (It0)"
    },
    {
      id: "scm-7",
      category: "scm",
      done: true,
      title: "Pull Request Template Merged (.github/PULL_REQUEST_TEMPLATE.md)",
      description: "PR template enforcing issue closing keywords, review checklist, and discipline tags.",
      source: "03-Git & GitHub",
      statusText: "Merged via PR #23",
      phase: "Inception (It0)"
    },
    {
      id: "scm-8",
      category: "scm",
      done: true,
      title: "DECISIONS.md Initialized on develop",
      description: "Decision record file documenting architectural, requirements, and planning decisions (D-001 through D-012).",
      source: "04-Kickoff Slide 14",
      statusText: "Active on develop with initial records",
      phase: "Inception (It0)"
    },

    // 6. REQUIREMENTS & USE CASES
    {
      id: "uc-1",
      category: "usecases",
      done: true,
      title: "Actors Formally Identified (Human + External + Server)",
      description: "Human actors (Patient, Physician, Admin, SysAdmin), external systems (SSO, EHR, Admissions, RIS/PACS), and server triggers (Client App, Timer).",
      source: "01-Project Spec p. 1-2, Wiki §1",
      statusText: "Complete in Wiki §1.1 & §1.2",
      phase: "Inception (It0)"
    },
    {
      id: "uc-2",
      category: "usecases",
      done: true,
      title: "Patient Functional Requirements (RF01–RF09)",
      description: "All 9 patient requirements specified, assigned to Mina, and mapped to CU01–CU09.",
      source: "Wiki §2.1 & §4, Issue #7, #14",
      statusText: "Complete on wiki",
      phase: "Inception (It0)"
    },
    {
      id: "uc-3",
      category: "usecases",
      done: true,
      title: "Physician Functional Requirements (RF10–RF18)",
      description: "All 9 physician requirements specified, assigned to Ayça, and mapped to CU10–CU18.",
      source: "Wiki §2.2 & §4, Issue #8, #15",
      statusText: "Complete on wiki",
      phase: "Inception (It0)"
    },
    {
      id: "uc-4",
      category: "usecases",
      done: true,
      title: "Administrative Functional Requirements (RF19–RF26)",
      description: "All 8 administrative requirements specified, assigned to Hatim, and mapped to CU19–CU26.",
      source: "Wiki §2.3 & §4, Issue #9, #13",
      statusText: "Complete on wiki",
      phase: "Inception (It0)"
    },
    {
      id: "uc-5",
      category: "usecases",
      done: true,
      title: "System Administrator Functional Requirements (RF27–RF32)",
      description: "All 6 sysadmin requirements specified, assigned to Felipe, and mapped to CU27–CU32.",
      source: "Wiki §2.4 & §4, Issue #10, #16",
      statusText: "Complete on wiki",
      phase: "Inception (It0)"
    },
    {
      id: "uc-6",
      category: "usecases",
      done: true,
      title: "Patient Client Use-Case Diagram (.vpp + .png)",
      description: "Patient use-case diagram modeled in Visual Paradigm, exported, and merged to develop.",
      source: "Issue #14, PR #20",
      statusText: "Merged to develop (PR #20)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-7",
      category: "usecases",
      done: true,
      title: "Administrative Client Use-Case Diagram (.vpp + .png)",
      description: "Administrative use-case diagram modeled in Visual Paradigm, exported, and merged to develop.",
      source: "Issue #13, PR #19",
      statusText: "Merged to develop (PR #19)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-8",
      category: "usecases",
      done: true,
      title: "Physician Client Use-Case Diagram (.vpp + .jpg)",
      description: "Physician use-case diagram (CU10–CU18) modeled in Visual Paradigm, exported, and merged to develop.",
      source: "Issue #15, PR #21",
      statusText: "Merged to develop (PR #21)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-9",
      category: "usecases",
      done: true,
      title: "Server Use-Case Diagram (.vpp + .jpg)",
      description: "Server diagram modeling SCU01–SCU13 with Client App, Timer, and E01–E04 merged to develop.",
      source: "Issue #17, PR #32",
      statusText: "Merged to develop (PR #32)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-10",
      category: "usecases",
      done: false,
      title: "System Administrator Client Diagram (.vpp + .png)",
      description: "SysAdmin diagram (CU27–CU32) drafted by Felipe on branch feature/admin-use-case-diagram; pending cross-review by Hatim (#30) and merge.",
      source: "Issue #16, #30",
      statusText: "In Progress / Review pending (Issue #30)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-11",
      category: "usecases",
      done: false,
      title: "Physician-Patient Inheritance Resolution (Decision D-007 / D-012)",
      description: "The specification states Physician inherits applicable Patient features. Must agree explicit yes/no table with justifications and publish combined diagram with hollow generalization triangle.",
      source: "01-Project Spec p. 2, Issue #28",
      statusText: "In Progress (Issue #28 active)",
      phase: "Inception (It0)"
    },
    {
      id: "uc-12",
      category: "usecases",
      done: false,
      title: "General Consolidated Client Use-Case Diagram",
      description: "Assembling all four client parts (Patient, Physician, Admin, SysAdmin) into one master client use-case diagram inside a single system boundary.",
      source: "Meeting 2 Minutes, Wiki §5.1",
      statusText: "Pending assembly by Hatim once actor diagrams are approved",
      phase: "Inception (It0)"
    },

    // 7. WIKI & PROJECT PLANNING
    {
      id: "wiki-1",
      category: "scm",
      done: true,
      title: "Wiki Structure Initialized (All 7 Pages)",
      description: "Home, Team-and-roles, Minutes-of-meetings, Requirements-and-use-cases, Planification, Decisions, Self-assessment-and-experience created.",
      source: "04-Kickoff Slide 16",
      statusText: "Complete on GitHub Wiki",
      phase: "Inception (It0)"
    },
    {
      id: "wiki-2",
      category: "scm",
      done: true,
      title: "Meeting Minutes 1 & 2 Formalized",
      description: "Minutes of Meeting 1 (19/10) and Meeting 2 (23/10) written and linked to issues.",
      source: "Minutes-of-meetings.md",
      statusText: "Complete on wiki",
      phase: "Inception (It0)"
    },
    {
      id: "wiki-3",
      category: "scm",
      done: false,
      title: "Meeting Minutes 3 Formalized",
      description: "Formalize minutes of Meeting 3 (01/11) resolving diagram review, inheritance, and server commit tasks.",
      source: "Issues #28-#31 references",
      statusText: "Referenced in issues #28-#31; needs formal page entry",
      phase: "Inception (It0)"
    },
    {
      id: "wiki-4",
      category: "scm",
      done: false,
      title: "Planification.md Content Completed",
      description: "Fill out the empty template on Planification page: constraints, availability, priorities, RADIT effort tables (with and without AI), budget, and release calendar.",
      source: "Planification.md, Issue #31",
      statusText: "Currently marked 'Template — not yet completed' (Issue #31)",
      phase: "Inception (It0)"
    },
    {
      id: "wiki-5",
      category: "scm",
      done: false,
      title: "GitHub Projects Kanban Board Setup",
      description: "Configure GitHub Projects v2 Kanban board with To Do, In Progress, and Done views for complete issue tracking.",
      source: "04-Kickoff Slide 18",
      statusText: "Board needs read:project scope setup / configuration",
      phase: "Inception (It0)"
    },

    // 8. UPCOMING COURSE DELIVERABLES
    {
      id: "del-1",
      category: "deliverables",
      done: false,
      title: "Theoretical Assignment 1 (Submission Deadline: Nov 13)",
      description: "Formal standalone report submitted on Moodle covering: (1) Unified Process Project Plan with analytical justifications, (2) Software Configuration Management (SCM) Plan, (3) Software Quality Assurance (SQA) Plan based on ISO/IEC 25010.",
      source: "01-Project Spec p. 9",
      statusText: "Due November 13, 2026 (Priority Focus)",
      phase: "Course Deliverable"
    },
    {
      id: "del-2",
      category: "deliverables",
      done: false,
      title: "Final Practical Laboratory Deliverable (Deadline: Dec 15, 2026)",
      description: "Unified submission evaluated via GitHub evidence: Multi-module Java code, unit test suites (JUnit 5, JaCoCo >80%), Maven build automation, user manuals, and individual Self-Assessment wiki entries.",
      source: "01-Project Spec p. 9",
      statusText: "Due December 15, 2026",
      phase: "Final Milestone"
    }
  ],

  // ========================================================
  // MUST FIX ITEMS (With Clickable Step-by-Step Instructions)
  // ========================================================
  mustFix: [
    {
      id: "mf-1",
      title: "No Multi-Module Maven Setup or Java Source Files in Repository",
      severity: "CRITICAL",
      reason: "Currently, develop has zero Java files and no pom.xml! The course requires a root multi-module Maven architecture (pom.xml, common-contracts, servidor, cliente-web). Without this, no code, tests, or builds can be constructed.",
      action: "Create branch feature/M1-maven-multimodule, write root pom.xml and submodule skeletons (servidor, cliente-web, common-contracts), and merge via reviewed PR.",
      owner: "Mina Özdoğan & Ayça Görgülü (Maven Experts)",
      ref: "01-Project Spec p. 7; 04-Kickoff Slide 11",
      steps: [
        {
          title: "1. Create Feature Branch",
          details: "Create and switch to a dedicated branch from the latest develop:",
          code: "git switch develop\ngit pull origin develop\ngit switch -c feature/M1-maven-multimodule"
        },
        {
          title: "2. Create Root Aggregator pom.xml",
          details: "In repo root, create pom.xml with packaging 'pom', declaring compiler plugin (Java 17/21), surefire, jacoco (80% rule), and 3 modules:",
          code: "<packaging>pom</packaging>\n<modules>\n  <module>common-contracts</module>\n  <module>servidor</module>\n  <module>cliente-web</module>\n</modules>"
        },
        {
          title: "3. Initialize Submodules with Basic POMs",
          details: "Create directories common-contracts/, servidor/, cliente-web/ with standard src/main/java and child pom.xml files referencing the root parent POM.",
          code: "mkdir common-contracts/src/main/java servidor/src/main/java cliente-web/src/main/java"
        },
        {
          title: "4. Verify Build and Test Execution",
          details: "Execute Maven verify to make sure dependencies and plugin configurations compile cleanly:",
          code: "mvn clean verify"
        },
        {
          title: "5. Commit and Open Pull Request",
          details: "Push branch and open PR to develop titled 'build(maven): initialize multi-module architecture' with 'Closes #33':",
          code: "git add pom.xml common-contracts/ servidor/ cliente-web/\ngit commit -m \"build(maven): initialize multi-module architecture (#33)\"\ngit push -u origin feature/M1-maven-multimodule"
        }
      ]
    },
    {
      id: "mf-2",
      title: "Planification.md is an Empty Template (Constraints & Availability Missing)",
      severity: "HIGH",
      reason: "The wiki page Planification.md is completely empty ('Template — not yet completed'). Sections §2 (Constraints & Assumptions) and §3 (Team Availability) must be filled to fulfill Iteration 0 kickoff criteria and Issue #31.",
      action: "Populate Planification.md with the 9 constraints, 7 assumptions, and all 6 team members' availability hours.",
      owner: "Beyzanur Balota (Issue #31 & #18)",
      ref: "Issue #31, 04-Kickoff Slide 26",
      steps: [
        {
          title: "1. Open Wiki in Browser or Clone",
          details: "Navigate to https://github.com/hatimbenayad/2026-ISO2-A.05/wiki/Planification and click Edit.",
          code: ""
        },
        {
          title: "2. Populate Section 2: Constraints & Assumptions",
          details: "Fill the table with: 4 UP phases, €1,000 It0 / €2,000 ItN fixed budget, 40h/week at €25/h rate, Nov 13 & Dec 15 deadlines, Java/Maven, and ISO 25010 with source citations (spec p. 5, kickoff slide 26).",
          code: "| ID | Type | Constraint / assumption | Source / justification | Planning impact |\n| C-01 | Constraint | 4 UP Phases (Inception, Elab, Const, Trans) | Spec p. 5 | Dictates 4 milestone gates |\n| C-02 | Constraint | Fixed €1,000 It0 / €2,000 ItN budget | Spec p. 5 | Baseline labor budget |"
        },
        {
          title: "3. Populate Section 3: Team Availability",
          details: "Add the 6 members: Hatim (10h/w), Felipe (8h/w), Berke (8h/w), Beyzanur (8h/w), Mina (8h/w), Ayça (8h/w). Total weekly team capacity: 50h/w.",
          code: "| Member | Available hours per week | Availability limitations |\n| Hatim Ben Ayad | 10 h/week | Coordinator duties |\n| Felipe Dionisio | 8 h/week | Academic timetable |\n| Berke Taha Özdemir | 8 h/week | Academic timetable |\n| Beyzanur Balota | 8 h/week | Academic timetable |\n| Mina Özdoğan | 8 h/week | Academic timetable |\n| Ayça Görgülü | 8 h/week | Academic timetable |"
        },
        {
          title: "4. Save & Close Issue #31",
          details: "Save wiki page, comment on Issue #31 with link to wiki, and close Issue #31.",
          code: ""
        }
      ]
    },
    {
      id: "mf-3",
      title: "Missing RADIT Effort Estimations (With vs Without AI)",
      severity: "HIGH",
      reason: "Planification.md §7 & §8 require effort tables per use case (R, A, D, I, T hours) comparing human effort without AI against AI-assisted effort, plus token estimations.",
      action: "Calculate RADIT hours for CU01–CU32 with €25/h rate and €1,000 / €2,000 fixed costs, and update Planification.md.",
      owner: "Hatim Ben Ayad (Coordinator) & Balota",
      ref: "01-Project Spec p. 5; 04-Kickoff Slide 27",
      steps: [
        {
          title: "1. Fill §7.1 Without AI Table",
          details: "Assign standard person-hours for each of CU01–CU32 across Requirements (R: 2-3h), Analysis (A: 3-4h), Design (D: 4-6h), Implementation (I: 8-12h), Testing (T: 4-6h). Total per use case: ~21–31h.",
          code: "| Use-case ID | R | A | D | I | T | Total hours | Justification |\n| CU01 | 2 | 2 | 3 | 6 | 3 | 16 | Patient appointment inquiry |"
        },
        {
          title: "2. Fill §7.2 With AI Assistance Table",
          details: "Model AI savings: Implementation reduced by 50-60%, Testing scaffolding reduced by 40%. Requirements, Analysis and Design retain human effort with ~10% addition for human inspection/audit.",
          code: "| Use-case ID | R | A | D | I | T | Total human hours | Justification |\n| CU01 | 2 | 2 | 3 | 2.5 | 1.5 | 11 | Agent scaffolds MVC controller |"
        },
        {
          title: "3. Complete Budget & Calculation Formula",
          details: "Compute Duration (Days = Hours ÷ (6 members × 8h)) and Cost = (Hours × €25/h) + €1,000 (It0) + €2,000 (ItN).",
          code: "Cost With AI = (Total Human Hours * 25 EUR) + 1000 EUR + 2000 EUR\nAI Model Costs = 0 EUR (UCLM Campus license)"
        }
      ]
    },
    {
      id: "mf-4",
      title: "Missing Release Calendar & Semantic Versioning Mapping Table",
      severity: "HIGH",
      reason: "Planification.md §11 (Schedule and release calendar) currently reads '[To agree]'. The team has not mapped target SemVer versions (v0.1.0, v0.2.0, v1.0.0) to iterations, components, and issues.",
      action: "Fill out the release calendar table mapping Milestones 1–5 to target components, start/finish dates, and issue IDs.",
      owner: "Hatim Ben Ayad & Felipe Dionisio",
      ref: "Planification.md §11; 01-Project Spec p. 7",
      steps: [
        {
          title: "1. Open Planification.md §11",
          details: "Replace '[To agree]' with the structured milestone roadmap table.",
          code: ""
        },
        {
          title: "2. Paste Milestone Roadmap Rows",
          details: "Paste the 5 milestones with target versions, deliverable component names, start/finish dates, and issue IDs:",
          code: "| Iteration / milestone | Deliverable / component | Target version | Start date | Finish date | Responsible | Related issues |\n| It0 – Inception | Repository kickoff, diagrams, wiki | v0.0.1 | 19/10/2026 | 05/11/2026 | All | #1-#32 |\n| It1 – Elaboration | Maven multi-module, contracts, CU19 | v0.1.0 | 06/11/2026 | 19/11/2026 | Mina, Ayça, Hatim | #33-#39 |\n| It2 – Construction 1 | Clinical orders, appointments (CU10, 20) | v0.2.0 | 20/11/2026 | 28/11/2026 | Ayça, Hatim | #40-#44 |\n| It3 – Construction 2 | Execution, reports & PACS (CU14, 15) | v0.3.0 | 29/11/2026 | 05/12/2026 | Ayça, Berke | #45-#48 |\n| It4 – Construction 3 | Notifications, waitlists & audit | v0.4.0 | 06/12/2026 | 10/12/2026 | Berke, Felipe | #49-#53 |\n| ItN – Transition | Consolidated system, packaging, docs | v1.0.0 | 11/12/2026 | 15/12/2026 | All | #54-#58 |"
        },
        {
          title: "3. Set Definitive Completion Date",
          details: "Set planned completion date: 'December 15, 2026 (Unified Lab Deliverable)'. Save page.",
          code: ""
        }
      ]
    },
    {
      id: "mf-5",
      title: "Unmerged System Administrator Diagram & Review Pending",
      severity: "MEDIUM",
      reason: "Felipe's System Administrator diagram exists on feature/admin-use-case-diagram but has not been merged to develop. Issue #30 tasks Hatim with reviewing Felipe's diagram and Felipe with reviewing Hatim's diagram.",
      action: "Post findings as review comments on #16 and #13, approve PR, and merge to develop.",
      owner: "Hatim Ben Ayad & Felipe Dionisio (Issue #30)",
      ref: "Issue #30, #16",
      steps: [
        {
          title: "1. Hatim Audits Felipe's SysAdmin Diagram",
          details: "Inspect Felipe's diagram against criteria: system boundary 'SESCAM Radiodiagnostics', CU27–CU32 IDs match wiki table, E01–E04 secondary actors attached.",
          code: ""
        },
        {
          title: "2. Post Review Findings on Issue #16",
          details: "Hatim writes comment on Issue #16: 'Review completed. System boundary and CU27–CU32 coverage approved. Diagram is consistent with server SCU table.'",
          code: ""
        },
        {
          title: "3. Felipe Posts Review Findings on Issue #13",
          details: "Felipe writes comment on Issue #13 approving Hatim's Administrative diagram.",
          code: ""
        },
        {
          title: "4. Approve PR and Merge",
          details: "Approve PR #16 / #19 on GitHub and merge branch into develop. Close Issue #30.",
          code: ""
        }
      ]
    },
    {
      id: "mf-6",
      title: "Physician-Patient Inheritance Resolution (D-007 / D-012)",
      severity: "MEDIUM",
      reason: "The specification states Physician inherits applicable Patient features. Issue #28 requires an explicit table of inherited use cases (yes/no with reason) and a combined diagram with the generalization triangle.",
      action: "Mina and Ayça publish agreement table on #28, Hatim logs Decision D-012, and combined diagram is committed to docs/diagrams/.",
      owner: "Ayça Görgülü & Mina Özdoğan (Issue #28)",
      ref: "Issue #28; Decision D-007; 04-Kickoff Slide 25",
      steps: [
        {
          title: "1. Post Agreement Table on Issue #28",
          details: "Mina and Ayça post comment on Issue #28 confirming: CU01–CU09 all apply to Physician (consult own appointments, receive reminders, submit incidents, check guidelines).",
          code: "| CU | Patient use case | Inherited by Physician? | Justification |\n| CU01–CU09 | All Patient features | Yes | Physician has all patient self-service rights |"
        },
        {
          title: "2. Update Visual Paradigm Model",
          details: "In Visual Paradigm, draw actor 'Physician' with a hollow triangle generalization arrow pointing to 'Patient'. Physician connects directly to CU10–CU18; inherited ones are not redrawn.",
          code: ""
        },
        {
          title: "3. Commit Diagram Files",
          details: "Save .vpp and export .png into docs/diagrams/use-cases/client/patient-physician/ on branch feature/physician-patient-inheritance.",
          code: "git switch -c feature/physician-patient-inheritance\ngit add docs/diagrams/use-cases/client/patient-physician/\ngit commit -m \"docs(diagrams): add physician-patient inheritance diagram (#28)\"\ngit push -u origin feature/physician-patient-inheritance"
        },
        {
          title: "4. Record Decision D-012 & Merge PR",
          details: "Hatim logs D-012 in DECISIONS.md. Open PR to develop with 'Closes #28' and merge.",
          code: ""
        }
      ]
    },
    {
      id: "mf-7",
      title: "General Consolidated Client Diagram Not Assembled",
      severity: "MEDIUM",
      reason: "The four individual client parts (Patient, Physician, Admin, SysAdmin) must be consolidated into one unified client use-case diagram inside a single system boundary on develop.",
      action: "Assemble the 4 client portions into general-client-use-cases.vpp and export image to develop.",
      owner: "Hatim Ben Ayad (Coordinator)",
      ref: "Meeting 2 Minutes §5; Wiki §5.1",
      steps: [
        {
          title: "1. Create Master Diagram in Visual Paradigm",
          details: "Create new Use Case diagram: 'General Client Use-Case Diagram'. Draw single system boundary rectangle 'SESCAM Radiodiagnostics Client Application'.",
          code: ""
        },
        {
          title: "2. Place All 4 Human Actors & Associations",
          details: "Place Patient, Physician (inherits from Patient), Administrative Staff, and System Administrator outside. Insert all use cases CU01 through CU32 inside with solid associations.",
          code: ""
        },
        {
          title: "3. Export and Commit",
          details: "Export general-client-use-cases.png and save .vpp to docs/diagrams/use-cases/client/general/.",
          code: "git switch -c feature/general-client-diagram\ngit add docs/diagrams/use-cases/client/general/\ngit commit -m \"docs: add general consolidated client use-case diagram\"\ngit push -u origin feature/general-client-diagram"
        },
        {
          title: "4. Update Wiki §5.1",
          details: "Update Requirements-and-use-cases.md §5.1 embedding the diagram image and links to develop. Open PR and merge.",
          code: ""
        }
      ]
    },
    {
      id: "mf-8",
      title: "Theoretical Assignment 1 Submission Approaching (November 13)",
      severity: "CRITICAL",
      reason: "Theoretical Assignment 1 is due on Moodle next week (November 13). It requires an autonomous, self-contained report covering: (1) UP Project Plan, (2) SCM Plan, and (3) ISO/IEC 25010 SQA Plan.",
      action: "Draft the three sections in Google Docs / Word, review with the whole team, and prepare PDF for Moodle submission.",
      owner: "Whole Team (Coordinated by Hatim)",
      ref: "01-Project Spec p. 9",
      steps: [
        {
          title: "1. Create Document Template",
          details: "Create team Google Doc with title: 'Software Engineering II — Theoretical Assignment 1 (Group A.05)'.",
          code: ""
        },
        {
          title: "2. Write Section 1: Unified Process Plan",
          details: "Explain why 1 FR = 1 UC was adopted for initial simplicity, present RADIT effort tables, contrast human vs AI effort, risk management, and schedule calendar.",
          code: ""
        },
        {
          title: "3. Write Section 2: SCM Plan",
          details: "Document Git Flow branching model (main, develop, feature, bugfix, release, hotfix), branch protection rulesets, PR peer review policy, and SemVer 2.0.0.",
          code: ""
        },
        {
          title: "4. Write Section 3: SQA Plan (ISO/IEC 25010)",
          details: "Identify pertinent quality attributes (Functional suitability, Performance efficiency, Usability, Reliability, Security, Maintainability) and inspection procedures + JaCoCo >80% rule.",
          code: ""
        },
        {
          title: "5. Internal Review & Submit",
          details: "Peer review by all 6 members by November 11. Export PDF and upload to Moodle before November 13, 23:59.",
          code: ""
        }
      ]
    }
  ],

  // ========================================================
  // MEETINGS SECTION (MEETINGS 1 TO 8)
  // ========================================================
  meetings: [
    {
      id: "m-1",
      number: 1,
      title: "Meeting 01 — Initial Project Discussion",
      date: "19/10/2026 (9:00 pm - 9:30 pm)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, MINA ÖZDOGAN, HATIM BEN AYAD, FELIPE DIONISIO BECERRA SANGEORZAN",
      minutesBy: "HATIM BEN AYAD",
      status: "Recorded",
      objective: "Present the project among group members, assign functional roles, and initiate requirements elicitation.",
      rawMarkdown: `# Meeting 01 — Initial Project Discussion

## 1. Meeting details
- Date: 19/10/2026
- Time: 9:00 pm - 9:30 pm
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, MINA ÖZDOGAN, HATIM BEN AYAD, FELIPE DIONISIO BECERRA SANGEORZAN.
- Minutes prepared by: HATIM BEN AYAD

## 2. Meeting objective
The main objective of this session is to present the project between all the group members and the assignments of roles.

## 3. Topics discussed
- How Maven will be used to organize the project.
- Which software to use for creating the use-case diagram.
- How to represent human actors and external systems, including their interactions with the application.
- Assignment of the functional requirements to each group member.

## 4. Questions raised
### Q1. How will we use Maven in our project?
- Status: Pending clarification.
- Answer / conclusion: Not yet recorded.

### Q2. Which software will we use to create the use-case diagram?
- Status: Pending clarification.
- Answer / conclusion: Not yet recorded.

### Q3. How should we represent interactions involving human actors and external systems in the use-case diagram?
- Status: Pending clarification.
- Answer / conclusion: Not yet recorded.

## 5. Decisions made
The general use case diagram will be created by a selected group member (later on) by assembling the use cases each member was assigned once they are finished.

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| Use case diagram of System administrators functional requirements | FELIPE DIONISIO | 27/10/2026 | #10 |
| Use case diagram of Patients functional requirements | MINA ÖZDOGAN | 27/10/2026 | #7 |
| Use case diagram of Administrative/admissions personnel | HATIM BEN AYAD | 27/10/2026 | #9 |
| Use case diagram of Physicians functional requirements | AYÇA GÖRGÜLÜ | 27/10/2026 | #8 |

## 7. Pending matters
- Clarify how Maven will be used in the project.
- Confirm the software to use for the use-case diagram.
- Resolve questions about human actors and external systems.

## 8. Next meeting
- Date and time: 23/10/2026, 9:00 pm
- Agenda: Clarifications about use case diagrams and client/server split.`
    },
    {
      id: "m-2",
      number: 2,
      title: "Meeting 2 — Clarifications about the use case diagrams",
      date: "23/10/2026 (9:00 pm - 9:40 pm)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, MINA ÖZDOGAN, HATIM BEN AYAD, FELIPE DIONISIO BECERRA SANGEORZAN",
      minutesBy: "HATIM BEN AYAD",
      status: "Recorded",
      objective: "Discuss and formalize client/server use case diagrams separation, external actors, and planning constraints.",
      rawMarkdown: `# Meeting 2 — Clarifications about the use case diagrams

## 1. Meeting details
- Date: 23/10/2026
- Time: 9:00 - 9:40 pm
- Location / platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, MINA ÖZDOGAN, HATIM BEN AYAD, FELIPE DIONISIO BECERRA SANGEORZAN.
- Minutes prepared by: HATIM BEN AYAD

## 2. Meeting objective
Discuss the client/server side use case diagrams.

## 3. Topics discussed
- Splitting the RF → use-case mapping between requirement owners.
- Drafting each actor's part of the client diagram and joining them into the general client diagram.
- Preparing the separate server use-case diagram.
- Planning: availability, constraints/assumptions, use-case priorities and UP iterations.
- Reviewing and approving everything before Monday.

## 4. Questions raised
### Q1. How do we split the RF → use-case mapping and the client diagram?
- Status: Resolved.
- Answer / conclusion: Each requirement owner maps their own RFs (RF → use-case ID → use-case name) and drafts their actor's part of the client diagram: Mina (Patient), Ayça (Physician, agreeing inherited Patient functionality with Mina), Hatim (Administrative/Admissions) and Felipe (System Administrator). Hatim joins the four parts into the general client diagram.

### Q2. Who prepares the server diagram and what goes in it?
- Status: Resolved.
- Answer / conclusion: Berke. It uses a boundary called "SESCAM Radiodiagnostics Server", with server use cases inside and the client application, external systems (SSO, EHR, Admissions, RIS/PACS) and the timer outside as actors. Each server use case is linked to its RF IDs.

### Q3. How do we prepare the planning?
- Status: Resolved.
- Answer / conclusion: Balota collects everyone's availability, drafts the constraints/assumptions table and proposes priorities, dependencies and UP phase/iteration assignments once mapping is ready.

### Q4. How do we review and approve the work?
- Status: Resolved.
- Answer / conclusion: Mina ↔ Felipe and Hatim ↔ Ayça review each other's client parts, Berke checks client/server consistency with Hatim, and the whole team reviews Balota's draft.

## 5. Decisions made
- Visual Paradigm will be used for the diagrams.
- The client and server use-case diagrams will be separate.
- Each requirement owner maps their own RFs to use cases and drafts their actor's part of the client diagram.
- Hatim will join the four parts into the general client diagram.
- Every portion is reviewed by another member before approval, and any change goes through a reviewed PR.

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| RF01–RF09 mapping table and Patient part of client diagram | Mina | 26/10/2026 | #14 |
| RF10–RF18 mapping table and Physician part of client diagram | Ayça | 26/10/2026 | #15 |
| RF19–RF26 mapping table, Administrative part, and general client diagram assembly | Hatim | 26/10/2026 | #13 |
| RF27–RF32 mapping table, System Administrator part | Felipe | 26/10/2026 | #16 |
| General server use-case diagram: E01–E04, SCUs, .vpp and .jpg upload | Berke | 26/10/2026 | #17 |
| Collect availability, draft constraints/assumptions table | Balota | 26/10/2026 | #18 |
| Review client portions: Mina ↔ Felipe, Hatim ↔ Ayça | Mina, Felipe, Hatim, Ayça | 26/10/2026 | #12 |

## 7. Pending matters
- Berke has to confirm that external actors E01–E04 are correct.
- Balota needs everyone's weekly availability to fill in the constraints/assumptions table.

## 8. Next meeting
- Date and time: 01/11/2026, 9:00 pm
- Agenda: Approve client and server diagrams, verify inheritance, review server PR.`
    },
    {
      id: "m-3",
      number: 3,
      title: "Meeting 3 — Diagram Reviews, Inheritance & Planning Constraints",
      date: "01/11/2026 (9:00 pm - 9:45 pm)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Recorded",
      objective: "Review merged diagrams, resolve Physician-Patient inheritance (D-007), commit server diagram to repo, and initiate wiki Planification page constraints.",
      rawMarkdown: `# Meeting 3 — Diagram Reviews, Inheritance & Planning Constraints

## 1. Meeting details
- Date: 01/11/2026
- Time: 9:00 pm - 9:45 pm
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO BECERRA SANGEORZAN, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
Consolidate use case diagrams across client and server, resolve Physician inheritance of Patient use cases, commit server diagram to git, and assign constraints drafting on Planification page.

## 3. Topics discussed
- Review of merged Patient (#20) and Administrative (#19) diagrams.
- Review of Berke's server diagram and moving it from wiki attachments into repository on feature/server-use-case-diagram.
- Resolving the Physician inheritance of Patient use cases (CU01–CU09) and creating a combined diagram.
- Cross-review assignments: Hatim reviews Felipe's SysAdmin diagram, Felipe reviews Hatim's Administrative diagram.
- Writing the Constraints section on the Planification wiki page (Issue #31).

## 4. Questions raised
### Q1. Which Patient use cases does the Physician inherit?
- Status: In Progress.
- Answer / conclusion: Specification says physician has applicable patient features. Mina and Ayça will post an explicit yes/no table with justification for each of CU01–CU09 on Issue #28.

### Q2. Where should the server diagram files live?
- Status: Resolved.
- Answer / conclusion: In docs/diagrams/use-cases/server/ inside the repository on develop, replacing external attachment links.

### Q3. How do we format constraints on the Planification page?
- Status: Resolved.
- Answer / conclusion: Balota will cite the exact course specification pages and slides for each constraint (Issue #31).

## 5. Decisions made
- Server diagram will be merged via PR #32 to develop.
- Physician-Patient inheritance will be represented via a hollow generalization triangle from Physician to Patient (Decision D-007 / D-012).
- Hatim and Felipe will post formal review comments on #16 and #13.

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| Physician-Patient inheritance table and combined diagram | Ayça & Mina | 05/11/2026 | #28 |
| Commit server diagram .vpp and .jpg to repository | Berke | 03/11/2026 | #29, #32 |
| Cross-review: Hatim reviews #16, Felipe reviews #13 | Hatim & Felipe | 05/11/2026 | #30 |
| Write Constraints section on Planification page | Balota | 05/11/2026 | #31 |

## 7. Pending matters
- Merge Felipe's System Administrator diagram once reviewed.
- Populate Planification.md with RADIT effort estimations.

## 8. Next meeting
- Date and time: To be agreed
- Agenda: Kickoff of Iteration 1 (Elaboration) and Maven multi-module architecture.`
    },
    {
      id: "m-4",
      number: 4,
      title: "Meeting 4 — Elaboration Kickoff & Maven Multi-Module Architecture",
      date: "Pending Discussion (To be held)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Empty / Pending",
      objective: "Kick off Iteration 1 (Elaboration phase): review Maven multi-module structure, common-contracts interfaces, and assign CU19 and CU27.",
      rawMarkdown: `# Meeting 4 — Elaboration Kickoff & Maven Multi-Module Architecture

## 1. Meeting details
- Date: [Date to be agreed]
- Time: [Time to be agreed]
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
[Explain the primary purpose of Meeting 4]

## 3. Topics discussed
- [Topic 1]
- [Topic 2]
- [Topic 3]

## 4. Questions raised
### Q1. [Question title]
- Status: [Pending / Resolved]
- Answer / conclusion: [Enter conclusion]

## 5. Decisions made
- [Decision 1]
- [Decision 2]

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| [Task description] | [Member] | [Date] | #[Issue] |

## 7. Pending matters
- [Pending matter 1]

## 8. Next meeting
- Date and time: [Date and time]
- Agenda: [Topics to be covered]`
    },
    {
      id: "m-5",
      number: 5,
      title: "Meeting 5 — Core Entity Persistence & Authentication Reviews",
      date: "Pending Discussion (To be held)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Empty / Pending",
      objective: "Review implementation of Patient and Examination catalogue entities, mock SSO adapter, and JaCoCo test reports.",
      rawMarkdown: `# Meeting 5 — Core Entity Persistence & Authentication Reviews

## 1. Meeting details
- Date: [Date to be agreed]
- Time: [Time to be agreed]
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
[Explain the primary purpose of Meeting 5]

## 3. Topics discussed
- [Topic 1]
- [Topic 2]
- [Topic 3]

## 4. Questions raised
### Q1. [Question title]
- Status: [Pending / Resolved]
- Answer / conclusion: [Enter conclusion]

## 5. Decisions made
- [Decision 1]
- [Decision 2]

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| [Task description] | [Member] | [Date] | #[Issue] |

## 7. Pending matters
- [Pending matter 1]

## 8. Next meeting
- Date and time: [Date and time]
- Agenda: [Topics to be covered]`
    },
    {
      id: "m-6",
      number: 6,
      title: "Meeting 6 — Clinical Orders & Appointment Workflow Integration",
      date: "Pending Discussion (To be held)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Empty / Pending",
      objective: "Kick off Construction phase iterations: clinical orders (CU10, CU11) and appointment booking (CU20, CU01–CU04).",
      rawMarkdown: `# Meeting 6 — Clinical Orders & Appointment Workflow Integration

## 1. Meeting details
- Date: [Date to be agreed]
- Time: [Time to be agreed]
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
[Explain the primary purpose of Meeting 6]

## 3. Topics discussed
- [Topic 1]
- [Topic 2]
- [Topic 3]

## 4. Questions raised
### Q1. [Question title]
- Status: [Pending / Resolved]
- Answer / conclusion: [Enter conclusion]

## 5. Decisions made
- [Decision 1]
- [Decision 2]

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| [Task description] | [Member] | [Date] | #[Issue] |

## 7. Pending matters
- [Pending matter 1]

## 8. Next meeting
- Date and time: [Date and time]
- Agenda: [Topics to be covered]`
    },
    {
      id: "m-7",
      number: 7,
      title: "Meeting 7 — Procedure Execution, PACS Viewing & Notifications",
      date: "Pending Discussion (To be held)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Empty / Pending",
      objective: "Review diagnostic reporting (CU14), RIS/PACS image viewer (CU15), timer notifications (CU05), and waitlists (CU24).",
      rawMarkdown: `# Meeting 7 — Procedure Execution, PACS Viewing & Notifications

## 1. Meeting details
- Date: [Date to be agreed]
- Time: [Time to be agreed]
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
[Explain the primary purpose of Meeting 7]

## 3. Topics discussed
- [Topic 1]
- [Topic 2]
- [Topic 3]

## 4. Questions raised
### Q1. [Question title]
- Status: [Pending / Resolved]
- Answer / conclusion: [Enter conclusion]

## 5. Decisions made
- [Decision 1]
- [Decision 2]

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| [Task description] | [Member] | [Date] | #[Issue] |

## 7. Pending matters
- [Pending matter 1]

## 8. Next meeting
- Date and time: [Date and time]
- Agenda: [Topics to be covered]`
    },
    {
      id: "m-8",
      number: 8,
      title: "Meeting 8 — Transition Wrap-Up, Packaging & Final Defense",
      date: "Pending Discussion (To be held)",
      platform: "Microsoft Teams",
      attendees: "AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN",
      minutesBy: "FELIPE DIONISIO",
      status: "Empty / Pending",
      objective: "Transition phase wrap-up: final multi-module JAR packaging, Javadoc build, ISO 25010 audit, self-assessments, and submission defense.",
      rawMarkdown: `# Meeting 8 — Transition Wrap-Up, Packaging & Final Defense

## 1. Meeting details
- Date: [Date to be agreed]
- Time: [Time to be agreed]
- Platform: Microsoft Teams
- Attendees: AYÇA GÖRGÜLÜ, BERKE TAHA ÖZDEMIR, BEYZANUR BALOTA, FELIPE DIONISIO, HATIM BEN AYAD, MINA ÖZDOGAN.
- Minutes prepared by: FELIPE DIONISIO BECERRA SANGEORZAN

## 2. Meeting objective
[Explain the primary purpose of Meeting 8]

## 3. Topics discussed
- [Topic 1]
- [Topic 2]
- [Topic 3]

## 4. Questions raised
### Q1. [Question title]
- Status: [Pending / Resolved]
- Answer / conclusion: [Enter conclusion]

## 5. Decisions made
- [Decision 1]
- [Decision 2]

## 6. Agreed tasks
| Task | Responsible member | Deadline | GitHub Issue |
|------|--------------------|----------|--------------|
| [Task description] | [Member] | [Date] | #[Issue] |

## 7. Pending matters
- [Pending matter 1]

## 8. Next meeting
- Final evaluation and project defense.`
    }
  ],

  // ========================================================
  // MILESTONES & POSSIBLE ISSUES BACKLOG
  // ========================================================
  milestones: [
    {
      id: "m0",
      code: "M0",
      name: "Milestone 0: Iteration 0 (Inception Phase Kickoff)",
      version: "v0.0.1",
      phase: "Inception",
      targetDate: "October 19 – November 5, 2026",
      objective: "Project kickoff, Git Flow setup, rulesets, 32 functional requirements elicitation, client and server use case diagrams, and baseline planning.",
      status: "In Progress (~78% Done)",
      issues: [
        {
          num: "#28",
          title: "Resolve Physician-Patient Use Case Inheritance (CU10–CU18 + Inherited CU01–CU09)",
          assignee: "Ayça Görgülü & Mina Özdoğan",
          radit: { R: true, A: true, D: true, I: false, T: false },
          effort: "3h human / 2h with agent",
          branch: "feature/physician-patient-inheritance",
          objective: "Decide which patient use cases the physician inherits, post justification table as comment, publish combined diagram with generalization arrow, and record D-012.",
          tasks: [
            "Review RF01–RF09 against Physician clinical workflow",
            "Post table: CU | Patient use case | Inherited? (yes/no) | Justification",
            "Draw combined diagram in Visual Paradigm with hollow triangle generalization",
            "Commit .vpp and .png to docs/diagrams/use-cases/client/patient-physician/",
            "PR to develop with 'Closes #28'"
          ],
          acceptanceCriteria: [
            "Every patient use case has explicit yes/no with justification",
            "Combined diagram matches table and wiki RF table",
            "PR approved and merged to develop"
          ]
        },
        {
          num: "#30",
          title: "Peer Review: Hatim reviews Felipe's SysAdmin diagram (#16), Felipe reviews Hatim's Admin diagram (#13)",
          assignee: "Hatim Ben Ayad & Felipe Dionisio",
          radit: { R: true, A: true, D: false, I: false, T: false },
          effort: "1h human / 0.5h with agent",
          branch: "feature/admin-use-case-diagram",
          objective: "Cross-review client use case diagrams against system boundary, unique CU verbs, actor coverage, and secondary actors.",
          tasks: [
            "Check system boundary, unique IDs, verb phrases matching wiki table",
            "Check all RFs are covered without duplicates or omissions",
            "Verify secondary actors (E01–E04)",
            "Post review comment on #16 and on #13 with findings: OK / change / question",
            "Merge Felipe's PR to develop"
          ],
          acceptanceCriteria: [
            "Review findings posted on both issues",
            "Fixes applied if needed",
            "SysAdmin diagram merged into develop"
          ]
        },
        {
          num: "#31",
          title: "IT0 – Project Constraints & Availability on Planification Page",
          assignee: "Beyzanur Balota",
          radit: { R: true, A: true, D: false, I: false, T: false },
          effort: "1.5h human / 1h with agent",
          branch: "wiki / Planification",
          objective: "Write the Constraints section on wiki Planification page citing course specification sources and fill team availability table.",
          tasks: [
            "Document 4 UP phases & milestones constraint (Inception, Elaboration, Construction, Transition)",
            "Document fixed budget (€1,000 It0, €2,000 ItN)",
            "Document 40h/week, €25/h rate, and AI review latency constraint",
            "Document hard deadlines: Theory 1 (13/11) and Final Lab (15/12)",
            "Fill availability hours and constraints for all 6 members"
          ],
          acceptanceCriteria: [
            "Every constraint appears on Planification.md with course PDF citation",
            "Team availability table completely filled for all members",
            "No invented figures; unknown items marked 'to confirm'"
          ]
        }
      ]
    },
    {
      id: "m1",
      code: "M1",
      name: "Milestone 1: Iteration 1 (Elaboration Phase — Architectural Baseline)",
      version: "v0.1.0",
      phase: "Elaboration",
      targetDate: "November 6 – November 19, 2026",
      objective: "Establish the multi-module Maven project architecture, domain entity persistence, external healthcare system adapters, core patient registration (CU19), and baseline unit testing with JaCoCo >80%.",
      status: "Ready to Start (Issues Backlog Created)",
      issues: [
        {
          num: "#33",
          title: "CU00 – Root Multi-Module Maven Aggregator (pom.xml) & Project Structure (v0.1.0)",
          assignee: "Mina Özdoğan & Ayça Görgülü",
          radit: { R: false, A: false, D: true, I: true, T: true },
          effort: "4h human / 1.5h with agent",
          branch: "feature/M1-maven-multimodule",
          objective: "Create root pom.xml with submodules (common-contracts, servidor, cliente-web) and configure maven-compiler-plugin (Java 17/21), maven-surefire-plugin, and jacoco-maven-plugin.",
          tasks: [
            "Configure root pom.xml with packaging pom",
            "Declare submodules: common-contracts, servidor, cliente-web",
            "Configure JUnit 5 (jupiter) and AssertJ dependencies in dependencyManagement",
            "Configure JaCoCo plugin with 80% line/branch coverage rule",
            "Verify clean build via 'mvn clean verify'"
          ],
          acceptanceCriteria: [
            "Running 'mvn clean verify' succeeds across all submodules",
            "Surefire and JaCoCo reports generated in target/site/jacoco",
            "Merged into develop via peer-reviewed PR"
          ]
        },
        {
          num: "#34",
          title: "CU00 – Common Contracts Module: Client-Server API & Integration Interfaces (v0.1.0)",
          assignee: "Hatim Ben Ayad & Berke Taha Özdemir",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "5h human / 2h with agent",
          branch: "feature/M1-common-contracts",
          objective: "Design Java interface boundaries connecting client applications to the server, and contract interfaces for external hospital systems (E01–E04).",
          tasks: [
            "Create package es.uclm.sescam.contracts.api with client-server service interfaces",
            "Create package es.uclm.sescam.contracts.adapters for external systems: ISingleSignOnAdapter, IEhrAdapter, IAdmissionsAdapter, IRisPacsAdapter",
            "Define core clinical Data Transfer Objects (DTOs): PatientDTO, ExaminationTypeDTO, DiagnosticOrderDTO",
            "Implement basic contract unit tests"
          ],
          acceptanceCriteria: [
            "Zero concrete classes in contracts API except immutable records/DTOs",
            "Interfaces cover all methods needed for SCU01, SCU02, and SCU11",
            "100% test coverage on contract data records"
          ]
        },
        {
          num: "#35",
          title: "CU19 – Manage Patient Demographic Registration & Admissions Integration (v0.1.0)",
          assignee: "Hatim Ben Ayad & Mina Özdoğan",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "8h human / 3h with agent",
          branch: "feature/CU19-patient-demographics",
          objective: "Implement CU19 / SCU02: patient demographic management (registration, modification, discharge) with persistence and admissions integration.",
          tasks: [
            "Create Patient entity with CIP (Personal Identification Code), national ID, demographics, contact info, clinical history identifier",
            "Create IPatientRepository interface and in-memory/H2 JPA persistence implementation",
            "Create PatientService implementing registration, modification, validation rules, and discharge",
            "Create mock AdmissionsAdapter (E03) to simulate demographic sync",
            "Write comprehensive JUnit 5 unit tests for all validation edge cases"
          ],
          acceptanceCriteria: [
            "Valid patient registration succeeds and persists",
            "Duplicate CIP or invalid demographic data throws domain validation exception",
            "JaCoCo test coverage exceeds 85% for PatientService",
            "PR with 'Closes #35' merged into develop"
          ]
        },
        {
          num: "#36",
          title: "CU27 – Maintain Examination-Type Catalogue (v0.1.0)",
          assignee: "Felipe Dionisio & Ayça Görgülü",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2.5h with agent",
          branch: "feature/CU27-examination-catalogue",
          objective: "Implement CU27 / SCU11: maintenance of examination-type catalogue with modality, room, duration, pre-procedure guidelines, contrast requirements, and follow-up eligibility.",
          tasks: [
            "Define ExaminationType entity with Modality (X-Ray, US, Mammography, CT, MRI), durationMinutes, preparationGuidelines, requiresContrast, informedConsentProtocol, periodicFollowUpEligible",
            "Implement IExaminationCatalogueService and IExaminationCatalogueRepository",
            "Seed baseline catalogue with the 5 illustrative examination types from specification p. 1",
            "Implement search, filtering by modality, and update operations",
            "Unit tests covering catalogue retrieval and query rules"
          ],
          acceptanceCriteria: [
            "Catalogue correctly pre-loads baseline examination modalities",
            "Validation prevents zero duration or missing preparation protocols",
            "Tests achieve >85% code coverage"
          ]
        },
        {
          num: "#37",
          title: "SCU01 – User Authentication & Role-Based Authorization with Mock SSO (v0.1.0)",
          assignee: "Berke Taha Özdemir & Felipe Dionisio",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "7h human / 3h with agent",
          branch: "feature/SCU01-auth-sso",
          objective: "Implement SCU01 / RF29: corporate single sign-on authentication and role-based permissions for Patient, Physician, Admin, and SysAdmin.",
          tasks: [
            "Define UserAccount entity with UserRole enum (PATIENT, PHYSICIAN, ADMIN, SYSADMIN)",
            "Implement MockSsoService simulating Corporate SSO (E01) token validation",
            "Implement SecurityContext / AuthService validating permissions for protected operations",
            "Unit tests verifying role permissions and access denial for unauthorized roles"
          ],
          acceptanceCriteria: [
            "Valid SSO token grants correct role session",
            "Unauthorized access throws AccessDeniedException",
            "Integration verified with Admissions and Patient services"
          ]
        },
        {
          num: "#38",
          title: "CU00 – Unit Testing & JaCoCo Coverage Baseline Verification (>80%)",
          assignee: "Mina Özdoğan & Beyzanur Balota",
          radit: { R: false, A: false, D: false, I: true, T: true },
          effort: "4h human / 1.5h with agent",
          branch: "feature/M1-test-verification",
          objective: "Audit test suites across all Elaboration modules, verify JaCoCo report generation, and ensure overall line coverage exceeds 80%.",
          tasks: [
            "Execute 'mvn clean test jacoco:report'",
            "Identify any uncovered branches in domain entities and service classes",
            "Write parameterized tests and negative boundary test cases",
            "Document coverage results in target/site/jacoco"
          ],
          acceptanceCriteria: [
            "Zero failing tests across entire project",
            "Overall project line and branch coverage exceeds 80%",
            "Report exported and verified"
          ]
        },
        {
          num: "#39",
          title: "Release v0.1.0 – Architectural Baseline Integration & Git Flow Tagging",
          assignee: "Berke Taha Özdemir & Hatim Ben Ayad",
          radit: { R: false, A: false, D: false, I: false, T: true },
          effort: "2h human / 1h with agent",
          branch: "release/0.1.0",
          objective: "Branch release/0.1.0 off develop, execute final stabilization build, merge into main and develop, and tag v0.1.0.",
          tasks: [
            "Create branch release/0.1.0 from develop",
            "Update pom.xml version to 0.1.0",
            "Run full build and test suite",
            "PR from release/0.1.0 to main and develop",
            "Tag release v0.1.0 on main"
          ],
          acceptanceCriteria: [
            "Tag v0.1.0 created on main branch",
            "Main and develop synchronized",
            "Milestone 1 closed on GitHub"
          ]
        }
      ]
    },
    {
      id: "m2",
      code: "M2",
      name: "Milestone 2: Iteration 2 (Construction 1 — Clinical Orders & Appointments)",
      version: "v0.2.0",
      phase: "Construction",
      targetDate: "November 20 – November 28, 2026",
      objective: "Implement physician diagnostic ordering, periodic follow-up recurrence generation, appointment slot allocation, and patient appointment management.",
      status: "Planned",
      issues: [
        {
          num: "#40",
          title: "CU10 – Order Diagnostic Procedure with Priority & Clinical Justification (v0.2.0)",
          assignee: "Ayça Görgülü",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "7h human / 3h with agent",
          branch: "feature/CU10-order-procedure",
          objective: "Allow physicians to prescribe diagnostic procedures with clinical indication, justification, and priority (Urgent/Stat, Preferential, Routine)."
        },
        {
          num: "#41",
          title: "CU11 – Order Periodic Follow-Up Surveillance with Recurrence Generator (v0.2.0)",
          assignee: "Ayça Görgülü",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2.5h with agent",
          branch: "feature/CU11-periodic-followup",
          objective: "Support periodic follow-up orders (nodule surveillance, restaging) automatically scheduling future requirement entries."
        },
        {
          num: "#42",
          title: "CU20 – Allocate Appointment Slots & Finalize Booking for Ordered Procedures (v0.2.0)",
          assignee: "Hatim Ben Ayad",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "8h human / 3.5h with agent",
          branch: "feature/CU20-appointment-booking",
          objective: "Allow administrative staff to match physician orders against room calendars and execute confirmed slot bookings."
        },
        {
          num: "#43",
          title: "CU01–CU04 – Patient Appointment Portal: Consult, Confirm, Reschedule, Cancel (v0.2.0)",
          assignee: "Mina Özdoğan",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "8h human / 3h with agent",
          branch: "feature/CU01-04-patient-appointments",
          objective: "Provide patient capabilities to consult scheduled examinations, confirm attendance, request rescheduling, or cancel slots."
        },
        {
          num: "#44",
          title: "CU00 – Integration Tests for Clinical Orders & Appointment Lifecycle (JaCoCo >80%)",
          assignee: "Mina Özdoğan & Ayça Görgülü",
          radit: { R: false, A: false, D: false, I: true, T: true },
          effort: "5h human / 2h with agent",
          branch: "feature/M2-integration-tests",
          objective: "Validate complete order-to-appointment workflow through end-to-end integration tests."
        }
      ]
    },
    {
      id: "m3",
      code: "M3",
      name: "Milestone 3: Iteration 3 (Construction 2 — Execution, Reports & PACS Integration)",
      version: "v0.3.0",
      phase: "Construction",
      targetDate: "November 29 – December 5, 2026",
      objective: "Implement procedure execution recording, diagnostic report authoring/review, medical image viewing via RIS/PACS adapter, and medical staff worklists.",
      status: "Planned",
      issues: [
        {
          num: "#45",
          title: "CU16 – Log Procedure Execution Details & Contrast Documentation (v0.3.0)",
          assignee: "Ayça Görgülü",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2.5h with agent",
          branch: "feature/CU16-procedure-execution",
          objective: "Record execution timestamp, performing technician, room, contrast batch, and clinical incidents."
        },
        {
          num: "#46",
          title: "CU14 – Author, Edit & Review Diagnostic Reports for Assigned Patients (v0.3.0)",
          assignee: "Ayça Görgülü",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "8h human / 3h with agent",
          branch: "feature/CU14-diagnostic-reports",
          objective: "Physician diagnostic reporting workflow: draft report, clinical findings, conclusion, and formal sign-off."
        },
        {
          num: "#47",
          title: "CU15 – Consult & View Medical Images via RIS/PACS Platform Adapter (v0.3.0)",
          assignee: "Berke Taha Özdemir",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "8h human / 3.5h with agent",
          branch: "feature/CU15-pacs-viewer",
          objective: "Integrate IRisPacsAdapter (E04) to retrieve image series metadata and display medical images."
        },
        {
          num: "#48",
          title: "CU23 – Daily Scheduling & Worklist Management for Medical Staff (v0.3.0)",
          assignee: "Hatim Ben Ayad",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2.5h with agent",
          branch: "feature/CU23-staff-worklists",
          objective: "Generate daily clinical worklists by physician, room, and modality with priority ordering."
        }
      ]
    },
    {
      id: "m4",
      code: "M4",
      name: "Milestone 4: Iteration 4 (Construction 3 — Automated Notifications, Waitlists & Auditing)",
      version: "v0.4.0",
      phase: "Construction",
      targetDate: "December 6 – December 10, 2026",
      objective: "Implement timer-based automated notifications, waiting lists and triage priorities, booking policies, clinical data auditing, and operational metrics.",
      status: "Planned",
      issues: [
        {
          num: "#49",
          title: "CU05 & SCU04 – Timer-Based Automated Notifications & Reminders Engine (v0.4.0)",
          assignee: "Berke Taha Özdemir & Mina Özdoğan",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "7h human / 3h with agent",
          branch: "feature/CU05-notifications-timer",
          objective: "Automated notifications triggered by timer: 48h appointment reminders, preparation instructions, and report availability."
        },
        {
          num: "#50",
          title: "CU24 – Manage Patient Waiting Lists & Triage Priority Tiers (v0.4.0)",
          assignee: "Hatim Ben Ayad",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "7h human / 3h with agent",
          branch: "feature/CU24-waiting-lists-triage",
          objective: "Queue management for pending orders sorted by triage priority (Stat, Preferential, Routine) and wait time."
        },
        {
          num: "#51",
          title: "CU28 – Configure System Booking Policies, Protocols & Calendar Openings (v0.4.0)",
          assignee: "Felipe Dionisio",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2.5h with agent",
          branch: "feature/CU28-booking-policies",
          objective: "System administrator configuration of appointment window opening rules, slots duration, and modality restrictions."
        },
        {
          num: "#52",
          title: "CU30 & SCU12 – Audit Clinical Data Access & Activity Logging (v0.4.0)",
          assignee: "Felipe Dionisio",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "6h human / 2h with agent",
          branch: "feature/CU30-audit-logging",
          objective: "Audit logger recording user, timestamp, patient record accessed, and action taken for healthcare regulatory compliance."
        },
        {
          num: "#53",
          title: "CU18, CU26, CU32 – Operational, Clinical & Global Statistics Reporting (v0.4.0)",
          assignee: "Hatim Ben Ayad & Felipe Dionisio",
          radit: { R: true, A: true, D: true, I: true, T: true },
          effort: "7h human / 3h with agent",
          branch: "feature/CU-reporting-metrics",
          objective: "Calculate schedule occupancy rates, patient waiting times, order fulfillment metrics, and global system usage statistics."
        }
      ]
    },
    {
      id: "m5",
      code: "M5",
      name: "Milestone 5: Iteration N (Transition Phase — Final System Delivery & Defense)",
      version: "v1.0.0",
      phase: "Transition",
      targetDate: "December 11 – December 15, 2026",
      objective: "Consolidated multi-module build integration, comprehensive quality audit (>80% JaCoCo, ISO 25010), packaging into executable JAR, user manuals, and individual wiki self-assessments.",
      status: "Final Milestone (Deadline: Dec 15, 2026)",
      issues: [
        {
          num: "#54",
          title: "CU00 – Final Multi-Module Build Consolidation & Executable JAR Packaging (v1.0.0)",
          assignee: "Mina Özdoğan & Berke Taha Özdemir",
          radit: { R: false, A: false, D: false, I: true, T: true },
          effort: "8h human / 3h with agent",
          branch: "release/1.0.0",
          objective: "Configure maven-assembly / spring-boot-maven-plugin to produce standalone executable distribution with execution scripts."
        },
        {
          num: "#55",
          title: "DOC – Project Documentation & Javadoc Generation (mvn javadoc:javadoc)",
          assignee: "Felipe Dionisio & Hatim Ben Ayad",
          radit: { R: false, A: false, D: false, I: false, T: true },
          effort: "6h human / 2h with agent",
          branch: "feature/M5-documentation",
          objective: "Generate complete project Javadoc documentation via Maven and compile user operational manuals for Patient, Physician, and Admin."
        },
        {
          num: "#56",
          title: "QA – Final Quality Assurance Audit: ISO/IEC 25010 & JaCoCo >80% Verification",
          assignee: "Beyzanur Balota & Hatim Ben Ayad",
          radit: { R: false, A: false, D: false, I: false, T: true },
          effort: "8h human / 3h with agent",
          branch: "feature/M5-qa-audit",
          objective: "Verify ISO/IEC 25010 quality metrics (functional suitability, performance, usability, reliability, security, maintainability) and JaCoCo coverage."
        },
        {
          num: "#57",
          title: "WIKI – Mandatory Individual Self-Assessment & Experience Reflections",
          assignee: "All Team Members (Hatim, Felipe, Berke, Beyzanur, Mina, Ayça)",
          radit: { R: false, A: false, D: false, I: false, T: false },
          effort: "12h human (2h per member)",
          branch: "wiki / Self-assessment-and-experience",
          objective: "Every team member writes an individualized critical self-appraisal reflecting on personal contribution, team collaboration, and AI tool usage."
        },
        {
          num: "#58",
          title: "REL – Production Release v1.0.0 Tagging & Repository Freeze for Academic Grading",
          assignee: "Hatim Ben Ayad (Coordinator)",
          radit: { R: false, A: false, D: false, I: false, T: true },
          effort: "3h human / 1h with agent",
          branch: "main",
          objective: "Merge release/1.0.0 into main and develop, create Git tag v1.0.0, and verify professor (IsmaelCaballero) repository access."
        }
      ]
    }
  ]
};

// Application State
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';
let currentMilestoneTab = 'm1';
let currentMeetingTab = 'm-1';
let currentMeetingViewMode = 'rendered';
let currentTodoMemberFilter = 'all';

function initDashboard() {
  loadSavedState();
  loadTodoTasks();
  renderKPIs();
  renderChecklist();
  renderMustFix();
  renderTodoBySection();
  renderMilestonesTabs();
  renderMilestoneContent();
  renderMeetingsTabs();
  renderMeetingContent();
  setupEventListeners();
}

function loadSavedState() {
  const saved = localStorage.getItem('iso2_checklist_state');
  if (saved) {
    try {
      const stateMap = JSON.parse(saved);
      PROJECT_DATA.checklist.forEach(item => {
        if (stateMap.hasOwnProperty(item.id)) {
          item.done = stateMap[item.id];
        }
      });
    } catch (e) {
      console.error("Error reading saved state:", e);
    }
  }
}

function saveState() {
  const stateMap = {};
  PROJECT_DATA.checklist.forEach(item => {
    stateMap[item.id] = item.done;
  });
  localStorage.setItem('iso2_checklist_state', JSON.stringify(stateMap));
}

function toggleItem(id) {
  const item = PROJECT_DATA.checklist.find(i => i.id === id);
  if (item) {
    item.done = !item.done;
    saveState();
    renderKPIs();
    renderChecklist();
  }
}

function renderKPIs() {
  const total = PROJECT_DATA.checklist.length;
  const completed = PROJECT_DATA.checklist.filter(i => i.done).length;
  const remaining = total - completed;
  const percent = Math.round((completed / total) * 100);

  // It0 specific
  const it0Items = PROJECT_DATA.checklist.filter(i => i.phase.includes("Inception") || i.category === "scm" || i.category === "usecases");
  const it0Done = it0Items.filter(i => i.done).length;
  const it0Percent = Math.round((it0Done / it0Items.length) * 100);

  // Constraints & Assumptions specifically
  const constraints = PROJECT_DATA.checklist.filter(i => i.category === "constraints");
  const constraintsDone = constraints.filter(i => i.done).length;
  
  const assumptions = PROJECT_DATA.checklist.filter(i => i.category === "assumptions");
  const assumptionsDone = assumptions.filter(i => i.done).length;

  document.getElementById('overall-progress-val').innerText = `${percent}%`;
  document.getElementById('overall-progress-fill').style.width = `${percent}%`;
  document.getElementById('overall-progress-sub').innerText = `${completed} completed / ${remaining} remaining`;

  document.getElementById('it0-progress-val').innerText = `${it0Percent}%`;
  document.getElementById('it0-progress-fill').style.width = `${it0Percent}%`;
  document.getElementById('it0-progress-sub').innerText = `${it0Done} of ${it0Items.length} Inception tasks finished`;

  document.getElementById('constraints-kpi-val').innerText = `[${constraintsDone}/${constraints.length}]`;
  document.getElementById('constraints-kpi-sub').innerText = constraintsDone === constraints.length ? "All constraints checked" : `${constraints.length - constraintsDone} pending formalization`;

  document.getElementById('assumptions-kpi-val').innerText = `[${assumptionsDone}/${assumptions.length}]`;
  document.getElementById('assumptions-kpi-sub').innerText = `${assumptionsDone} assumptions established & logged`;
}

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  container.innerHTML = '';

  let filtered = PROJECT_DATA.checklist.filter(item => {
    // Status filter
    if (currentFilter === 'done' && !item.done) return false;
    if (currentFilter === 'pending' && item.done) return false;

    // Category filter
    if (currentCategory !== 'all' && item.category !== currentCategory) return false;

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.source.toLowerCase().includes(q) ||
                    item.statusText.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">No checklist items found</p>
        <p style="font-size: 0.88rem;">Try adjusting your filter or search terms</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = `checklist-item ${item.done ? 'done' : 'pending'}`;
    card.onclick = () => toggleItem(item.id);

    const checkSymbol = item.done ? 'x' : '';
    const codeTag = item.done ? `[x] ${item.category}` : `[ ] ${item.category}`;

    card.innerHTML = `
      <div class="custom-checkbox" title="Click to toggle status">
        ${checkSymbol}
      </div>
      <div class="item-content">
        <div class="item-header">
          <div class="item-title">
            <span class="item-badge-code">${codeTag}</span>
            <span>${item.title}</span>
          </div>
          <span class="badge-tag ${item.category}">${item.category}</span>
        </div>
        <p class="item-desc">${item.description}</p>
        <div class="item-meta">
          <span class="item-meta-span"><strong>Phase:</strong> ${item.phase}</span>
          <span class="item-meta-span"><strong>Status:</strong> ${item.statusText}</span>
          <span class="item-meta-span"><strong>Source:</strong> ${item.source}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderMustFix() {
  const container = document.getElementById('must-fix-container');
  if (!container) return;
  container.innerHTML = '';

  PROJECT_DATA.mustFix.forEach(item => {
    const card = document.createElement('div');
    card.className = 'must-fix-card clickable';
    card.id = `card-${item.id}`;

    let stepsHtml = '';
    if (item.steps && item.steps.length > 0) {
      stepsHtml = item.steps.map((s, idx) => `
        <div class="instruction-step">
          <div class="step-header">
            <span class="step-num">${idx + 1}</span>
            <span>${s.title}</span>
          </div>
          <p style="color: var(--text-muted); margin-bottom: 4px;">${s.details}</p>
          ${s.code ? `<div class="code-box">${escapeHtml(s.code)}</div>` : ''}
        </div>
      `).join('');
    }

    card.innerHTML = `
      <div class="must-fix-header" onclick="toggleMustFixCard('${item.id}', event)">
        <div class="must-fix-title">
          <span>🚨</span>
          <span>${item.title}</span>
        </div>
        <span class="badge-tag deliverables">${item.severity}</span>
      </div>
      <p class="must-fix-desc" onclick="toggleMustFixCard('${item.id}', event)">${item.reason}</p>
      
      <div class="must-fix-action" onclick="toggleMustFixCard('${item.id}', event)">
        <strong>⚡ Required Action:</strong> <span>${item.action}</span>
      </div>

      <div class="must-fix-meta">
        <span><strong>Owner:</strong> ${item.owner}</span>
        <span><strong>Course Citation:</strong> ${item.ref}</span>
        <span class="must-fix-click-hint" onclick="toggleMustFixCard('${item.id}', event)">
          👉 <span id="hint-text-${item.id}">Click to show step-by-step instructions</span>
        </span>
      </div>

      <div class="must-fix-instructions" id="instructions-${item.id}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">📋 Detailed Step-by-Step Execution Plan:</h4>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Assigned to: <strong>${item.owner}</strong></span>
        </div>
        <div class="instruction-steps-list">
          ${stepsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function toggleMustFixCard(id, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(`card-${id}`);
  const hintText = document.getElementById(`hint-text-${id}`);
  if (card) {
    card.classList.toggle('expanded');
    if (hintText) {
      hintText.innerText = card.classList.contains('expanded') 
        ? "Click to collapse instructions" 
        : "Click to show step-by-step instructions";
    }
  }
}

function renderMeetingsTabs() {
  const container = document.getElementById('meetings-tabs-bar');
  if (!container) return;
  container.innerHTML = '';

  PROJECT_DATA.meetings.forEach(m => {
    const btn = document.createElement('button');
    btn.className = `meeting-tab-btn ${m.id === currentMeetingTab ? 'active' : ''}`;
    btn.onclick = () => {
      currentMeetingTab = m.id;
      renderMeetingsTabs();
      renderMeetingContent();
    };

    const isRecorded = m.status === 'Recorded';
    btn.innerHTML = `
      <span>Meeting ${m.number}</span>
      <span class="meeting-status-badge ${isRecorded ? 'recorded' : 'empty'}">${isRecorded ? '✓ Recorded' : 'Empty'}</span>
    `;

    container.appendChild(btn);
  });
}

function renderMeetingContent() {
  const m = PROJECT_DATA.meetings.find(item => item.id === currentMeetingTab);
  if (!m) return;

  const titleEl = document.getElementById('meeting-display-title');
  const dateEl = document.getElementById('meeting-display-date');
  const attendeesEl = document.getElementById('meeting-display-attendees');
  const minutesByEl = document.getElementById('meeting-display-by');
  const statusBadgeEl = document.getElementById('meeting-status-badge-display');
  const renderedViewEl = document.getElementById('meeting-rendered-content');
  const rawViewEl = document.getElementById('meeting-raw-content');

  if (titleEl) titleEl.innerText = m.title;
  if (dateEl) dateEl.innerText = m.date;
  if (attendeesEl) attendeesEl.innerText = m.attendees;
  if (minutesByEl) minutesByEl.innerText = m.minutesBy;

  if (statusBadgeEl) {
    const isRecorded = m.status === 'Recorded';
    statusBadgeEl.className = `badge-tag ${isRecorded ? 'usecases' : 'constraints'}`;
    statusBadgeEl.innerText = isRecorded ? '✓ Approved Wiki Minutes' : '📝 Template Ready / Pending Discussion';
  }

  if (rawViewEl) {
    rawViewEl.value = m.rawMarkdown;
  }

  if (renderedViewEl) {
    renderedViewEl.innerHTML = parseSimpleMarkdown(m.rawMarkdown);
  }
}

function toggleMeetingView(mode) {
  currentMeetingViewMode = mode;
  const renderedView = document.getElementById('meeting-rendered-content');
  const rawView = document.getElementById('meeting-raw-content');
  const btnRendered = document.getElementById('btn-view-rendered');
  const btnRaw = document.getElementById('btn-view-raw');

  if (mode === 'rendered') {
    if (renderedView) renderedView.style.display = 'block';
    if (rawView) rawView.style.display = 'none';
    if (btnRendered) btnRendered.classList.add('active');
    if (btnRaw) btnRaw.classList.remove('active');
  } else {
    if (renderedView) renderedView.style.display = 'none';
    if (rawView) rawView.style.display = 'block';
    if (btnRendered) btnRendered.classList.remove('active');
    if (btnRaw) btnRaw.classList.add('active');
  }
}

function copyCurrentMeetingMarkdown() {
  const m = PROJECT_DATA.meetings.find(item => item.id === currentMeetingTab);
  if (!m) return;
  const rawViewEl = document.getElementById('meeting-raw-content');
  const textToCopy = rawViewEl ? rawViewEl.value : m.rawMarkdown;
  copyTextToClipboard(textToCopy, `Meeting ${m.number} markdown copied to clipboard! Ready to paste into GitHub Wiki.`);
}

function parseSimpleMarkdown(md) {
  if (!md) return "";
  let html = md
    .replace(/^# (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 16px 0 8px 0;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h4 style="font-size: 1.05rem; font-weight: 700; color: var(--primary); margin: 14px 0 6px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">$1</h4>')
    .replace(/^### (.*$)/gim, '<h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 10px 0 4px 0;">$1</h5>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/`(.*?)`/gim, '<code style="background: var(--surface-hover); padding: 1px 5px; border-radius: 4px; font-family: monospace;">$1</code>')
    .replace(/^- (.*$)/gim, '<li style="margin-left: 20px;">$1</li>')
    .replace(/\n\n/gim, '<p style="margin-bottom: 8px;"></p>');

  // Simple table parser
  const tableRegex = /\|(.+)\|/g;
  if (html.includes('|')) {
    const lines = md.split('\n');
    let inTable = false;
    let tableHtml = '<table class="data-table"><tbody>';
    let processedLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHtml = '<table class="data-table"><tbody>';
        }
        if (line.includes('---')) continue; // skip divider
        const cells = line.split('|').filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
        const isHeader = i === 0 || (lines[i-1] && !lines[i-1].includes('|'));
        const rowTag = isHeader ? 'th' : 'td';
        tableHtml += '<tr>' + cells.map(c => `<${rowTag}>${c.trim()}</${rowTag}>`).join('') + '</tr>';
      } else {
        if (inTable) {
          inTable = false;
          tableHtml += '</tbody></table>';
          processedLines.push(tableHtml);
        }
        processedLines.push(line);
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table>';
      processedLines.push(tableHtml);
    }
    html = processedLines.join('\n')
      .replace(/^# (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 16px 0 8px 0;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h4 style="font-size: 1.05rem; font-weight: 700; color: var(--primary); margin: 14px 0 6px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">$1</h4>')
      .replace(/^### (.*$)/gim, '<h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 10px 0 4px 0;">$1</h5>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/`(.*?)`/gim, '<code style="background: var(--surface-hover); padding: 1px 5px; border-radius: 4px; font-family: monospace;">$1</code>')
      .replace(/^- (.*$)/gim, '<li style="margin-left: 20px;">$1</li>');
  }

  return html;
}

function renderMilestonesTabs() {
  const container = document.getElementById('milestones-tabs-container');
  if (!container) return;
  container.innerHTML = '';

  PROJECT_DATA.milestones.forEach(m => {
    const btn = document.createElement('button');
    btn.className = `milestone-tab-btn ${m.id === currentMilestoneTab ? 'active' : ''}`;
    btn.onclick = () => {
      currentMilestoneTab = m.id;
      renderMilestonesTabs();
      renderMilestoneContent();
    };

    btn.innerHTML = `
      <span>${m.code}: ${m.phase}</span>
      <span class="milestone-badge-count">${m.issues.length} issues</span>
    `;

    container.appendChild(btn);
  });
}

function renderMilestoneContent() {
  const m = PROJECT_DATA.milestones.find(item => item.id === currentMilestoneTab);
  if (!m) return;

  const titleEl = document.getElementById('milestone-banner-title');
  const descEl = document.getElementById('milestone-banner-desc');
  const targetEl = document.getElementById('milestone-banner-target');
  const issuesContainer = document.getElementById('issues-list-container');

  if (titleEl) titleEl.innerText = `${m.code} · ${m.name} (${m.version})`;
  if (descEl) descEl.innerText = m.objective;
  if (targetEl) targetEl.innerText = `Target: ${m.targetDate} · Status: ${m.status}`;

  if (issuesContainer) {
    issuesContainer.innerHTML = '';

    m.issues.forEach((issue, idx) => {
      const card = document.createElement('div');
      card.className = 'issue-card';

      const raditPills = ['R', 'A', 'D', 'I', 'T'].map(d => {
        const active = issue.radit && issue.radit[d];
        return `<span class="radit-pill ${active ? 'active' : 'inactive'}">${d}</span>`;
      }).join('');

      const tasksList = issue.tasks ? issue.tasks.map(t => `<li>[ ] ${t}</li>`).join('') : '<li>Refer to use-case specification</li>';
      const criteriaList = issue.acceptanceCriteria ? issue.acceptanceCriteria.map(c => `<li>[ ] ${c}</li>`).join('') : '<li>Definition of Done agreed by team</li>';

      card.innerHTML = `
        <div class="issue-top-row">
          <div class="issue-title-group">
            <span class="issue-id-badge">${issue.num}</span>
            <span class="issue-name">${issue.title}</span>
          </div>
          <div class="issue-actions">
            <button class="copy-issue-btn" onclick="copyIssueMarkdown('${m.id}', ${idx})">
              📋 Copy for GitHub
            </button>
          </div>
        </div>

        <div class="radit-bar">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-right: 6px;">RADIT Disciplines:</span>
          ${raditPills}
          <span style="margin-left: 14px; font-size: 0.8rem; color: var(--text-muted);">
            <strong>Assignee:</strong> ${issue.assignee || 'Team Member'}
          </span>
          ${issue.effort ? `<span style="margin-left: 14px; font-size: 0.8rem; color: var(--text-muted);"><strong>Effort:</strong> ${issue.effort}</span>` : ''}
          ${issue.branch ? `<span style="margin-left: 14px; font-size: 0.8rem; color: var(--text-muted);"><strong>Branch:</strong> <code>${issue.branch}</code></span>` : ''}
        </div>

        <p class="issue-objective">${issue.objective}</p>

        <button class="issue-details-toggle" onclick="toggleIssueDetails('details-${m.id}-${idx}', this)">
          ▶ View Full Issue Specifications & Acceptance Criteria
        </button>

        <div id="details-${m.id}-${idx}" class="issue-collapsible-content">
          <div class="issue-spec-block">
            <strong>Tasks Checklist:</strong>
            <ul>${tasksList}</ul>
          </div>
          <div class="issue-spec-block">
            <strong>Acceptance Criteria (Definition of Done):</strong>
            <ul>${criteriaList}</ul>
          </div>
        </div>
      `;

      issuesContainer.appendChild(card);
    });
  }
}

function toggleIssueDetails(elementId, btn) {
  const el = document.getElementById(elementId);
  if (el) {
    const isOpen = el.classList.contains('open');
    if (isOpen) {
      el.classList.remove('open');
      btn.innerText = '▶ View Full Issue Specifications & Acceptance Criteria';
    } else {
      el.classList.add('open');
      btn.innerText = '▼ Hide Full Issue Specifications';
    }
  }
}

function generateGitHubIssueMarkdown(milestoneId, issueIdx) {
  const m = PROJECT_DATA.milestones.find(item => item.id === milestoneId);
  if (!m) return "";
  const issue = m.issues[issueIdx];
  if (!issue) return "";

  const raditLine = ['Requirements', 'Analysis', 'Design', 'Implementation', 'Testing'].map(d => {
    const char = d[0];
    const checked = issue.radit && issue.radit[char];
    return `- [${checked ? 'x' : ' '}] ${d}`;
  }).join('  ');

  const tasksText = issue.tasks ? issue.tasks.map(t => `- [ ] ${t}`).join('\n') : "- [ ] Implement use case contracts and methods";
  const criteriaText = issue.acceptanceCriteria ? issue.acceptanceCriteria.map(c => `- [ ] ${c}`).join('\n') : "- [ ] Code merged into develop with passing tests";

  return `## Use Case
UC: ${issue.title} · Phase: ${m.phase} (${m.code}) · Target Version: ${m.version} · Milestone: ${m.name}

## Objective
${issue.objective}

## RADIT Disciplines
${raditLine}

## Contracts and Interfaces
${issue.branch ? `- Target Branch: \`${issue.branch}\`\n` : ''}- Package: \`es.uclm.sescam\`
- Maven Module: \`${issue.title.includes('Server') ? 'servidor' : issue.title.includes('Client') ? 'cliente-web' : 'common-contracts'}\`

## Tasks
${tasksText}

## Acceptance Criteria
${criteriaText}

## Effort estimate
${issue.effort || 'Without agent: 4 h · With agent: 1.5 h'}

## Decisions
Refer to DECISIONS.md (D-001, D-002, D-007)`;
}

function copyIssueMarkdown(milestoneId, issueIdx) {
  const md = generateGitHubIssueMarkdown(milestoneId, issueIdx);
  copyTextToClipboard(md, "GitHub Issue markdown copied to clipboard!");
}

function copyTextToClipboard(text, successMsg) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || "Copied to clipboard!");
    }).catch(() => {
      fallbackCopyText(text, successMsg);
    });
  } else {
    fallbackCopyText(text, successMsg);
  }
}

function fallbackCopyText(text, successMsg) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(ta);
    if (successful) {
      showToast(successMsg || "Copied to clipboard!");
    } else {
      showToast("Please copy manually from the text view.");
    }
  } catch (err) {
    console.error("Fallback copy failed", err);
    showToast("Please copy manually from the text view.");
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerText = `✅ ${msg}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ========================================================
// TO-DO BY MEMBER & COLLABORATION BOARD
// ========================================================

const COLLABORATORS_INFO = {
  hatim: {
    id: "hatim",
    name: "Hatim Ben Ayad",
    role: "Coordinator",
    roleClass: "coordinator",
    initials: "HB",
    scope: "Admissions & Admin (RF19–RF26) · Lead Coordinator",
    permissions: "👑 Coordinator · Merge Approver & Release Lead"
  },
  felipe: {
    id: "felipe",
    name: "Felipe Dionisio Becerra Sangeorzan",
    role: "Secretary",
    roleClass: "secretary",
    initials: "FD",
    scope: "SysAdmin (RF27–RF32) · Meeting Minutes",
    permissions: "✍️ Secretary · Wiki & Minutes Publisher · Direct Edit"
  },
  berke: {
    id: "berke",
    name: "Berke Taha Özdemir",
    role: "Git Expert",
    roleClass: "git",
    initials: "BÖ",
    scope: "Server Architecture (SCU01–SCU13) · Git Flow",
    permissions: "⚡ Git Expert · Direct Wiki Access · PR Reviewer"
  },
  balota: {
    id: "balota",
    name: "Beyzanur Balota",
    role: "Git Expert",
    roleClass: "git",
    initials: "BB",
    scope: "Planning & Constraints Governance · Team Availability",
    permissions: "📋 Planning Lead · Direct Wiki Access (No PR Needed)"
  },
  mina: {
    id: "mina",
    name: "Mina Özdoğan",
    role: "Maven Expert",
    roleClass: "maven",
    initials: "MÖ",
    scope: "Patient Users (RF01–RF09) · Maven Architecture",
    permissions: "🧩 Maven Expert · Client Models & Code Reviewer"
  },
  ayca: {
    id: "ayca",
    name: "Ayça Görgülü",
    role: "Maven Expert",
    roleClass: "maven",
    initials: "AG",
    scope: "Physician Users (RF10–RF18) · Clinical Workflows",
    permissions: "🩺 Maven Expert · Clinical Workflows & Code Reviewer"
  }
};

const DEFAULT_TODO_TASKS = [
  {
    id: "todo-1",
    assignee: "mina",
    collaborator: "ayca",
    title: "Diagrams Assembly: Client & Server Models",
    phase: "Inception",
    details: "Merge Patient Client Diagram (RF01–RF09, PR #20) and Physician Client Diagram (RF10–RF18, PR #21) into the consolidated General Client Diagram (.vpp). Resolve Issue #28 (Physician-Patient inheritance generalization where Physician inherits Patient capabilities).",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Work in branch 'feature/diagrams-assembly' -> Export .vpp and .png to 'docs/diagrams/' -> Open PR to develop -> Mention 'Closes #28'.",
    comment: "Mina and Ayça: Please review each other's actor boundaries. Make sure Physician extends Patient cleanly and export the updated diagram PNGs so we can merge PR before Nov 13.",
    done: false,
    guide: {
      whereToLook: "Check <code>docs/diagrams/PatientClientDiagram.vpp</code> (merged PR #20) and <code>docs/diagrams/PhysicianClientDiagram.vpp</code> (merged PR #21). Review <strong>GitHub Issue #28</strong> ('Inheritance between Physician and Patient') and course spec <strong>01-project-specification-sescam.md</strong> pages 2–4.",
      whatToLookFor: "Compare Patient use cases (CU01–CU09) and Physician use cases (CU10–CU18). Notice that Physician needs to view Patient medical histories and previous diagnostic reports (CU12 & CU15). Rather than duplicating use cases, an actor generalization (Physician specializing Patient) allows Physician to inherit all Patient read capabilities.",
      howToWriteIt: "In Visual Paradigm: Create <code>GeneralClientDiagram.vpp</code>, import both packages (<code>Patient</code> and <code>Physician</code>), place an Actor Generalization arrow pointing from <code>Physician</code> to <code>Patient</code>. Export diagram as PNG (<code>docs/diagrams/GeneralClientDiagram.png</code>).",
      snippet: "Visual Paradigm Modeling:\n[Physician Actor] ────▷ [Patient Actor] (Generalization connector)\nPatient -> (CU01 Login), (CU02 View History), (CU03 View Reports)\nPhysician -> (CU10 Request Exam), (CU14 Draft Report), (CU17 Sign Report)",
      whoToAsk: "Ask <strong>Ayça Görgülü</strong>: 'Let's align on CU12 vs CU02: if Physician inherits from Patient, CU12 is inherited from CU02. Does Physician have any extra search filters?' Confirm with <strong>Hatim</strong> that Admin actor from PR #19 is ready to be included in this consolidated file.",
      githubAction: "🌿 Git Flow: <code>git checkout develop && git pull</code> -> <code>git checkout -b feature/general-client-diagram-assembly</code> -> Commit .vpp & .png -> Push and open PR with 'Closes #28' -> Tag Ayça & Hatim for review."
    }
  },
  {
    id: "todo-2",
    assignee: "ayca",
    collaborator: "mina",
    title: "Diagrams Assembly: Client & Server Models",
    phase: "Inception",
    details: "Collaborate with Mina on General Client Diagram consolidation. Ensure Physician use cases (CU10–CU18) properly reference inherited Patient use cases (CU01–CU09) and close review issue #28.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Work in branch 'feature/diagrams-assembly' -> Export .vpp and .png to 'docs/diagrams/' -> Open PR to develop -> Mention 'Closes #28'.",
    comment: "Ayça: Work directly with Mina on this. Check the generalization arrow in Visual Paradigm from Physician to Patient so Issue #28 is resolved.",
    done: false,
    guide: {
      whereToLook: "Open <code>docs/diagrams/PhysicianClientDiagram.vpp</code> and <strong>GitHub Issue #28</strong>. Review meeting minutes for <strong>Meeting 2</strong> where the team discussed Physician and Patient role inheritance.",
      whatToLookFor: "Verify all 9 Physician requirements (RF10 Request Examination, RF11 Orders Status, RF12 Clinical History, RF13 Filter Records, RF14 Draft Report, RF15 View PACS Images, RF16 Validate Report, RF17 Sign Report, RF18 Emergency Override). Ensure CU18 (Emergency Override) is an <code>&lt;&lt;extend&gt;&gt;</code> relationship on CU12 with an explicit extension point.",
      howToWriteIt: "Work with Mina on the unified <code>GeneralClientDiagram.vpp</code>. Check that all use cases reside inside the <code>SESCAM Medical Imaging System</code> boundary, with clear stereotypes (<code>&lt;&lt;include&gt;&gt;</code>, <code>&lt;&lt;extend&gt;&gt;</code>) and no overlapping connector lines.",
      snippet: "Visual Paradigm Verification:\n(CU18 Emergency Override) ..> <<extend>> ..> (CU12 Consult Patient History)\nExtension point: Emergency Break-Glass Authentication & Audit Log",
      whoToAsk: "Ask <strong>Mina Özdoğan</strong>: 'Let's verify package namespaces in Visual Paradigm so our merged diagram doesn't overwrite any CU IDs.'",
      githubAction: "🌿 Git Flow: Collaborate with Mina on <code>feature/general-client-diagram-assembly</code>. When Mina opens the PR, review the diagram on GitHub, check Issue #28 resolution, and submit an approving review."
    }
  },
  {
    id: "todo-3",
    assignee: "balota",
    collaborator: "berke",
    title: "Planification Page: Finalize Assumptions (§2), Fill Availability (§3) & Risks (§12)",
    phase: "Inception",
    details: "Section 2 constraints (C01–C18) are submitted! Next fixes: (1) Replace '...' in assumptions A06–A09 with confirmed values; (2) Populate §3 Team Availability with all 6 members (10–12 h/w each); (3) Complete §12 Risks and §14 Supporting Documents.",
    platform: "wiki",
    platformText: "📘 GitHub Wiki: Direct Edit (Self-Service) — Go to Wiki -> Planification -> Edit -> Save. No PR or Hatim merge required; you can publish immediately!",
    comment: "Balota: Great job adding C01–C18! Next: replace the '...' in A06–A09, paste the §3 team availability table (66 h/week total), and add §12 Risks.",
    done: false,
    guide: {
      whereToLook: "Wiki page: <strong>https://github.com/hatimbenayad/2026-ISO2-A.05/wiki/Planification</strong>, <strong>01-project-specification-sescam.md</strong> (Pages 5–6), <strong>04-project-kickoff-iteration-0.md</strong> (Slides 26–31), and repository <strong>DECISIONS.md</strong>.",
      whatToLookFor: "1. In §2: Replace '...' and 'To confirm' for A06 (Team size 6, 10–12 h/w, ~66 h/w total), A07 (Antigravity & Copilot academic allowances), A08 (Java 17, Spring Boot, H2/Postgres), and A09 (€25/h baseline).\n2. In §3: Fill Team Availability table for all 6 members with exam restrictions and Santa Tecla break.\n3. In §12: Fill Risks table (R01 AI interface mismatch, R02 exam congestion, R03 JaCoCo <80%, R04 PR review latency).\n4. In §14: Add hyperlinks to repo diagrams, DECISIONS.md, and meeting minutes.",
      howToWriteIt: "Copy and paste the ready-to-use Markdown tables directly into the Wiki:",
      snippet: "| Member | Role | Available h/week | Availability limitations & exam blackout dates |\n|---|---|---|---|\n| Hatim Ben Ayad | Coordinator | 12 h/w | Full availability; leads merge reviews & coordination |\n| Felipe Dionisio | Secretary | 10 h/w | Travel Nov 20–22; leads meeting minutes & SysAdmin scope |\n| Berke Taha Özdemir | Git Expert | 12 h/w | Midterm exam Nov 18; leads Git Flow & SCM governance |\n| Beyzanur Balota | Git Expert | 12 h/w | Midterm exam Nov 19; leads planning & constraints tracking |\n| Mina Özdoğan | Maven Expert | 10 h/w | Assignment deadline Nov 21; leads Patient client models |\n| Ayça Görgülü | Maven Expert | 10 h/w | Full availability; leads Physician client workflows |\n\n*Total team working capacity: 66 person-hours per standard week (Excluding Santa Tecla Nov 23-27: 0 h).* ",
      whoToAsk: "Ask teammates: <em>'Team, please confirm your weekly availability (e.g. 10h vs 12h) and any exam dates between now and Dec 15 so §3 is 100% accurate.'</em>",
      githubAction: "📘 Direct Wiki Edit (Self-Service): Open Wiki -> Planification -> Click 'Edit' -> Paste §2 fixes, §3, §12, and §14 -> Click 'Save'. NO PR OR MERGE FROM HATIM IS NEEDED; Balota can publish directly!"
    }
  },
  {
    id: "todo-4",
    assignee: "berke",
    collaborator: "balota",
    title: "Planification Page: Complete RADIT Effort (§6–§8), Schedule (§11) & Approach (§1, §4, §5)",
    phase: "Inception",
    details: "Section 2 constraints are submitted! Next fixes: (1) Write §1 Planning approach; (2) Fill §4 & §5 Use-case priorities and phases; (3) Complete §6–§8 RADIT effort estimation tables; (4) Fill §9 & §10 AI budget; (5) Finalize §11 Schedule & Release Calendar.",
    platform: "wiki",
    platformText: "📘 GitHub Wiki: Direct Edit (Self-Service) — Berke has full direct edit permissions on the GitHub Wiki. Save updates directly without waiting for a PR.",
    comment: "Berke: Great work on C01–C18! Next: write §1 Approach, fill §4/§5 Use-case priorities, and paste the §6–§8 RADIT effort tables comparing human vs AI hours.",
    done: false,
    guide: {
      whereToLook: "<strong>01-project-specification-sescam.md</strong> (Pages 5–9: UP phases, €1k/€2k costs, 40h/week @ €25/h), <strong>03-git-and-github.md</strong>, <strong>04-project-kickoff-iteration-0.md</strong> (Slides 26 & 31), and repository <strong>DECISIONS.md</strong>.",
      whatToLookFor: "1. §1 Planning approach (agile-disciplined Unified Process with RADIT).\n2. §4 Use-case priorities (CU01/CU19 High, CU10 High, CU20 High, CU14/CU17 High, CU15 Med, CU05 Low, CU27–CU32 Med).\n3. §5 Phases and iterations (It0 Inception, It1 Elaboration, It2–It4 Construction, ItN Transition).\n4. §6–§8 RADIT effort breakdown (€25/h rate, without AI ~770h = €19,250 vs with AI ~360h = €9,060).\n5. §9 & §10 AI budget & Net savings (~€10,190 saved).\n6. §11 Release Calendar (Nov 13 Theory 1, Nov 23–27 Santa Tecla, Dec 15 Final Evaluation).",
      howToWriteIt: "Copy and paste the ready-to-use Markdown tables directly into the Wiki:",
      snippet: "| Iteration / milestone | Deliverable / component | Target version | Start date | Finish date | Responsible members | Related issues |\n|---|---|---|---|---|---|---|\n| Milestone 0: Kickoff | Repo setup, DECISIONS.md, Issue Templates | v0.0.1 | 19/10/2026 | 26/10/2026 | All members | #1, #2, #3 |\n| Milestone 1: Inception | RF01–RF32, Client & Server Diagrams, Planification Wiki | v0.0.1 | 27/10/2026 | 06/11/2026 | All members | #18, #28, #30, #31 |\n| Milestone 2: Elaboration | Root POM, Submodules, Architectural baseline entities, Theory 1 | v0.1.0 | 07/11/2026 | 13/11/2026 | Hatim, Felipe, Mina, Ayça | #33, #34, #35 |\n| Milestone 3: Construction 1 | Diagnostic ordering (CU10) & Scheduling (CU20) | v0.2.0–v0.4.0 | 14/11/2026 | 22/11/2026 | All members | #40, #41, #42 |\n| Holiday Break | Santa Tecla non-working week (0 hours) | -- | 23/11/2026 | 27/11/2026 | -- | -- |\n| Milestone 4: Construction 2 | PACS DICOM viewer (CU15), Reports (CU14, CU17), Notifications (CU05) | v0.5.0–v0.8.0 | 28/11/2026 | 08/12/2026 | All members | #45, #46, #47 |\n| Milestone 5: Transition | Final integration, Javadoc, Self-assessments, Final evaluation | v1.0.0 | 09/12/2026 | 15/12/2026 | All members | #50, #51, #52 |",
      whoToAsk: "Coordinate with <strong>Balota</strong> so you edit different sections or sequentially. Confirm with <strong>Hatim</strong> that Nov 13 is the Elaboration delivery milestone tag.",
      githubAction: "📘 Direct Wiki Edit (Self-Service): Open Wiki -> Planification -> Edit -> Add §1, §4, §5, §6–§8, §9–§10, §11 -> Save. Berke has collaborator access and can publish directly without a PR."
    }
  },
  {
    id: "todo-5",
    assignee: "hatim",
    collaborator: null,
    title: "Maven Multi-Module Root & Submodule Skeletons",
    phase: "Elaboration",
    details: "Create root aggregator pom.xml (compiler 17/21, surefire, JaCoCo >80% threshold) and initialize submodules: common-contracts/, servidor/, cliente-web/, and cliente-movil/.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/M1-maven-multimodule' -> Create root and submodule pom.xml files -> Test build with 'mvn clean compile' -> Open PR to develop.",
    comment: "Hatim (Me): I will establish the root multi-module Maven build on develop so the team has a standard build pipeline to start coding.",
    done: false,
    guide: {
      whereToLook: "<strong>01-project-specification-sescam.md</strong> (Pages 7–8) and <strong>05-development-work-environment-and-review-of-oop-foundations.md</strong> (Slides 11–16).",
      whatToLookFor: "Required POM tags: root packaging <code>&lt;packaging&gt;pom&lt;/packaging&gt;</code>, module declarations (<code>common-contracts</code>, <code>servidor</code>, <code>cliente-web</code>, <code>cliente-movil</code>), Java 17/21 properties, JUnit 5.10.2, Surefire plugin, and JaCoCo Maven plugin configured with the <code>check</code> goal enforcing <code>&lt;minimum&gt;0.80&lt;/minimum&gt;</code> line coverage.",
      howToWriteIt: "Create root <code>pom.xml</code>, then create each submodule folder with its own child <code>pom.xml</code> declaring <code>&lt;parent&gt;</code>.",
      snippet: "<!-- Root pom.xml snippet -->\n<modules>\n  <module>common-contracts</module>\n  <module>servidor</module>\n  <module>cliente-web</module>\n  <module>cliente-movil</module>\n</modules>\n<plugin>\n  <groupId>org.jacoco</groupId>\n  <artifactId>jacoco-maven-plugin</artifactId>\n  <version>0.8.11</version>\n  <executions>...</executions>\n</plugin>",
      whoToAsk: "Ask Maven experts <strong>Mina & Ayça</strong>: 'I have set up the root POM and 4 submodule POMs with Java 17. Please test running `mvn clean compile` on your machines to ensure your local JDKs build cleanly without errors.'",
      githubAction: "🌿 Git Flow: <code>git checkout develop && git pull</code> -> <code>git checkout -b feature/M1-maven-multimodule</code> -> Write POMs and folder structures -> Run <code>mvn clean compile</code> (must say BUILD SUCCESS) -> Push and open PR to develop. Request review from Mina & Berke."
    }
  },
  {
    id: "todo-6",
    assignee: "felipe",
    collaborator: "hatim",
    title: "Architectural Baseline: Core Domain Entities & DTOs",
    phase: "Elaboration",
    details: "Model core domain entities in 'common-contracts' & 'servidor': User, Role (Admin, SysAdmin, Physician, Patient), Authentication session, and Patient demographic registration (CU19 / RF19). Ensure review issue #30 (SysAdmin diagram) is finalized.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/M2-architectural-baseline' -> Write Java interfaces & entity classes -> Verify 'mvn test' -> Open PR targeting develop.",
    comment: "Felipe: First finalize review issue #30 for SysAdmin, then kick off the core User and Role entities in common-contracts.",
    done: false,
    guide: {
      whereToLook: "<strong>01-project-specification-sescam.md</strong> (Pages 2–4: RF19 Patient registration, RF27–RF32 SysAdmin user accounts) and <strong>SysAdmin use case diagram (PR #30 / Issue #30)</strong>.",
      whatToLookFor: "Core domain entities: <code>User.java</code> (id, username, passwordHash, email, active), <code>Role.java</code> (enum: ADMIN, SYSADMIN, PHYSICIAN, PATIENT), <code>Patient.java</code> (sipNumber, nationalId, birthDate, gender, phone, address), <code>MedicalRecord.java</code> (patientId, bloodType, allergies). Place interfaces in <code>common-contracts</code> and JPA/POJO models in <code>servidor</code>.",
      howToWriteIt: "Write clean Java POJO classes with private attributes, getters/setters, equals/hashCode, and constructor overloads. Add a basic JUnit 5 test in <code>common-contracts/src/test/java</code> to verify entity creation.",
      snippet: "package es.uclm.sescam.contracts.domain;\n\npublic enum Role { ADMIN, SYSADMIN, PHYSICIAN, PATIENT; }\n\npublic class User {\n  private Long id;\n  private String username;\n  private String email;\n  private Role role;\n  // getters and setters\n}",
      whoToAsk: "Ask <strong>Hatim</strong>: 'Shall we keep domain entities as plain Java objects first before adding Spring/JPA annotations?' (Answer: Yes, keep pure Java POJOs first). Ask <strong>Berke</strong> to ensure PR #30 for SysAdmin diagram is approved before this code branch starts.",
      githubAction: "🌿 Git Flow: Branch <code>feature/M2-architectural-baseline</code> -> Commit Java classes in common-contracts and servidor -> Run <code>mvn test</code> -> Push and open PR targeting develop -> Tag Hatim & Mina as reviewers."
    }
  },
  {
    id: "todo-7",
    assignee: "felipe",
    collaborator: null,
    title: "Meeting Minutes & GitHub Wiki Synchronization",
    phase: "Governance",
    details: "Maintain official meeting minutes for all team sessions. Format minutes in standard markdown and publish directly to the team's GitHub Wiki (Meetings 1 through 8).",
    platform: "wiki",
    platformText: "📘 GitHub Wiki: Direct Edit — Felipe as Secretary can push minutes directly to GitHub Wiki without creating PRs.",
    comment: "Felipe: As Secretary, keep documenting our meetings and use the 'Copy as Markdown for GitHub Wiki' button to keep the Wiki updated.",
    done: false,
    guide: {
      whereToLook: "Dashboard <strong>📅 Meetings 1–8</strong> section, and existing Wiki pages for Meeting 01 and Meeting 2 at <strong>https://github.com/hatimbenayad/2026-ISO2-A.05/wiki</strong>.",
      whatToLookFor: "Official session records: date, time, platform (Microsoft Teams), attendees present, agenda items discussed, formal decisions logged (D-001 to D-007), and assigned action items.",
      howToWriteIt: "Use the dashboard's built-in <strong>'📋 Copy as Markdown for GitHub Wiki'</strong> button. It copies perfectly formatted GitHub Markdown to your clipboard.",
      snippet: "## 1. Meeting details\n- Date: DD/MM/2026\n- Platform: Microsoft Teams\n- Attendees: AYÇA, MINA, HATIM, FELIPE, BERKE, BEYZANUR\n- Minutes prepared by: FELIPE DIONISIO\n\n## 2. Meeting objective\n...\n## 3. Decisions taken\n...\n## 4. Next steps & Action items\n...",
      whoToAsk: "Confirm with <strong>Hatim (Coordinator)</strong> at the end of each meeting: 'Hatim, are these decisions and assigned action items complete before I publish to the Wiki?'",
      githubAction: "📘 Direct Wiki Edit (Self-Service): Open GitHub Wiki -> Click 'New Page' or 'Edit' on the meeting page -> Paste the clipboard markdown -> Click 'Save'. No PR needed!"
    }
  }
];

const ROADMAP_PRESET_MAP = {
  "diagrams-assembly": {
    title: "Diagrams Assembly: Client & Server Models",
    phase: "Inception",
    details: "Consolidate Patient, Physician, and Admin Visual Paradigm diagrams into GeneralClientDiagram.vpp, export PNG, and resolve Issue #28 (Physician-Patient inheritance).",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Work in branch 'feature/diagrams-assembly' -> Export .vpp and .png to 'docs/diagrams/' -> Open PR to develop -> Mention 'Closes #28'.",
    defaultComment: "Please coordinate together on actor boundaries and ensure Physician extends Patient cleanly."
  },
  "planification-page": {
    title: "Planification Page: Constraints, Availability & Effort",
    phase: "Inception",
    details: "Complete Wiki Planification.md: Fill §2 (9 constraints & 7 assumptions), §3 (Team Availability table for all 6 members), §7 (RADIT effort tables), and §11 (Release Calendar).",
    platform: "wiki",
    platformText: "📘 GitHub Wiki: Direct Edit (Self-Service) — Edit Planification.md in GitHub Wiki and save immediately. No PR or coordinator review needed!",
    defaultComment: "You can edit and save the Wiki directly without opening a PR! Fill §2 constraints and §3 availability immediately."
  },
  "issue-28-inheritance": {
    title: "Issue #28: Physician-Patient Inheritance Generalization",
    phase: "Inception",
    details: "Resolve Issue #28: update Physician use case diagram so Physician actor specializes (inherits from) Patient actor for shared medical history access.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'fix/issue-28-physician-patient-inheritance' -> Update Visual Paradigm diagram -> Open PR targeting develop with 'Closes #28'.",
    defaultComment: "Ensure the generalization relationship in Visual Paradigm is an Actor generalization arrow."
  },
  "issue-30-sysadmin": {
    title: "Issue #30: SysAdmin Diagram Review & Decisions",
    phase: "Inception",
    details: "Review Felipe's System Administrator Use Case Diagram (RF27–RF32), verify external actor associations, and approve PR #30.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Review PR #30 on GitHub -> Leave review comment / approval -> Merge into develop.",
    defaultComment: "Check external systems E01 (SSO) and E04 (PACS) connections in SysAdmin scope."
  },
  "maven-multimodule": {
    title: "Maven Multi-Module Root & Submodule Skeletons",
    phase: "Elaboration",
    details: "Set up root pom.xml with build aggregator, Surefire, JaCoCo >80%, and initialize submodules: common-contracts, servidor, cliente-web, and cliente-movil.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/M1-maven-multimodule' -> Create pom.xml files -> Run 'mvn clean compile' -> Open PR targeting develop.",
    defaultComment: "Provide the root Maven skeleton so developers can compile common contracts."
  },
  "architectural-baseline": {
    title: "Architectural Baseline: Core Domain Entities & DTOs",
    phase: "Elaboration",
    details: "Model core entities (User, Role, Patient, MedicalRecord, ExaminationOrder) in common-contracts and servidor modules.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/M2-architectural-baseline' -> Write Java interfaces & POJO entities -> Open PR targeting develop.",
    defaultComment: "Establish core domain contracts so client and server development can proceed concurrently."
  },
  "external-adapters": {
    title: "External System Adapters (SSO, EHR, Admissions, PACS)",
    phase: "Elaboration",
    details: "Create adapter interfaces in common-contracts and mock implementations in servidor for E01 (SSO), E02 (EHR), E03 (Admissions), and E04 (RIS/PACS).",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/M3-external-adapters' -> Implement mock services -> Test with JUnit 5 -> Open PR targeting develop.",
    defaultComment: "Build lightweight mocks for external hospital APIs so unit testing does not depend on live servers."
  },
  "theory-1-documentation": {
    title: "Theory Deliverable 1 Documentation (SCM, SQA Plan)",
    phase: "Elaboration",
    details: "Draft Theory Assignment 1 documents: Unified Process lifecycle plan, Software Configuration Management (SCM) plan, and ISO/IEC 25010 SQA plan due Nov 13.",
    platform: "wiki",
    platformText: "📘 GitHub Wiki or docs/ folder: Draft documents according to Assignment 1 rubric and save to Wiki / repository.",
    defaultComment: "Nov 13 is upcoming next week! Make sure our planning, SCM rules, and quality metrics are documented."
  },
  "clinical-orders": {
    title: "Clinical Orders & Scheduling (CU10, CU20)",
    phase: "Construction",
    details: "Implement diagnostic ordering workflow for physicians (CU10 / RF10) and appointment slot allocation by administrative staff (CU20 / RF20).",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/CU10-CU20-clinical-orders' -> Implement services & controllers -> Open PR targeting develop.",
    defaultComment: "Validate ordering state machine: Requested -> Scheduled -> In Progress -> Completed."
  },
  "diagnostic-reports": {
    title: "Diagnostic Reports & PACS Image Viewer (CU14, CU15)",
    phase: "Construction",
    details: "Implement radiologist diagnostic reporting workflow (CU14) and medical image retrieval via DICOM/PACS adapter (CU15).",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/CU14-CU15-reporting-pacs' -> Write PACS query adapter & reporting service -> Open PR targeting develop.",
    defaultComment: "Connect with mock PACS adapter for DICOM series streaming."
  },
  "notifications-timer": {
    title: "Automated Notifications & Reminders (CU05, CU11)",
    phase: "Construction",
    details: "Implement timer-based background notifications: 48h appointment reminders and diagnostic report availability alerts for patients.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/CU05-notifications-timer' -> Create scheduler service -> Open PR targeting develop.",
    defaultComment: "Ensure notification queue handles mock SMS and Email transports."
  },
  "unit-tests-jacoco": {
    title: "Unit Tests & JaCoCo >80% Coverage Enforcement",
    phase: "Construction",
    details: "Author JUnit 5 test suites covering business logic in servidor and common-contracts; verify JaCoCo report reaches at least 80% line coverage.",
    platform: "repo",
    platformText: "🌿 GitHub Repo: Branch 'feature/tests-jacoco-80' -> Write tests -> Execute 'mvn clean verify' -> Open PR targeting develop.",
    defaultComment: "Mandatory course constraint: JaCoCo >80% coverage on all business services."
  },
  "meeting-minutes": {
    title: "Meeting Minutes & GitHub Wiki Synchronization",
    phase: "Governance",
    details: "Document meeting minutes, decisions, and action items, and push directly to GitHub Wiki.",
    platform: "wiki",
    platformText: "📘 GitHub Wiki: Direct Edit — Go to Wiki -> Meetings -> Edit -> Save. No PR required.",
    defaultComment: "Keep all meeting minutes documented and synchronized to the Wiki."
  }
};

let todoTasksList = [];

function loadTodoTasks() {
  const saved = localStorage.getItem('iso2_todo_tasks');
  if (saved) {
    try {
      todoTasksList = JSON.parse(saved);
      // Synchronize default tasks with the latest updated baseline
      DEFAULT_TODO_TASKS.forEach(defaultTask => {
        const existing = todoTasksList.find(t => t.id === defaultTask.id);
        if (existing) {
          existing.title = defaultTask.title;
          existing.details = defaultTask.details;
          existing.comment = defaultTask.comment;
          existing.guide = defaultTask.guide;
        } else {
          todoTasksList.push(JSON.parse(JSON.stringify(defaultTask)));
        }
      });
    } catch (e) {
      console.error("Error parsing saved todo tasks, falling back to default plan:", e);
      todoTasksList = JSON.parse(JSON.stringify(DEFAULT_TODO_TASKS));
    }
  } else {
    todoTasksList = JSON.parse(JSON.stringify(DEFAULT_TODO_TASKS));
  }
}

function saveTodoTasks() {
  try {
    localStorage.setItem('iso2_todo_tasks', JSON.stringify(todoTasksList));
  } catch (e) {
    console.error("Error saving todo tasks:", e);
  }
}

function renderTodoBySection() {
  const gridContainer = document.getElementById('todo-members-grid');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  const memberKeys = Object.keys(COLLABORATORS_INFO);
  const activeMembers = currentTodoMemberFilter === 'all' 
    ? memberKeys 
    : memberKeys.filter(k => k === currentTodoMemberFilter);

  activeMembers.forEach(memberId => {
    const info = COLLABORATORS_INFO[memberId];
    const memberTasks = todoTasksList.filter(t => t.assignee === memberId);

    const card = document.createElement('div');
    card.className = 'todo-member-card';
    card.id = `member-card-${memberId}`;

    let tasksHtml = '';
    if (memberTasks.length === 0) {
      tasksHtml = `<div class="todo-empty-state">No active tasks assigned yet. Click "+ Add Task" to assign from Roadmap.</div>`;
    } else {
      tasksHtml = memberTasks.map(task => {
        const isDone = task.done;
        let collabHtml = '';
        if (task.collaborator && COLLABORATORS_INFO[task.collaborator]) {
          const collabInfo = COLLABORATORS_INFO[task.collaborator];
          collabHtml = `
            <span class="todo-collab-badge" title="Collaborative paired task">
              <span>🤝</span> Paired with: <strong>${collabInfo.name.split(' ')[0]}</strong>
            </span>
          `;
        }

        const isWiki = task.platform === 'wiki';
        const platformInstruction = task.platformText || (isWiki 
          ? "📘 GitHub Wiki: Direct Edit — Save changes directly without PR or Hatim's merge."
          : "🌿 GitHub Repo: Branch feature/... -> Open PR against develop -> Request Coordinator review.");

        return `
          <div class="todo-task-card ${isDone ? 'done' : ''}" id="task-card-${task.id}">
            <div class="todo-task-header">
              <input type="checkbox" class="todo-task-checkbox" ${isDone ? 'checked' : ''} 
                onchange="toggleTodoTask('${task.id}')" title="Mark task completed/pending">
              <div class="todo-task-title-area">
                <div class="todo-task-title">${escapeHtml(task.title)}</div>
                <div class="todo-task-meta">
                  <span class="todo-phase-pill">${task.phase || 'Roadmap'}</span>
                  ${collabHtml}
                </div>
              </div>
            </div>

            <p class="todo-task-details">${escapeHtml(task.details)}</p>

            <div class="todo-platform-instruction ${isWiki ? 'wiki' : 'repo'}">
              <span>${isWiki ? '📘' : '🌿'}</span>
              <div>
                <strong>Where to change in GitHub:</strong>
                <div>${escapeHtml(platformInstruction)}</div>
              </div>
            </div>

            ${task.comment ? `
              <div class="todo-coordinator-comment">
                <span>💬</span>
                <div>
                  <strong>Hatim's Directive:</strong> "${escapeHtml(task.comment)}"
                </div>
              </div>
            ` : ''}

            ${task.guide ? `
              <div class="todo-guide-box">
                <button class="todo-guide-toggle" onclick="toggleTaskGuide('${task.id}', this)" type="button">
                  <span>▶</span> Show Complete Task Instructions (Where to look, what to ask &amp; format)
                </button>
                <div class="todo-guide-content" id="guide-content-${task.id}">
                  <div class="guide-step-block">
                    <div class="guide-step-title"><span>🔍</span> Where to Look:</div>
                    <div class="guide-step-desc">${task.guide.whereToLook}</div>
                  </div>
                  <div class="guide-step-block">
                    <div class="guide-step-title"><span>🎯</span> What to Look For &amp; Extract:</div>
                    <div class="guide-step-desc">${task.guide.whatToLookFor}</div>
                  </div>
                  <div class="guide-step-block">
                    <div class="guide-step-title"><span>✍️</span> How to Write &amp; Format It:</div>
                    <div class="guide-step-desc">${task.guide.howToWriteIt}</div>
                    ${task.guide.snippet ? `<div class="guide-code-snippet">${escapeHtml(task.guide.snippet)}</div>` : ''}
                  </div>
                  <div class="guide-step-block">
                    <div class="guide-step-title"><span>🗣️</span> Who to Ask &amp; Necessary Knowledge:</div>
                    <div class="guide-step-desc">${task.guide.whoToAsk}</div>
                  </div>
                  <div class="guide-step-block">
                    <div class="guide-step-title"><span>⚡</span> Exact GitHub Execution:</div>
                    <div class="guide-step-desc">${task.guide.githubAction}</div>
                  </div>
                </div>
              </div>
            ` : ''}

            <div class="todo-task-actions">
              <button class="todo-delete-btn" onclick="deleteTodoTask('${task.id}')" title="Remove this task">✕ Remove</button>
            </div>
          </div>
        `;
      }).join('');
    }

    card.innerHTML = `
      <div class="todo-member-header">
        <div class="todo-member-identity">
          <div class="todo-member-avatar">${info.initials}</div>
          <div class="todo-member-info">
            <h3>${info.name}</h3>
            <div class="todo-member-sub">
              <span class="badge-role ${info.roleClass}">${info.role}</span>
              <span>${info.scope}</span>
            </div>
          </div>
        </div>
        <button class="todo-member-quick-add" onclick="toggleAssignDrawer('${info.id}')" title="Assign a task directly to ${info.name}">
          + Add Task
        </button>
      </div>

      <div class="todo-member-permissions">
        <span>${info.permissions}</span>
      </div>

      <div class="todo-tasks-list">
        ${tasksHtml}
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

function toggleTaskGuide(taskId, btn) {
  const guideContent = document.getElementById(`guide-content-${taskId}`);
  if (!guideContent) return;
  const isOpen = guideContent.classList.contains('open');
  if (isOpen) {
    guideContent.classList.remove('open');
    btn.innerHTML = `<span>▶</span> Show Complete Task Instructions (Where to look, what to ask &amp; format)`;
  } else {
    guideContent.classList.add('open');
    btn.innerHTML = `<span>▼</span> Hide Complete Task Instructions`;
  }
}

function filterTodoMember(memberId) {
  currentTodoMemberFilter = memberId;
  const buttons = document.querySelectorAll('#todo-member-filters .todo-filter-btn');
  buttons.forEach(btn => {
    const text = btn.innerText.toLowerCase();
    if (memberId === 'all' && text.includes('all')) {
      btn.classList.add('active');
    } else if (memberId !== 'all' && text.includes(memberId)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderTodoBySection();
}

function toggleAssignDrawer(preselectedAssignee) {
  const drawer = document.getElementById('todo-assign-drawer');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');

  if (preselectedAssignee) {
    const assigneeSelect = document.getElementById('assignee-select');
    if (assigneeSelect) assigneeSelect.value = preselectedAssignee;
    drawer.classList.add('open');
    drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    if (isOpen) {
      drawer.classList.remove('open');
    } else {
      drawer.classList.add('open');
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function handleRoadmapTaskSelection(taskKey) {
  const customField = document.getElementById('custom-task-field');
  const commentInput = document.getElementById('coordinator-comment-input');
  const platformSelect = document.getElementById('platform-rule-select');

  if (taskKey === 'custom') {
    if (customField) customField.style.display = 'block';
  } else {
    if (customField) customField.style.display = 'none';
    const preset = ROADMAP_PRESET_MAP[taskKey];
    if (preset) {
      if (commentInput && !commentInput.value.trim()) {
        commentInput.value = preset.defaultComment;
      }
      if (platformSelect) {
        platformSelect.value = preset.platform;
      }
    }
  }
}

function handleAssignTaskSubmit(e) {
  e.preventDefault();
  const assigneeSelect = document.getElementById('assignee-select');
  const collaborateSelect = document.getElementById('collaborate-select');
  const roadmapTaskSelect = document.getElementById('roadmap-task-select');
  const platformSelect = document.getElementById('platform-rule-select');
  const customTitleInput = document.getElementById('custom-task-title');
  const commentInput = document.getElementById('coordinator-comment-input');

  const assignee = assigneeSelect.value;
  const collaborator = collaborateSelect.value || null;
  const taskKey = roadmapTaskSelect.value;
  const platform = platformSelect.value;
  const comment = commentInput.value.trim();

  let title = "";
  let phase = "Roadmap";
  let details = "";
  let platformText = "";

  if (taskKey === 'custom') {
    title = customTitleInput.value.trim() || "Custom Roadmap Task";
    details = "Custom task defined by Coordinator.";
    platformText = platform === 'wiki'
      ? "📘 GitHub Wiki: Direct Edit — Save changes directly without PR."
      : "🌿 GitHub Repo: Work in feature branch -> PR -> Review by Coordinator.";
  } else {
    const preset = ROADMAP_PRESET_MAP[taskKey];
    if (preset) {
      title = preset.title;
      phase = preset.phase;
      details = preset.details;
      platformText = preset.platformText;
    } else {
      title = taskKey;
      details = "Task from course roadmap.";
      platformText = platform === 'wiki' ? "📘 GitHub Wiki" : "🌿 GitHub Repo";
    }
  }

  let guide = null;
  if (taskKey !== 'custom' && ROADMAP_PRESET_MAP[taskKey]) {
    const p = ROADMAP_PRESET_MAP[taskKey];
    guide = p.guide || {
      whereToLook: "Course specification <strong>01-project-specification-sescam.md</strong> and milestone roadmap.",
      whatToLookFor: p.details,
      howToWriteIt: p.platform === 'wiki' ? "Draft markdown tables directly in GitHub Wiki." : "Author Java source files and tests in the respective Maven submodule.",
      whoToAsk: "Coordinate with team coordinator (Hatim) and review partners.",
      githubAction: p.platformText
    };
  }

  const primaryTask = {
    id: `task-${Date.now()}-1`,
    assignee: assignee,
    collaborator: collaborator,
    title: title,
    phase: phase,
    details: details,
    platform: platform,
    platformText: platformText,
    comment: comment,
    guide: guide,
    done: false
  };

  todoTasksList.unshift(primaryTask);

  // If paired with a collaborator, also add companion task to collaborator's box
  if (collaborator && collaborator !== assignee) {
    const companionTask = {
      id: `task-${Date.now()}-2`,
      assignee: collaborator,
      collaborator: assignee,
      title: title,
      phase: phase,
      details: details,
      platform: platform,
      platformText: platformText,
      comment: comment,
      guide: guide,
      done: false
    };
    todoTasksList.unshift(companionTask);
  }

  saveTodoTasks();
  renderTodoBySection();
  toggleAssignDrawer();

  const assigneeName = COLLABORATORS_INFO[assignee] ? COLLABORATORS_INFO[assignee].name.split(' ')[0] : assignee;
  if (collaborator) {
    const collabName = COLLABORATORS_INFO[collaborator] ? COLLABORATORS_INFO[collaborator].name.split(' ')[0] : collaborator;
    showToast(`Task assigned to ${assigneeName} & paired with ${collabName}!`);
  } else {
    showToast(`Task assigned to ${assigneeName}!`);
  }

  // Clear inputs
  if (customTitleInput) customTitleInput.value = '';
  if (commentInput) commentInput.value = '';
}

function toggleTodoTask(taskId) {
  const task = todoTasksList.find(t => t.id === taskId);
  if (!task) return;
  task.done = !task.done;

  // If paired, sync completion status
  if (task.collaborator) {
    const companion = todoTasksList.find(t => 
      t.title === task.title && 
      t.assignee === task.collaborator && 
      t.collaborator === task.assignee
    );
    if (companion) {
      companion.done = task.done;
    }
  }

  saveTodoTasks();
  renderTodoBySection();
  showToast(task.done ? `Marked "${task.title}" as completed!` : `Marked "${task.title}" as pending.`);
}

function deleteTodoTask(taskId) {
  const idx = todoTasksList.findIndex(t => t.id === taskId);
  if (idx !== -1) {
    const removed = todoTasksList.splice(idx, 1)[0];
    saveTodoTasks();
    renderTodoBySection();
    showToast(`Removed task "${removed.title}".`);
  }
}

function resetTodoToDefault() {
  todoTasksList = JSON.parse(JSON.stringify(DEFAULT_TODO_TASKS));
  saveTodoTasks();
  renderTodoBySection();
  showToast("To-Do board reset to today's meeting plan baseline!");
}

function setupEventListeners() {
  // Category buttons
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn[data-category]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderChecklist();
    });
  });

  // Status buttons
  document.querySelectorAll('.filter-btn[data-status]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn[data-status]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-status');
      renderChecklist();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderChecklist();
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      themeToggle.innerText = next === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  // Print button
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

document.addEventListener('DOMContentLoaded', initDashboard);

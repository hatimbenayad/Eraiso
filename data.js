/* ==========================================================================
   SESCAM Radiodiagnostics — Team A.05 Centralized Data & AI Context Generator
   Last Updated: 17/11/2026 (Iteration 2 — Construction I · v0.2.0-SNAPSHOT)
   ========================================================================== */

window.PORTAL_DATA = {
  meta: {
    repoUrl: "https://github.com/hatimbenayad/2026-ISO2-A.05",
    wikiUrl: "https://github.com/hatimbenayad/2026-ISO2-A.05/wiki",
    lastUpdated: "17/11/2026",
    currentIteration: "Iteration 2 — Construction I",
    currentVersion: "0.2.0-SNAPSHOT",
    testsPassing: 85,
    lineCoverageGate: "75%",
    branchCoverageGate: "70%",
    nextDeadline: "22/11/2026 (Before Santa Tecla Break)"
  },

  /* ------------------------------------------------------------------------
     TEAM ROSTER
     ------------------------------------------------------------------------ */
  team: [
    {
      id: "hatim",
      initials: "HB",
      name: "Hatim Ben Ayad",
      handle: "hatimbenayad",
      role: "Coordinator",
      actorScope: "Administrative / Admissions (RF19–RF26 / CU19–CU26)",
      availability: "12 h/week · Full availability",
      peerReviewer: "Ayça Görgülü (D-009)",
      focusNow: "PR reviews & merges, GitHub Projects sync, Client Design Class Diagram (#71), and opening/merging Order tests PR.",
      currentTasks: [
        {
          title: "Open & merge PR for test/CU10-CU11-CU16-orders-test-suite",
          branch: "test/CU10-CU11-CU16-orders-test-suite",
          issue: 74,
          status: "in-progress",
          details: "Branch is already pushed (commit 0c91eeb). Open Pull Request against develop, wait for green CI, and squash-merge."
        },
        {
          title: "Create Client Component Design Class Diagram (Swing & Controllers)",
          branch: "feature/It2-client-design",
          issue: 71,
          status: "in-progress",
          details: "Model MainWindowFrame, PhysicianWorkspacePanel, OrderPrescriptionView, OrderManagementView, DicomViewerDialog, DiagnosticReportView, Client*Controllers, and ClientSessionContext in Visual Paradigm. Export .vpp and .png to docs/diagrams/design/."
        },
        {
          title: "Align GitHub Issue Titles (#64–#67) & Sync Kanban Board",
          branch: "GitHub Web UI",
          issue: 62,
          status: "open",
          details: "Rename #64 (CU11), #65 (CU12), #66 (CU14), #67 (CU15) to match official Wiki titles; create issues for CU13 & CU18; enable Auto-add & Item-closed workflows on GitHub Projects."
        }
      ]
    },
    {
      id: "felipe",
      initials: "FD",
      name: "Felipe Dionisio",
      handle: "Felipe-Dionisio",
      role: "Secretary",
      actorScope: "System Administrator (RF27–RF32 / CU27–CU32) & Core Backend",
      availability: "10 h/week · Travel Nov 20–22",
      peerReviewer: "Mina Özdoğan (D-009)",
      focusNow: "Server Component Design Class Diagram (#72) on branch feature/It2-server-design, meeting minutes, and DECISIONS.md maintenance.",
      currentTasks: [
        {
          title: "Create Server Component Design Class Diagram (Services, In-Memory Repos, Mock Adapters)",
          branch: "feature/It2-server-design",
          issue: 72,
          status: "in-progress",
          details: "Model IExaminationOrderService, IDiagnosticReportService, IPacsIntegrationService, their implementations, in-memory repositories (D-017), and MockPacsAdapter/MockEhrAdapter (D-012). Save .vpp and high-res .png in docs/diagrams/design/."
        },
        {
          title: "Publish Meeting Minutes & Keep DECISIONS.md Synchronized",
          branch: "Wiki (D-013 direct edit)",
          issue: 70,
          status: "open",
          details: "Record Iteration 2 task split decisions and ensure Wiki Self-Assessment section is filled."
        }
      ]
    },
    {
      id: "berke",
      initials: "BT",
      name: "Berke Taha Özdemir",
      handle: "berquepica",
      role: "Git Expert",
      actorScope: "Server Use-Case Orchestration (SCU01–SCU13), SCM & Testing",
      availability: "12 h/week · Midterm Nov 18",
      peerReviewer: "Beyzanur Balota (D-009)",
      focusNow: "JUnit 6 service test suites for Orders (#74) and PACS/Reports (#75) once Server contracts (#72) merge, plus SCM governance.",
      currentTasks: [
        {
          title: "Prepare JUnit 6 Service Test Suite for PACS, Reports & Incidents (#75)",
          branch: "test/CU14-CU15-CU17-pacs-reports-suite",
          issue: 75,
          status: "open",
          details: "Black-Box Test Matrix (EP & BVA) is already documented on Issue #75. Implement PacsIntegrationServiceTest & DiagnosticReportServiceTest in server/src/test/java once Felipe merges #72 contracts. Maintain >=75% line / >=70% branch coverage."
        },
        {
          title: "Verify Git Flow Compliance & Branch Hygiene",
          branch: "develop (review only)",
          issue: 73,
          status: "open",
          details: "Audit incoming Iteration 2 PRs for Conventional Commits, clean branches off develop, and zero direct pushes."
        }
      ]
    },
    {
      id: "beyza",
      initials: "BB",
      name: "Beyzanur Balota",
      handle: "beyzabalota1",
      role: "Git Expert",
      actorScope: "Planning, Constraints, Risk Register & Analysis Diagrams",
      availability: "12 h/week · Midterm Nov 19",
      peerReviewer: "Berke Taha Özdemir (D-009)",
      focusNow: "BCE Communication Diagrams for CU13 (Execution Schedules), CU14 (Manage Diagnostic Report), and CU15 (View Medical Images / PACS).",
      currentTasks: [
        {
          title: "BCE Communication Diagram — CU14: Manage Diagnostic Report (RF14)",
          branch: "feature/CU14-analysis-communication",
          issue: 66,
          status: "open",
          details: "Model Physician drafting, editing, signing, and validating diagnostic reports (Boundary: DiagnosticReportFormUI, Control: DiagnosticReportController, Entities: ExaminationOrder, DiagnosticReport, ElectronicSignature, AuditLog). Save .vpp & .png to docs/diagrams/analysis/."
        },
        {
          title: "BCE Communication Diagram — CU15: View Medical Images / RIS-PACS (RF15)",
          branch: "feature/CU15-analysis-communication",
          issue: 67,
          status: "open",
          details: "Model Physician viewing medical images via RIS/PACS (E04) mock adapter (Boundary: DicomViewerUI, Control: PacsIntegrationController, Entities: ExaminationOrder, DicomSeriesMetadata, PacsAdapter). Save .vpp & .png to docs/diagrams/analysis/."
        },
        {
          title: "BCE Communication Diagram — CU13: Consult Execution Schedules (RF13)",
          branch: "feature/CU13-analysis-communication",
          issue: null,
          status: "open",
          details: "Model Physician consulting available clinical execution schedules (Boundary: ClinicalScheduleView, Control: ScheduleConsultationController, Entities: RoomWorklist, ModalitySchedule, AuthSession). Save .vpp & .png to docs/diagrams/analysis/."
        }
      ]
    },
    {
      id: "mina",
      initials: "MO",
      name: "Mina Özdoğan",
      handle: "minaOZ",
      role: "Maven Expert",
      actorScope: "Patient (RF01–RF09 / CU01–CU09) & Maven Multi-Module Build",
      availability: "10 h/week · Assignment Nov 21",
      peerReviewer: "Felipe Dionisio (D-009)",
      focusNow: "Completed CU10, CU11, and CU12 BCE Communication Diagrams — ready to commit, push, and open PR into develop!",
      currentTasks: [
        {
          title: "Commit & Open PR for Completed CU10, CU11, CU12 Communication Diagrams",
          branch: "feature/CU10-CU12-analysis-communication",
          issue: 63,
          status: "in-progress",
          details: "All 3 diagrams (CU10 Order diagnostic procedure, CU11 Order periodic follow-up with Server Timer, CU12 Manage procedure orders with D-015 order cancellation) are finished and approved by Coordinator. Export high-res .png + .vpp to docs/diagrams/analysis/, push branch, and open PR against develop."
        }
      ]
    },
    {
      id: "ayca",
      initials: "AG",
      name: "Ayça Görgülü",
      handle: "aycagorgulu0",
      role: "Maven Expert",
      actorScope: "Physician (RF10–RF18 / CU10–CU18) & Maven Build Quality",
      availability: "10 h/week · Full availability",
      peerReviewer: "Hatim Ben Ayad (D-009)",
      focusNow: "BCE Communication Diagrams for CU16 (Record Procedure Execution), CU17 (Document Incident), and CU18 (Consult Order Metrics).",
      currentTasks: [
        {
          title: "BCE Communication Diagram — CU16: Record Procedure Execution (RF16)",
          branch: "feature/CU16-analysis-communication",
          issue: 68,
          status: "open",
          details: "Model recording radiation dose, contrast volume, equipment ID, and transitioning ExaminationOrder status to PERFORMED. Save .vpp & .png to docs/diagrams/analysis/."
        },
        {
          title: "BCE Communication Diagram — CU17: Document Incident (RF17)",
          branch: "feature/CU17-analysis-communication",
          issue: 69,
          status: "open",
          details: "Model documenting clinical/operational incidents with severity (MILD, MODERATE, SEVERE) and triggering emergency alert on severe adverse reactions. Save .vpp & .png to docs/diagrams/analysis/."
        },
        {
          title: "BCE Communication Diagram — CU18: Consult Order Metrics (RF18)",
          branch: "feature/CU18-analysis-communication",
          issue: null,
          status: "open",
          details: "Model Physician consulting order waiting times, technical resource utilization, and follow-up protocol adherence. Save .vpp & .png to docs/diagrams/analysis/."
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     MUST FIX — ACTIVE PRIORITY ITEMS & RECENTLY RESOLVED
     ------------------------------------------------------------------------ */
  mustFixActive: [
    {
      id: "MF-01",
      priority: "CRITICAL",
      title: "Open & Merge Pull Request for Orders Test Suite (Issue #74)",
      owner: "Hatim Ben Ayad (@hatimbenayad)",
      branch: "test/CU10-CU11-CU16-orders-test-suite",
      description: "Commit 0c91eeb is already pushed to remote origin, but the Pull Request against develop has not been opened yet. Open PR, verify green CI (JUnit 6 + JaCoCo), and squash-merge.",
      action: "GitHub -> Compare & pull request -> Base: develop -> Merge when CI is green."
    },
    {
      id: "MF-02",
      priority: "HIGH",
      title: "Push & PR Mina's Completed CU10, CU11 & CU12 Communication Diagrams",
      owner: "Mina Özdoğan (@minaOZ)",
      branch: "feature/CU10-CU12-analysis-communication",
      description: "Mina completed all 3 BCE Communication Diagrams aligned with the official Wiki (CU10 Order procedure, CU11 Periodic follow-up via Timer, CU12 Manage/cancel orders). Needs commit & PR to unblock final review.",
      action: "Save .vpp & .png in docs/diagrams/analysis/, push branch, open PR into develop."
    },
    {
      id: "MF-03",
      priority: "HIGH",
      title: "Align GitHub Issue Titles (#64–#67) & Create CU13 / CU18 Sub-Issues",
      owner: "Hatim Ben Ayad (@hatimbenayad)",
      branch: "GitHub Issues",
      description: "Mina identified a title mismatch vs. the official Wiki Requirements-and-use-cases.md: #64 is CU11 (Order periodic follow-up), #65 is CU12 (Manage procedure orders), #66 is CU14 (Manage diagnostic report), and #67 is CU15 (View medical images). Also add sub-issues for CU13 & CU18.",
      action: "Edit titles on GitHub Issues #64–#67 and open CU13 (Beyza) & CU18 (Ayça)."
    },
    {
      id: "MF-04",
      priority: "MEDIUM",
      title: "Sync GitHub Projects Kanban Board & Enable Auto-Workflows (Constraint C11)",
      owner: "Hatim Ben Ayad (@hatimbenayad)",
      branch: "GitHub Projects",
      description: "All open and closed Iteration 2 issues must be linked to the Kanban board so progress is visible to the instructor. Enable 'Auto-add to project' and 'Item closed -> Done' workflows.",
      action: "Issues tab -> Bulk select -> Projects -> Enable Workflows in Project settings."
    },
    {
      id: "MF-05",
      priority: "MEDIUM",
      title: "Complete Remaining Iteration 2 Diagrams Before Nov 22 Deadline",
      owner: "Felipe (#72), Hatim (#71), Beyza (CU13–15), Ayça (CU16–18)",
      branch: "feature/It2-*-design & feature/CU*-analysis-communication",
      description: "Finish Client & Server Design Class Diagrams and remaining 6 Physician BCE Communication Diagrams before Santa Tecla break (Nov 23–27, 0h) so Iteration 2 implementation & testing closes cleanly.",
      action: "Each assignee uses 'Copy Context' on Milestones & Issues page to guide their work & AI agent."
    },
    {
      id: "MF-06",
      priority: "MEDIUM",
      title: "Publish Individual Wiki Self-Assessments (Constraint C16)",
      owner: "All 6 Team Members",
      branch: "GitHub Wiki (D-013)",
      description: "Each team member must publish their evidence-backed self-assessment section (commits, PRs, issues, minutes) on the Wiki page Self-assessment-and-experience.",
      action: "Review draft, customize personal reflection, and update the Wiki directly."
    }
  ],

  mustFixResolved: [
    {
      title: "JaCoCo Coverage Gate (>=75% Line, >=70% Branch) & JUnit 6.1.3 in Root POM",
      ref: "PR #76 · Issue #60 · Closed",
      note: "Merged into develop (commit b786c73). GitHub Actions CI passes green with 85+ tests."
    },
    {
      title: "PR #52 Architectural Baseline Review Gate & Merge (common-contracts + CU19)",
      ref: "PR #52 · Issue #61 · Closed",
      note: "Role.java Javadoc clarified (D-018), high-res diagrams updated, squashed & merged (commit ce341aa)."
    },
    {
      title: "Step 1 Parent Issue Closed (Quality Infrastructure)",
      ref: "Issue #59 · Closed",
      note: "Both sub-issues (#60 and #61) verified and closed."
    },
    {
      title: "Bump develop Parent POM to 0.2.0-SNAPSHOT for Iteration 2",
      ref: "PR #58 · Merged",
      note: "Clean SemVer progression after v0.1.0 release tag."
    },
    {
      title: "Lab S.04.01 Black-Box Test Matrices Documented (EP & BVA)",
      ref: "Issues #74 & #75",
      note: "Equivalence Partitions, Boundary Value Analysis, and Error Guessing tables posted for Orders, Reports, PACS, and Incidents."
    }
  ],

  /* ------------------------------------------------------------------------
     MILESTONES & ISSUES (WITH RICH AI AGENT CONTEXT PACK FIELDS)
     ------------------------------------------------------------------------ */
  milestones: [
    { id: "all", label: "All Milestones" },
    { id: "it1", label: "It1 — Elaboration (v0.1.0)" },
    { id: "it2", label: "It2 — Construction I (v0.2.0 · Active)" },
    { id: "it3", label: "It3 — Construction II (v0.3.0 · Next)" },
    { id: "it4", label: "It4 — Construction III (v0.4.0)" }
  ],

  issues: [
    {
      key: "59",
      ghNumber: 59,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 1 · SQA & Build (Parent)",
      title: "[It2 - SQA & Build] Step 1: Quality Infrastructure — JaCoCo Coverage & PR #52 Review Gate",
      status: "done",
      assignees: ["Felipe-Dionisio", "hatimbenayad"],
      radit: ["Implementation", "Testing"],
      uc: "Build & SQA",
      branch: "build/jacoco-coverage-setup",
      files: ["pom.xml", "common-contracts/", "server/"],
      summary: "Established automated SQA quality gates for Iteration 2: merged PR #52 architectural baseline and configured JaCoCo (>=75% line, >=70% branch) + JUnit 6.1.3 in root pom.xml (PR #76).",
      criteria: [
        "PR #52 reviewed, D-014 verified, and merged to develop (commit ce341aa).",
        "JaCoCo 0.8.14 configured in root pom.xml enforcing >=75% line and >=70% branch coverage (PR #76).",
        "./mvnw clean verify passes green locally and on GitHub Actions CI."
      ],
      aiGuidance: "This parent issue is COMPLETED and CLOSED. Reference PR #76 and commit b786c73 if auditing build configuration or JaCoCo thresholds."
    },
    {
      key: "60",
      ghNumber: 60,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 1.1 · Maven Build",
      title: "build(maven): Configure JaCoCo Coverage (>=75% line, >=70% branch) & JUnit 6 Engine in Root POM",
      status: "done",
      assignees: ["hatimbenayad"],
      radit: ["Implementation", "Testing"],
      uc: "Lab S.04.01",
      branch: "build/jacoco-coverage-setup",
      files: ["pom.xml"],
      summary: "Configured jacoco-maven-plugin 0.8.14 (prepare-agent, report, check) and junit-jupiter 6.1.3 in root pom.xml. Merged via PR #76.",
      criteria: [
        "mvn clean verify generates HTML coverage reports in <module>/target/site/jacoco/index.html.",
        "Build fails automatically if line coverage < 75% or branch coverage < 70%.",
        "GitHub Actions CI passes green."
      ],
      aiGuidance: "Completed via PR #76. Never remove or lower the JaCoCo thresholds in pom.xml and never bypass tests with -DskipTests."
    },
    {
      key: "61",
      ghNumber: 61,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 1.2 · QA Gate",
      title: "qa(contracts): Address PR #52 Review Gate (D-014 checklist, Role inheritance, diagram resolution)",
      status: "done",
      assignees: ["Felipe-Dionisio", "hatimbenayad"],
      radit: ["Design", "Testing"],
      uc: "CU19 Baseline",
      branch: "feature/M2-architectural-baseline",
      files: ["common-contracts/", "server/", "docs/diagrams/design/"],
      summary: "Resolved all review comments on PR #52: clarified Physician -> Patient own-care scope in Role.java (D-018), updated high-res diagram, verified 85 tests, and merged to develop.",
      criteria: [
        "D-014 checklist verified.",
        "Role.java Javadoc clarifies D-018 own-care boundary.",
        "PR #52 merged into develop."
      ],
      aiGuidance: "Completed and merged. All new backend services should follow the same clean package and repository pattern established by PatientRegistryService in PR #52."
    },
    {
      key: "62",
      ghNumber: 62,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2 · Analysis (Parent)",
      title: "[It2 - Analysis] Step 2: BCE Communication Diagrams for Physician Use Cases (CU10–CU18)",
      status: "in-progress",
      assignees: ["minaOZ", "beyzabalota1", "aycagorgulu0"],
      radit: ["Analysis"],
      uc: "CU10–CU18",
      branch: "feature/CUxx-analysis-communication",
      files: ["docs/diagrams/analysis/"],
      summary: "Model Visual Paradigm Communication Diagrams using the Boundary-Control-Entity (BCE) pattern for all Physician use cases following the official Wiki names (3 diagrams each: Mina CU10–12, Beyza CU13–15, Ayça CU16–18).",
      criteria: [
        "Every diagram uses explicit <<boundary>>, <<control>>, and <<entity>> stereotypes.",
        "Both editable .vpp and high-resolution .png files committed under docs/diagrams/analysis/.",
        "Message numbering (1:, 2:, 3:...) matches official Wiki functional requirements RF10–RF18."
      ],
      aiGuidance: "Always use the official Use Case names from Wiki Requirements-and-use-cases.md (CU10 Order procedure, CU11 Periodic follow-up, CU12 Manage orders, CU13 Execution schedules, CU14 Manage diagnostic report, CU15 View medical images, CU16 Record execution, CU17 Document incident, CU18 Order metrics)."
    },
    {
      key: "63",
      ghNumber: 63,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.1 · Analysis",
      title: "analysis(orders): Communication Diagram for CU10 — Order Diagnostic Procedure (RF10)",
      status: "in-progress",
      assignees: ["minaOZ"],
      radit: ["Analysis"],
      uc: "CU10 (RF10)",
      branch: "feature/CU10-CU12-analysis-communication",
      files: ["docs/diagrams/analysis/CU10-communication.vpp", "docs/diagrams/analysis/CU10-communication.png"],
      summary: "Physician orders a diagnostic procedure specifying clinical indication, clinical justification, and priority level (URGENT, PREFERENTIAL, ROUTINE). Diagram completed by Mina — ready for PR.",
      criteria: [
        "Actor: Physician; Boundary: PrescriptionFormUI; Control: OrderPrescriptionController; Entities: Patient, ExaminationOrder, CatalogueItem, AuthSession.",
        "Exports .vpp and high-res .png to docs/diagrams/analysis/.",
        "PR opened against develop."
      ],
      aiGuidance: "Diagram is finished by Mina. Help prepare the commit, verify BCE stereotypes (<<boundary>>, <<control>>, <<entity>>), check alignment with ExaminationOrder in common-contracts, and draft the PR description citing closes #63, closes #64, closes #65."
    },
    {
      key: "64",
      ghNumber: 64,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.2 · Analysis",
      title: "analysis(orders): Communication Diagram for CU11 — Order Periodic Follow-up (RF11)",
      status: "in-progress",
      assignees: ["minaOZ"],
      radit: ["Analysis"],
      uc: "CU11 (RF11)",
      branch: "feature/CU10-CU12-analysis-communication",
      files: ["docs/diagrams/analysis/CU11-communication.vpp", "docs/diagrams/analysis/CU11-communication.png"],
      summary: "Physician defines periodic follow-up procedures with recurrence intervals; the background Server Timer (SCU05) automatically generates future scheduling requirements later. Diagram completed by Mina — ready for PR.",
      criteria: [
        "Follows official Wiki RF11/CU11 (Order periodic follow-up).",
        "Correctly models recurrence rule registration, with future orders generated later by the Server Timer.",
        "Exports .vpp and .png to docs/diagrams/analysis/."
      ],
      aiGuidance: "Verify alignment with SCU05 and Server Timer actor in Requirements-and-use-cases.md. Physician registers recurrence policy; Server Timer triggers future orders when due."
    },
    {
      key: "65",
      ghNumber: 65,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.3 · Analysis",
      title: "analysis(orders): Communication Diagram for CU12 — Manage Procedure Orders (RF12)",
      status: "in-progress",
      assignees: ["minaOZ"],
      radit: ["Analysis"],
      uc: "CU12 (RF12)",
      branch: "feature/CU10-CU12-analysis-communication",
      files: ["docs/diagrams/analysis/CU12-communication.vpp", "docs/diagrams/analysis/CU12-communication.png"],
      summary: "Physician tracks fulfillment status of procedure orders and can cancel an unexecuted clinical order (soft cancellation per D-015; appointment cancellation remains Admin/Patient responsibility). Completed by Mina — ready for PR.",
      criteria: [
        "Follows official Wiki RF12/CU12 (Manage procedure orders).",
        "Enforces Decision D-015 (status transitions to CANCELLED with timestamp, never deleted).",
        "Distinguishes clinical order cancellation (Physician) from appointment slot cancellation (Admin/Patient)."
      ],
      aiGuidance: "Cross-check with ExaminationOrder.cancel(LocalDateTime) in common-contracts. Ensure non-destructive cancellation (D-015) and status check before cancellation."
    },
    {
      key: "CU13",
      ghNumber: null,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I (Pre-It3 Analysis)",
      step: "Step 2.4 · Analysis",
      title: "analysis(schedules): Communication Diagram for CU13 — Consult Execution Schedules (RF13)",
      status: "open",
      assignees: ["beyzabalota1"],
      radit: ["Analysis"],
      uc: "CU13 (RF13)",
      branch: "feature/CU13-analysis-communication",
      files: ["docs/diagrams/analysis/CU13-communication.vpp", "docs/diagrams/analysis/CU13-communication.png"],
      summary: "Physician consults available clinical execution schedules by modality and date range (read-only consultation). Part of Beyza's 3-diagram Physician analysis batch.",
      criteria: [
        "Actor: Physician; Boundary: ClinicalScheduleView; Control: ScheduleConsultationController; Entities: RoomWorklist, ModalitySchedule, AuthSession.",
        "Numbered messages: 1: selectModalityAndDateRange, 2: queryAvailableSlots, 3: fetchRoomOccupancy, 4: compileScheduleView, 5: displayExecutionCalendar.",
        "Save .vpp and high-res .png in docs/diagrams/analysis/ and open PR into develop."
      ],
      aiGuidance: "Help Beyza design the exact BCE lifelines, message arrows, and return flows for CU13 in Visual Paradigm so it matches SCU06 and RF13 cleanly."
    },
    {
      key: "66",
      ghNumber: 66,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.5 · Analysis",
      title: "analysis(reports): Communication Diagram for CU14 — Manage Diagnostic Report (RF14)",
      status: "open",
      assignees: ["beyzabalota1"],
      radit: ["Analysis"],
      uc: "CU14 (RF14)",
      branch: "feature/CU14-analysis-communication",
      files: ["docs/diagrams/analysis/CU14-communication.vpp", "docs/diagrams/analysis/CU14-communication.png"],
      summary: "Physician creates, edits, reviews, and electronically signs diagnostic reports for assigned patients, transitioning ExaminationOrder status from PERFORMED to REPORTED.",
      criteria: [
        "Follows official Wiki RF14/CU14 (Manage diagnostic report — NOT PACS viewing, which is CU15).",
        "Boundary: DiagnosticReportFormUI; Control: DiagnosticReportController; Entities: ExaminationOrder, DiagnosticReport, ElectronicSignature, AuditLog.",
        "Explicitly models status transition PERFORMED -> REPORTED and audit log entry."
      ],
      aiGuidance: "Important: CU14 is Manage Diagnostic Report (RF14), while CU15 is View Medical Images (RF15). Model draft creation, electronic signature validation, status update to REPORTED, and EHR/Audit logging."
    },
    {
      key: "67",
      ghNumber: 67,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.6 · Analysis",
      title: "analysis(pacs): Communication Diagram for CU15 — View Medical Images / RIS-PACS (RF15)",
      status: "open",
      assignees: ["beyzabalota1"],
      radit: ["Analysis"],
      uc: "CU15 (RF15)",
      branch: "feature/CU15-analysis-communication",
      files: ["docs/diagrams/analysis/CU15-communication.vpp", "docs/diagrams/analysis/CU15-communication.png"],
      summary: "Physician views DICOM medical images associated with a diagnostic report of assigned patients via external RIS/PACS platform (E04) through MockPacsAdapter (D-012).",
      criteria: [
        "Follows official Wiki RF15/CU15 (View medical images) with RIS/PACS (E04) secondary actor.",
        "Boundary: DicomViewerUI; Control: PacsIntegrationController; Entities: ExaminationOrder, DicomSeriesMetadata, PacsAdapter (Mock per D-012).",
        "Save .vpp and high-res .png in docs/diagrams/analysis/ and open PR into develop."
      ],
      aiGuidance: "Include secondary external actor RIS/PACS (E04) connected via PacsAdapter (Decision D-012 simulated adapter). Number messages from opening study viewer to streaming DICOM slice buffers."
    },
    {
      key: "68",
      ghNumber: 68,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.7 · Analysis",
      title: "analysis(orders): Communication Diagram for CU16 — Record Procedure Execution (RF16)",
      status: "open",
      assignees: ["aycagorgulu0"],
      radit: ["Analysis"],
      uc: "CU16 (RF16)",
      branch: "feature/CU16-analysis-communication",
      files: ["docs/diagrams/analysis/CU16-communication.vpp", "docs/diagrams/analysis/CU16-communication.png"],
      summary: "Physician records actual radiological procedure execution parameters (effective radiation dose, contrast medium volume, equipment used) and transitions order status to PERFORMED.",
      criteria: [
        "Boundary: ProcedureExecutionUI; Control: ProcedureExecutionController; Entities: ExaminationOrder, ProcedureExecutionLog, ContrastDetails.",
        "Transitions ExaminationOrder status from SCHEDULED to PERFORMED.",
        "Save .vpp and high-res .png in docs/diagrams/analysis/ and open PR into develop."
      ],
      aiGuidance: "Ensure status name matches common-contracts OrderStatus.PERFORMED (not EXECUTED). Include dose/contrast parameter validation and attaching the execution log to the patient's medical record."
    },
    {
      key: "69",
      ghNumber: 69,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 2.8 · Analysis",
      title: "analysis(incidents): Communication Diagram for CU17 — Document Incident (RF17)",
      status: "open",
      assignees: ["aycagorgulu0"],
      radit: ["Analysis"],
      uc: "CU17 (RF17)",
      branch: "feature/CU17-analysis-communication",
      files: ["docs/diagrams/analysis/CU17-communication.vpp", "docs/diagrams/analysis/CU17-communication.png"],
      summary: "Physician documents clinical or operational incidents (contrast extravasation, adverse reactions, equipment issues) with severity rating and alert escalation for SEVERE cases.",
      criteria: [
        "Boundary: ClinicalIncidentUI; Control: ClinicalIncidentController; Entities: ExaminationOrder, ClinicalIncident, Patient, PharmacovigilanceAlert.",
        "Models severity ratings (MILD, MODERATE, SEVERE) and conditional emergency alert on patient record.",
        "Save .vpp and high-res .png in docs/diagrams/analysis/ and open PR into develop."
      ],
      aiGuidance: "Follow Decision D-015 (incidents are immutable clinical records, never deleted). Distinguish mild operational logs from severe clinical adverse reactions that flag patient alerts."
    },
    {
      key: "CU18",
      ghNumber: null,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I (Pre-It3 Analysis)",
      step: "Step 2.9 · Analysis",
      title: "analysis(metrics): Communication Diagram for CU18 — Consult Order Metrics (RF18)",
      status: "open",
      assignees: ["aycagorgulu0"],
      radit: ["Analysis"],
      uc: "CU18 (RF18)",
      branch: "feature/CU18-analysis-communication",
      files: ["docs/diagrams/analysis/CU18-communication.vpp", "docs/diagrams/analysis/CU18-communication.png"],
      summary: "Physician consults metrics about their orders including waiting times, technical resource utilization, and follow-up protocol adherence.",
      criteria: [
        "Boundary: PhysicianMetricsDashboardUI; Control: OrderMetricsController; Entities: ExaminationOrder, ProcedureExecutionLog, AuditLog.",
        "Numbered messages for requesting metrics by filter period, computing waiting times & adherence rates, and rendering dashboard.",
        "Save .vpp and high-res .png in docs/diagrams/analysis/ and open PR into develop."
      ],
      aiGuidance: "Keep CU18 strictly read-only and scoped to the logged-in physician's orders (validated via AuthSession)."
    },
    {
      key: "70",
      ghNumber: 70,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 3 · Design (Parent)",
      title: "[It2 - Design] Step 3: Design Class Diagrams for Client & Server (Iteration 2 Workflows)",
      status: "in-progress",
      assignees: ["Felipe-Dionisio", "hatimbenayad"],
      radit: ["Design"],
      uc: "CU10–CU17",
      branch: "feature/It2-client-design & feature/It2-server-design",
      files: ["docs/diagrams/design/It2-client-design.png", "docs/diagrams/design/It2-server-design.png"],
      summary: "Produce UML Design Class Diagrams in Visual Paradigm for both the desktop Swing Client tier (#71) and the Server business tier (#72) aligned with common-contracts (D-017).",
      criteria: [
        "Client Design Class Diagram (#71) covers Swing Views, Controllers, and ClientSessionContext.",
        "Server Design Class Diagram (#72) covers Services, In-Memory Repositories (D-017), and Mock Adapters (D-012).",
        "Both .vpp and 300 DPI .png exports merged into develop."
      ],
      aiGuidance: "Ensure exact class, interface, and method signature consistency between common-contracts, client controllers, and server services so implementation can proceed directly from the diagrams."
    },
    {
      key: "71",
      ghNumber: 71,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 3.1 · Client Design",
      title: "design(client): Client Component Design Class Diagram (Swing Views, Controllers, Session Context)",
      status: "in-progress",
      assignees: ["hatimbenayad"],
      radit: ["Design"],
      uc: "Client Tier (It2)",
      branch: "feature/It2-client-design",
      files: ["docs/diagrams/design/It2-client-design.vpp", "docs/diagrams/design/It2-client-design.png"],
      summary: "Model the Java Swing desktop client MVC architecture: MainWindowFrame (JFrame), PhysicianWorkspacePanel, OrderPrescriptionView, OrderManagementView, DiagnosticReportView, DicomViewerDialog, Client*Controllers, and ClientSessionContext.",
      criteria: [
        "Explicit Swing inheritance (JFrame, JPanel, JDialog) and typed UI fields/methods.",
        "Client depends ONLY on common-contracts service interfaces & DTOs (D-017).",
        "Export .vpp and high-res .png to docs/diagrams/design/ and open PR into develop."
      ],
      aiGuidance: "Follow strict MVC layering under es.uclm.esi.iso2.client.{ui,controller,context,service}. Never couple client directly to server repository classes; depend only on common-contracts interfaces."
    },
    {
      key: "72",
      ghNumber: 72,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 3.2 · Server Design",
      title: "design(server): Server Component Design Class Diagram (Services, In-Memory Repos, Mock Adapters)",
      status: "in-progress",
      assignees: ["Felipe-Dionisio"],
      radit: ["Design"],
      uc: "Server Tier (It2)",
      branch: "feature/It2-server-design",
      files: ["docs/diagrams/design/It2-server-design.vpp", "docs/diagrams/design/It2-server-design.png"],
      summary: "Model backend services (IExaminationOrderService, IDiagnosticReportService, IPacsIntegrationService), In-Memory Repositories (D-017/D-030), and Mock External Adapters (MockPacsAdapter, MockEhrAdapter per D-012).",
      criteria: [
        "Clean separation between interfaces in common-contracts and implementations in server.",
        "In-memory repositories mirror InMemoryPatientRepository pattern from PR #52.",
        "Export .vpp and high-res .png to docs/diagrams/design/ and open PR into develop."
      ],
      aiGuidance: "Mirror the exact architecture established in PR #52 (es.uclm.esi.iso2.server.<component>.{service,persistence,adapters}). Include D-015 non-destructive cancellation methods and D-012 mock adapters."
    },
    {
      key: "73",
      ghNumber: 73,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 4 · Testing (Parent)",
      title: "[It2 - Testing & Implementation] Step 4: Spec-Driven Black-Box Test Design & JUnit 6 Suite (Lab S.04.01)",
      status: "in-progress",
      assignees: ["hatimbenayad", "berquepica"],
      radit: ["Implementation", "Testing"],
      uc: "Lab S.04.01 (1/2 Done)",
      branch: "test/CU10-CU11-CU16-orders-test-suite & test/CU14-CU15-CU17-pacs-reports-suite",
      files: ["common-contracts/src/test/java/", "server/src/test/java/"],
      summary: "Execute Lab S.04.01 specification-based testing: design Black-Box Test Matrices (EP, BVA, Error Guessing) before coding, implement JUnit 6 Jupiter suites with AAA & @DisplayName, and enforce JaCoCo >=75% line / >=70% branch coverage.",
      criteria: [
        "Issue #74 (Orders) Black-Box Matrix documented and JUnit 6 tests verified (DONE).",
        "Issue #75 (Reports, PACS, Incidents) Black-Box Matrix documented (DONE) & JUnit 6 tests implemented once #72 contracts land.",
        "./mvnw clean verify passes with zero failures and meets JaCoCo gate."
      ],
      aiGuidance: "Strictly follow Lab S.04.01 (07-junit.md): use org.junit.jupiter.api.* (NEVER JUnit 4 org.junit.Test), package mirroring under src/test/java, AAA layout, @DisplayName in English, assertThrows/assertAll, and never weaken an oracle to turn a test green."
    },
    {
      key: "74",
      ghNumber: 74,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 4.1 · Orders Testing",
      title: "test(orders): Black-Box Test Design & JUnit 6 Suite for Examination Order Lifecycle (CU10, CU11, CU12, CU16)",
      status: "done",
      assignees: ["hatimbenayad"],
      radit: ["Testing"],
      uc: "CU10, CU11, CU12, CU16",
      branch: "test/CU10-CU11-CU16-orders-test-suite",
      files: ["common-contracts/src/test/java/es/uclm/esi/iso2/common/orders/domain/ExaminationOrderTest.java"],
      summary: "Documented full Lab S.04.01 Black-Box Test Matrix (EP & BVA) on Issue #74 and expanded ExaminationOrderTest with null/class equality edge cases. Commit 0c91eeb pushed — open/merge PR into develop.",
      criteria: [
        "Black-Box Test Matrix posted on GitHub Issue #74.",
        "All Order lifecycle & D-015 soft-cancellation tests passing under JUnit 6.",
        "PR merged into develop with green CI."
      ],
      aiGuidance: "Issue #74 is closed and commit 0c91eeb is pushed on test/CU10-CU11-CU16-orders-test-suite. Remaining step: open and merge the Pull Request into develop."
    },
    {
      key: "75",
      ghNumber: 75,
      milestone: "it2",
      milestoneLabel: "It2 — Construction I",
      step: "Step 4.2 · Reports & PACS Testing",
      title: "test(pacs-reports): Black-Box Test Design & JUnit 6 Suite for Reports, PACS & Incidents (CU14, CU15, CU17)",
      status: "in-progress",
      assignees: ["berquepica"],
      radit: ["Testing", "Implementation"],
      uc: "CU14, CU15, CU17",
      branch: "test/CU14-CU15-CU17-pacs-reports-suite",
      files: ["server/src/test/java/es/uclm/esi/iso2/server/reports/", "server/src/test/java/es/uclm/esi/iso2/server/pacs/"],
      summary: "Black-Box Test Matrix (EP, BVA, Error Guessing) for CU14 (Manage diagnostic report), CU15 (View medical images via RIS/PACS), and CU17 (Document incident) is already posted on Issue #75. Implement JUnit 6 service tests once #72 contracts merge.",
      criteria: [
        "Black-Box Test Matrix verified with official Wiki names (CU14 Reports, CU15 PACS Images, CU17 Incidents) — DONE.",
        "Implement DiagnosticReportServiceTest, PacsIntegrationServiceTest, and ClinicalIncidentServiceTest using JUnit 6 Jupiter.",
        "./mvnw clean verify passes with >=75% line and >=70% branch coverage."
      ],
      aiGuidance: "Wait for or align with Felipe's Server Design (#72) service interfaces. Implement one @Test per row of the Issue #75 Black-Box Matrix using AAA pattern, @DisplayName, and mock adapters (D-012) — zero external network calls."
    },
    {
      key: "IT3-BOOK",
      ghNumber: null,
      milestone: "it3",
      milestoneLabel: "It3 — Construction II",
      step: "It3 · Scheduling & Bookings",
      title: "[It3 - Construction II] Schedules, Bookings, Waiting Lists & Triage (CU13, CU18, CU20–CU25)",
      status: "planned",
      assignees: ["hatimbenayad", "berquepica", "beyzabalota1"],
      radit: ["Analysis", "Design", "Implementation", "Testing"],
      uc: "CU13, CU18, CU20–CU25",
      branch: "feature/It3-scheduling-bookings",
      files: ["common-contracts/src/main/java/es/uclm/esi/iso2/common/schedules/", "server/src/main/java/es/uclm/esi/iso2/server/schedules/"],
      summary: "Scheduled right after Santa Tecla break (Nov 28 – Dec 4, 70h, v0.3.0): appointment slot booking (CU20), rescheduling/soft-cancelling (CU21–CU22), daily worklists (CU23), waiting list triage (CU24), calendar openings (CU25), and physician schedule/metrics views (CU13, CU18).",
      criteria: [
        "Depends on Physician Orders (It2) existing before slot allocation.",
        "Full RADIT artifacts: BCE diagrams, Design updates, In-Memory Repositories, JUnit 6 tests >=75% coverage."
      ],
      aiGuidance: "Starts Nov 28 after Santa Tecla break. Enforce D-015 non-destructive appointment cancellation (CU22) and triage priority ordering (URGENT > PREFERENTIAL > ROUTINE)."
    },
    {
      key: "IT4-PORTAL",
      ghNumber: null,
      milestone: "it4",
      milestoneLabel: "It4 — Construction III",
      step: "It4 · Patient Portal & Analytics",
      title: "[It4 - Construction III] Patient Self-Service Portal, Timer Alerts & Global Reports (CU01–CU09, CU26, CU32)",
      status: "planned",
      assignees: ["minaOZ", "aycagorgulu0", "Felipe-Dionisio"],
      radit: ["Analysis", "Design", "Implementation", "Testing"],
      uc: "CU01–CU09, CU26, CU32",
      branch: "feature/It4-patient-portal-analytics",
      files: ["client/src/main/java/", "server/src/main/java/"],
      summary: "Scheduled Dec 5 – Dec 10 (65h, v0.4.0): Patient appointment consultation/confirm/reschedule/cancel (CU01–CU04), automated Timer reminders (CU05), patient history/incidents/surveys/follow-ups (CU06–CU09), D-018 Physician own-care RBAC, and operational/global statistics (CU26, CU32).",
      criteria: [
        "Depends on Orders (It2) and Bookings (It3).",
        "Enforces D-018 own-care boundary for Physician role.",
        "Maintains >=75% line / >=70% branch coverage before Transition (ItN)."
      ],
      aiGuidance: "Starts Dec 5. Ensure Patient self-service endpoints strictly filter by authenticated patientId from AuthSessionDto."
    }
  ],

  /* ------------------------------------------------------------------------
     PROJECT ROADMAP (ALIGNED WITH THEORY ASSIGNMENT 1 & DECISIONS D-016/D-017)
     ------------------------------------------------------------------------ */
  roadmap: [
    {
      iter: "It0",
      phase: "Inception",
      dates: "19/10 – 08/11/2026",
      version: "v0.0.1",
      hours: "40 h",
      status: "done",
      useCases: "Scope & Elicitation (RF01–RF32 · CU01–CU32 · SCU01–SCU13)",
      deliverables: "Repository & Git Flow setup, Client & Server Visual Paradigm Use-Case Diagrams, DECISIONS.md (D-001–D-016), Wiki Planification & Meeting Minutes.",
      why: "Establishes unambiguous 1:1 requirements-to-use-case scope, external hospital boundaries (E01–E04), and team governance before writing any code."
    },
    {
      iter: "It1",
      phase: "Elaboration",
      dates: "09/11 – 13/11/2026",
      version: "v0.1.0",
      hours: "45 h",
      status: "done",
      useCases: "CU19 (Manage Patient Demographics) + Core Contracts & Roles (CU27–CU31 baseline)",
      deliverables: "3-module Maven architecture (common-contracts, server, client — D-017), Maven Wrapper, GitHub Actions CI, PR #52 vertical slice with 85 passing JUnit 6 tests, Theory Assignment 1 submitted (Nov 13), v0.1.0 release tag.",
      why: "Risk- and dependency-driven: proves multi-module compilation/testing early and creates Patients & Roles, without which no order or booking can exist."
    },
    {
      iter: "It2",
      phase: "Construction I",
      dates: "14/11 – 22/11/2026",
      version: "v0.2.0-SNAPSHOT",
      hours: "60 h",
      status: "in-progress",
      useCases: "CU10–CU12, CU14–CU17 (Core Physician Clinical Flow) + JaCoCo/JUnit 6 Gate",
      deliverables: "JaCoCo >=75% line / >=70% branch gate (PR #76 merged), Lab S.04.01 Black-Box Test Matrices (#74, #75), BCE Communication Diagrams (CU10–CU18), Client (#71) & Server (#72) Design Class Diagrams, Physician services & mock adapters.",
      why: "Core clinical value of SESCAM Radiodiagnostics: physician orders trigger all downstream scheduling and reporting. Bounded to 60 h before Santa Tecla to respect team exam dates."
    },
    {
      iter: "Break",
      phase: "Santa Tecla Academic Break",
      dates: "23/11 – 27/11/2026",
      version: "Freeze",
      hours: "0 h",
      status: "freeze",
      useCases: "None — Official Non-Working Holiday Period (Decision D-016)",
      deliverables: "Zero billable project hours scheduled to prevent burnout and maintain realistic university schedule compliance.",
      why: "Explicitly logged in DECISIONS.md (D-016) and Theory Assignment 1 capacity plan."
    },
    {
      iter: "It3",
      phase: "Construction II",
      dates: "28/11 – 04/12/2026",
      version: "v0.3.0",
      hours: "70 h",
      status: "planned",
      useCases: "CU13, CU18, CU20–CU25 (Schedules, Bookings, Worklists & Triage)",
      deliverables: "Appointment slot allocation (CU20), rescheduling & D-015 soft-cancelling (CU21–CU22), daily worklists, waiting-list triage priorities (CU23–CU25), execution schedules & order metrics (CU13, CU18).",
      why: "Strict dependency order: administrative scheduling and waiting-list triage operate directly on Physician Orders created in It2."
    },
    {
      iter: "It4",
      phase: "Construction III",
      dates: "05/12 – 10/12/2026",
      version: "v0.4.0",
      hours: "65 h",
      status: "planned",
      useCases: "CU01–CU09 (Patient Portal & Timer Alerts), CU26 & CU32 (Analytics)",
      deliverables: "Patient self-service appointment management (CU01–CU04), automated Timer reminders (CU05), history/incidents/surveys (CU06–CU09), D-018 own-care RBAC, and operational/global statistics (CU26, CU32).",
      why: "Patients can only view/confirm bookings and receive reminders once orders (It2) and appointments (It3) exist; analytics aggregate all upstream data."
    },
    {
      iter: "ItN",
      phase: "Transition",
      dates: "11/12 – 15/12/2026",
      version: "v1.0.0",
      hours: "80 h",
      status: "planned",
      useCases: "Full System Integration & Final QA (CU01–CU32)",
      deliverables: "End-to-end integration tests, ISO/IEC 25010 audit, Testing Deliverable 2 (>=75% coverage + defect log), packaged JARs, User Manual, completed Wiki Self-Assessments, and final lab submission (Dec 15).",
      why: "Final stabilization, verification, and academic delivery of the complete SESCAM Radiodiagnostics system."
    }
  ],

  /* ------------------------------------------------------------------------
     BLUNDERS (??) & RECOVERY PLAYBOOK (!!) — HONEST SELF-AUDIT
     ------------------------------------------------------------------------ */
  blunders: [
    {
      id: "BL-01",
      severity: "CRITICAL",
      notation: "?? Critical Blunder",
      title: "Over-Modeling While Construction Code Lags Behind (1/32 RFs Coded, 0% Swing UI)",
      whatWrong: "We spent the start of Iteration 2 heavily focused on UML diagrams and documentation while only 1 of 32 use cases (CU19 Patient Registry) is implemented on the server, and 0% of the client Swing UI exists (only SmokeTest.java). The backend service for Examination Orders (CU10, CU11, CU16) has not been implemented in the server module.",
      impact: "Violates Unified Process iteration goals (Construction phase demands executable code). Risk of an unmanageable December crunch trying to implement all clinical use cases at once.",
      recovery: "Assign the backend ExaminationOrderService and repository implementation to a teammate (Beyza / Berke) to implement on a dedicated branch with tests meeting JaCoCo >=75% line / >=70% branch coverage.",
      owner: "Assigned to: Beyza Nur Topuz (@beyzabalota1) & Berke Taha Özdemir (@berquepica)",
      scoreGain: "+1.5 pts on Construction Velocity",
      stepByStep: [
        "Step 1: Clone repo and checkout dedicated feature branch: git checkout -b feature/CU10-CU11-CU16-orders-backend-service origin/develop",
        "Step 2: Under server/src/main/java/es/uclm/esi/iso2/server/orders/, create persistence and service subpackages.",
        "Step 3: In persistence, define IOrderRepository and implement InMemoryOrderRepository (thread-safe ConcurrentHashMap<String, ExaminationOrder>).",
        "Step 4: In service, implement IExaminationOrderService and ExaminationOrderService supporting: (a) createOrder (CU10 / RF10), (b) schedulePeriodicFollowUp (CU11 / RF11), (c) markPerformed (CU16 / RF16), and (d) cancelOrder (CU12 / RF12 with D-015 soft-cancellation).",
        "Step 5: In server/src/test/java/, implement InMemoryOrderRepositoryTest and ExaminationOrderServiceTest covering all happy paths, boundary validations, and illegal state transitions.",
        "Step 6: Run 'mvn clean verify' and verify JaCoCo coverage (>= 75% line, >= 70% branch).",
        "Step 7: Commit, push to origin, and open Pull Request to develop requesting review from @hatimbenayad."
      ],
      aiPrompt: `You are an expert Java Software Engineer working on the SESCAM Radiodiagnostics project for UCLM Software Engineering II.
Repository: https://github.com/hatimbenayad/2026-ISO2-A.05.git
Target Branch to create: feature/CU10-CU11-CU16-orders-backend-service (branch off origin/develop)

OBJECTIVE:
Implement the complete backend service and in-memory persistence layer for Diagnostic Examination Orders (CU10, CU11, CU12, CU16) in the 'server' module, adhering to Decision D-015 (non-destructive soft cancellation), D-017 (Maven 3-module architecture), and meeting the JaCoCo quality gate (>= 75% line, >= 70% branch coverage).

CONTEXT & EXISTING CODE:
- Domain contracts and DTOs already exist in 'common-contracts':
  - es.uclm.esi.iso2.common.orders.domain.ExaminationOrder
  - es.uclm.esi.iso2.common.orders.domain.OrderStatus (PENDING, SCHEDULED, PERFORMED, REPORTED, COMPLETED, CANCELLED)
  - es.uclm.esi.iso2.common.orders.domain.Priority (NORMAL, URGENT, EMERGENCY)
  - es.uclm.esi.iso2.common.orders.dto.ExaminationOrderDto
- Server Component Design diagram exists in docs/diagrams/design/It2-server-design.svg (merged in PR #80). Follow the IOrderRepository and IExaminationOrderService design.
- Reference existing architecture in server: server/src/main/java/es/uclm/esi/iso2/server/patients/ (IPatientRepository, InMemoryPatientRepository, PatientRegistryService).

STEP-BY-STEP INSTRUCTIONS:
1. Clone & Branch:
   git clone https://github.com/hatimbenayad/2026-ISO2-A.05.git
   cd 2026-ISO2-A.05
   git checkout develop
   git pull origin develop
   git checkout -b feature/CU10-CU11-CU16-orders-backend-service

2. Implement in server/src/main/java/es/uclm/esi/iso2/server/orders/:
   - persistence/IOrderRepository.java:
     Methods: Optional<ExaminationOrder> findById(String orderId), List<ExaminationOrder> findByPatientId(String patientId), List<ExaminationOrder> findByStatus(OrderStatus status), ExaminationOrder save(ExaminationOrder order), ExaminationOrder update(ExaminationOrder order), boolean existsById(String orderId).
   - persistence/InMemoryOrderRepository.java:
     Thread-safe in-memory store backed by ConcurrentHashMap<String, ExaminationOrder>.
   - service/IExaminationOrderService.java:
     Methods:
     - ExaminationOrder createOrder(ExaminationOrderDto dto) [CU10 - RF10]
     - ExaminationOrder schedulePeriodicFollowUp(ExaminationOrderDto dto, int intervalDays, int occurrences) [CU11 - RF11]
     - ExaminationOrder markPerformed(String orderId, String technicianId, java.time.LocalDateTime executionTime) [CU16 - RF16]
     - ExaminationOrder cancelOrder(String orderId, String reason, String operatorId) [CU12 - RF12 & D-015 soft-cancellation]
     - Optional<ExaminationOrder> getOrder(String orderId)
     - List<ExaminationOrder> getOrdersByPatient(String patientId)
   - service/ExaminationOrderService.java:
     Full business logic with strict validations: check non-null DTO, non-empty IDs, valid state transitions (e.g. cannot mark performed an order that is CANCELLED). For cancelOrder, set status to CANCELLED and preserve audit fields per Decision D-015 without removing from repository.

3. Implement Unit Tests in server/src/test/java/es/uclm/esi/iso2/server/orders/:
   - InMemoryOrderRepositoryTest.java: test save, update, findById, findByPatientId, findByStatus, not-found behavior.
   - ExaminationOrderServiceTest.java: test order creation, periodic follow-up recurrence calculation, status transitions to PERFORMED, soft-cancellation with reason, and invalid input/state transition exceptions.
   - Ensure JaCoCo coverage in server module meets >= 75% line and >= 70% branch coverage.

4. Build & Verify:
   mvn clean verify
   Ensure all tests in common-contracts and server pass with 0 errors.

5. Commit & Push:
   git add server/src/
   git commit -m "feat(server): implement examination order service and in-memory repository (closes #63, #64, #65, #68)"
   git push -u origin feature/CU10-CU11-CU16-orders-backend-service
   Open a Pull Request targeting develop on GitHub and tag @hatimbenayad for review.`
    },
    {
      id: "BL-02",
      severity: "HIGH",
      notation: "?? Major Blunder",
      title: "Leaving Completed Work Unmerged or Local ('Invisible Progress')",
      whatWrong: "Verified Status: PR #79 (Order Black-Box tests, commit 0c91eeb) and PR #80 (Server Design Class Diagram, commit 645aec3) ARE merged into develop! However, Mina's branch 'feature/CU10-CU18-analysis-communication' (5 commits for CU10-CU13, CU18) has NO open PR, and teammates' local diagrams (Ayça CU16/CU17, Beyza CU14/CU15, Hatim Client Design #71) remain unpushed on local machines.",
      impact: "Unmerged branches and unpushed local files do not reflect in GitHub develop commit history, leaving external inspectors and graders with an impression of stalled progress.",
      recovery: "In today's meeting: review the completed diagrams, have Ayça and Beyza push their finished diagrams to their feature branches, open Pull Requests against develop, and merge them so that all analysis diagrams are visible on develop before Friday night.",
      owner: "Hatim (@hatimbenayad) & All Teammates",
      scoreGain: "+0.6 pts on Evidence & Traceability",
      stepByStep: [
        "Step 1: Verified on GitHub: PR #79 (Orders Black-Box tests) and PR #80 (Server Design) are already merged into develop.",
        "Step 2: In the team meeting, conduct the planned peer review of Mina's branch (feature/CU10-CU18-analysis-communication) and Ayça's / Beyza's local diagrams.",
        "Step 3: Have Mina open a Pull Request from feature/CU10-CU18-analysis-communication into develop with title 'analysis(physician): BCE communication diagrams for CU10-CU13, CU18 (#62)'.",
        "Step 4: Have Ayça (CU16, CU17) and Beyza (CU14, CU15) push their completed .vpp and .png files to docs/diagrams/analysis/ on their feature branches and open PRs.",
        "Step 5: Have Hatim push the completed Client Component Design diagram (docs/diagrams/design/It2-client-design.svg & .vpp) on branch feature/It2-client-design and open PR for Issue #71.",
        "Step 6: Review and merge all PRs into develop via Git Flow."
      ]
    },
    {
      id: "BL-03",
      severity: "HIGH",
      notation: "?? Major Blunder",
      title: "GitHub Issue Titles Drifting From the Official Wiki (#64–#67)",
      whatWrong: "Several GitHub issue titles and descriptions drift from the official Wiki Requirements-and-use-cases.md: Issue #65 is mislabeled with analysis(patients) (actor is Physician), Issue #66 uses prefix pacs for reports, Issue #67 uses prefix reports for PACS imaging, and the checklist in parent Issue #62 lists outdated CU descriptions.",
      impact: "Causes confusion among teammates and AI prompts regarding which CU corresponds to which functionality, breaking clean 1:1 RF-to-CU traceability required by C02.",
      recovery: "Rename issues #65, #66, #67, #68, #69 to match the exact Wiki naming convention and subsystem prefixes, and update Issue #62 checklist.",
      owner: "Hatim (@hatimbenayad)",
      scoreGain: "+0.3 pts on Requirements Traceability",
      stepByStep: [
        "Step 1: Open GitHub Issues on repository hatimbenayad/2026-ISO2-A.05.",
        "Step 2: Rename Issue #65 from 'analysis(patients): Communication Diagram for CU12 — Manage procedure orders' to: 'analysis(orders): Communication Diagram for CU12 — Manage procedure orders' (subsystem is orders, actor is Physician).",
        "Step 3: Rename Issue #66 from 'analysis(pacs): Communication Diagram for CU14 — Manage diagnostic report' to: 'analysis(reports): Communication Diagram for CU14 — Manage diagnostic report' (subsystem is diagnostic reports).",
        "Step 4: Rename Issue #67 from 'analysis(reports): Communication Diagram for CU15 — View medical images' to: 'analysis(pacs): Communication Diagram for CU15 — View medical images' (subsystem is RIS/PACS imaging).",
        "Step 5: Rename Issue #68 from 'analysis(orders): Communication Diagram for CU16 — Register Diagnostic Procedure Execution' to: 'analysis(orders): Communication Diagram for CU16 — Record procedure execution' (matches Wiki title exactly).",
        "Step 6: Rename Issue #69 from 'analysis(orders): Communication Diagram for CU17 — Record Clinical Incidents & Adverse Events' to: 'analysis(orders): Communication Diagram for CU17 — Document incident' (matches Wiki title exactly).",
        "Step 7: Edit Issue #62 description checklist to update the sub-issue titles and add links to #77 (CU13) and #78 (CU18)."
      ]
    },
    {
      id: "BL-04",
      severity: "HIGH",
      notation: "?? Major Blunder",
      title: "Uneven Contributor Activity in GitHub Insights",
      whatWrong: "Live GitHub API audit reveals a severe contribution imbalance on develop: Felipe (36 contributions) and Hatim (26 contributions) account for the vast majority of activity, while Mina has 4 merged, Berke has 3, Ayça has 3, and Beyza currently has 0 recorded commits/PRs.",
      impact: "Lab evaluations grade individual SCM engagement (Constraint C18). Teammates with 0 or 3 commits risk an individual grade penalty if work is not actively committed under their GitHub accounts.",
      recovery: "Rebalance sprint workload immediately: assign construction code and testing tickets to teammates with the lowest activity ranking (Beyza #1, Berke #2, Ayça #3). Stop assigning implementation tasks to Hatim and Felipe.",
      owner: "Coordinator & All 6 Members",
      scoreGain: "+0.8 pts on Team Balance & Governance",
      stepByStep: [
        "Live Activity Ranking (Lowest to Highest):",
        "1. Beyza Nur Topuz (@beyzabalota1): 0 commits / 0 PRs -> Priority 1: Assign backend ExaminationOrderService & repository (BL-01) or PACS/Reports black-box tests (Issue #75).",
        "2. Berke Taha Özdemir (@berquepica): 3 commits -> Priority 2: Assign Client Swing UI Order Entry Frame & Controller in client/ module.",
        "3. Ayça Beril Gümüş (@aycagorgulu0): 3 commits -> Priority 3: Push completed CU16/CU17 diagrams and assist in backend unit test coverage.",
        "4. Mina Alimohammadi (@minaOZ): 4 merged commits (+5 on feature branch) -> Priority 4: Open and merge PR for feature/CU10-CU18-analysis-communication.",
        "5. Hatim Ben Ayad (@hatimbenayad): 26 commits -> Maintain coordination, PR reviews, and Wiki maintenance.",
        "6. Felipe Dionisio (@Felipe-Dionisio): 36 commits -> Shift focus to PR peer reviews during travel."
      ]
    },
    {
      id: "BL-05",
      severity: "MEDIUM",
      notation: "? Inaccuracy",
      title: "GitHub Projects Kanban Board Out of Sync (Constraint C11)",
      whatWrong: "Several recently merged PRs and closed issues (#59, #60, #61, #72, #74, #76, #79, #80) and newly opened analysis issues (#77, #78) are either missing from the GitHub Project Kanban board or not updated to their real status.",
      impact: "Violates Constraint C11 (Agile tracking via GitHub Projects) during teacher supervision audits.",
      recovery: "Bulk-link all repository issues to the project board, move completed items to 'Done', and enable GitHub automated status workflows.",
      owner: "Hatim (@hatimbenayad)",
      scoreGain: "+0.3 pts on SCM & Project Tracking",
      stepByStep: [
        "Step 1: Go to repository hatimbenayad/2026-ISO2-A.05 -> Projects tab -> Open the team Kanban board.",
        "Step 2: Click '+ Add item' -> Select 'Add item from repository' -> Select all issues and PRs from #50 to #80.",
        "Step 3: Move closed issues (#59, #60, #61, #72, #74, #76, #79, #80) into the 'Done' column.",
        "Step 4: Move active in-progress issues (#62, #63, #64, #65, #71, #77, #78) into 'In Progress'.",
        "Step 5: Move pending test issue (#75) and implementation tasks into 'Todo'.",
        "Step 6: Click Board settings (three dots) -> 'Workflows' -> Enable: (a) 'Auto-add items to project' when created in hatimbenayad/2026-ISO2-A.05, and (b) 'Item closed -> Set status to Done'."
      ]
    },
    {
      id: "BL-06",
      severity: "RESOLVED",
      notation: "✓ Resolved / Non-Issue",
      title: "Academic Calendar & Holiday Clarification (Santa Tecla in October)",
      whatWrong: "Initial planning draft flagged a potential schedule conflict assuming Santa Tecla occurred in late November (23–27 Nov).",
      impact: "None. Santa Tecla occurred in October, so there is no academic freeze in November. The team has full availability leading up to the December milestones.",
      recovery: "Blunder marked as resolved and closed. Sprint pacing continues normally without holiday interruption.",
      owner: "Resolved",
      scoreGain: "N/A (Corrected)",
      stepByStep: [
        "Fact-checked: Santa Tecla was celebrated in October, not November.",
        "No academic break week exists between Nov 23–27.",
        "Sprint pacing for Iteration 2 and Iteration 3 proceeds on full schedule."
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     MEETING SESSIONS LOG (SUPPORTS WIKI MINUTES & DECISIONS ACCURACY)
     ------------------------------------------------------------------------ */
  meetings: [
    {
      id: "Meeting 05 (Upcoming)",
      date: "Thursday, 19/11/2026 · 17:00 (5:00 PM)",
      type: "Supervision Session with Prof. Ismael Caballero",
      status: "in-progress",
      decisionsLinked: ["D-014", "D-015", "D-016", "D-017"],
      agenda: [
        "Present Iteration 2 quality infrastructure: JUnit 6.1.3 + JaCoCo >=75% line / >=70% branch coverage gate (PR #76) and 85+ passing unit tests.",
        "Walk through Lab S.04.01 Black-Box Test Design Matrices (Equivalence Partitions & Boundary Values on Issues #74 and #75).",
        "Review Iteration 2 Physician BCE Communication Diagrams (CU10–CU12 completed by Mina; CU13–CU18 split across Beyza & Ayca) and Client/Server Design Class Diagrams (#71, #72).",
        "Confirm readiness prior to Santa Tecla academic break (23–27 Nov, D-016) and Iteration 3 scheduling kickoff (CU20–CU25)."
      ]
    },
    {
      id: "It2 Coordination Sync",
      date: "15/11 – 17/11/2026",
      type: "Team Iteration 2 Kickoff & Work Distribution",
      status: "done",
      decisionsLinked: ["D-009", "D-014", "D-015", "D-017"],
      agenda: [
        "Closed Step 1 Quality Infrastructure: merged PR #52 (architectural baseline), PR #58 (0.2.0-SNAPSHOT), and PR #76 (JaCoCo coverage enforcement); closed Issues #59, #60, #61.",
        "Resolved use-case title alignment against official Wiki Requirements-and-use-cases.md (CU11 Periodic follow-up via Timer, CU12 Manage/cancel orders, CU14 Manage diagnostic report, CU15 View medical images).",
        "Agreed balanced 3–3–3 Physician analysis split: Mina (CU10–CU12), Beyza (CU13–CU15), Ayca (CU16–CU18), while Hatim (#71) & Felipe (#72) work in parallel on Client/Server Design Class Diagrams and Berke prepares #75 JUnit tests."
      ]
    },
    {
      id: "Meeting 04",
      date: "09/11/2026",
      type: "Elaboration Architecture Baseline Review",
      status: "done",
      decisionsLinked: ["D-017", "D-018"],
      agenda: [
        "Consolidated Maven multi-module structure into 3 decoupled modules: common-contracts, server, and client (D-017).",
        "Agreed in-memory repository persistence behind interfaces until DB selection, and implemented CU19 (Manage Patient Demographics) as the executable vertical slice.",
        "Clarified Physician -> Patient role inheritance boundary (D-018: applies strictly to own-care functionality via Role.includes())."
      ]
    },
    {
      id: "Meeting 02",
      date: "23/10/2026 · 21:00 – 21:40",
      type: "Use-Case Modeling, Planning & Governance Alignment",
      status: "done",
      decisionsLinked: ["D-005", "D-006", "D-007", "D-008", "D-009", "D-010", "D-012", "D-015", "D-016"],
      agenda: [
        "Standardized on Visual Paradigm (D-005) and separated Client vs. Server use-case diagrams (D-006) with external hospital actors E01–E04 + Timer (D-008).",
        "Established Peer-Review Matrix (D-009), Simulated External Adapters (D-012), Non-Destructive Clinical Records (D-015), and Release Calendar respecting Santa Tecla break (D-016).",
        "Assigned planning leadership: Beyza (availability, constraints, risks) and Berke (SCM, calendar, RADIT effort estimates) per D-010."
      ]
    },
    {
      id: "Meeting 01",
      date: "19/10/2026 · 21:00 – 21:30",
      type: "Initial Project Kickoff & Role Assignment",
      status: "done",
      decisionsLinked: ["D-001", "D-002", "D-003", "D-004"],
      agenda: [
        "Divided all 32 functional requirements and client use-case diagrams by actor (D-001): Mina (Patient), Ayca (Physician), Hatim (Admin), Felipe (SysAdmin).",
        "Agreed parallel diagram authoring with Coordinator assembly into the master client diagram (D-002).",
        "Standardized IDE on Visual Studio Code (D-003) and GitHub Copilot as AI assistant under human oversight (D-004)."
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     KEY ARCHITECTURAL DECISIONS QUICK REFERENCE
     ------------------------------------------------------------------------ */
  decisions: [
    { id: "D-001", title: "Division of RFs & Diagrams by Actor", summary: "Parallel domain ownership: Mina (Patient RF01–09), Ayca (Physician RF10–18), Hatim (Admin RF19–26), Felipe (SysAdmin RF27–32)." },
    { id: "D-005", title: "Visual Paradigm Official UML Tool", summary: "All UML models must include both editable .vpp and high-resolution .png exports under docs/diagrams/." },
    { id: "D-006", title: "Separate Client & Server Use-Case Diagrams", summary: "Separates human actor workflows (CU01–CU32) from server orchestrations & external systems E01–E04 + Timer (SCU01–SCU13)." },
    { id: "D-009", title: "Git Flow & Peer-Review Matrix", summary: "Direct pushes to develop/main are blocked. Every PR requires green CI and cross-review approval (Mina<->Felipe, Hatim<->Ayca, Berke<->Beyza)." },
    { id: "D-012", title: "Simulated External Hospital Adapters", summary: "External platforms E01–E04 (SSO, EHR, Admissions, RIS/PACS) sit behind interfaces in common-contracts with Mock Adapters in server for offline testing." },
    { id: "D-013", title: "Wiki Self-Service vs. Strict Code Git Flow", summary: "Team members publish Wiki documentation directly while all code, POMs, and UML diagrams go through reviewed feature branches and PRs." },
    { id: "D-014", title: "Human-in-the-Loop AI4SE Governance", summary: "'The Engineer designs the Interfaces; the AI implements the Contracts.' Humans own design, test specs, code review, and Git commits." },
    { id: "D-015", title: "Non-Destructive Clinical Records", summary: "Zero hard deletes: orders transition to CANCELLED with cancelledAt timestamp, patients become INACTIVE, preserving full GDPR/SESCAM audit history." },
    { id: "D-016", title: "Academic Release Calendar & Santa Tecla Break", summary: "Milestones aligned to Moodle & lab deadlines with 0 billable hours scheduled during Santa Tecla week (23–27 Nov)." },
    { id: "D-017", title: "3-Module Maven Architecture & In-Memory Persistence", summary: "Root aggregator builds common-contracts first, then server and client. Persistence sits behind repository interfaces with In-Memory implementations." },
    { id: "D-018", title: "Physician -> Patient Role Scope Clarification", summary: "Physician inclusion of Patient capabilities (Role.includes) applies strictly to own-care access, never bypassing clinical authorization." }
  ]
};

/* ==========================================================================
   AI AGENT MARKDOWN CONTEXT PACK GENERATORS
   ========================================================================== */

window.buildIssueContextMd = function (issue) {
  const ghLink = issue.ghNumber
    ? `https://github.com/hatimbenayad/2026-ISO2-A.05/issues/${issue.ghNumber}`
    : "Pending creation on GitHub";

  const criteriaLines = (issue.criteria || []).map(c => `- [ ] ${c}`).join("\n");
  const fileLines = (issue.files || []).map(f => `- \`${f}\``).join("\n");

  return `# AI Agent Context Pack — ${issue.ghNumber ? "Issue #" + issue.ghNumber : issue.key}: ${issue.title}

> **Purpose:** Paste this Markdown context into your AI coding assistant (GitHub Copilot, Cursor, Antigravity, Claude, or ChatGPT) so it understands our exact SESCAM Radiodiagnostics project rules, architecture, and acceptance criteria before helping you.

---

## 1. Project Identity & Tech Stack
- **Repository:** \`hatimbenayad/2026-ISO2-A.05\` (UCLM Software Engineering II — Team A.05)
- **Active Iteration:** Iteration 2 — Construction I (\`0.2.0-SNAPSHOT\`, target Nov 22 before Santa Tecla break)
- **Language & Build:** Java 21 · Multi-module Maven (\`./mvnw clean verify\` or \`.\\mvnw.cmd clean verify\` on Windows)
- **Modules (Decision D-017):**
  1. \`common-contracts\` — Shared domain entities, DTOs, and service interfaces (built 1st, zero framework dependencies)
  2. \`server\` — Business services, in-memory repositories, mock external adapters (depends on \`common-contracts\`)
  3. \`client\` — Desktop Swing UI views, controllers, session context (depends ONLY on \`common-contracts\`)
- **Testing & SQA Gate (Lab S.04.01 · PR #76):**
  - **JUnit 6 Jupiter (\`6.1.3\`)** — Always use \`org.junit.jupiter.api.*\` (NEVER legacy JUnit 4 \`org.junit.Test\`).
  - **JaCoCo (\`0.8.14\`)** — Enforced automatically in \`mvn verify\`: **>=75% Line Coverage** and **>=70% Branch Coverage**.
  - Tests must mirror production packages under \`src/test/java\`, use \`@DisplayName\` in English, and follow **Arrange–Act–Assert (AAA)**.

---

## 2. Mandatory Project Decisions (NEVER Violate)
- **D-005 (UML):** All diagrams are built in Visual Paradigm; commit BOTH editable \`.vpp\` and high-res \`.png\` under \`docs/diagrams/\`.
- **D-009 (Git Flow):** Never commit directly to \`develop\` or \`main\`. Always branch from fresh \`develop\`, open a PR with \`closes #<id>\`, and pass green CI + peer review.
- **D-012 (External Systems):** External hospital platforms (E01 SSO, E02 EHR, E03 Admissions, E04 RIS/PACS) are simulated behind interfaces via **Mock Adapters** in \`server\` (zero live network calls).
- **D-014 (AI Governance):** Human engineers own architecture, Black-Box test design, code review, and Git commits. AI assists with implementation/boilerplate and must never alter assertions just to make tests pass.
- **D-015 (Medical Audit Compliance):** **NEVER hard-delete clinical records.** Cancel orders via \`order.cancel(LocalDateTime)\` (status -> \`OrderStatus.CANCELLED\`) and deactivate patients (\`PatientStatus.INACTIVE\`).
- **D-017 (Persistence):** Store runtime data in-memory behind repository interfaces (e.g., \`ConcurrentHashMap\`), mirroring \`InMemoryPatientRepository\`.

---

## 3. Official Physician Use-Case Mapping (Wiki Source of Truth)
- \`CU10\` (RF10): Order diagnostic procedure
- \`CU11\` (RF11): Order periodic follow-up *(recurrence policy registered; Server Timer generates future orders later)*
- \`CU12\` (RF12): Manage procedure orders *(status tracking + soft order cancellation; appointment cancel is Admin/Patient)*
- \`CU13\` (RF13): Consult execution schedules
- \`CU14\` (RF14): Manage diagnostic report
- \`CU15\` (RF15): View medical images *(secondary actor: RIS/PACS E04)*
- \`CU16\` (RF16): Record procedure execution *(transitions order status to \`OrderStatus.PERFORMED\`)*
- \`CU17\` (RF17): Document incident
- \`CU18\` (RF18): Consult order metrics

---

## 4. Your Assigned Task Details
- **Issue Link:** ${ghLink}
- **Milestone:** ${issue.milestoneLabel} (${issue.step})
- **Use Case / Scope:** ${issue.uc}
- **RADIT Disciplines:** ${(issue.radit || []).join(", ")}
- **Assigned To:** ${(issue.assignees || []).map(a => "@" + a).join(", ")}
- **Target Branch:** \`${issue.branch}\`

### Objective
${issue.summary}

### Target Files / Directories
${fileLines}

### Acceptance Criteria
${criteriaLines}

### Specific AI Assistant Instructions
${issue.aiGuidance}

---

## 5. Git Flow & Verification Checklist
\`\`\`bash
git checkout develop
git pull origin develop
git checkout -b ${issue.branch}
# ... implement or export deliverables ...
./mvnw clean verify   # Windows PowerShell: .\\mvnw.cmd clean verify
git status
git add .
git commit -m "${issue.step.toLowerCase().includes("test") ? "test" : issue.step.toLowerCase().includes("design") || issue.step.toLowerCase().includes("analysis") ? "docs" : "feat"}(${issue.uc.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}): ${issue.title.split(":")[1] ? issue.title.split(":")[1].trim().toLowerCase() : issue.title.toLowerCase()}${issue.ghNumber ? " (closes #" + issue.ghNumber + ")" : ""}"
git push -u origin ${issue.branch}
\`\`\`
Open a Pull Request into \`develop\`, verify GitHub Actions CI is green, and request peer review per D-009.
`;
};

window.buildMemberContextMd = function (member) {
  const tasksMd = member.currentTasks.map((t, idx) =>
    `### Task ${idx + 1}: ${t.title}\n- **Status:** ${t.status}\n- **Branch:** \`${t.branch}\`\n- **GitHub Issue:** ${t.issue ? "#" + t.issue : "To be linked"}\n- **Details:** ${t.details}`
  ).join("\n\n");

  return `# AI Agent Personal Context Pack — ${member.name} (@${member.handle})

- **Project:** SESCAM Radiodiagnostics Management System (\`hatimbenayad/2026-ISO2-A.05\`)
- **Role:** ${member.role}
- **Owned Domain Scope:** ${member.actorScope}
- **Peer Reviewer (D-009):** ${member.peerReviewer}
- **Active Iteration:** Iteration 2 — Construction I (\`0.2.0-SNAPSHOT\`, due Nov 22)

## Mandatory Engineering Guardrails
- **Java 21 · Maven 3 Modules (D-017):** \`common-contracts\` (shared interfaces/DTOs) <- \`server\` (services, in-memory repos, mock adapters D-012) & \`client\` (Swing UI).
- **Testing Gate (Lab S.04.01 · PR #76):** JUnit 6.1.3 (\`org.junit.jupiter.api.*\`), AAA pattern, \`@DisplayName\`, JaCoCo **>=75% line / >=70% branch** via \`.\\mvnw.cmd clean verify\`.
- **Non-Destructive Clinical Data (D-015):** Soft-cancel (\`OrderStatus.CANCELLED\`) and soft-deactivate (\`PatientStatus.INACTIVE\`); never hard-delete records.
- **Visual Paradigm (D-005):** Always save both \`.vpp\` and high-res \`.png\` under \`docs/diagrams/analysis/\` or \`docs/diagrams/design/\`.
- **Git Flow (D-009):** Always branch from updated \`develop\` and submit a Pull Request with green CI.

## Current Active Tasks (${window.PORTAL_DATA.meta.lastUpdated})

${tasksMd}

## How to Help Me
Guide me step-by-step through the tasks above while strictly respecting all project decisions (\`D-005\`, \`D-009\`, \`D-012\`, \`D-014\`, \`D-015\`, \`D-017\`) and the official Wiki use-case definitions (\`CU10–CU18\`).
`;
};

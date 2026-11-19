# SafeOps – Fictional Sample Maintenance Records

**Company:** Aegis Manufacturing Ltd. (fictional) | **Data as of:** 18 November 2026

> **All records are fictional demonstration data, not actual incidents.** Equipment models are deliberately not specified, and no manufacturer specifications, limits, part numbers or manual references are stated.

## Pre-generation Checks and Consistency Notes

All ten scenarios, work order IDs and equipment IDs match the master prompt. Employee assignments are reused consistently. Open and in-progress records carry no completion data or root cause.

Points where this prompt differs from the documents generated earlier in this project (flagged, not silently resolved):

| Item | This prompt | Earlier generated documents | Handling here |
|---|---|---|---|
| M001 manufacturer | Ingersoll Rand | Atlas Copco in the machine guarding, LOTO and SOP documents | Ingersoll Rand used; the other documents should be aligned |
| M003 location | Production Unit C | Production Unit B in the CNC Technical Reference Manual | Production Unit C used |
| Priority levels | LOW / MEDIUM / HIGH | Critical / High / Medium / Low in the Work Order SOP | Only LOW, MEDIUM and HIGH used; none of the samples is Critical |
| Status values | OPEN / IN_PROGRESS / COMPLETED | REQUESTED → APPROVED → ASSIGNED → IN_PROGRESS → COMPLETED → VERIFIED → CLOSED | Mapping: OPEN ≈ REQUESTED, APPROVED or ASSIGNED; COMPLETED ≈ COMPLETED, VERIFIED or CLOSED (verification fields recorded) |
| SOP names | Equipment Maintenance SOP, Maintenance Request & Work Order SOP, Preventive Maintenance SOP, Company Safety & LOTO Procedure, Equipment Inspection & Reporting SOP | Only the Work Order SOP text has been seen | SOPs are cited by name only; no new company rules are created |

Work order IDs are fixed by the master prompt, so they are not strictly in date order. Priority is assigned from the scenario, not by default.

## PART 1 – Employee Reference Data

| Employee ID | Name | Role | Department |
|---|---|---|---|
| OP-001 | Karthik Subramanian | Machine Operator | Production – Unit A |
| OP-002 | Meenakshi Iyer | Machine Operator | Production – Unit B |
| OP-003 | Vignesh Rajan | Machine Operator | Production – Unit C |
| TECH-001 | Senthil Kumar | Maintenance Technician | Maintenance |
| TECH-002 | Priya Natarajan | Maintenance Technician | Maintenance |
| TECH-003 | Mohammed Irfan | Maintenance Technician | Maintenance |
| SUP-001 | Lakshmi Narayanan | Maintenance Supervisor | Maintenance |
| SUP-002 | Rajesh Balasubramanian | Maintenance Supervisor | Maintenance |

## PART 2 – Maintenance Work Orders

### WO-001 – Air Compressor (M001): Overheating

**Status:** COMPLETED  |  **Priority:** HIGH  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-001 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M001 – Air Compressor |
| Manufacturer | Ingersoll Rand |
| Location | Production Unit A |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Overheating |
| Problem description | During the morning shift the operator noticed a temperature-related warning on the compressor display and that the casing near the cooling area felt hotter than usual. The unit kept running and no shutdown occurred. |
| Reported by | OP-001 – Karthik Subramanian |
| Reported date/time | 2026-08-18 09:15 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Compressor running; temperature-related warning shown on the display (message text recorded in the request); no visible leakage; no unusual smell reported. |
| Maintenance category | CORRECTIVE |
| Priority | HIGH |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-001 – Senthil Kumar |
| Supervisor | SUP-001 – Lakshmi Narayanan |
| Assignment date/time | 2026-08-18 10:05 IST |
| Work started | 2026-08-18 13:30 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible contributing factors include restricted cooling airflow, condition of cooling surfaces or filters, lubricant level or condition, and poor ventilation around the unit. None was confirmed at assessment; inspection required. Supervisor raised priority to HIGH because of the temperature warning on a running pressurised machine.
- **Inspection findings:** After safe shutdown, cool-down and isolation under the Company Safety & LOTO Procedure, visual inspection found heavy dust and debris on the cooling surfaces and a visibly dirty air intake filter. Lubricant level indicator showed a normal indication per the unit's own indicator. No other abnormality was seen during the visual inspection.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve overheating or temperature-warning troubleshooting content from the manufacturer manual.
  - Retrieve cooling, filter and cleaning maintenance sections to suggest inspection areas.
  - Retrieve technician responsibilities from the Equipment Maintenance SOP.
  - Retrieve isolation and cool-down precautions from the Company Safety & LOTO Procedure.
  - Present source documents so the technician can verify the information.
  - Source documents (by name only): Air Compressor Manufacturer Manual – Ingersoll Rand; Equipment Maintenance SOP; Company Safety & LOTO Procedure
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Safely shut down and isolate; allow hot parts to cool; inspect cooling surfaces, air intake filter and lubricant indication; clean or replace per the manufacturer manual; test run under observation.
- **Safety considerations:**
  - Hot surfaces: allow to cool before contact.
  - Stored pressure and electrical energy must be isolated and controlled under the Company Safety & LOTO Procedure before any cover is opened.
  - Electrical, pneumatic and mechanical work only by authorised, qualified personnel.
  - Guards and covers must be refitted before the test run.
- **Actual maintenance performed (by technician):** Isolated and locked out; cooled; cleaned the cooling surfaces and replaced the air intake filter element following the manufacturer manual; refitted guards; removed lockout; performed an observed test run.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Reduced cooling effectiveness associated with accumulated dust and debris on the cooling surfaces and intake filter (supported by inspection observations). The underlying reason for the accumulation (cleaning frequency or ventilation) was not established. |
| Maintenance action performed | Cleaning of cooling surfaces and replacement of the air intake filter element per the manufacturer manual, followed by an observed test run. |
| Parts replaced | Air intake filter element (part number: to be confirmed) |
| Completion date/time | 2026-08-19 15:30 IST |
| Verified by | SUP-001 – Lakshmi Narayanan (2026-08-19 16:10 IST) |
| Final equipment condition | Operational. No temperature warning during the verification run; continue observation. |
| Technician remarks | Recommend reviewing cleaning frequency of cooling surfaces and the filter at the next preventive maintenance. Recurrence should be raised as a new request. |

### WO-002 – Air Compressor (M001): Abnormal pressure

**Status:** COMPLETED  |  **Priority:** HIGH  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-002 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M001 – Air Compressor |
| Manufacturer | Ingersoll Rand |
| Location | Production Unit A |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Abnormal pressure |
| Problem description | The operator reported that delivered air pressure at the point of use was lower than usual and that the compressor seemed to run for longer periods to keep up. No alarm was displayed. |
| Reported by | OP-001 – Karthik Subramanian |
| Reported date/time | 2026-09-02 14:20 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Compressor running; pressure indication lower than the operator's usual observation; no alarm; faint hissing sound noticed near the piping. |
| Maintenance category | CORRECTIVE |
| Priority | HIGH |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-002 – Priya Natarajan |
| Supervisor | SUP-001 – Lakshmi Narayanan |
| Assignment date/time | 2026-09-02 15:10 IST |
| Work started | 2026-09-03 09:00 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible causes include air leakage, filter restriction, control or valve behaviour, or increased demand. None confirmed; inspection required. Rated HIGH because it involves a pressurised system and affects production air supply.
- **Inspection findings:** With the affected section made safe, a leak-check was carried out with an approved leak-detection method. A leak was observed at one pipe/hose fitting downstream of the compressor outlet. Gauge and display indications were consistent with each other; no other fault was found in the inspected area.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve pressure-related troubleshooting content from the manufacturer manual.
  - Suggest inspection areas such as fittings, filters and control components, as supported by retrieved documents.
  - Retrieve work order handling guidance from the Maintenance Request & Work Order SOP.
  - Retrieve pressure-isolation and release precautions from the Company Safety & LOTO Procedure and the OSHA Lockout/Tagout Guidelines.
  - Source documents (by name only): Air Compressor Manufacturer Manual – Ingersoll Rand; Maintenance Request & Work Order SOP; Company Safety & LOTO Procedure; Lockout/Tagout Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Inspect for leaks, filters and control components; isolate and relieve pressure per approved procedure before opening any fitting; verify pressure behaviour after repair.
- **Safety considerations:**
  - Compressed air is stored energy: isolate and release under the Company Safety & LOTO Procedure before opening fittings.
  - Do not use compressed air or leak-checking in ways not approved by the company.
  - Pneumatic and electrical work only by authorised, qualified personnel.
- **Actual maintenance performed (by technician):** Isolated and depressurised the affected section under lockout; re-made the fitting and replaced its sealing component; removed lockout; re-pressurised and repeated the leak-check.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Air leak at a pipe/hose fitting downstream of the compressor outlet, identified by leak-check (observed). Reason for the fitting loosening or seal deterioration not established. |
| Maintenance action performed | Fitting re-made and sealing component replaced; leak-check repeated with no leak observed; pressure behaviour observed during a production run. |
| Parts replaced | Fitting sealing component (part number: to be confirmed) |
| Completion date/time | 2026-09-04 11:45 IST |
| Verified by | SUP-001 – Lakshmi Narayanan (2026-09-04 13:00 IST) |
| Final equipment condition | Operational. Pressure behaviour observed as normal by the operator after repair; follow-up observation advised. |
| Technician remarks | Other fittings in the line were visually checked and showed no leaks. Suggest including a fitting leak-check in the preventive inspection. |

### WO-003 – Air Compressor (M001): Unusual vibration

**Status:** OPEN  |  **Priority:** MEDIUM  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-003 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M001 – Air Compressor |
| Manufacturer | Ingersoll Rand |
| Location | Production Unit A |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Unusual vibration |
| Problem description | The operator felt a slight increase in vibration on the compressor enclosure panels during normal operation. Output pressure and running behaviour appeared normal. |
| Reported by | OP-001 – Karthik Subramanian |
| Reported date/time | 2026-11-10 16:05 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Compressor running; mild vibration felt on enclosure panels; no alarm; no unusual smell, leakage or pressure change reported. |
| Maintenance category | CORRECTIVE |
| Priority | MEDIUM |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-003 – Mohammed Irfan |
| Supervisor | SUP-002 – Rajesh Balasubramanian |
| Assignment date/time | 2026-11-11 09:30 IST |
| Work started | — |

**D. Maintenance Information**

- **Initial assessment:** Cause unknown. Areas for later inspection may include mounting and fasteners, rotating components and guards, and enclosure fittings. No cause is assumed. Supervisor rated MEDIUM: the machine is running normally but the change needs assessment within a reasonable period.
- **Inspection findings:** Not yet available (inspection not started).
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve vibration-related troubleshooting content from the manufacturer manual.
  - Suggest candidate inspection areas as supported by the documents.
  - Retrieve safe-access and isolation precautions from the Company Safety & LOTO Procedure.
  - Retrieve guarding considerations from the Machine Guarding Guidelines – OSHA.
  - Source documents (by name only): Air Compressor Manufacturer Manual – Ingersoll Rand; Equipment Maintenance SOP; Company Safety & LOTO Procedure; Machine Guarding Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Inspect after safe shutdown and isolation; check whether the vibration is changing; escalate if it increases.
- **Safety considerations:**
  - Operator to stop the compressor safely and report if vibration, noise or heat increases.
  - No guard or panel may be removed without authorisation and lockout under the Company Safety & LOTO Procedure.
  - Mechanical and electrical inspection by authorised, qualified personnel only.
- **Actual maintenance performed (by technician):** None yet.

**E. Work Order Status**

OPEN

**F. Resolution Information**

Completion-specific fields are null (root cause, action performed, parts replaced, completion date, verification, final condition, technician remarks).

**Pending action / investigation:** Inspection not started. Supervisor SUP-002 to agree a downtime window with Production (date to be confirmed). Priority to be reassessed if vibration changes. No root cause has been determined.

### WO-004 – Conveyor Belt (M002): Belt slipping

**Status:** COMPLETED  |  **Priority:** MEDIUM  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-004 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M002 – Conveyor Belt |
| Manufacturer | Dorner |
| Location | Production Unit B |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Belt slipping |
| Problem description | After a line cleaning activity, the operator noticed the conveyor belt hesitating at start-up under load and appearing to slip relative to the drive pulley, with some product delay. |
| Reported by | OP-002 – Meenakshi Iyer |
| Reported date/time | 2026-09-15 10:20 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Conveyor running intermittently slow under load; belt appeared to move unevenly at the drive end; no unusual smell; no abnormal noise reported. |
| Maintenance category | CORRECTIVE |
| Priority | MEDIUM |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-002 – Priya Natarajan |
| Supervisor | SUP-001 – Lakshmi Narayanan |
| Assignment date/time | 2026-09-15 11:15 IST |
| Work started | 2026-09-15 14:00 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible causes include reduced traction at the drive pulley (for example from contamination), belt tension, belt or pulley wear, or overload. None confirmed; inspection required.
- **Inspection findings:** After isolation under lockout, residue and a moisture film were observed on the belt underside and the drive pulley surface. Belt tension appeared lower than the manufacturer procedure expects when checked as the manual describes. No obvious belt damage or pulley damage was observed.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve belt slipping and tension/tracking sections from the Dorner manual.
  - Suggest inspection areas such as drive pulley surface, belt condition and tension, as supported by the documents.
  - Retrieve inspection reporting guidance from the Equipment Inspection & Reporting SOP.
  - Retrieve guarding and isolation precautions from the Machine Guarding Guidelines – OSHA and the Company Safety & LOTO Procedure.
  - Source documents (by name only): Conveyor Belt Manual – Dorner; Equipment Inspection & Reporting SOP; Machine Guarding Guidelines – OSHA; Company Safety & LOTO Procedure
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Isolate; inspect belt, drive pulley and tension per the manufacturer manual; clean and adjust as the manual directs; test under load.
- **Safety considerations:**
  - Conveyor must be isolated and locked out before guards are removed or any adjustment.
  - In-running nip points at the drive pulley: keep hands clear and refit guards before restart.
  - Authorised personnel only.
- **Actual maintenance performed (by technician):** Isolated under lockout; cleaned belt and drive pulley contact surfaces by the approved cleaning method; adjusted belt tension and checked tracking per the manufacturer manual; refitted guards; removed lockout; test run under load.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Reduced traction at the drive pulley contact surface associated with residue/moisture, together with belt tension below the manufacturer procedure. The relative contribution of each was not separated. |
| Maintenance action performed | Cleaning of contact surfaces and tension adjustment per the manufacturer manual; test run under load observed with no slipping. |
| Parts replaced | None |
| Completion date/time | 2026-09-16 11:00 IST |
| Verified by | SUP-001 – Lakshmi Narayanan (2026-09-16 12:15 IST) |
| Final equipment condition | Operational. No slipping observed under load during verification; monitor after the next cleaning cycle. |
| Technician remarks | Suggest checking the belt and drive pulley for residue after each cleaning activity. |

### WO-005 – Conveyor Belt (M002): Unusual noise

**Status:** OPEN  |  **Priority:** LOW  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-005 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M002 – Conveyor Belt |
| Manufacturer | Dorner |
| Location | Production Unit B |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Unusual noise |
| Problem description | The operator heard an intermittent ticking or rubbing sound from the lower part of the conveyor while it ran. Belt movement and product flow appeared normal. |
| Reported by | OP-002 – Meenakshi Iyer |
| Reported date/time | 2026-11-13 14:35 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Conveyor running normally; intermittent faint sound heard from the lower frame area; no stoppage; no product issue; operator did not approach moving parts. |
| Maintenance category | CORRECTIVE |
| Priority | LOW |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-003 – Mohammed Irfan |
| Supervisor | SUP-002 – Rajesh Balasubramanian |
| Assignment date/time | 2026-11-16 09:00 IST |
| Work started | — |

**D. Maintenance Information**

- **Initial assessment:** Cause unknown. Rollers, bearings, belt contact and fasteners are candidate inspection areas but none is assumed. Rated LOW because the noise is intermittent and faint with no performance effect; to be reassessed on any change.
- **Inspection findings:** Not yet available (inspection not started).
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve noise-related troubleshooting from the Dorner manual.
  - Suggest candidate inspection areas as supported by the documents.
  - Retrieve guarding precautions from the Machine Guarding Guidelines – OSHA and isolation steps from the Company Safety & LOTO Procedure.
  - Retrieve inspection reporting steps from the Equipment Inspection & Reporting SOP.
  - Source documents (by name only): Conveyor Belt Manual – Dorner; Equipment Inspection & Reporting SOP; Machine Guarding Guidelines – OSHA; Company Safety & LOTO Procedure
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Inspect during an agreed window after isolation; do not investigate while the belt is moving.
- **Safety considerations:**
  - Never reach into or near a moving belt or rollers to locate noise.
  - Stop and report if the noise worsens or belt behaviour changes.
  - Isolation under the Company Safety & LOTO Procedure before access.
- **Actual maintenance performed (by technician):** None yet.

**E. Work Order Status**

OPEN

**F. Resolution Information**

Completion-specific fields are null (root cause, action performed, parts replaced, completion date, verification, final condition, technician remarks).

**Pending action / investigation:** Inspection not started; scheduling with Production for a stoppage window (date to be confirmed). No cause determined.

### WO-006 – Conveyor Belt (M002): Belt misalignment

**Status:** COMPLETED  |  **Priority:** MEDIUM  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-006 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M002 – Conveyor Belt |
| Manufacturer | Dorner |
| Location | Production Unit B |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Belt misalignment |
| Problem description | The operator observed the belt tracking toward one side of the frame with its edge nearing the side structure, producing an intermittent contact sound. |
| Reported by | OP-002 – Meenakshi Iyer |
| Reported date/time | 2026-10-12 08:50 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Conveyor running; belt edge visibly closer to the frame on one side; occasional light contact sound; product slightly off-centre. |
| Maintenance category | CORRECTIVE |
| Priority | MEDIUM |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-001 – Senthil Kumar |
| Supervisor | SUP-002 – Rajesh Balasubramanian |
| Assignment date/time | 2026-10-12 09:40 IST |
| Work started | 2026-10-12 13:00 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible causes include roller or frame alignment, belt condition, loose adjustment hardware, or uneven loading. None confirmed; inspection required.
- **Inspection findings:** After isolation under lockout, light edge-contact marks were seen on the belt edge and an adjustment fastener near the tail end was found loose. No structural damage was observed.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve tracking and alignment sections from the Dorner manual.
  - Suggest inspection areas such as tracking adjustment, rollers and fasteners, as supported by the documents.
  - Retrieve work order handling from the Maintenance Request & Work Order SOP.
  - Retrieve guarding precautions from the Machine Guarding Guidelines – OSHA.
  - Source documents (by name only): Conveyor Belt Manual – Dorner; Maintenance Request & Work Order SOP; Machine Guarding Guidelines – OSHA; Company Safety & LOTO Procedure
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Isolate; inspect belt edge, rollers and adjustment hardware; re-align per the manufacturer manual; verify tracking under running conditions.
- **Safety considerations:**
  - Isolate under lockout before any adjustment.
  - Keep clear of pinch and nip points; guards refitted before restart.
  - Authorised personnel only.
- **Actual maintenance performed (by technician):** Isolated under lockout; secured the loose adjustment fastener; adjusted tracking per the manufacturer manual; refitted guards; removed lockout; observed repeated runs.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Misalignment associated with loose adjustment hardware at the tail end (observed). The event that initiated the loosening was not established. |
| Maintenance action performed | Fastener secured and tracking adjusted per the manufacturer manual; belt tracking observed over repeated runs and under load. |
| Parts replaced | None |
| Completion date/time | 2026-10-14 10:30 IST |
| Verified by | SUP-002 – Rajesh Balasubramanian (2026-10-14 11:30 IST) |
| Final equipment condition | Operational. Belt tracking centred during verification; edge condition to be monitored at the next inspection. |
| Technician remarks | Completion was delayed one day to match a production window. Edge marks were light and no replacement was triggered by visual inspection. |

### WO-007 – CNC Milling Machine (M003): Tool wear

**Status:** COMPLETED  |  **Priority:** LOW  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-007 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M003 – CNC Milling Machine |
| Manufacturer | Haas Automation |
| Location | Production Unit C |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Tool wear |
| Problem description | Surface finish on a production batch deteriorated gradually toward the end of the run. The operator found the cutting tool edge visibly worn. No machine alarm occurred. |
| Reported by | OP-003 – Vignesh Rajan |
| Reported date/time | 2026-10-20 15:10 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Machine stopped by operator at the end of the cycle; worn cutting edge visible; no alarm; no abnormal spindle noise reported. |
| Maintenance category | CORRECTIVE |
| Priority | LOW |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-003 – Mohammed Irfan |
| Supervisor | SUP-002 – Rajesh Balasubramanian |
| Assignment date/time | 2026-10-20 15:50 IST |
| Work started | 2026-10-21 09:00 IST |

**D. Maintenance Information**

- **Initial assessment:** Tool wear is a common cause of finish deterioration, but tooling, process parameters, coolant delivery and machine condition each need checking. None confirmed.
- **Inspection findings:** Cutting edge worn as reported. Tool holder was clean with no visible damage. Coolant flow reached the cutting zone as expected. No abnormal sound or alarm during a controlled test run.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve tool-wear and finish troubleshooting content from the Haas manual.
  - Suggest inspection areas such as tool, holder and coolant delivery, as supported by the documents.
  - Retrieve tool replacement and record-keeping from the Equipment Maintenance SOP.
  - Retrieve machine safety precautions from the Machine Guarding Guidelines – OSHA.
  - Source documents (by name only): CNC Milling Machine Manual – Haas Automation; Equipment Maintenance SOP; Machine Guarding Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Replace or reject the worn tool per procedure; inspect holder and coolant delivery; run a controlled test cut; refer process parameter questions to the process owner.
- **Safety considerations:**
  - Machine stopped and doors closed during any run; guards and interlocks must not be bypassed.
  - Handle cutting tools with care.
  - Lockout required if work involves access to moving parts.
- **Actual maintenance performed (by technician):** Replaced the worn cutting tool; checked holder and coolant delivery; recorded the change in the tool condition record; ran a controlled test cut for operator and quality inspection.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Tool wear consistent with the tool reaching the end of its useful life for the job. No machine fault was found by maintenance. Process factors were referred to the process owner for review. |
| Maintenance action performed | Worn cutting tool replaced; holder and coolant delivery checked; test cut accepted by quality. |
| Parts replaced | Cutting tool (end mill) per the job tool list (part number: to be confirmed) |
| Completion date/time | 2026-10-21 10:40 IST |
| Verified by | SUP-002 – Rajesh Balasubramanian (2026-10-21 11:20 IST) |
| Final equipment condition | Operational. Finish acceptable on the test cut. |
| Technician remarks | Recommend reviewing tool life records with the process owner. |

### WO-008 – CNC Milling Machine (M003): Abnormal vibration

**Status:** IN_PROGRESS  |  **Priority:** HIGH  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-008 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M003 – CNC Milling Machine |
| Manufacturer | Haas Automation |
| Location | Production Unit C |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Abnormal vibration |
| Problem description | During a machining operation the operator noticed vibration, a changed cutting sound and chatter marks on the parts. The operator stopped the machine and reported it. |
| Reported by | OP-003 – Vignesh Rajan |
| Reported date/time | 2026-11-16 11:20 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Machine stopped by the operator; chatter marks visible on the last parts; no alarm; doors closed; no leakage reported. |
| Maintenance category | CORRECTIVE |
| Priority | HIGH |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-001 – Senthil Kumar |
| Supervisor | SUP-001 – Lakshmi Narayanan |
| Assignment date/time | 2026-11-16 12:00 IST |
| Work started | 2026-11-16 14:30 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible contributing factors include tooling, workholding, process parameters or machine condition (for example spindle or mounting). None confirmed. Rated HIGH because possible machine involvement and the risk of tool or workpiece failure.
- **Inspection findings:** Preliminary only: cutting tool and holder were visually inspected with no obvious damage; workpiece clamping appeared secure. Cause not yet determined.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve vibration and chatter troubleshooting content from the Haas manual.
  - Suggest inspection areas such as tool, holder, workholding and spindle condition, as supported by the documents.
  - Retrieve escalation guidance from the Maintenance Request & Work Order SOP.
  - Retrieve isolation precautions from the Company Safety & LOTO Procedure.
  - Source documents (by name only): CNC Milling Machine Manual – Haas Automation; Maintenance Request & Work Order SOP; Company Safety & LOTO Procedure; Machine Guarding Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Machine remains out of service; repeat a controlled test with a fresh tool to separate tooling from machine causes; inspect spindle and holder interface; escalate to the manufacturer's service channel if unresolved.
- **Safety considerations:**
  - Machine kept out of service and tagged until the cause is established.
  - Enclosure access only under lockout by authorised personnel; interlocks must not be bypassed.
  - Electrical and mechanical diagnosis by qualified personnel only.
- **Actual maintenance performed (by technician):** Inspection only so far: visual inspection of tool, holder and clamping. No corrective repair has been performed.

**E. Work Order Status**

IN_PROGRESS

**F. Resolution Information**

Completion-specific fields are null (root cause, action performed, parts replaced, completion date, verification, final condition, technician remarks).

**Pending action / investigation:** Controlled test cut with a fresh tool pending. If vibration persists, spindle and mounting inspection by a qualified technician and possible manufacturer service. No root cause has been established.

### WO-009 – CNC Milling Machine (M003): Coolant-related issue

**Status:** IN_PROGRESS  |  **Priority:** MEDIUM  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-009 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M003 – CNC Milling Machine |
| Manufacturer | Haas Automation |
| Location | Production Unit C |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Coolant-related issue |
| Problem description | The operator noticed weak, intermittent coolant flow at the cutting zone and a stronger odour than usual from the coolant. |
| Reported by | OP-003 – Vignesh Rajan |
| Reported date/time | 2026-11-05 10:05 IST |
| Request source | OPERATOR_REPORT |
| Initial equipment observation | Machine running; coolant flow weak at the cutting zone; coolant appearance slightly cloudy; noticeable odour. |
| Maintenance category | CORRECTIVE |
| Priority | MEDIUM |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-002 – Priya Natarajan |
| Supervisor | SUP-001 – Lakshmi Narayanan |
| Assignment date/time | 2026-11-05 11:00 IST |
| Work started | 2026-11-06 09:30 IST |

**D. Maintenance Information**

- **Initial assessment:** Possible causes include low level, blocked nozzle or filter, pump issues or coolant condition. None confirmed. Operator asked to continue only with supervisor agreement.
- **Inspection findings:** So far: coolant level found lower than expected and some debris at a nozzle. Condition of the coolant (contamination, concentration) has not yet been assessed.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve coolant-related troubleshooting from the Haas manual.
  - Suggest inspection areas such as level, nozzles, filters and coolant condition.
  - Retrieve housekeeping and coolant responsibilities from the Equipment Maintenance SOP.
  - Retrieve skin-contact and slip-hazard safety guidance from the Machine Guarding Guidelines – OSHA.
  - Source documents (by name only): CNC Milling Machine Manual – Haas Automation; Equipment Maintenance SOP; Machine Guarding Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Check level and nozzles; assess coolant condition per the approved coolant management procedure; decide on coolant service; observe flow after action.
- **Safety considerations:**
  - Coolant exposure: use approved PPE; clean spills to prevent slips.
  - Machine stopped with doors closed during nozzle work or lockout for any pump or electrical work.
  - Electrical work only by qualified personnel.
- **Actual maintenance performed (by technician):** Initial corrective steps only: topped up coolant level per procedure and cleared debris at one nozzle. Coolant condition assessment still pending.

**E. Work Order Status**

IN_PROGRESS

**F. Resolution Information**

Completion-specific fields are null (root cause, action performed, parts replaced, completion date, verification, final condition, technician remarks).

**Pending action / investigation:** Coolant condition assessment and a decision by SUP-001 on coolant service, scheduled in the next planned window (date to be confirmed). Odour not yet explained. No root cause established.

### WO-010 – CNC Milling Machine (M003): Preventive inspection

**Status:** COMPLETED  |  **Priority:** LOW  |  **Fictional sample record**

**A. Identification**

| Field | Value |
|---|---|
| Work Order ID | WO-010 |
| Company | Aegis Manufacturing Ltd. |
| Equipment | M003 – CNC Milling Machine |
| Manufacturer | Haas Automation |
| Location | Production Unit C |

**B. Problem Information**

| Field | Value |
|---|---|
| Issue title | Preventive inspection |
| Problem description | Scheduled preventive inspection of the CNC milling machine generated from the preventive maintenance schedule. OP-003 was the operator on shift who released the machine for inspection. |
| Reported by | OP-003 – Vignesh Rajan |
| Reported date/time | 2026-11-02 08:00 IST |
| Request source | PREVENTIVE_SCHEDULE |
| Initial equipment observation | No fault reported; machine released for scheduled inspection. |
| Maintenance category | PREVENTIVE |
| Priority | LOW |

**C. Assignment**

| Field | Value |
|---|---|
| Assigned technician | TECH-001 – Senthil Kumar |
| Supervisor | SUP-002 – Rajesh Balasubramanian |
| Assignment date/time | 2026-11-02 08:30 IST |
| Work started | 2026-11-03 09:00 IST |

**D. Maintenance Information**

- **Initial assessment:** Routine inspection per the Preventive Maintenance SOP and the Equipment Inspection & Reporting SOP; no abnormality suspected.
- **Inspection findings:** Enclosure, windows and doors in good condition; door operation observed normal and interlock checks completed per the approved procedure; coolant level and condition observed acceptable; lubrication indication observed; spindle sound during warm-up observed normal; chips accumulated around the chip tray. No faults found.
- **AI assistance / retrieved knowledge (possible guidance only, not performed actions):**
  - Retrieve routine inspection content from the Haas manual.
  - Retrieve inspection scope from the Preventive Maintenance SOP and Equipment Inspection & Reporting SOP.
  - Retrieve guarding and interlock considerations from the Machine Guarding Guidelines – OSHA.
  - Source documents (by name only): CNC Milling Machine Manual – Haas Automation; Preventive Maintenance SOP; Equipment Inspection & Reporting SOP; Machine Guarding Guidelines – OSHA
  - Limitation: SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only.
- **Recommended maintenance action (suggested):** Carry out the scheduled inspection tasks and record findings; raise corrective requests for any fault.
- **Safety considerations:**
  - Guards and interlocks must not be bypassed.
  - Lockout under the Company Safety & LOTO Procedure for any task requiring access to hazards.
  - Electrical inspection only by qualified personnel.
- **Actual maintenance performed (by technician):** Completed scheduled inspection; cleared chip accumulation from the chip tray; recorded results.

**E. Work Order Status**

COMPLETED

**F. Resolution Information**

| Field | Value |
|---|---|
| Root cause | Not applicable – no fault identified |
| Maintenance action performed | Scheduled inspection completed and recorded; housekeeping of the chip tray carried out. |
| Parts replaced | None |
| Completion date/time | 2026-11-03 12:20 IST |
| Verified by | SUP-002 – Rajesh Balasubramanian (2026-11-03 14:00 IST) |
| Final equipment condition | Operational. No faults identified. |
| Technician remarks | Root cause not applicable (no fault). Inspection results may be used as a baseline. |

## PART 3 – Consolidated Work Order Summary

| Work Order | Equipment | Issue | Priority | Reported By | Assigned Technician | Reported | Status | Completed |
|---|---|---|---|---|---|---|---|---|
| WO-001 | M001 | Overheating | HIGH | OP-001 | TECH-001 | 2026-08-18 | COMPLETED | 2026-08-19 |
| WO-002 | M001 | Abnormal pressure | HIGH | OP-001 | TECH-002 | 2026-09-02 | COMPLETED | 2026-09-04 |
| WO-003 | M001 | Unusual vibration | MEDIUM | OP-001 | TECH-003 | 2026-11-10 | OPEN | — |
| WO-004 | M002 | Belt slipping | MEDIUM | OP-002 | TECH-002 | 2026-09-15 | COMPLETED | 2026-09-16 |
| WO-005 | M002 | Unusual noise | LOW | OP-002 | TECH-003 | 2026-11-13 | OPEN | — |
| WO-006 | M002 | Belt misalignment | MEDIUM | OP-002 | TECH-001 | 2026-10-12 | COMPLETED | 2026-10-14 |
| WO-007 | M003 | Tool wear | LOW | OP-003 | TECH-003 | 2026-10-20 | COMPLETED | 2026-10-21 |
| WO-008 | M003 | Abnormal vibration | HIGH | OP-003 | TECH-001 | 2026-11-16 | IN_PROGRESS | — |
| WO-009 | M003 | Coolant-related issue | MEDIUM | OP-003 | TECH-002 | 2026-11-05 | IN_PROGRESS | — |
| WO-010 | M003 | Preventive inspection | LOW | OP-003 | TECH-001 | 2026-11-02 | COMPLETED | 2026-11-03 |

Status mix: 6 COMPLETED, 2 IN_PROGRESS, 2 OPEN. Priority mix: 3 HIGH, 4 MEDIUM, 3 LOW.

## PART 4 – Database-Ready JSON

The same JSON is delivered as the file `SafeOps_Sample_Work_Orders.json`. Dates use ISO 8601 with the +05:30 offset; unavailable values are null. It includes `employees` and `equipment` arrays so foreign keys can be mapped to your eventual schema. Equipment `model` is null because no model was supplied.

```json
{
  "meta": {
    "company_name": "Aegis Manufacturing Ltd.",
    "is_fictional_sample_data": true,
    "timezone": "Asia/Kolkata (UTC+05:30)",
    "data_as_of": "2026-11-18T00:00:00+05:30",
    "note": "Fictional demonstration records, not actual incidents. Equipment models are intentionally not specified."
  },
  "employees": [
    {
      "employee_id": "OP-001",
      "full_name": "Karthik Subramanian",
      "role": "Machine Operator",
      "department": "Production – Unit A"
    },
    {
      "employee_id": "OP-002",
      "full_name": "Meenakshi Iyer",
      "role": "Machine Operator",
      "department": "Production – Unit B"
    },
    {
      "employee_id": "OP-003",
      "full_name": "Vignesh Rajan",
      "role": "Machine Operator",
      "department": "Production – Unit C"
    },
    {
      "employee_id": "TECH-001",
      "full_name": "Senthil Kumar",
      "role": "Maintenance Technician",
      "department": "Maintenance"
    },
    {
      "employee_id": "TECH-002",
      "full_name": "Priya Natarajan",
      "role": "Maintenance Technician",
      "department": "Maintenance"
    },
    {
      "employee_id": "TECH-003",
      "full_name": "Mohammed Irfan",
      "role": "Maintenance Technician",
      "department": "Maintenance"
    },
    {
      "employee_id": "SUP-001",
      "full_name": "Lakshmi Narayanan",
      "role": "Maintenance Supervisor",
      "department": "Maintenance"
    },
    {
      "employee_id": "SUP-002",
      "full_name": "Rajesh Balasubramanian",
      "role": "Maintenance Supervisor",
      "department": "Maintenance"
    }
  ],
  "equipment": [
    {
      "equipment_id": "M001",
      "equipment_name": "Air Compressor",
      "manufacturer": "Ingersoll Rand",
      "model": null,
      "location": "Production Unit A"
    },
    {
      "equipment_id": "M002",
      "equipment_name": "Conveyor Belt",
      "manufacturer": "Dorner",
      "model": null,
      "location": "Production Unit B"
    },
    {
      "equipment_id": "M003",
      "equipment_name": "CNC Milling Machine",
      "manufacturer": "Haas Automation",
      "model": null,
      "location": "Production Unit C"
    }
  ],
  "work_orders": [
    {
      "work_order_id": "WO-001",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M001",
      "equipment_name": "Air Compressor",
      "manufacturer": "Ingersoll Rand",
      "equipment_location": "Production Unit A",
      "issue_title": "Overheating",
      "problem_description": "During the morning shift the operator noticed a temperature-related warning on the compressor display and that the casing near the cooling area felt hotter than usual. The unit kept running and no shutdown occurred.",
      "reported_by_id": "OP-001",
      "reported_at": "2026-08-18T09:15:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Compressor running; temperature-related warning shown on the display (message text recorded in the request); no visible leakage; no unusual smell reported.",
      "maintenance_category": "CORRECTIVE",
      "priority": "HIGH",
      "assigned_technician_id": "TECH-001",
      "assigned_technician_name": "Senthil Kumar",
      "supervisor_id": "SUP-001",
      "assigned_at": "2026-08-18T10:05:00+05:30",
      "work_started_at": "2026-08-18T13:30:00+05:30",
      "initial_assessment": "Possible contributing factors include restricted cooling airflow, condition of cooling surfaces or filters, lubricant level or condition, and poor ventilation around the unit. None was confirmed at assessment; inspection required. Supervisor raised priority to HIGH because of the temperature warning on a running pressurised machine.",
      "inspection_findings": "After safe shutdown, cool-down and isolation under the Company Safety & LOTO Procedure, visual inspection found heavy dust and debris on the cooling surfaces and a visibly dirty air intake filter. Lubricant level indicator showed a normal indication per the unit's own indicator. No other abnormality was seen during the visual inspection.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve overheating or temperature-warning troubleshooting content from the manufacturer manual.",
          "Retrieve cooling, filter and cleaning maintenance sections to suggest inspection areas.",
          "Retrieve technician responsibilities from the Equipment Maintenance SOP.",
          "Retrieve isolation and cool-down precautions from the Company Safety & LOTO Procedure.",
          "Present source documents so the technician can verify the information."
        ],
        "source_documents": [
          "Air Compressor Manufacturer Manual – Ingersoll Rand",
          "Equipment Maintenance SOP",
          "Company Safety & LOTO Procedure"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Safely shut down and isolate; allow hot parts to cool; inspect cooling surfaces, air intake filter and lubricant indication; clean or replace per the manufacturer manual; test run under observation.",
      "safety_considerations": [
        "Hot surfaces: allow to cool before contact.",
        "Stored pressure and electrical energy must be isolated and controlled under the Company Safety & LOTO Procedure before any cover is opened.",
        "Electrical, pneumatic and mechanical work only by authorised, qualified personnel.",
        "Guards and covers must be refitted before the test run."
      ],
      "maintenance_performed": "Isolated and locked out; cooled; cleaned the cooling surfaces and replaced the air intake filter element following the manufacturer manual; refitted guards; removed lockout; performed an observed test run.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": "Reduced cooling effectiveness associated with accumulated dust and debris on the cooling surfaces and intake filter (supported by inspection observations). The underlying reason for the accumulation (cleaning frequency or ventilation) was not established.",
      "maintenance_action_performed": "Cleaning of cooling surfaces and replacement of the air intake filter element per the manufacturer manual, followed by an observed test run.",
      "parts_replaced": [
        {
          "description": "Air intake filter element",
          "part_number": null,
          "note": "Part number to be confirmed from manufacturer documentation"
        }
      ],
      "completed_at": "2026-08-19T15:30:00+05:30",
      "verified_by_id": "SUP-001",
      "verified_at": "2026-08-19T16:10:00+05:30",
      "final_equipment_condition": "Operational. No temperature warning during the verification run; continue observation.",
      "technician_remarks": "Recommend reviewing cleaning frequency of cooling surfaces and the filter at the next preventive maintenance. Recurrence should be raised as a new request."
    },
    {
      "work_order_id": "WO-002",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M001",
      "equipment_name": "Air Compressor",
      "manufacturer": "Ingersoll Rand",
      "equipment_location": "Production Unit A",
      "issue_title": "Abnormal pressure",
      "problem_description": "The operator reported that delivered air pressure at the point of use was lower than usual and that the compressor seemed to run for longer periods to keep up. No alarm was displayed.",
      "reported_by_id": "OP-001",
      "reported_at": "2026-09-02T14:20:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Compressor running; pressure indication lower than the operator's usual observation; no alarm; faint hissing sound noticed near the piping.",
      "maintenance_category": "CORRECTIVE",
      "priority": "HIGH",
      "assigned_technician_id": "TECH-002",
      "assigned_technician_name": "Priya Natarajan",
      "supervisor_id": "SUP-001",
      "assigned_at": "2026-09-02T15:10:00+05:30",
      "work_started_at": "2026-09-03T09:00:00+05:30",
      "initial_assessment": "Possible causes include air leakage, filter restriction, control or valve behaviour, or increased demand. None confirmed; inspection required. Rated HIGH because it involves a pressurised system and affects production air supply.",
      "inspection_findings": "With the affected section made safe, a leak-check was carried out with an approved leak-detection method. A leak was observed at one pipe/hose fitting downstream of the compressor outlet. Gauge and display indications were consistent with each other; no other fault was found in the inspected area.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve pressure-related troubleshooting content from the manufacturer manual.",
          "Suggest inspection areas such as fittings, filters and control components, as supported by retrieved documents.",
          "Retrieve work order handling guidance from the Maintenance Request & Work Order SOP.",
          "Retrieve pressure-isolation and release precautions from the Company Safety & LOTO Procedure and the OSHA Lockout/Tagout Guidelines."
        ],
        "source_documents": [
          "Air Compressor Manufacturer Manual – Ingersoll Rand",
          "Maintenance Request & Work Order SOP",
          "Company Safety & LOTO Procedure",
          "Lockout/Tagout Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Inspect for leaks, filters and control components; isolate and relieve pressure per approved procedure before opening any fitting; verify pressure behaviour after repair.",
      "safety_considerations": [
        "Compressed air is stored energy: isolate and release under the Company Safety & LOTO Procedure before opening fittings.",
        "Do not use compressed air or leak-checking in ways not approved by the company.",
        "Pneumatic and electrical work only by authorised, qualified personnel."
      ],
      "maintenance_performed": "Isolated and depressurised the affected section under lockout; re-made the fitting and replaced its sealing component; removed lockout; re-pressurised and repeated the leak-check.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": "Air leak at a pipe/hose fitting downstream of the compressor outlet, identified by leak-check (observed). Reason for the fitting loosening or seal deterioration not established.",
      "maintenance_action_performed": "Fitting re-made and sealing component replaced; leak-check repeated with no leak observed; pressure behaviour observed during a production run.",
      "parts_replaced": [
        {
          "description": "Fitting sealing component",
          "part_number": null,
          "note": "Part number to be confirmed from manufacturer documentation"
        }
      ],
      "completed_at": "2026-09-04T11:45:00+05:30",
      "verified_by_id": "SUP-001",
      "verified_at": "2026-09-04T13:00:00+05:30",
      "final_equipment_condition": "Operational. Pressure behaviour observed as normal by the operator after repair; follow-up observation advised.",
      "technician_remarks": "Other fittings in the line were visually checked and showed no leaks. Suggest including a fitting leak-check in the preventive inspection."
    },
    {
      "work_order_id": "WO-003",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M001",
      "equipment_name": "Air Compressor",
      "manufacturer": "Ingersoll Rand",
      "equipment_location": "Production Unit A",
      "issue_title": "Unusual vibration",
      "problem_description": "The operator felt a slight increase in vibration on the compressor enclosure panels during normal operation. Output pressure and running behaviour appeared normal.",
      "reported_by_id": "OP-001",
      "reported_at": "2026-11-10T16:05:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Compressor running; mild vibration felt on enclosure panels; no alarm; no unusual smell, leakage or pressure change reported.",
      "maintenance_category": "CORRECTIVE",
      "priority": "MEDIUM",
      "assigned_technician_id": "TECH-003",
      "assigned_technician_name": "Mohammed Irfan",
      "supervisor_id": "SUP-002",
      "assigned_at": "2026-11-11T09:30:00+05:30",
      "work_started_at": null,
      "initial_assessment": "Cause unknown. Areas for later inspection may include mounting and fasteners, rotating components and guards, and enclosure fittings. No cause is assumed. Supervisor rated MEDIUM: the machine is running normally but the change needs assessment within a reasonable period.",
      "inspection_findings": null,
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve vibration-related troubleshooting content from the manufacturer manual.",
          "Suggest candidate inspection areas as supported by the documents.",
          "Retrieve safe-access and isolation precautions from the Company Safety & LOTO Procedure.",
          "Retrieve guarding considerations from the Machine Guarding Guidelines – OSHA."
        ],
        "source_documents": [
          "Air Compressor Manufacturer Manual – Ingersoll Rand",
          "Equipment Maintenance SOP",
          "Company Safety & LOTO Procedure",
          "Machine Guarding Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Inspect after safe shutdown and isolation; check whether the vibration is changing; escalate if it increases.",
      "safety_considerations": [
        "Operator to stop the compressor safely and report if vibration, noise or heat increases.",
        "No guard or panel may be removed without authorisation and lockout under the Company Safety & LOTO Procedure.",
        "Mechanical and electrical inspection by authorised, qualified personnel only."
      ],
      "maintenance_performed": null,
      "status": "OPEN",
      "pending_actions": "Inspection not started. Supervisor SUP-002 to agree a downtime window with Production (date to be confirmed). Priority to be reassessed if vibration changes. No root cause has been determined.",
      "root_cause": null,
      "maintenance_action_performed": null,
      "parts_replaced": null,
      "completed_at": null,
      "verified_by_id": null,
      "verified_at": null,
      "final_equipment_condition": null,
      "technician_remarks": null
    },
    {
      "work_order_id": "WO-004",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M002",
      "equipment_name": "Conveyor Belt",
      "manufacturer": "Dorner",
      "equipment_location": "Production Unit B",
      "issue_title": "Belt slipping",
      "problem_description": "After a line cleaning activity, the operator noticed the conveyor belt hesitating at start-up under load and appearing to slip relative to the drive pulley, with some product delay.",
      "reported_by_id": "OP-002",
      "reported_at": "2026-09-15T10:20:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Conveyor running intermittently slow under load; belt appeared to move unevenly at the drive end; no unusual smell; no abnormal noise reported.",
      "maintenance_category": "CORRECTIVE",
      "priority": "MEDIUM",
      "assigned_technician_id": "TECH-002",
      "assigned_technician_name": "Priya Natarajan",
      "supervisor_id": "SUP-001",
      "assigned_at": "2026-09-15T11:15:00+05:30",
      "work_started_at": "2026-09-15T14:00:00+05:30",
      "initial_assessment": "Possible causes include reduced traction at the drive pulley (for example from contamination), belt tension, belt or pulley wear, or overload. None confirmed; inspection required.",
      "inspection_findings": "After isolation under lockout, residue and a moisture film were observed on the belt underside and the drive pulley surface. Belt tension appeared lower than the manufacturer procedure expects when checked as the manual describes. No obvious belt damage or pulley damage was observed.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve belt slipping and tension/tracking sections from the Dorner manual.",
          "Suggest inspection areas such as drive pulley surface, belt condition and tension, as supported by the documents.",
          "Retrieve inspection reporting guidance from the Equipment Inspection & Reporting SOP.",
          "Retrieve guarding and isolation precautions from the Machine Guarding Guidelines – OSHA and the Company Safety & LOTO Procedure."
        ],
        "source_documents": [
          "Conveyor Belt Manual – Dorner",
          "Equipment Inspection & Reporting SOP",
          "Machine Guarding Guidelines – OSHA",
          "Company Safety & LOTO Procedure"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Isolate; inspect belt, drive pulley and tension per the manufacturer manual; clean and adjust as the manual directs; test under load.",
      "safety_considerations": [
        "Conveyor must be isolated and locked out before guards are removed or any adjustment.",
        "In-running nip points at the drive pulley: keep hands clear and refit guards before restart.",
        "Authorised personnel only."
      ],
      "maintenance_performed": "Isolated under lockout; cleaned belt and drive pulley contact surfaces by the approved cleaning method; adjusted belt tension and checked tracking per the manufacturer manual; refitted guards; removed lockout; test run under load.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": "Reduced traction at the drive pulley contact surface associated with residue/moisture, together with belt tension below the manufacturer procedure. The relative contribution of each was not separated.",
      "maintenance_action_performed": "Cleaning of contact surfaces and tension adjustment per the manufacturer manual; test run under load observed with no slipping.",
      "parts_replaced": [],
      "completed_at": "2026-09-16T11:00:00+05:30",
      "verified_by_id": "SUP-001",
      "verified_at": "2026-09-16T12:15:00+05:30",
      "final_equipment_condition": "Operational. No slipping observed under load during verification; monitor after the next cleaning cycle.",
      "technician_remarks": "Suggest checking the belt and drive pulley for residue after each cleaning activity."
    },
    {
      "work_order_id": "WO-005",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M002",
      "equipment_name": "Conveyor Belt",
      "manufacturer": "Dorner",
      "equipment_location": "Production Unit B",
      "issue_title": "Unusual noise",
      "problem_description": "The operator heard an intermittent ticking or rubbing sound from the lower part of the conveyor while it ran. Belt movement and product flow appeared normal.",
      "reported_by_id": "OP-002",
      "reported_at": "2026-11-13T14:35:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Conveyor running normally; intermittent faint sound heard from the lower frame area; no stoppage; no product issue; operator did not approach moving parts.",
      "maintenance_category": "CORRECTIVE",
      "priority": "LOW",
      "assigned_technician_id": "TECH-003",
      "assigned_technician_name": "Mohammed Irfan",
      "supervisor_id": "SUP-002",
      "assigned_at": "2026-11-16T09:00:00+05:30",
      "work_started_at": null,
      "initial_assessment": "Cause unknown. Rollers, bearings, belt contact and fasteners are candidate inspection areas but none is assumed. Rated LOW because the noise is intermittent and faint with no performance effect; to be reassessed on any change.",
      "inspection_findings": null,
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve noise-related troubleshooting from the Dorner manual.",
          "Suggest candidate inspection areas as supported by the documents.",
          "Retrieve guarding precautions from the Machine Guarding Guidelines – OSHA and isolation steps from the Company Safety & LOTO Procedure.",
          "Retrieve inspection reporting steps from the Equipment Inspection & Reporting SOP."
        ],
        "source_documents": [
          "Conveyor Belt Manual – Dorner",
          "Equipment Inspection & Reporting SOP",
          "Machine Guarding Guidelines – OSHA",
          "Company Safety & LOTO Procedure"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Inspect during an agreed window after isolation; do not investigate while the belt is moving.",
      "safety_considerations": [
        "Never reach into or near a moving belt or rollers to locate noise.",
        "Stop and report if the noise worsens or belt behaviour changes.",
        "Isolation under the Company Safety & LOTO Procedure before access."
      ],
      "maintenance_performed": null,
      "status": "OPEN",
      "pending_actions": "Inspection not started; scheduling with Production for a stoppage window (date to be confirmed). No cause determined.",
      "root_cause": null,
      "maintenance_action_performed": null,
      "parts_replaced": null,
      "completed_at": null,
      "verified_by_id": null,
      "verified_at": null,
      "final_equipment_condition": null,
      "technician_remarks": null
    },
    {
      "work_order_id": "WO-006",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M002",
      "equipment_name": "Conveyor Belt",
      "manufacturer": "Dorner",
      "equipment_location": "Production Unit B",
      "issue_title": "Belt misalignment",
      "problem_description": "The operator observed the belt tracking toward one side of the frame with its edge nearing the side structure, producing an intermittent contact sound.",
      "reported_by_id": "OP-002",
      "reported_at": "2026-10-12T08:50:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Conveyor running; belt edge visibly closer to the frame on one side; occasional light contact sound; product slightly off-centre.",
      "maintenance_category": "CORRECTIVE",
      "priority": "MEDIUM",
      "assigned_technician_id": "TECH-001",
      "assigned_technician_name": "Senthil Kumar",
      "supervisor_id": "SUP-002",
      "assigned_at": "2026-10-12T09:40:00+05:30",
      "work_started_at": "2026-10-12T13:00:00+05:30",
      "initial_assessment": "Possible causes include roller or frame alignment, belt condition, loose adjustment hardware, or uneven loading. None confirmed; inspection required.",
      "inspection_findings": "After isolation under lockout, light edge-contact marks were seen on the belt edge and an adjustment fastener near the tail end was found loose. No structural damage was observed.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve tracking and alignment sections from the Dorner manual.",
          "Suggest inspection areas such as tracking adjustment, rollers and fasteners, as supported by the documents.",
          "Retrieve work order handling from the Maintenance Request & Work Order SOP.",
          "Retrieve guarding precautions from the Machine Guarding Guidelines – OSHA."
        ],
        "source_documents": [
          "Conveyor Belt Manual – Dorner",
          "Maintenance Request & Work Order SOP",
          "Machine Guarding Guidelines – OSHA",
          "Company Safety & LOTO Procedure"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Isolate; inspect belt edge, rollers and adjustment hardware; re-align per the manufacturer manual; verify tracking under running conditions.",
      "safety_considerations": [
        "Isolate under lockout before any adjustment.",
        "Keep clear of pinch and nip points; guards refitted before restart.",
        "Authorised personnel only."
      ],
      "maintenance_performed": "Isolated under lockout; secured the loose adjustment fastener; adjusted tracking per the manufacturer manual; refitted guards; removed lockout; observed repeated runs.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": "Misalignment associated with loose adjustment hardware at the tail end (observed). The event that initiated the loosening was not established.",
      "maintenance_action_performed": "Fastener secured and tracking adjusted per the manufacturer manual; belt tracking observed over repeated runs and under load.",
      "parts_replaced": [],
      "completed_at": "2026-10-14T10:30:00+05:30",
      "verified_by_id": "SUP-002",
      "verified_at": "2026-10-14T11:30:00+05:30",
      "final_equipment_condition": "Operational. Belt tracking centred during verification; edge condition to be monitored at the next inspection.",
      "technician_remarks": "Completion was delayed one day to match a production window. Edge marks were light and no replacement was triggered by visual inspection."
    },
    {
      "work_order_id": "WO-007",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M003",
      "equipment_name": "CNC Milling Machine",
      "manufacturer": "Haas Automation",
      "equipment_location": "Production Unit C",
      "issue_title": "Tool wear",
      "problem_description": "Surface finish on a production batch deteriorated gradually toward the end of the run. The operator found the cutting tool edge visibly worn. No machine alarm occurred.",
      "reported_by_id": "OP-003",
      "reported_at": "2026-10-20T15:10:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Machine stopped by operator at the end of the cycle; worn cutting edge visible; no alarm; no abnormal spindle noise reported.",
      "maintenance_category": "CORRECTIVE",
      "priority": "LOW",
      "assigned_technician_id": "TECH-003",
      "assigned_technician_name": "Mohammed Irfan",
      "supervisor_id": "SUP-002",
      "assigned_at": "2026-10-20T15:50:00+05:30",
      "work_started_at": "2026-10-21T09:00:00+05:30",
      "initial_assessment": "Tool wear is a common cause of finish deterioration, but tooling, process parameters, coolant delivery and machine condition each need checking. None confirmed.",
      "inspection_findings": "Cutting edge worn as reported. Tool holder was clean with no visible damage. Coolant flow reached the cutting zone as expected. No abnormal sound or alarm during a controlled test run.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve tool-wear and finish troubleshooting content from the Haas manual.",
          "Suggest inspection areas such as tool, holder and coolant delivery, as supported by the documents.",
          "Retrieve tool replacement and record-keeping from the Equipment Maintenance SOP.",
          "Retrieve machine safety precautions from the Machine Guarding Guidelines – OSHA."
        ],
        "source_documents": [
          "CNC Milling Machine Manual – Haas Automation",
          "Equipment Maintenance SOP",
          "Machine Guarding Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Replace or reject the worn tool per procedure; inspect holder and coolant delivery; run a controlled test cut; refer process parameter questions to the process owner.",
      "safety_considerations": [
        "Machine stopped and doors closed during any run; guards and interlocks must not be bypassed.",
        "Handle cutting tools with care.",
        "Lockout required if work involves access to moving parts."
      ],
      "maintenance_performed": "Replaced the worn cutting tool; checked holder and coolant delivery; recorded the change in the tool condition record; ran a controlled test cut for operator and quality inspection.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": "Tool wear consistent with the tool reaching the end of its useful life for the job. No machine fault was found by maintenance. Process factors were referred to the process owner for review.",
      "maintenance_action_performed": "Worn cutting tool replaced; holder and coolant delivery checked; test cut accepted by quality.",
      "parts_replaced": [
        {
          "description": "Cutting tool (end mill) per the job tool list",
          "part_number": null,
          "note": "Tool specification per production tool list; not stated here"
        }
      ],
      "completed_at": "2026-10-21T10:40:00+05:30",
      "verified_by_id": "SUP-002",
      "verified_at": "2026-10-21T11:20:00+05:30",
      "final_equipment_condition": "Operational. Finish acceptable on the test cut.",
      "technician_remarks": "Recommend reviewing tool life records with the process owner."
    },
    {
      "work_order_id": "WO-008",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M003",
      "equipment_name": "CNC Milling Machine",
      "manufacturer": "Haas Automation",
      "equipment_location": "Production Unit C",
      "issue_title": "Abnormal vibration",
      "problem_description": "During a machining operation the operator noticed vibration, a changed cutting sound and chatter marks on the parts. The operator stopped the machine and reported it.",
      "reported_by_id": "OP-003",
      "reported_at": "2026-11-16T11:20:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Machine stopped by the operator; chatter marks visible on the last parts; no alarm; doors closed; no leakage reported.",
      "maintenance_category": "CORRECTIVE",
      "priority": "HIGH",
      "assigned_technician_id": "TECH-001",
      "assigned_technician_name": "Senthil Kumar",
      "supervisor_id": "SUP-001",
      "assigned_at": "2026-11-16T12:00:00+05:30",
      "work_started_at": "2026-11-16T14:30:00+05:30",
      "initial_assessment": "Possible contributing factors include tooling, workholding, process parameters or machine condition (for example spindle or mounting). None confirmed. Rated HIGH because possible machine involvement and the risk of tool or workpiece failure.",
      "inspection_findings": "Preliminary only: cutting tool and holder were visually inspected with no obvious damage; workpiece clamping appeared secure. Cause not yet determined.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve vibration and chatter troubleshooting content from the Haas manual.",
          "Suggest inspection areas such as tool, holder, workholding and spindle condition, as supported by the documents.",
          "Retrieve escalation guidance from the Maintenance Request & Work Order SOP.",
          "Retrieve isolation precautions from the Company Safety & LOTO Procedure."
        ],
        "source_documents": [
          "CNC Milling Machine Manual – Haas Automation",
          "Maintenance Request & Work Order SOP",
          "Company Safety & LOTO Procedure",
          "Machine Guarding Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Machine remains out of service; repeat a controlled test with a fresh tool to separate tooling from machine causes; inspect spindle and holder interface; escalate to the manufacturer's service channel if unresolved.",
      "safety_considerations": [
        "Machine kept out of service and tagged until the cause is established.",
        "Enclosure access only under lockout by authorised personnel; interlocks must not be bypassed.",
        "Electrical and mechanical diagnosis by qualified personnel only."
      ],
      "maintenance_performed": "Inspection only so far: visual inspection of tool, holder and clamping. No corrective repair has been performed.",
      "status": "IN_PROGRESS",
      "pending_actions": "Controlled test cut with a fresh tool pending. If vibration persists, spindle and mounting inspection by a qualified technician and possible manufacturer service. No root cause has been established.",
      "root_cause": null,
      "maintenance_action_performed": null,
      "parts_replaced": null,
      "completed_at": null,
      "verified_by_id": null,
      "verified_at": null,
      "final_equipment_condition": null,
      "technician_remarks": null
    },
    {
      "work_order_id": "WO-009",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M003",
      "equipment_name": "CNC Milling Machine",
      "manufacturer": "Haas Automation",
      "equipment_location": "Production Unit C",
      "issue_title": "Coolant-related issue",
      "problem_description": "The operator noticed weak, intermittent coolant flow at the cutting zone and a stronger odour than usual from the coolant.",
      "reported_by_id": "OP-003",
      "reported_at": "2026-11-05T10:05:00+05:30",
      "request_source": "OPERATOR_REPORT",
      "initial_equipment_observation": "Machine running; coolant flow weak at the cutting zone; coolant appearance slightly cloudy; noticeable odour.",
      "maintenance_category": "CORRECTIVE",
      "priority": "MEDIUM",
      "assigned_technician_id": "TECH-002",
      "assigned_technician_name": "Priya Natarajan",
      "supervisor_id": "SUP-001",
      "assigned_at": "2026-11-05T11:00:00+05:30",
      "work_started_at": "2026-11-06T09:30:00+05:30",
      "initial_assessment": "Possible causes include low level, blocked nozzle or filter, pump issues or coolant condition. None confirmed. Operator asked to continue only with supervisor agreement.",
      "inspection_findings": "So far: coolant level found lower than expected and some debris at a nozzle. Condition of the coolant (contamination, concentration) has not yet been assessed.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve coolant-related troubleshooting from the Haas manual.",
          "Suggest inspection areas such as level, nozzles, filters and coolant condition.",
          "Retrieve housekeeping and coolant responsibilities from the Equipment Maintenance SOP.",
          "Retrieve skin-contact and slip-hazard safety guidance from the Machine Guarding Guidelines – OSHA."
        ],
        "source_documents": [
          "CNC Milling Machine Manual – Haas Automation",
          "Equipment Maintenance SOP",
          "Machine Guarding Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Check level and nozzles; assess coolant condition per the approved coolant management procedure; decide on coolant service; observe flow after action.",
      "safety_considerations": [
        "Coolant exposure: use approved PPE; clean spills to prevent slips.",
        "Machine stopped with doors closed during nozzle work or lockout for any pump or electrical work.",
        "Electrical work only by qualified personnel."
      ],
      "maintenance_performed": "Initial corrective steps only: topped up coolant level per procedure and cleared debris at one nozzle. Coolant condition assessment still pending.",
      "status": "IN_PROGRESS",
      "pending_actions": "Coolant condition assessment and a decision by SUP-001 on coolant service, scheduled in the next planned window (date to be confirmed). Odour not yet explained. No root cause established.",
      "root_cause": null,
      "maintenance_action_performed": null,
      "parts_replaced": null,
      "completed_at": null,
      "verified_by_id": null,
      "verified_at": null,
      "final_equipment_condition": null,
      "technician_remarks": null
    },
    {
      "work_order_id": "WO-010",
      "company_name": "Aegis Manufacturing Ltd.",
      "is_fictional_sample": true,
      "equipment_id": "M003",
      "equipment_name": "CNC Milling Machine",
      "manufacturer": "Haas Automation",
      "equipment_location": "Production Unit C",
      "issue_title": "Preventive inspection",
      "problem_description": "Scheduled preventive inspection of the CNC milling machine generated from the preventive maintenance schedule. OP-003 was the operator on shift who released the machine for inspection.",
      "reported_by_id": "OP-003",
      "reported_at": "2026-11-02T08:00:00+05:30",
      "request_source": "PREVENTIVE_SCHEDULE",
      "initial_equipment_observation": "No fault reported; machine released for scheduled inspection.",
      "maintenance_category": "PREVENTIVE",
      "priority": "LOW",
      "assigned_technician_id": "TECH-001",
      "assigned_technician_name": "Senthil Kumar",
      "supervisor_id": "SUP-002",
      "assigned_at": "2026-11-02T08:30:00+05:30",
      "work_started_at": "2026-11-03T09:00:00+05:30",
      "initial_assessment": "Routine inspection per the Preventive Maintenance SOP and the Equipment Inspection & Reporting SOP; no abnormality suspected.",
      "inspection_findings": "Enclosure, windows and doors in good condition; door operation observed normal and interlock checks completed per the approved procedure; coolant level and condition observed acceptable; lubrication indication observed; spindle sound during warm-up observed normal; chips accumulated around the chip tray. No faults found.",
      "ai_assistance": {
        "possible_guidance": [
          "Retrieve routine inspection content from the Haas manual.",
          "Retrieve inspection scope from the Preventive Maintenance SOP and Equipment Inspection & Reporting SOP.",
          "Retrieve guarding and interlock considerations from the Machine Guarding Guidelines – OSHA."
        ],
        "source_documents": [
          "CNC Milling Machine Manual – Haas Automation",
          "Preventive Maintenance SOP",
          "Equipment Inspection & Reporting SOP",
          "Machine Guarding Guidelines – OSHA"
        ],
        "limitations": "SafeOps AI can only suggest and retrieve; it has not inspected the machine, has not confirmed any cause and does not authorise maintenance. Actions listed under maintenance performed were carried out by the named technician, not by the AI. No page or section references are cited; documents are identified by name only."
      },
      "recommended_maintenance_action": "Carry out the scheduled inspection tasks and record findings; raise corrective requests for any fault.",
      "safety_considerations": [
        "Guards and interlocks must not be bypassed.",
        "Lockout under the Company Safety & LOTO Procedure for any task requiring access to hazards.",
        "Electrical inspection only by qualified personnel."
      ],
      "maintenance_performed": "Completed scheduled inspection; cleared chip accumulation from the chip tray; recorded results.",
      "status": "COMPLETED",
      "pending_actions": null,
      "root_cause": null,
      "maintenance_action_performed": "Scheduled inspection completed and recorded; housekeeping of the chip tray carried out.",
      "parts_replaced": [],
      "completed_at": "2026-11-03T12:20:00+05:30",
      "verified_by_id": "SUP-002",
      "verified_at": "2026-11-03T14:00:00+05:30",
      "final_equipment_condition": "Operational. No faults identified.",
      "technician_remarks": "Root cause not applicable (no fault). Inspection results may be used as a baseline."
    }
  ]
}
```

## PART 5 – RAG Suitability

### Which work orders to convert

| Work order | Index for RAG? | Reason |
|---|---|---|
| WO-001 Overheating (M001) | Yes | Completed; symptoms, findings and an evidence-supported cause (cooling surface and filter contamination) are documented |
| WO-002 Abnormal pressure (M001) | Yes | Completed; leak found by inspection and repaired; useful for similar pressure complaints |
| WO-004 Belt slipping (M002) | Yes | Completed; findings and an honestly qualified cause; matches the example query on belt slipping |
| WO-006 Belt misalignment (M002) | Yes | Completed; loose adjustment hardware found; useful for tracking problems |
| WO-007 Tool wear (M003) | Yes | Completed; shows how maintenance separated tool wear from machine fault |
| WO-010 Preventive inspection (M003) | Optional, low weight | Completed but no fault; useful as an inspection baseline, not for fault retrieval |
| WO-003, WO-005 (OPEN), WO-008, WO-009 (IN_PROGRESS) | No, not yet | No confirmed root cause or outcome. Re-evaluate for indexing after completion and verification |

### Why these are useful

Completed records link a reported symptom to inspection findings and the action that followed, so a technician reporting a similar symptom can retrieve what was found before. Writing the symptom in the operator's own words helps matching.

### Fields to include in the RAG document

- Equipment ID, name and manufacturer (no model unless confirmed).
- Issue title and problem description; initial equipment observation.
- Inspection findings.
- Root cause as written, including its limits (for example 'not separated' or 'not established').
- Maintenance action performed and parts replaced (descriptions only).
- Resolution outcome and final equipment condition.
- Safety considerations.
- Work order ID, completion date and verification status as metadata for filtering and citation.
- A fixed caveat sentence: 'This is a historical case. It shows what was found and done for that event; it is not a confirmed solution for a current issue.'

### Fields that stay in PostgreSQL only

- Employee IDs and names, assignment and verification details.
- Timestamps, priority, status, request source, maintenance category.
- Pending actions and workflow fields.
- The AI assistance field: it describes suggestions, not facts, and would pollute retrieval if indexed.
- Technician remarks if they contain staffing or scheduling comments.

### Handling the incident versus solution distinction

- Retrieved answers should label the source as 'previous case WO-004' and describe it as a past event.
- Where the record's root cause is qualified, the answer must preserve that qualification.
- The model should not state that the earlier action will fix the current problem; it should suggest the same inspection areas and tell the technician to follow the manufacturer manual, the SOPs and the Company Safety & LOTO Procedure.
- Open and in-progress work orders stay out of the index so unresolved cases are not mistaken for solutions.
- Keep one chunk per work order; do not split root cause from findings.

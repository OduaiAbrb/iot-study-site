/* ── IoT Study Guide App ──────────────────────────────────────── */
'use strict';

// ── CHAPTER METADATA ─────────────────────────────────────────────
const CHAPTERS = [
  { id:'home',     skip: true },
  { id:'ch1',  num:'01', title:'Introduction to IoT',       desc:'Fundamentals of connected systems, IoT ecosystem, key characteristics and evolution timeline.' },
  { id:'ch2',  num:'02', title:'IoT Architecture',          desc:'3-layer and 5-layer reference models, fog/edge/cloud, communication protocols comparison.' },
  { id:'ch3',  num:'03', title:'DevOps for IoT',            desc:'CI/CD pipelines, OTA updates, containerization, and infrastructure-as-code for IoT fleets.' },
  { id:'ch4',  num:'04', title:'Software Design for IoT',   desc:'Event-driven architecture, microservices, design patterns: Gateway, Device Twin, Observer.' },
  { id:'ch6',  num:'06', title:'Data Visualization',        desc:'Time-series dashboards, geospatial maps, Grafana/Kibana, and live sensor simulation.' },
  { id:'ch7',  num:'07', title:'Data Management',           desc:'Time-series DBs, stream processing with Kafka/Flink, data lakes, GDPR governance.' },
  { id:'ch8',  num:'08', title:'Security Engineering',      desc:'Threat models, mTLS, secure boot, OWASP IoT Top 10, network segmentation.' },
  { id:'ch9',  num:'09', title:'Testing & Maintenance',     desc:'IoT test pyramid, hardware-in-the-loop, chaos engineering, predictive maintenance.' },
  { id:'ch10', num:'10', title:'IoT Challenges',            desc:'Power management, connectivity, interoperability, scalability, and lifecycle management.' },
  { id:'ch11', num:'11', title:'Emerging Trends',           desc:'TinyML, digital twins, 5G, federated learning, Matter standard, neuromorphic chips.' },
  { id:'ch12', num:'12', title:'Future of IoT',             desc:'Ambient IoT, autonomous edge, trillion-device scale, BioIoT, and sustainable computing.' },
  { id:'quiz',     skip: true },
  { id:'glossary', skip: true },
];

const CONTENT_CHAPTERS = CHAPTERS.filter(c => !c.skip);

// ── QUIZ QUESTIONS ─────────────────────────────────────────────────
const QUESTIONS = [
  // Chapter 1
  { chapter:'ch1', q:'Who coined the term "Internet of Things"?', opts:['Tim Berners-Lee','Kevin Ashton','Vint Cerf','Bill Gates'], ans:1, exp:'Kevin Ashton coined "Internet of Things" in 1999 while working at P&G.' },
  { chapter:'ch1', q:'Which component converts physical phenomena into digital signals?', opts:['Actuator','Gateway','Sensor','Router'], ans:2, exp:'A sensor detects physical phenomena (temperature, motion) and converts them to digital signals.' },
  { chapter:'ch1', q:'What is the primary role of an IoT gateway?', opts:['Generate power for devices','Bridge IoT devices to the internet','Store sensor data locally','Display visualizations'], ans:1, exp:'Gateways bridge IoT devices to the internet and handle protocol translation and data aggregation.' },
  { chapter:'ch1', q:'Approximately how many connected devices are projected by 2030?', opts:['5 billion','15 billion','30 billion','75 billion'], ans:3, exp:'Forecasts project 75+ billion connected IoT devices by 2030.' },
  { chapter:'ch1', q:'Which IoT characteristic refers to the diverse hardware and software involved?', opts:['Scalability','Heterogeneity','Interoperability','Latency'], ans:1, exp:'Heterogeneity refers to the diversity of hardware platforms, operating systems, and protocols in IoT.' },
  { chapter:'ch1', q:'MQTT uses which messaging model?', opts:['Request/Response','Pub/Sub','RPC','Polling'], ans:1, exp:'MQTT uses a publish/subscribe model, making it lightweight and suitable for IoT telemetry.' },
  { chapter:'ch1', q:'What does "edge computing" mean in IoT context?', opts:['Processing data at the cloud datacenter','Processing data near the source device','Connecting devices via Ethernet','Using edge servers exclusively'], ans:1, exp:'Edge computing processes data near the IoT device, reducing latency and bandwidth usage.' },

  // Chapter 2
  { chapter:'ch2', q:'The 3-layer IoT architecture includes the Perception, Network, and which other layer?', opts:['Transport','Application','Business','Presentation'], ans:1, exp:'The classic 3-layer model has Perception (sensors), Network (connectivity), and Application (logic/UI) layers.' },
  { chapter:'ch2', q:'Which protocol is best suited for long-range, low-power IoT applications like agriculture?', opts:['WiFi 6','Bluetooth LE','LoRaWAN','Zigbee'], ans:2, exp:'LoRaWAN supports 2–15km range with ultra-low power, ideal for agricultural and smart city deployments.' },
  { chapter:'ch2', q:'Fog computing primarily aims to:', opts:['Replace cloud computing','Reduce latency by processing closer to devices','Increase device battery life','Improve GPS accuracy'], ans:1, exp:'Fog computing extends cloud capabilities to the network edge, reducing latency for time-sensitive IoT apps.' },
  { chapter:'ch2', q:'Which IoT protocol has the lowest power consumption?', opts:['WiFi 6','NB-IoT','CoAP','Zigbee'], ans:2, exp:'CoAP is specifically designed for very constrained devices and has extremely low power requirements.' },
  { chapter:'ch2', q:'The 5-layer IoT model adds which two layers compared to the 3-layer model?', opts:['Transport + Session','Business + Processing','Security + Gateway','Cloud + Analytics'], ans:1, exp:'The 5-layer model extends the 3-layer with a Business layer (top) and Processing/Middleware layer.' },
  { chapter:'ch2', q:'Z-Wave is primarily used for:', opts:['Industrial machinery','Home automation','Long-range tracking','Satellite communication'], ans:1, exp:'Z-Wave is a low-power RF protocol designed for home automation devices with ~30m range.' },

  // Chapter 3
  { chapter:'ch3', q:'What does OTA stand for in IoT DevOps?', opts:['Open Transfer Architecture','Over-the-Air','Operational Technology Automation','On-Target Analysis'], ans:1, exp:'OTA (Over-the-Air) updates push firmware changes to deployed IoT devices without physical access.' },
  { chapter:'ch3', q:'Which tool is specifically designed for container-based IoT OTA updates?', opts:['Jenkins','Mender','Terraform','Ansible'], ans:1, exp:'Balena and Mender are purpose-built for container-based and firmware OTA update workflows.' },
  { chapter:'ch3', q:'Why is rollback capability critical in IoT OTA updates?', opts:['To save bandwidth','To recover from failed updates that could brick devices','To encrypt the firmware','To compress delta updates'], ans:1, exp:'A failed OTA on a remote device can brick it permanently; rollback allows safe recovery to the prior version.' },
  { chapter:'ch3', q:'Infrastructure as Code (IaC) tools used in IoT include:', opts:['Node-RED and Grafana','Terraform and Ansible','Docker and Kubernetes','Git and GitHub Actions'], ans:1, exp:'Terraform and Ansible manage IoT cloud infrastructure declaratively and reproducibly.' },
  { chapter:'ch3', q:'Which AWS service provides edge runtime for IoT deployments?', opts:['AWS Lambda','AWS IoT Greengrass','AWS ECS','AWS RDS'], ans:1, exp:'AWS IoT Greengrass runs Lambda functions and containers at the edge on IoT devices.' },

  // Chapter 4
  { chapter:'ch4', q:'The Device Twin pattern stores:', opts:['Physical device firmware','A cloud-side representation of device state','Encrypted security keys','Raw sensor readings only'], ans:1, exp:'Device Twin is a cloud-side JSON document representing both reported (actual) and desired device state.' },
  { chapter:'ch4', q:'Which pattern buffers data locally when offline and flushes on reconnect?', opts:['Observer Pattern','Gateway Pattern','Store & Forward','Command Pattern'], ans:2, exp:'Store & Forward handles intermittent connectivity by buffering locally and transmitting when connected.' },
  { chapter:'ch4', q:'Event-driven architectures use message brokers to:', opts:['Encrypt device communications','Decouple producers from consumers','Compress sensor data','Provision new devices'], ans:1, exp:'Message brokers like MQTT and Kafka decouple event producers from consumers, enabling scalable designs.' },
  { chapter:'ch4', q:'The Heartbeat pattern is used to:', opts:['Synchronize device clocks','Monitor device health via periodic signals','Encrypt firmware updates','Compress MQTT payloads'], ans:1, exp:'Heartbeats are periodic signals; absence triggers alerts indicating a device may have failed.' },
  { chapter:'ch4', q:'Apache Flink is used for:', opts:['Device registration','Stateful stream processing of IoT data','Secure boot verification','Over-the-air updates'], ans:1, exp:'Apache Flink provides stateful stream processing with windowing, joins, and CEP on live IoT data.' },

  // Chapter 6
  { chapter:'ch6', q:'Which tool is most commonly used for IoT operational dashboards?', opts:['Microsoft Word','Grafana','Notepad','Excel'], ans:1, exp:'Grafana is the de-facto open-source platform for time-series dashboards and IoT monitoring.' },
  { chapter:'ch6', q:'Heatmaps are best suited for visualizing:', opts:['Device firmware versions','Density and intensity across 2D space','MQTT message counts','Certificate expiry dates'], ans:1, exp:'Heatmaps visualize spatial density — foot traffic, temperature distribution, network signal strength.' },
  { chapter:'ch6', q:'What type of chart is most appropriate for IoT sensor readings over time?', opts:['Pie chart','Bar chart','Time-series line chart','Scatter plot'], ans:2, exp:'Time-series line/area charts are ideal for sensor data as they show trends and anomalies over time.' },
  { chapter:'ch6', q:'Node-RED is best described as:', opts:['A time-series database','A flow-based IoT dashboard and integration tool','A hardware simulator','A security framework'], ans:1, exp:'Node-RED is a flow-based visual programming tool for wiring IoT devices, APIs, and dashboards.' },

  // Chapter 7
  { chapter:'ch7', q:'InfluxDB is an example of which database type?', opts:['Relational','Document','Time-series','Graph'], ans:2, exp:'InfluxDB is a purpose-built time-series database optimized for high write throughput and time-range queries.' },
  { chapter:'ch7', q:'Apache Kafka primarily provides:', opts:['SQL query capabilities','High-throughput publish-subscribe messaging','Graph traversal','Object storage'], ans:1, exp:'Apache Kafka is a distributed event streaming platform for high-throughput, fault-tolerant pub-sub messaging.' },
  { chapter:'ch7', q:'Which regulation most impacts IoT data governance in Europe?', opts:['HIPAA','SOC 2','GDPR','PCI DSS'], ans:2, exp:'GDPR (General Data Protection Regulation) requires data minimization, consent, and right-to-erasure for EU residents.' },
  { chapter:'ch7', q:'A data lake stores data in:', opts:['Normalized relational tables','Raw format in object storage (S3, etc.)','In-memory caches','Time-series columns'], ans:1, exp:'Data lakes store raw, schema-on-read data in cheap object storage for batch analytics and ML training.' },
  { chapter:'ch7', q:'Edge preprocessing in IoT helps by:', opts:['Increasing cloud costs','Filtering noise before data leaves the device','Replacing cloud storage','Adding more protocols'], ans:1, exp:'Edge preprocessing reduces bandwidth and storage costs by filtering, aggregating, and compressing data at source.' },

  // Chapter 8
  { chapter:'ch8', q:'mTLS stands for:', opts:['Multi-threaded TLS','Mutual TLS','Managed TLS','Modular TLS'], ans:1, exp:'mTLS (Mutual TLS) requires both client and server to authenticate each other, ideal for IoT device identity.' },
  { chapter:'ch8', q:'What is OWASP IoT Top 10 #1?', opts:['Insecure network services','Weak/guessable/hardcoded passwords','Lack of updates','Physical tampering'], ans:1, exp:'Weak, guessable, or hardcoded passwords/credentials are the #1 OWASP IoT vulnerability.' },
  { chapter:'ch8', q:'Secure boot prevents:', opts:['Network eavesdropping','Running tampered firmware','Physical device theft','API rate limiting'], ans:1, exp:'Secure boot creates a cryptographically verified chain from hardware root of trust through bootloader to firmware.' },
  { chapter:'ch8', q:'DTLS is a lightweight alternative to TLS for:', opts:['HTTP connections','Constrained IoT devices using UDP','High-bandwidth video','Cloud APIs'], ans:1, exp:'DTLS (Datagram TLS) provides security over UDP, suitable for constrained devices that cannot run TCP.' },
  { chapter:'ch8', q:'IEC 62443 is a security standard for:', opts:['Consumer IoT devices','Industrial control systems','Mobile applications','Cloud infrastructure'], ans:1, exp:'IEC 62443 defines security requirements specifically for industrial automation and control systems (ICS/SCADA).' },

  // Chapter 9
  { chapter:'ch9', q:'Hardware-in-the-Loop testing connects real hardware to:', opts:['A production environment','A simulated environment','The internet directly','Another physical device'], ans:1, exp:'HIL testing uses real hardware connected to a simulated environment, validating firmware without full deployment.' },
  { chapter:'ch9', q:'Chaos engineering deliberately injects:', opts:['New features','Failures like network partitions and power loss','Security updates','Performance improvements'], ans:1, exp:'Chaos engineering injects faults to validate that the system recovers gracefully from real-world failures.' },
  { chapter:'ch9', q:'Which tool emulates ARM/RISC-V hardware for IoT CI pipelines?', opts:['Docker','Jenkins','QEMU','Grafana'], ans:2, exp:'QEMU is an open-source processor emulator that allows running firmware on virtual hardware in CI pipelines.' },
  { chapter:'ch9', q:'Predictive maintenance in IoT uses:', opts:['Regular scheduled downtime','ML models on sensor streams to anticipate failures','Manual inspection schedules','GPS tracking'], ans:1, exp:'ML anomaly detection on sensor streams identifies deviations from normal behavior before failure occurs.' },
  { chapter:'ch9', q:'In the IoT test pyramid, which layer has the highest count?', opts:['E2E tests','Integration tests','Hardware-in-Loop tests','Unit tests'], ans:3, exp:'Like software pyramids, unit tests are most numerous — they are fast, cheap, and test firmware logic in isolation.' },

  // Chapter 10
  { chapter:'ch10', q:'Which IoT challenge involves managing devices with heterogeneous hardware and protocols?', opts:['Power management','Scalability','Interoperability','Lifecycle management'], ans:2, exp:'Interoperability is a core challenge — thousands of vendors, protocols, and data formats must work together.' },
  { chapter:'ch10', q:'The "Matter" standard aims to solve which IoT challenge?', opts:['Power management','Security vulnerabilities','Smart home interoperability','Battery replacement'], ans:2, exp:'Matter is a unified smart home protocol backed by Apple/Google/Amazon/Samsung to solve interoperability.' },
  { chapter:'ch10', q:'Which IoT challenge is addressed by duty cycling and sleep modes?', opts:['Connectivity','Power management','Scalability','Interoperability'], ans:1, exp:'Duty cycling (periodic sleep/wake) is a primary technique for extending battery life on constrained IoT devices.' },
  { chapter:'ch10', q:'A device deployed for 15 years raises which primary concern?', opts:['Initial cost','Lifecycle management and long-term software support','WiFi range','Display resolution'], ans:1, exp:'Long-lived IoT devices require sustained firmware support, security patches, and eventual decommissioning plans.' },

  // Chapter 11
  { chapter:'ch11', q:'TinyML refers to:', opts:['Cloud ML for IoT dashboards','Running ML inference on microcontrollers at milliwatt power','A JavaScript ML library','A time-series forecasting tool'], ans:1, exp:'TinyML runs ML inference on Cortex-M/RISC-V MCUs using TensorFlow Lite Micro with milliwatts of power.' },
  { chapter:'ch11', q:'A Digital Twin is best described as:', opts:['A backup device','A real-time virtual replica of a physical asset','An encrypted firmware image','A network protocol'], ans:1, exp:'Digital twins mirror physical assets in real time, enabling simulation, predictive maintenance, and what-if analysis.' },
  { chapter:'ch11', q:'Federated learning preserves privacy by:', opts:['Centralizing all data on secure servers','Training ML models across devices without sharing raw data','Encrypting all sensor readings','Blocking internet access'], ans:1, exp:'Federated learning keeps training data on devices; only model updates (gradients) are aggregated centrally.' },
  { chapter:'ch11', q:'5G URLLC enables IoT use cases requiring:', opts:['High bandwidth only','Ultra-low latency (~1ms) for safety-critical applications','Low device density','Long range connectivity'], ans:1, exp:'URLLC (Ultra-Reliable Low-Latency Communication) enables autonomous vehicles and remote surgery on 5G.' },
  { chapter:'ch11', q:'Intel Loihi is an example of:', opts:['A time-series database chip','Neuromorphic computing hardware','A cloud IoT platform','A Zigbee coordinator'], ans:1, exp:'Intel Loihi is a neuromorphic chip that mimics neural spiking, enabling event-driven sensing at ultra-low power.' },

  // Chapter 12
  { chapter:'ch12', q:'Ambient IoT refers to devices powered by:', opts:['Lithium batteries','Solar panels only','Ambient energy (RF, light, vibration) — no batteries','USB power'], ans:2, exp:'Ambient IoT harvests energy from the environment, enabling truly battery-free, disposable sensors.' },
  { chapter:'ch12', q:'Cognitive IoT systems are characterized by:', opts:['Rigid pre-programmed behavior','Self-organization and real-time learning and adaptation','High power consumption','Proprietary protocols'], ans:1, exp:'Cognitive IoT uses swarm intelligence and adaptive algorithms for devices that learn and self-organize.' },
  { chapter:'ch12', q:'BioIoT includes which type of device?', opts:['Industrial sensors','Implantable biosensors and smart pills','Traffic cameras','Smart thermostats'], ans:1, exp:'BioIoT spans implantable sensors, smart pills, and neural interfaces that bridge biology and connected technology.' },
  { chapter:'ch12', q:'Web3 + IoT enables what capability?', opts:['Faster WiFi','Trustless machine-to-machine transactions via blockchain','Better GPS accuracy','Lower energy consumption'], ans:1, exp:'Blockchain-based IoT enables decentralized device identity and automated M2M transactions via smart contracts.' },
];

// ── GLOSSARY DATA ─────────────────────────────────────────────────
const GLOSSARY = [
  { term:'Actuator', def:'A device that responds to digital commands by affecting the physical world (motor, relay, valve, LED).', tag:'Hardware' },
  { term:'Ambient IoT', def:'IoT devices powered entirely by harvested ambient energy (RF, light, vibration) — no batteries required.', tag:'Trend' },
  { term:'AMQP', def:'Advanced Message Queuing Protocol — enterprise messaging protocol for reliable, transactional IoT data exchange.', tag:'Protocol' },
  { term:'API Gateway', def:'Manages API traffic for IoT backends — authentication, rate limiting, routing, and protocol translation.', tag:'Architecture' },
  { term:'Azure Digital Twins', def:'Microsoft\'s platform for creating and managing digital twin models of physical environments.', tag:'Platform' },
  { term:'Backpressure', def:'Flow-control mechanism that slows data producers when consumers cannot keep up — essential in reactive IoT systems.', tag:'Architecture' },
  { term:'BLE', def:'Bluetooth Low Energy — short-range wireless protocol (<100m) optimized for low power, used in wearables and beacons.', tag:'Protocol' },
  { term:'Chaos Engineering', def:'Deliberate fault injection (network partitions, power loss) to validate system resilience and recovery paths.', tag:'Testing' },
  { term:'CoAP', def:'Constrained Application Protocol — RESTful protocol designed for resource-constrained IoT devices, runs over UDP.', tag:'Protocol' },
  { term:'Cognitive IoT', def:'IoT systems that learn and self-organize using swarm intelligence and adaptive ML algorithms.', tag:'Trend' },
  { term:'Device Twin', def:'Cloud-side JSON representation of a device\'s reported state and desired target state; enables remote configuration.', tag:'Pattern' },
  { term:'DTLS', def:'Datagram TLS — provides TLS-equivalent security over UDP for constrained IoT devices.', tag:'Security' },
  { term:'Duty Cycling', def:'Alternating IoT devices between active and sleep modes to reduce power consumption.', tag:'Power' },
  { term:'Edge Computing', def:'Processing data at or near the IoT device to minimize latency and bandwidth usage.', tag:'Architecture' },
  { term:'Event Sourcing', def:'Storing all state changes as an immutable sequence of events — enables replay, audit, and recovery in IoT systems.', tag:'Pattern' },
  { term:'Federated Learning', def:'Training ML models across distributed devices without sharing raw data — preserves privacy.', tag:'AI/ML' },
  { term:'Firmware', def:'Embedded software stored in non-volatile memory that controls IoT hardware at the lowest level.', tag:'Hardware' },
  { term:'Fog Computing', def:'Computing tier between IoT devices and cloud — reduces latency by processing data at intermediate nodes.', tag:'Architecture' },
  { term:'GDPR', def:'General Data Protection Regulation — EU law governing personal data collection, processing, and erasure rights.', tag:'Governance' },
  { term:'Gateway Pattern', def:'Single entry point that aggregates device data, handles protocol translation, and provides security.', tag:'Pattern' },
  { term:'Grafana', def:'Open-source analytics/visualization platform widely used for IoT dashboards and time-series monitoring.', tag:'Tool' },
  { term:'Hardware-in-the-Loop', def:'Testing technique connecting real hardware to a simulated environment for realistic validation.', tag:'Testing' },
  { term:'Heartbeat Pattern', def:'IoT devices send periodic signals; absence triggers alerts for device health/connectivity monitoring.', tag:'Pattern' },
  { term:'InfluxDB', def:'Purpose-built time-series database optimized for high-frequency IoT sensor data with automatic retention policies.', tag:'Database' },
  { term:'IaC', def:'Infrastructure as Code — managing cloud/IoT infrastructure declaratively using tools like Terraform and Ansible.', tag:'DevOps' },
  { term:'IIoT', def:'Industrial Internet of Things — IoT applied to manufacturing, logistics, and industrial automation (Industry 4.0).', tag:'Domain' },
  { term:'Kafka', def:'Apache Kafka — distributed event streaming platform for high-throughput, fault-tolerant IoT data pipelines.', tag:'Tool' },
  { term:'LoRaWAN', def:'Long Range Wide Area Network — LPWAN protocol for IoT with 2–15km range and ultra-low power consumption.', tag:'Protocol' },
  { term:'Matter', def:'Unified smart home protocol backed by Apple/Google/Amazon; IP-based, Thread-enabled, solves interoperability.', tag:'Standard' },
  { term:'Mender', def:'Open-source OTA update system for Linux-based IoT devices with full rollback support.', tag:'Tool' },
  { term:'Microservices', def:'Architectural pattern decomposing IoT applications into small, independently deployable services.', tag:'Architecture' },
  { term:'MQTT', def:'Message Queuing Telemetry Transport — lightweight pub/sub protocol standard for IoT sensor telemetry.', tag:'Protocol' },
  { term:'mTLS', def:'Mutual TLS — both client and server authenticate each other; the standard for secure IoT device identity.', tag:'Security' },
  { term:'NB-IoT', def:'Narrowband IoT — cellular LPWAN standard for low-data-rate IoT applications (utility metering, tracking).', tag:'Protocol' },
  { term:'Neuromorphic Computing', def:'Brain-inspired chips (Intel Loihi) using spiking neural networks for ultra-efficient event-driven sensing.', tag:'Trend' },
  { term:'Node-RED', def:'Flow-based visual programming tool for wiring IoT devices, APIs, and online services.', tag:'Tool' },
  { term:'OWASP IoT Top 10', def:'Top 10 IoT security risks including hardcoded passwords, insecure network services, and lack of secure update mechanisms.', tag:'Security' },
  { term:'OTA', def:'Over-the-Air — wireless mechanism for pushing firmware/software updates to deployed IoT devices.', tag:'DevOps' },
  { term:'Predictive Maintenance', def:'Using ML on sensor data to predict failures before they occur, reducing unplanned downtime.', tag:'AI/ML' },
  { term:'QEMU', def:'Open-source machine emulator used for running IoT firmware on virtual hardware in CI pipelines.', tag:'Testing' },
  { term:'Reactive Systems', def:'Systems that are responsive, resilient, elastic, and message-driven — per the Reactive Manifesto.', tag:'Architecture' },
  { term:'Secure Boot', def:'Cryptographic verification of the boot chain from hardware root of trust through OS — prevents tampered firmware.', tag:'Security' },
  { term:'Sensor', def:'Device that detects physical phenomena (temperature, pressure, motion) and converts them to digital signals.', tag:'Hardware' },
  { term:'Store & Forward', def:'Buffers IoT data locally during connectivity loss; flushes to cloud on reconnection.', tag:'Pattern' },
  { term:'Thing', def:'Any physical object embedded with electronics and network connectivity to collect and exchange data.', tag:'Core' },
  { term:'TimescaleDB', def:'PostgreSQL extension optimized for time-series data — combines relational and time-series query capabilities.', tag:'Database' },
  { term:'TinyML', def:'Running ML inference on microcontrollers (Cortex-M) at milliwatt power using TensorFlow Lite Micro.', tag:'AI/ML' },
  { term:'TPM', def:'Trusted Platform Module — secure cryptoprocessor that provides hardware root of trust for device identity.', tag:'Security' },
  { term:'X.509', def:'Standard format for public key certificates used for IoT device authentication (mTLS).', tag:'Security' },
  { term:'Zigbee', def:'IEEE 802.15.4-based mesh protocol for short-range, low-power IoT (smart home, building automation).', tag:'Protocol' },
  { term:'Z-Wave', def:'Sub-GHz mesh protocol for home automation with ~30m range and very low power consumption.', tag:'Protocol' },
];

// ── STATE ──────────────────────────────────────────────────────────
const state = {
  current: 'home',
  visited: new Set(['home']),
  quiz: {
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    filter: 'all',
    started: false,
  },
  sensor: { temp: 24.3, humidity: 62, co2: 412, pressure: 1013 },
  chartData: { temps: [], times: [] },
  sensorInterval: null,
  particleCanvas: null,
  particleCtx: null,
  particles: [],
  animFrame: null,
};

// ── NAVIGATION ─────────────────────────────────────────────────────
function goTo(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  const navItem = document.querySelector(`[data-chapter="${id}"]`);
  if (navItem) navItem.classList.add('active');

  state.current = id;
  state.visited.add(id);
  updateProgress();
  closeSidebar();

  // Scroll to top of main
  document.getElementById('main').scrollTop = 0;
  window.scrollTo(0, 0);

  // Start sensor sim when on ch6
  if (id === 'ch6') startSensorSim();
  else stopSensorSim();

  // Render quiz on entry
  if (id === 'quiz') renderQuizStart();
  if (id === 'glossary') renderGlossary();
}

function updateProgress() {
  const total = CONTENT_CHAPTERS.length;
  const done  = CONTENT_CHAPTERS.filter(c => state.visited.has(c.id)).length;
  const pct   = Math.round((done / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent  = pct + '%';
}

// ── SIDEBAR MOBILE ────────────────────────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

// ── CHAPTER CARDS (HOME) ──────────────────────────────────────────
function renderChapterCards() {
  const grid = document.getElementById('chapter-cards');
  if (!grid) return;
  grid.innerHTML = CONTENT_CHAPTERS.map(c => `
    <div class="chapter-card" onclick="goTo('${c.id}')">
      <div class="card-num">Chapter ${c.num}</div>
      <div class="card-title">${c.title}</div>
      <div class="card-desc">${c.desc}</div>
      <div class="card-arrow">→</div>
    </div>
  `).join('');
}

// ── ARCHITECTURE TABS ─────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.arch-tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        const section = tabGroup.closest('.chapter-body');
        tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        section.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(tabId);
        if (target) target.classList.add('active');
      });
    });
  });
}

// ── SENSOR SIMULATION ─────────────────────────────────────────────
function startSensorSim() {
  if (state.sensorInterval) return;
  initChart();
  state.sensorInterval = setInterval(tickSensor, 2000);
}
function stopSensorSim() {
  if (state.sensorInterval) {
    clearInterval(state.sensorInterval);
    state.sensorInterval = null;
  }
}

function tickSensor() {
  const s = state.sensor;
  s.temp     = clamp(s.temp     + rand(-0.8, 0.8),  15, 40);
  s.humidity = clamp(s.humidity + rand(-2,   2),     20, 95);
  s.co2      = clamp(s.co2      + rand(-15,  15),   300, 800);
  s.pressure = clamp(s.pressure + rand(-3,   3),    990, 1040);

  setText('temp-val',     s.temp.toFixed(1) + '°C');
  setText('humidity-val', s.humidity.toFixed(0) + '%');
  setText('co2-val',      s.co2.toFixed(0));
  setText('pressure-val', s.pressure.toFixed(0));

  setWidth('temp-bar',     ((s.temp - 15) / 25) * 100);
  setWidth('humidity-bar', s.humidity);
  setWidth('co2-bar',      ((s.co2 - 300) / 500) * 100);
  setWidth('pressure-bar', ((s.pressure - 990) / 50) * 100);

  const d = state.chartData;
  d.temps.push(s.temp);
  d.times.push(new Date().toLocaleTimeString());
  if (d.temps.length > 20) { d.temps.shift(); d.times.shift(); }
  drawChart();
}

function initChart() {
  const d = state.chartData;
  d.temps = []; d.times = [];
  for (let i = 0; i < 10; i++) {
    d.temps.push(clamp(state.sensor.temp + rand(-3, 3), 15, 40));
    d.times.push('');
  }
  drawChart();
}

function drawChart() {
  const canvas = document.getElementById('sensorChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth;
  const H = 120;
  canvas.width  = W;
  canvas.height = H;

  ctx.clearRect(0, 0, W, H);

  const pts = state.chartData.temps;
  if (pts.length < 2) return;

  const min = 15, max = 40, range = max - min;
  const pad = 16;

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad + ((H - pad * 2) / 4) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(0,180,216,.35)');
  grad.addColorStop(1, 'rgba(0,180,216,.01)');

  const toX = i => (i / (pts.length - 1)) * W;
  const toY = v => H - pad - ((v - min) / range) * (H - pad * 2);

  ctx.beginPath();
  ctx.moveTo(toX(0), toY(pts[0]));
  for (let i = 1; i < pts.length; i++) {
    const cpx = (toX(i - 1) + toX(i)) / 2;
    ctx.bezierCurveTo(cpx, toY(pts[i - 1]), cpx, toY(pts[i]), toX(i), toY(pts[i]));
  }
  ctx.lineTo(toX(pts.length - 1), H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(pts[0]));
  for (let i = 1; i < pts.length; i++) {
    const cpx = (toX(i - 1) + toX(i)) / 2;
    ctx.bezierCurveTo(cpx, toY(pts[i - 1]), cpx, toY(pts[i]), toX(i), toY(pts[i]));
  }
  ctx.strokeStyle = '#00b4d8';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Latest dot
  const lx = toX(pts.length - 1);
  const ly = toY(pts[pts.length - 1]);
  ctx.beginPath(); ctx.arc(lx, ly, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#00b4d8'; ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();

  // Label
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('Temperature (°C)', 8, 14);
  ctx.fillText(pts[pts.length - 1].toFixed(1) + '°C', lx - 22, ly - 8);
}

// ── QUIZ ENGINE ───────────────────────────────────────────────────
function renderQuizStart() {
  if (state.quiz.started) return;
  const container = document.getElementById('quiz-container');
  if (!container) return;
  container.innerHTML = `
    <div class="quiz-start-card">
      <h2>🧠 IoT Knowledge Quiz</h2>
      <p>${QUESTIONS.length} questions across all 11 chapters. Test your understanding of IoT architecture, security, DevOps, and more.</p>
      <div class="quiz-filter">
        <button class="quiz-filter-btn active" data-filter="all" onclick="setQuizFilter('all',this)">All Chapters</button>
        ${CONTENT_CHAPTERS.slice(0, 6).map(c => `<button class="quiz-filter-btn" data-filter="${c.id}" onclick="setQuizFilter('${c.id}',this)">Ch ${c.num}</button>`).join('')}
      </div>
      <div class="quiz-filter">
        ${CONTENT_CHAPTERS.slice(6).map(c => `<button class="quiz-filter-btn" data-filter="${c.id}" onclick="setQuizFilter('${c.id}',this)">Ch ${c.num}</button>`).join('')}
      </div>
      <button class="btn-primary" onclick="startQuiz()" style="margin-top:8px">Start Quiz →</button>
    </div>
  `;
}

function setQuizFilter(filter, btn) {
  state.quiz.filter = filter;
  document.querySelectorAll('.quiz-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startQuiz() {
  const pool = state.quiz.filter === 'all'
    ? [...QUESTIONS]
    : QUESTIONS.filter(q => q.chapter === state.quiz.filter);

  state.quiz.questions = shuffle(pool).slice(0, Math.min(pool.length, 15));
  state.quiz.index   = 0;
  state.quiz.score   = 0;
  state.quiz.answered = false;
  state.quiz.started = true;
  renderQuestion();
}

function renderQuestion() {
  const { questions, index } = state.quiz;
  const q = questions[index];
  if (!q) { renderScore(); return; }

  const chap = CHAPTERS.find(c => c.id === q.chapter);
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta">
        <span class="quiz-chapter-tag">${chap ? chap.title : q.chapter}</span>
        <span class="quiz-progress-text">Question ${index + 1} of ${questions.length}</span>
      </div>
      <div class="quiz-q-bar"><div class="quiz-q-fill" style="width:${((index) / questions.length) * 100}%"></div></div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" onclick="answerQuiz(${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="quiz-explanation" style="display:none"></div>
      <div class="quiz-nav" id="quiz-nav" style="display:none">
        <span></span>
        <button class="btn-primary" onclick="nextQuestion()">
          ${index + 1 >= questions.length ? 'See Results' : 'Next Question →'}
        </button>
      </div>
    </div>
  `;
}

function answerQuiz(chosen) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const q = state.quiz.questions[state.quiz.index];
  const opts = document.querySelectorAll('.quiz-option');

  opts.forEach(o => o.classList.add('disabled'));
  opts[chosen].classList.add(chosen === q.ans ? 'correct' : 'wrong');
  if (chosen !== q.ans) opts[q.ans].classList.add('correct');

  if (chosen === q.ans) state.quiz.score++;

  const exp = document.getElementById('quiz-explanation');
  exp.style.display = 'block';
  exp.textContent   = '💡 ' + q.exp;

  document.getElementById('quiz-nav').style.display = 'flex';
}

function nextQuestion() {
  state.quiz.index++;
  state.quiz.answered = false;
  renderQuestion();
}

function renderScore() {
  state.quiz.started = false;
  const { score, questions } = state.quiz;
  const pct = Math.round((score / questions.length) * 100);
  const msg = pct >= 80 ? '🎉 Excellent! You have a strong grasp of IoT concepts.'
            : pct >= 60 ? '👍 Good work! Review the chapters where you missed questions.'
            :              '📚 Keep studying! IoT is complex — revisit the chapters and try again.';

  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-score">
      <div class="score-ring" style="--score-pct:${pct * 3.6}deg">
        <span class="score-num">${pct}%</span>
      </div>
      <h2 style="margin-bottom:8px">${score} / ${questions.length} correct</h2>
      <p class="score-msg">${msg}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn-primary" onclick="startQuiz()">Try Again</button>
        <button class="btn-ghost" onclick="state.quiz.started=false;renderQuizStart()" style="color:var(--adp-blue);border-color:var(--adp-blue)">Change Filter</button>
      </div>
    </div>
  `;
}

// ── GLOSSARY ──────────────────────────────────────────────────────
function renderGlossary(filter = '') {
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;
  const q = filter.toLowerCase();
  const items = GLOSSARY.filter(g =>
    g.term.toLowerCase().includes(q) ||
    g.def.toLowerCase().includes(q) ||
    g.tag.toLowerCase().includes(q)
  );
  grid.innerHTML = items.map(g => `
    <div class="gloss-item">
      <div class="gloss-term">${highlight(g.term, filter)}</div>
      <div class="gloss-def">${highlight(g.def, filter)}</div>
      <span class="gloss-tag">${g.tag}</span>
    </div>
  `).join('') || '<p style="color:var(--text-muted);padding:16px">No terms found.</p>';
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(0,108,224,.2);border-radius:2px;padding:0 2px">$1</mark>');
}

// ── HERO PARTICLES ─────────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  state.particleCanvas = canvas;
  state.particleCtx    = ctx;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    state.particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: rand(-0.3, 0.3),
      vy: rand(-0.3, 0.3),
      r: rand(1, 3),
      op: rand(0.15, 0.5),
    });
  }
  animateParticles();
}

function animateParticles() {
  const canvas = state.particleCanvas;
  const ctx    = state.particleCtx;
  if (!canvas || !ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  state.particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,180,216,${p.op})`;
    ctx.fill();
  });

  // Lines between close particles
  ctx.strokeStyle = 'rgba(0,108,224,.07)';
  ctx.lineWidth   = 1;
  for (let i = 0; i < state.particles.length; i++) {
    for (let j = i + 1; j < state.particles.length; j++) {
      const dx = state.particles[i].x - state.particles[j].x;
      const dy = state.particles[i].y - state.particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(state.particles[i].x, state.particles[i].y);
        ctx.lineTo(state.particles[j].x, state.particles[j].y);
        ctx.stroke();
      }
    }
  }

  state.animFrame = requestAnimationFrame(animateParticles);
}

// ── DARK MODE ─────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('iot-theme') || 'light';
  applyTheme(saved);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('iot-theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ── HELPERS ───────────────────────────────────────────────────────
function rand(min, max) { return Math.random() * (max - min) + min; }
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function setText(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
function setWidth(id, pct) { const el = document.getElementById(id); if (el) el.style.width = Math.round(clamp(pct, 0, 100)) + '%'; }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar overlay
  const overlay = document.createElement('div');
  overlay.id = 'sidebar-overlay';
  overlay.className = 'sidebar-overlay';
  overlay.addEventListener('click', closeSidebar);
  document.body.appendChild(overlay);

  // Hamburger
  document.getElementById('hamburger')?.addEventListener('click', openSidebar);

  // Nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      goTo(item.dataset.chapter);
    });
  });

  // Theme
  initTheme();

  // Particles
  initParticles();

  // Chapter cards
  renderChapterCards();

  // Architecture tabs
  initTabs();

  // Glossary search
  document.getElementById('glossary-search')?.addEventListener('input', e => {
    renderGlossary(e.target.value);
  });

  // Deep-link via hash
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    goTo(hash);
  }
});

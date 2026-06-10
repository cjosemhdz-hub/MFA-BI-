:root{
  --emerald:#0E5A4F;
  --emerald-2:#174C45;
  --emerald-soft:#E7F1EF;
  --orange:#B87524;
  --orange-soft:#F7EFE5;
  --navy:#1D3557;
  --ink:#151A1E;
  --graphite:#2B3035;
  --gray-800:#343A40;
  --gray-700:#4B5563;
  --gray-600:#6B7280;
  --gray-400:#A3AAB3;
  --gray-300:#D7DCE1;
  --gray-200:#E7EAEE;
  --gray-100:#F2F4F6;
  --gray-50:#F7F8FA;
  --white:#FFFFFF;
  --red:#A94442;
  --red-soft:#F7E9E8;
  --amber:#B87524;
  --amber-soft:#F7EFE5;
  --shadow:0 10px 28px rgba(21,26,30,.08);
  --shadow-soft:0 6px 18px rgba(21,26,30,.06);
  --radius:18px;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Inter,Segoe UI,Arial,sans-serif;
  background:var(--gray-50);
  color:var(--ink);
}
.app{display:grid;grid-template-columns:286px 1fr;min-height:100vh}
.sidebar{
  position:sticky;top:0;height:100vh;
  background:#191F24;
  color:#fff;
  padding:28px 22px;
  display:flex;
  flex-direction:column;
  gap:22px;
  border-right:1px solid #0f1317;
}
.brand{display:flex;gap:12px;align-items:center;margin-bottom:6px}
.brand-mark{
  width:46px;height:46px;border-radius:12px;
  background:var(--emerald);
  border:1px solid rgba(255,255,255,.14);
  display:flex;align-items:center;justify-content:center;
  font-weight:900;letter-spacing:-1px;
}
.brand h1{font-size:16px;margin:0;line-height:1.1;font-weight:800}
.brand small{color:#C9D0D7;display:block;margin-top:4px;font-size:11px}
.nav{display:flex;flex-direction:column;gap:7px}
.nav button{
  border:1px solid transparent;
  background:transparent;
  color:#CFD5DB;
  text-align:left;
  padding:12px 13px;
  border-radius:12px;
  font-size:14px;
  cursor:pointer;
  transition:.2s;
  display:flex;gap:10px;align-items:center;
}
.nav button:hover{background:#242B31;color:#fff;border-color:#333C44}
.nav button.active{
  background:#F4F6F7;
  color:var(--ink);
  font-weight:800;
  border-color:#fff;
}
.side-footer{
  margin-top:auto;
  padding:16px;
  background:#22292F;
  border:1px solid #303840;
  border-radius:16px;
  color:#CFD5DB;
  font-size:12px;
  line-height:1.5;
}
.main{padding:30px 36px 44px}
.topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:24px;
  gap:18px;
}
.title h2{font-size:27px;letter-spacing:-.5px;margin:0;color:var(--ink)}
.title p{margin:7px 0 0;color:var(--gray-600);font-size:14px}
.actions{display:flex;gap:10px;align-items:center}
.pill{
  border:1px solid var(--gray-200);
  background:#fff;
  border-radius:10px;
  padding:10px 13px;
  color:var(--graphite);
  font-size:13px;
  box-shadow:var(--shadow-soft);
}
.btn{
  border:0;
  border-radius:12px;
  padding:12px 15px;
  background:var(--ink);
  color:#fff;
  font-weight:800;
  cursor:pointer;
}
.btn.secondary{background:#fff;color:var(--ink);border:1px solid var(--gray-200)}
.grid{display:grid;gap:18px}
.kpi-grid{grid-template-columns:repeat(5,minmax(0,1fr));margin-bottom:18px}
.card{
  background:#fff;
  border:1px solid var(--gray-200);
  border-radius:var(--radius);
  box-shadow:var(--shadow-soft);
  padding:20px;
  position:relative;
  overflow:hidden;
}
.card::after{display:none}
.kpi-label{
  color:var(--gray-600);
  font-size:11px;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-weight:900;
}
.kpi-value{
  font-size:27px;
  font-weight:900;
  letter-spacing:-.7px;
  margin:10px 0 5px;
  color:var(--ink);
}
.kpi-note{font-size:12px;color:var(--gray-600)}
.status{
  display:inline-flex;
  align-items:center;
  gap:7px;
  border-radius:8px;
  padding:7px 10px;
  font-size:12px;
  font-weight:900;
  border:1px solid transparent;
}
.ok{background:var(--emerald-soft);color:var(--emerald);border-color:#CFE3DF}
.warn{background:var(--amber-soft);color:#8D5B1E;border-color:#EAD8BE}
.risk{background:var(--red-soft);color:var(--red);border-color:#EBCBC8}
.info{background:var(--gray-100);color:var(--gray-700);border-color:var(--gray-200)}
.hero{display:grid;grid-template-columns:1.12fr .88fr;gap:18px;margin-bottom:18px}
.score-card{
  padding:24px;
  background:#fff;
  color:var(--ink);
  border-top:5px solid var(--emerald);
}
.score-wrap{display:grid;grid-template-columns:180px 1fr;align-items:stretch;gap:22px}
.score-circle{
  width:auto;
  height:auto;
  min-height:146px;
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#F4F6F7;
  border:1px solid var(--gray-200);
  box-shadow:none;
}
.score-inner{
  width:auto;
  height:auto;
  border-radius:0;
  background:transparent;
  display:block;
  text-align:center;
}
.score-inner strong{font-size:46px;line-height:1;color:var(--emerald)}
.score-inner span{font-size:12px;color:var(--gray-600);font-weight:800;text-transform:uppercase;letter-spacing:.09em}
.score-text{
  border-left:1px solid var(--gray-200);
  padding-left:22px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.score-text h3{
  font-size:24px;
  line-height:1.15;
  margin:12px 0 8px;
  color:var(--ink);
}
.score-text p{color:var(--gray-700);line-height:1.55;margin:0}
.question-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.question{
  padding:16px;
  border-radius:15px;
  background:#fff;
  border:1px solid var(--gray-200);
}
.question b{display:block;font-size:14px;margin-bottom:8px;color:var(--ink)}
.question span{font-size:12px;color:var(--gray-600)}
.section{display:none}
.section.active{display:block}
.split{display:grid;grid-template-columns:1.2fr .8fr;gap:18px}
.three{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.two{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.panel-title{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;gap:12px}
.panel-title h3{margin:0;font-size:18px;letter-spacing:-.2px;color:var(--ink)}
.panel-title p{margin:5px 0 0;color:var(--gray-600);font-size:13px}
.insights{display:grid;gap:12px}
.insight{
  display:grid;
  grid-template-columns:38px 1fr;
  gap:12px;
  padding:14px;
  border-radius:15px;
  border:1px solid var(--gray-200);
  background:#fff;
}
.insight-icon{
  width:38px;height:38px;border-radius:10px;
  display:grid;place-items:center;font-weight:900;
}
.insight h4{margin:0 0 4px;font-size:14px;color:var(--ink)}
.insight p{margin:0;color:var(--gray-600);font-size:12.5px;line-height:1.45}
.table{width:100%;border-collapse:separate;border-spacing:0 8px;font-size:13px}
.table th{
  text-align:left;color:var(--gray-600);font-size:11px;
  text-transform:uppercase;letter-spacing:.06em;padding:0 10px
}
.table td{
  background:#fff;
  border-top:1px solid var(--gray-200);
  border-bottom:1px solid var(--gray-200);
  padding:12px 10px;
}
.table td:first-child{border-left:1px solid var(--gray-200);border-radius:10px 0 0 10px}
.table td:last-child{border-right:1px solid var(--gray-200);border-radius:0 10px 10px 0;text-align:right;font-weight:800}
.chart{height:260px;width:100%;position:relative}
.bar-row{display:grid;grid-template-columns:150px 1fr 100px;gap:10px;align-items:center;margin:12px 0}
.bar-label{font-size:12px;color:var(--gray-700);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar-track{height:11px;background:var(--gray-100);border-radius:999px;overflow:hidden;border:1px solid var(--gray-200)}
.bar{height:100%;background:var(--emerald);border-radius:999px}
.bar.orange{background:var(--orange)}
.bar-value{text-align:right;font-size:12px;font-weight:900}
.statement{display:grid;gap:8px}
.line{
  display:flex;justify-content:space-between;align-items:center;
  padding:12px 14px;background:#fff;border:1px solid var(--gray-200);border-radius:12px
}
.line.total{background:var(--ink);color:#fff;font-weight:900}
.line.subtotal{background:var(--emerald-soft);color:var(--emerald);font-weight:900}
.line span:first-child{color:inherit}.line span:last-child{font-weight:900}
.tabs-mini{display:flex;gap:8px;margin:10px 0 18px}
.tabs-mini button{border:1px solid var(--gray-200);background:#fff;border-radius:9px;padding:9px 12px;font-weight:800;color:var(--gray-700);cursor:pointer}
.tabs-mini button.active{background:var(--ink);color:#fff}
.progress{height:10px;background:var(--gray-100);border-radius:999px;overflow:hidden;border:1px solid var(--gray-200)}
.progress div{height:100%;background:var(--emerald);border-radius:999px}
.roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.step{padding:16px;border-radius:16px;background:#fff;border:1px solid var(--gray-200)}
.step b{display:block;margin-bottom:6px;color:var(--ink)}
.step small{color:var(--gray-600);line-height:1.4}
.mobile-menu{display:none}
.divider{height:1px;background:var(--gray-200);margin:16px 0}
.badge{display:inline-flex;border-radius:8px;background:var(--gray-100);padding:6px 9px;font-size:11px;color:var(--gray-600);font-weight:900;margin-right:6px}
.focus-box{
  border-left:4px solid var(--orange);
  padding:14px 16px;
  background:var(--orange-soft);
  border-radius:12px;
  color:#684018;
  font-size:13px;
  line-height:1.5;
}
.empty-note{padding:18px;border:1px dashed var(--gray-300);border-radius:18px;color:var(--gray-600);background:#fff}
.canvas-chart{width:100%;height:270px}
.footer-note{margin-top:18px;color:var(--gray-600);font-size:12px;line-height:1.5}
@media (max-width: 1100px){
  .app{grid-template-columns:1fr}
  .sidebar{position:relative;height:auto}
  .nav{display:grid;grid-template-columns:repeat(2,1fr)}
  .kpi-grid,.three{grid-template-columns:repeat(2,1fr)}
  .hero,.split,.two{grid-template-columns:1fr}
  .roadmap{grid-template-columns:repeat(2,1fr)}
}
@media (max-width: 680px){
  .main{padding:22px}
  .kpi-grid,.three,.roadmap{grid-template-columns:1fr}
  .topbar{flex-direction:column;align-items:flex-start}
  .actions{flex-wrap:wrap}
  .nav{grid-template-columns:1fr}
  .score-wrap{grid-template-columns:1fr}
  .score-text{border-left:0;border-top:1px solid var(--gray-200);padding-left:0;padding-top:18px}
  .question-grid{grid-template-columns:1fr}
}

.upload-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:18px}
.upload-card{background:#fff;border:1px solid var(--gray-200);border-radius:18px;padding:18px;box-shadow:var(--shadow-soft)}
.upload-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px}
.upload-icon{width:42px;height:42px;border-radius:12px;background:var(--gray-100);display:grid;place-items:center;font-size:19px;border:1px solid var(--gray-200)}
.upload-card h3{margin:0;font-size:15px;color:var(--ink)}
.upload-card p{margin:6px 0 0;color:var(--gray-600);font-size:12px;line-height:1.45}
.dropzone{border:1px dashed var(--gray-300);background:var(--gray-50);border-radius:14px;padding:16px;text-align:center;color:var(--gray-600);font-size:12px;margin-top:12px}
.dropzone b{display:block;color:var(--graphite);margin-bottom:4px}
.schema-list{display:grid;gap:8px;margin-top:12px}
.schema-item{display:flex;justify-content:space-between;gap:10px;align-items:center;border:1px solid var(--gray-200);background:#fff;border-radius:12px;padding:10px 12px;font-size:12px;color:var(--gray-700)}
.schema-item span:last-child{font-weight:900;color:var(--emerald)}
.process-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.process-step{position:relative;background:#fff;border:1px solid var(--gray-200);border-radius:16px;padding:16px;min-height:126px}
.process-step .num{width:28px;height:28px;border-radius:8px;background:var(--emerald);color:#fff;display:grid;place-items:center;font-weight:900;font-size:12px;margin-bottom:12px}
.process-step b{display:block;font-size:14px;margin-bottom:6px;color:var(--ink)}
.process-step small{display:block;color:var(--gray-600);line-height:1.45}
.validation-row{display:grid;grid-template-columns:1.1fr .7fr .7fr;gap:12px;align-items:center;padding:12px;border:1px solid var(--gray-200);border-radius:14px;background:#fff;margin-bottom:8px}
.validation-row b{font-size:13px}.validation-row span{font-size:12px;color:var(--gray-600)}
.data-map{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.map-box{background:#fff;border:1px solid var(--gray-200);border-radius:16px;padding:16px}
.map-box h4{margin:0 0 10px;font-size:14px;color:var(--ink)}
.map-box ul{margin:0;padding-left:17px;color:var(--gray-600);font-size:12px;line-height:1.7}
@media (max-width:1100px){.upload-grid{grid-template-columns:repeat(2,1fr)}.process-flow,.data-map{grid-template-columns:1fr 1fr}}
@media (max-width:680px){.upload-grid,.process-flow,.data-map{grid-template-columns:1fr}.validation-row{grid-template-columns:1fr}}


.filter-bar{
  display:grid;
  grid-template-columns:1.2fr .7fr .7fr .9fr 1fr auto;
  gap:10px;
  align-items:end;
  background:#fff;
  border:1px solid var(--gray-200);
  border-radius:18px;
  padding:14px;
  box-shadow:var(--shadow-soft);
  margin-bottom:20px;
}
.filter-field label{
  display:block;
  font-size:10px;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-weight:900;
  color:var(--gray-600);
  margin-bottom:6px;
}
.filter-field select,
.filter-field input{
  width:100%;
  border:1px solid var(--gray-200);
  background:var(--gray-50);
  border-radius:12px;
  padding:11px 12px;
  font-size:13px;
  color:var(--ink);
  outline:none;
}
.filter-field select:focus,
.filter-field input:focus{
  border-color:var(--emerald);
  background:#fff;
}
.period-custom{
  display:none;
  grid-template-columns:1fr 1fr;
  gap:8px;
}
.period-custom.active{display:grid}
.apply-filter{
  height:40px;
  align-self:end;
  white-space:nowrap;
  border:0;
  border-radius:12px;
  background:var(--emerald);
  color:#fff;
  padding:0 14px;
  font-weight:900;
  cursor:pointer;
}
.context-strip{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin:-8px 0 20px;
}
.context-chip{
  display:inline-flex;
  align-items:center;
  gap:6px;
  background:#fff;
  border:1px solid var(--gray-200);
  border-radius:999px;
  padding:8px 11px;
  font-size:12px;
  color:var(--gray-700);
}
.context-chip b{color:var(--ink)}
.delta{
  display:inline-flex;
  align-items:center;
  gap:5px;
  font-size:11px;
  font-weight:900;
  padding:5px 8px;
  border-radius:8px;
  margin-top:6px;
}
.delta.up{background:var(--emerald-soft);color:var(--emerald)}
.delta.down{background:var(--red-soft);color:var(--red)}
.delta.flat{background:var(--gray-100);color:var(--gray-700)}
.kpi-foot{
  display:flex;
  justify-content:space-between;
  gap:8px;
  align-items:center;
}
@media (max-width:1100px){
  .filter-bar{grid-template-columns:1fr 1fr}
}
@media (max-width:680px){
  .filter-bar{grid-template-columns:1fr}
}
code{background:var(--gray-100);border:1px solid var(--gray-200);border-radius:6px;padding:2px 5px;color:var(--ink)}

/* v2.6 */
.upload-icon{font-weight:900;color:var(--emerald)}

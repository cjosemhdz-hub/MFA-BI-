const PERIOD_DATA = {
  monthly:{
    label:"Mayo 2026", view:"Mensual",
    liquidity_cash:8426046.48,current_ratio:7.71,quick_ratio:6.38,working_capital:26794537.64,
    income:8312596.87,costs:1203606.22,oper_exp:1071444.60,fin_exp:41603.52,profit_gross:7108990.65,profit_oper:6037546.05,profit_net:6015476.40,
    margin_gross:.8552,margin_oper:.7263,margin_net:.7237,
    inflows:472592.29,outflows:3005303.80,net_cash:-2532711.51,cash_conversion:.0569,coverage:2.80,score_emp:65,
    deltas:{liquidity_cash:.04,current_ratio:0,margin_net:.025,cash_conversion:-.08,net_cash:-.18},
    top_exp:[["Proveedores crédito",798471.85],["Impuestos",547405.43],["Compras contado",385296.67],["Nómina técnicos",313081.86],["Nómina empleados",172826.45],["Nómina administrativos",161687.48],["Servicios importación",127441.45],["Renta oficina",109969.20]],
    top_in:[["Depósito USA",410294.40],["Depósito cliente",34396.74],["Devolución pago",15570.15],["Peajes devolución",12000.00],["Otros",331.00]],
    clients:[["Cliente A",15487762.17],["Cliente B",1151991.96],["Cliente C",70582.12],["Cliente D",41311.22],["Cliente E",36874.38],["Cliente F",23527.81]]
  },
  ytd:{
    label:"Enero - Mayo 2026", view:"Acumulado",
    liquidity_cash:8426046.48,current_ratio:7.71,quick_ratio:6.38,working_capital:26794537.64,
    income:32184500,costs:8456200,oper_exp:6120500,fin_exp:284300,profit_gross:23728300,profit_oper:17607800,profit_net:17092400,
    margin_gross:.7373,margin_oper:.5470,margin_net:.5311,
    inflows:22540000,outflows:24190000,net_cash:-1650000,cash_conversion:.7004,coverage:.35,score_emp:74,
    deltas:{liquidity_cash:.10,current_ratio:.05,margin_net:.018,cash_conversion:.12,net_cash:-.04},
    top_exp:[["Proveedores crédito",5120000],["Impuestos",3220000],["Compras contado",2810000],["Nómina técnicos",2140000],["Nómina empleados",1090000],["Servicios importación",890000],["Renta oficina",550000],["Financieros",284300]],
    top_in:[["Depósito USA",16200000],["Depósito cliente",4200000],["Aportaciones",1450000],["Devoluciones",520000],["Otros",170000]],
    clients:[["Cliente A",18400000],["Cliente B",5200000],["Cliente C",2100000],["Cliente D",1600000],["Cliente E",980000],["Cliente F",740000]]
  },
  custom:{
    label:"Periodo personalizado", view:"Personalizado",
    liquidity_cash:7650000,current_ratio:5.94,quick_ratio:4.88,working_capital:22150000,
    income:21420000,costs:6100000,oper_exp:3980000,fin_exp:198000,profit_gross:15320000,profit_oper:11340000,profit_net:11005000,
    margin_gross:.7152,margin_oper:.5294,margin_net:.5138,
    inflows:14750000,outflows:16125000,net_cash:-1375000,cash_conversion:.6886,coverage:.47,score_emp:71,
    deltas:{liquidity_cash:-.03,current_ratio:-.09,margin_net:.011,cash_conversion:.06,net_cash:-.11},
    top_exp:[["Proveedores crédito",3320000],["Impuestos",2160000],["Compras contado",1900000],["Nómina técnicos",1460000],["Nómina empleados",770000],["Servicios importación",610000],["Renta oficina",330000],["Financieros",198000]],
    top_in:[["Depósito USA",11200000],["Depósito cliente",2210000],["Aportaciones",850000],["Devoluciones",360000],["Otros",130000]],
    clients:[["Cliente A",12600000],["Cliente B",3600000],["Cliente C",1400000],["Cliente D",990000],["Cliente E",670000],["Cliente F",450000]]
  }
};
let DATA = PERIOD_DATA.monthly;

function money(v){const sign=v<0?'-':''; v=Math.abs(v); return sign+'$'+v.toLocaleString('es-MX',{maximumFractionDigits:0});}
function pct(v){return (v*100).toLocaleString('es-MX',{maximumFractionDigits:1})+'%';}
function num(v,s=''){return v.toLocaleString('es-MX',{maximumFractionDigits:2})+s;}
function setDelta(el,key){
  if(!DATA.deltas || DATA.deltas[key]===undefined){el.textContent='—'; el.className='delta flat'; return;}
  const d=DATA.deltas[key];
  el.className='delta '+(d>0?'up':d<0?'down':'flat');
  el.textContent=(d>0?'↑ ':d<0?'↓ ':'— ')+Math.abs(d*100).toLocaleString('es-MX',{maximumFractionDigits:1})+'%';
}
function renderData(){
  document.querySelectorAll('[data-money]').forEach(el=>{el.textContent=money(DATA[el.dataset.money]||0)});
  document.querySelectorAll('[data-percent]').forEach(el=>{el.textContent=pct(DATA[el.dataset.percent]||0)});
  document.querySelectorAll('[data-number]').forEach(el=>{el.textContent=num(DATA[el.dataset.number]||0, el.dataset.suffix||'')});
  document.querySelectorAll('[data-delta]').forEach(el=>setDelta(el,el.dataset.delta));
  const score=document.getElementById('scoreEmp'); if(score) score.textContent=DATA.score_emp;
  bars('expenseBars',DATA.top_exp,'orange'); bars('incomeBars',DATA.top_in,''); bars('clientBars',DATA.clients,'orange');
}
const titles={control:'Centro de Control Empresarial™',carga:'Carga de Datos MFA™',rentabilidad:'Resultado Financiero Contable',efectivo:'Estado de Generación de Efectivo',tesoreria:'Liquidez y Tesorería',cobranza:'Cobranza Inteligente™',integridad:'Integridad Contable™',riesgos:'Riesgos y Oportunidades',arquitectura:'Arquitectura MFA Business Intelligence'};
document.querySelectorAll('#nav button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#nav button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById(btn.dataset.section).classList.add('active');document.getElementById('pageTitle').textContent=titles[btn.dataset.section];window.scrollTo(0,0)}));
function bars(containerId, rows, cls=''){
  const max=Math.max(...rows.map(r=>r[1])); const el=document.getElementById(containerId); if(!el) return; el.innerHTML='';
  rows.forEach(r=>{const w=Math.max(3,(r[1]/max)*100); el.insertAdjacentHTML('beforeend',`<div class="bar-row"><div class="bar-label" title="${r[0]}">${r[0]}</div><div class="bar-track"><div class="bar ${cls}" style="width:${w}%"></div></div><div class="bar-value">${money(r[1])}</div></div>`)});
}
function updateContext(){
  const company=document.getElementById('filterCompany')?.value || 'Empresa demo';
  const year=document.getElementById('filterYear')?.value || '2026';
  const monthSelect=document.getElementById('filterMonth');
  const monthText=monthSelect?.options[monthSelect.selectedIndex]?.text || 'Mayo';
  const view=document.getElementById('filterView')?.value || 'monthly';
  const compareSelect=document.getElementById('filterCompare');
  const compareText=compareSelect?.options[compareSelect.selectedIndex]?.text || 'Mes anterior';
  const custom=document.getElementById('customPeriod');
  if(custom) custom.classList.toggle('active', view==='custom');
  DATA = view==='ytd' ? PERIOD_DATA.ytd : view==='custom' ? PERIOD_DATA.custom : PERIOD_DATA.monthly;
  let period = view==='monthly' ? `${monthText} ${year}` : view==='ytd' ? `Enero - ${monthText} ${year}` : `${document.getElementById('dateFrom')?.value || '2026-01'} a ${document.getElementById('dateTo')?.value || '2026-05'}`;
  document.getElementById('ctxCompany').textContent=company;
  document.getElementById('ctxPeriod').textContent=period;
  document.getElementById('ctxView').textContent=view==='monthly'?'Mensual':view==='ytd'?'Acumulado':'Personalizado';
  document.getElementById('ctxCompare').textContent=compareText;
  document.getElementById('topbarCompany').textContent=company;
  document.getElementById('topbarPeriod').textContent=period;
  renderData();
}
document.getElementById('filterView')?.addEventListener('change',updateContext);
document.getElementById('applyFilter')?.addEventListener('click',updateContext);
document.getElementById('filterMonth')?.addEventListener('change',updateContext);
document.getElementById('filterYear')?.addEventListener('change',updateContext);
document.getElementById('filterCompany')?.addEventListener('change',updateContext);
document.getElementById('filterCompare')?.addEventListener('change',updateContext);
updateContext();
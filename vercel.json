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
  bars('expenseBars',DATA.top_exp,'orange'); bars('incomeBars',DATA.top_in,''); bars('clientBars',DATA.clients,'orange'); renderInsights();
}
const titles={control:'Centro de Control Empresarial™',carga:'Carga de Datos MFA™',rentabilidad:'Resultado Financiero Contable',efectivo:'Estado de Generación de Efectivo',tesoreria:'Liquidez y Tesorería',cobranza:'Cobranza Inteligente™',integridad:'Integridad Contable™',riesgos:'Riesgos y Oportunidades',arquitectura:'Arquitectura MFA Business Intelligence'};
document.querySelectorAll('#nav button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#nav button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById(btn.dataset.section).classList.add('active');document.getElementById('pageTitle').textContent=titles[btn.dataset.section];window.scrollTo(0,0)}));
function bars(containerId, rows, cls=''){
  const max=Math.max(...rows.map(r=>r[1])); const el=document.getElementById(containerId); if(!el) return; el.innerHTML='';
  rows.forEach(r=>{const w=Math.max(3,(r[1]/max)*100); el.insertAdjacentHTML('beforeend',`<div class="bar-row"><div class="bar-label" title="${r[0]}">${r[0]}</div><div class="bar-track"><div class="bar ${cls}" style="width:${w}%"></div></div><div class="bar-value">${money(r[1])}</div></div>`)});
}

function normalizeMfaPayload(payload){
  if(!payload || !payload.kpis) return null;
  const k = payload.kpis || {};
  return {
    label: payload.metadata?.periodo || "Periodo cargado",
    view: "Mensual",
    liquidity_cash: k.liquidity_cash || 0,
    current_ratio: k.current_ratio || 0,
    quick_ratio: k.quick_ratio || 0,
    working_capital: k.working_capital || 0,
    income: k.income || 0,
    costs: k.costs || 0,
    oper_exp: k.oper_exp || 0,
    fin_exp: k.fin_exp || 0,
    profit_gross: k.profit_gross || 0,
    profit_oper: k.profit_oper || 0,
    profit_net: k.profit_net || 0,
    margin_gross: k.margin_gross || 0,
    margin_oper: k.margin_oper || 0,
    margin_net: k.margin_net || 0,
    inflows: k.inflows || 0,
    outflows: k.outflows || 0,
    net_cash: k.net_cash || 0,
    cash_conversion: k.cash_conversion || 0,
    coverage: k.coverage || 0,
    score_emp: k.score_emp || 0,
    deltas: {liquidity_cash:0,current_ratio:0,margin_net:0,cash_conversion:0,net_cash:0},
    top_exp: payload.charts?.top_exp || [],
    top_in: payload.charts?.top_in || [],
    clients: payload.charts?.clients || [],
    metadata: payload.metadata || {},
    hallazgos: payload.hallazgos || []
  };
}
function renderInsights(){
  const box = document.getElementById("autoInsights");
  if(!box || !DATA.hallazgos) return;
  const iconByType = {Riesgo:"!", Atención:"◆", Integridad:"✓", Oportunidad:"+"};
  const classByType = {Riesgo:["var(--red-soft)","var(--red)"], Atención:["var(--orange-soft)","var(--orange)"], Integridad:["var(--emerald-soft)","var(--emerald)"], Oportunidad:["var(--emerald-soft)","var(--emerald)"]};
  box.innerHTML = "";
  DATA.hallazgos.slice(0,5).forEach(h=>{
    const colors = classByType[h.tipo] || ["var(--gray-100)","var(--gray-700)"];
    const icon = iconByType[h.tipo] || "•";
    box.insertAdjacentHTML("beforeend", `<div class="insight"><div class="insight-icon" style="background:${colors[0]};color:${colors[1]}">${icon}</div><div><h4>${h.titulo}</h4><p>${h.detalle}</p></div></div>`);
  });
}
function applyMfaPayload(payload, sourceLabel="data_mfa.json"){
  const normalized = normalizeMfaPayload(payload);
  if(!normalized) return false;
  PERIOD_DATA.monthly = normalized;
  DATA = normalized;
  const meta = normalized.metadata || {};
  const company = meta.empresa || "Empresa demo";
  const period = meta.periodo || normalized.label || "Periodo cargado";
  const companySelect = document.getElementById("filterCompany");
  if(companySelect && companySelect.options.length){
    companySelect.options[0].text = company;
    companySelect.value = company;
  }
  const ctxCompany = document.getElementById("ctxCompany"); if(ctxCompany) ctxCompany.textContent = company;
  const ctxPeriod = document.getElementById("ctxPeriod"); if(ctxPeriod) ctxPeriod.textContent = period;
  const topbarCompany = document.getElementById("topbarCompany"); if(topbarCompany) topbarCompany.textContent = company;
  const topbarPeriod = document.getElementById("topbarPeriod"); if(topbarPeriod) topbarPeriod.textContent = period;
  renderData();
  renderInsights();
  const status = document.getElementById("jsonUploadStatus");
  if(status) status.textContent = `Dashboard actualizado desde ${sourceLabel}.`;
  return true;
}
async function loadDefaultMfaJson(){
  try{
    const res = await fetch("data/data_mfa.json", {cache:"no-store"});
    if(!res.ok) return;
    const payload = await res.json();
    applyMfaPayload(payload, "data/data_mfa.json");
  }catch(e){
    console.warn("No se pudo cargar data_mfa.json", e);
  }
}

function normHeader(v){
  return String(v ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/\s+/g," ")
    .trim().toLowerCase();
}
function toNumberMfa(v){
  if(v === null || v === undefined || v === "" || v === " ") return 0;
  if(typeof v === "number") return v;
  const n = Number(String(v).replace(/[$,\s]/g,""));
  return isNaN(n) ? 0 : n;
}
function cleanMfa(v){ return String(v ?? "").trim(); }
function findSheetName(wb, target){
  const t = normHeader(target);
  return wb.SheetNames.find(s => normHeader(s) === t) || wb.SheetNames.find(s => normHeader(s).includes(t));
}
function sheetRows(ws){
  return XLSX.utils.sheet_to_json(ws, {header:1, defval:null, raw:true});
}
function parseDiccionarioMfa(wb){
  const name = findSheetName(wb, "DICCIONARIO MFA");
  if(!name) throw new Error("No se encontró la hoja DICCIONARIO MFA.");
  const rows = sheetRows(wb.Sheets[name]);
  const dic = {};
  rows.slice(1).forEach(r=>{
    const cuenta = cleanMfa(r[1]);
    if(!cuenta) return;
    dic[cuenta] = {
      nivel: toNumberMfa(r[0]),
      cuenta,
      nombre: cleanMfa(r[2]),
      estado_financiero: cleanMfa(r[3]).toLowerCase(),
      clasificacion_contable: cleanMfa(r[4]).toLowerCase(),
      subgrupo: cleanMfa(r[5]).toLowerCase(),
      naturaleza: cleanMfa(r[6]).toLowerCase(),
      clasificacion_kpi: cleanMfa(r[7]).toLowerCase(),
      motor_mfa: cleanMfa(r[8]).toLowerCase()
    };
  });
  return dic;
}
function mapDicMfa(cuenta, dic){
  if(dic[cuenta]) return dic[cuenta];
  const p = cuenta.split("-");
  const candidates = [];
  if(p.length === 3){
    candidates.push(`${p[0]}-${p[1]}-000`);
    candidates.push(`${p[0]}-000-000`);
  }
  for(const c of candidates){ if(dic[c]) return dic[c]; }
  return {estado_financiero:"sin clasificar",clasificacion_contable:"sin clasificar",subgrupo:"sin clasificar",naturaleza:"sin clasificar",clasificacion_kpi:"sin clasificar",motor_mfa:"sin clasificar"};
}
function parseBalanzaMfa(wb, dic){
  const name = findSheetName(wb, "BALANZA");
  if(!name) throw new Error("No se encontró la hoja BALANZA.");
  const rows = sheetRows(wb.Sheets[name]);
  const raw = [];
  rows.slice(4).forEach(r=>{
    const cuenta = cleanMfa(r[1]);
    const nombre = cleanMfa(r[2]);
    if(!cuenta || !nombre) return;
    const m = mapDicMfa(cuenta, dic);
    const salFinDeudor = toNumberMfa(r[7]);
    const salFinAcreedor = toNumberMfa(r[8]);
    const cargos = toNumberMfa(r[5]);
    const abonos = toNumberMfa(r[6]);
    const naturaleza = m.naturaleza || "";
    const saldo_final = naturaleza.includes("acreed") ? salFinAcreedor - salFinDeudor : salFinDeudor - salFinAcreedor;
    const movimiento = naturaleza.includes("acreed") ? abonos - cargos : cargos - abonos;
    raw.push({
      nivel: toNumberMfa(r[0]), cuenta, nombre,
      saldo_inicial_deudor:toNumberMfa(r[3]), saldo_inicial_acreedor:toNumberMfa(r[4]),
      cargos, abonos, saldo_final_deudor:salFinDeudor, saldo_final_acreedor:salFinAcreedor,
      saldo_final, movimiento, ...m
    });
  });
  const accounts = raw.map(r=>r.cuenta);
  function isParentAccount(acc){
    const p = acc.split("-");
    if(p.length !== 3) return false;
    if(p[1] === "000" && p[2] === "000"){
      const pref = p[0] + "-";
      return accounts.some(a => a !== acc && a.startsWith(pref));
    }
    if(p[2] === "000"){
      const pref = p[0] + "-" + p[1] + "-";
      return accounts.some(a => a !== acc && a.startsWith(pref));
    }
    return false;
  }
  return raw.filter(r => !isParentAccount(r.cuenta));
}
function parseBancosMfa(wb){
  const name = findSheetName(wb, "BANCOS");
  if(!name) return [];
  const rows = sheetRows(wb.Sheets[name]);
  return rows.slice(1).filter(r => r.some(v => v !== null && v !== undefined && v !== "")).map(r=>({
    clav:cleanMfa(r[0]), mes:r[1], clas:cleanMfa(r[2]), tm:cleanMfa(r[3]), pol:cleanMfa(r[4]),
    fecha:r[5], categoria:cleanMfa(r[6]), concepto:cleanMfa(r[7]),
    cargo:toNumberMfa(r[8]), abono:toNumberMfa(r[9]), saldo:toNumberMfa(r[10])
  }));
}
function sumRows(rows, fn, field="saldo_final"){
  return rows.filter(fn).reduce((a,r)=>a+(Number(r[field])||0),0);
}
function topMfa(rows, amountKey, categoryKey, n=8){
  const d = {};
  rows.forEach(r=>{
    const cat = r[categoryKey] || "Sin categoría";
    d[cat] = (d[cat]||0) + (Number(r[amountKey])||0);
  });
  return Object.entries(d).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]).slice(0,n);
}
function buildPayloadFromWorkbookMfa(wb, filename="archivo.xlsx"){
  const dic = parseDiccionarioMfa(wb);
  const balanza = parseBalanzaMfa(wb, dic);
  const bancos = parseBancosMfa(wb);
  const s = (fn,field="saldo_final") => sumRows(balanza, fn, field);
  const activo_circ = s(r=>r.estado_financiero.includes("balance") && r.clasificacion_contable.includes("activo circulante"));
  const activo_no_circ = s(r=>r.estado_financiero.includes("balance") && (r.clasificacion_contable.includes("activo no") || r.clasificacion_contable.includes("activo fijo")));
  const activo_total = s(r=>r.estado_financiero.includes("balance") && r.clasificacion_contable.includes("activo"));
  const pasivo_cp = s(r=>r.estado_financiero.includes("balance") && (r.clasificacion_contable.includes("pasivo corto") || r.clasificacion_contable.includes("pasivo circulante")));
  const pasivo_lp = s(r=>r.estado_financiero.includes("balance") && r.clasificacion_contable.includes("pasivo largo"));
  const pasivo_total = s(r=>r.estado_financiero.includes("balance") && r.clasificacion_contable.includes("pasivo"));
  const capital_total = s(r=>r.estado_financiero.includes("balance") && (r.clasificacion_contable.includes("capital") || r.estado_financiero.includes("capital")));
  const liquidez = s(r=>r.subgrupo.includes("liquidez") || r.clasificacion_kpi.includes("liquidez"));
  const inventarios = s(r=>r.subgrupo.includes("invent") || r.clasificacion_kpi.includes("invent"));
  const ingresos = s(r=>r.estado_financiero.includes("resultado") && (r.clasificacion_contable.includes("ingreso") || r.subgrupo.includes("venta") || r.subgrupo.includes("ingreso")),"movimiento");
  const costos = s(r=>r.estado_financiero.includes("resultado") && (r.clasificacion_contable.includes("costo") || r.subgrupo.includes("costo") || r.subgrupo.includes("compra")),"movimiento");
  const gastos_operativos = s(r=>r.estado_financiero.includes("resultado") && (r.clasificacion_contable.includes("gasto") || r.subgrupo.includes("gasto")) && !(r.subgrupo.includes("financier") || r.clasificacion_contable.includes("financier")),"movimiento");
  const gastos_financieros = s(r=>r.subgrupo.includes("financier") || r.clasificacion_contable.includes("financier"),"movimiento");
  const impuestos_resultado = s(r=>r.estado_financiero.includes("resultado") && (r.subgrupo.includes("impuesto") || r.clasificacion_contable.includes("impuesto") || r.nombre.toLowerCase().includes("isr")),"movimiento");
  const utilidad_bruta = ingresos-costos;
  const utilidad_operativa = utilidad_bruta-gastos_operativos;
  const utilidad_neta = utilidad_operativa-gastos_financieros-impuestos_resultado;
  const inflows = bancos.reduce((a,r)=>a+(r.abono||0),0);
  const outflows = bancos.reduce((a,r)=>a+(r.cargo||0),0);
  const net_cash = inflows-outflows;
  const current_ratio = pasivo_cp ? activo_circ/pasivo_cp : 0;
  const quick_ratio = pasivo_cp ? (activo_circ-inventarios)/pasivo_cp : 0;
  const cash_conversion = ingresos ? inflows/ingresos : 0;
  const coverage = outflows ? liquidez/outflows : 0;
  const margin_gross = ingresos ? utilidad_bruta/ingresos : 0;
  const margin_oper = ingresos ? utilidad_operativa/ingresos : 0;
  const margin_net = ingresos ? utilidad_neta/ingresos : 0;
  const endeudamiento = activo_total ? pasivo_total/activo_total : 0;
  const score_liq = current_ratio>=1.5 && current_ratio<=3 ? 100 : current_ratio>3 ? 80 : current_ratio>=1 ? 65 : 40;
  const score_rent = margin_net>=.12 ? 100 : margin_net>=.08 ? 80 : margin_net>=0 ? 55 : 25;
  const score_cash = net_cash>0 ? 85 : coverage>=1 ? 55 : 40;
  const score_cob = cash_conversion>=.8 ? 85 : cash_conversion>=.6 ? 65 : 35;
  const score_debt = endeudamiento<.4 ? 90 : endeudamiento<.7 ? 70 : 45;
  const score_emp = Math.round(.30*score_liq+.25*score_rent+.20*score_cob+.15*score_cash+.10*score_debt);
  const unclassified = balanza.filter(r=>r.estado_financiero.includes("sin clasificar")).length;
  const square_diff = activo_total - (pasivo_total + capital_total + utilidad_neta);
  const clientRows = balanza.filter(r=>(r.subgrupo.includes("cobranza") || r.nombre.toLowerCase().includes("cliente")) && Math.abs(r.saldo_final)>0)
    .sort((a,b)=>Math.abs(b.saldo_final)-Math.abs(a.saldo_final)).slice(0,8)
    .map((r,i)=>[`Cliente ${String.fromCharCode(65+i)}`, Math.abs(r.saldo_final)]);
  const hallazgos = [];
  if(net_cash < 0 && utilidad_neta > 0) hallazgos.push({tipo:"Riesgo",titulo:"La operación genera utilidad, pero no efectivo suficiente.",detalle:"El Estado de Resultados muestra utilidad positiva; sin embargo, el flujo bancario neto del periodo es negativo."});
  if(cash_conversion < .8) hallazgos.push({tipo:"Riesgo",titulo:"Conversión de ventas a efectivo por debajo del umbral objetivo.",detalle:"La entrada bancaria representa menos del 80% de los ingresos contables del periodo. Revisar cobranza, vigencia CFDI y saldos de clientes."});
  if(current_ratio > 3) hallazgos.push({tipo:"Atención",titulo:"Liquidez contable elevada.",detalle:"La razón circulante supera 3x. Puede existir exceso de liquidez, cartera no recuperada o saldos pendientes de depuración."});
  if(unclassified) hallazgos.push({tipo:"Integridad",titulo:"Existen cuentas sin clasificación MFA.",detalle:`Se detectaron ${unclassified} cuentas sin mapeo completo en el Diccionario MFA.`});
  if(Math.abs(square_diff)>1) hallazgos.push({tipo:"Integridad",titulo:"Diferencia de cuadratura en estructura financiera.",detalle:"Validar clasificación de capital, resultado del periodo y naturaleza de saldos para cerrar Activo = Pasivo + Capital."});
  return {
    metadata:{empresa:"Empresa demo",periodo:"Periodo cargado",ejercicio:new Date().getFullYear(),version_motor:"MFA Motor navegador v1.0",fuente:filename,notas:"Procesado en navegador con cuentas de detalle."},
    kpis:{liquidity_cash:liquidez,current_ratio,quick_ratio,working_capital:activo_circ-pasivo_cp,income:ingresos,costs,oper_exp:gastos_operativos,fin_exp:gastos_financieros,profit_gross:utilidad_bruta,profit_oper:utilidad_operativa,profit_net:utilidad_neta,margin_gross,margin_oper,margin_net,inflows,outflows,net_cash,cash_conversion,coverage,score_emp,score_liq,score_rent,score_cash,score_cob,score_debt,activo_total,activo_circulante:activo_circ,activo_no_circulante:activo_no_circ,pasivo_total,pasivo_corto_plazo:pasivo_cp,pasivo_largo_plazo:pasivo_lp,capital_total,endeudamiento,cuadratura_diferencia:square_diff,unclassified_count:unclassified},
    charts:{top_exp:topMfa(bancos.filter(r=>r.cargo), "cargo", "categoria"),top_in:topMfa(bancos.filter(r=>r.abono), "abono", "categoria"),clients:clientRows},
    hallazgos,
    validaciones:{unclassified_count:unclassified,square_diff,bank_rows:bancos.length,balance_rows:balanza.length,dictionary_rows:Object.keys(dic).length,detail_mode:"leaf_accounts"}
  };
}
function bindExcelUpload(){
  const input = document.getElementById("excelUpload");
  if(!input) return;
  input.addEventListener("change", async (event)=>{
    const file = event.target.files?.[0];
    if(!file) return;
    const status = document.getElementById("excelUploadStatus");
    try{
      if(!window.XLSX) throw new Error("No se cargó la librería XLSX.");
      if(status) status.textContent = "Procesando archivo Excel...";
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, {type:"array", cellDates:true});
      const payload = buildPayloadFromWorkbookMfa(wb, file.name);
      applyMfaPayload(payload, file.name);
      if(status) status.textContent = `Archivo Excel procesado correctamente: ${file.name}.`;
    }catch(e){
      if(status) status.textContent = "No se pudo procesar el Excel. Verifica hojas BALANZA, DICCIONARIO MFA y BANCOS.";
      console.error(e);
    }
  });
}

function bindJsonUpload(){
  const input = document.getElementById("jsonUpload");
  if(!input) return;
  input.addEventListener("change", async (event)=>{
    const file = event.target.files?.[0];
    if(!file) return;
    try{
      const text = await file.text();
      const payload = JSON.parse(text);
      applyMfaPayload(payload, file.name);
    }catch(e){
      const status = document.getElementById("jsonUploadStatus");
      if(status) status.textContent = "No se pudo leer el JSON. Verifica el formato del archivo.";
      console.error(e);
    }
  });
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
bindExcelUpload();
bindJsonUpload();
updateContext();
loadDefaultMfaJson();
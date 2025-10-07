
/* Serverless app using in-page globals (from data.js). */
function getSession(){ try{return JSON.parse(localStorage.getItem('cp_session'))}catch(e){return null} }
function setSession(user){ localStorage.setItem('cp_session', JSON.stringify(user)); }

function requireAuth(){
  const u = getSession();
  if(!u){ location.href='index.html'; return; }
  const topbarUser = document.getElementById('topbarUser');
  const sidebarUser = document.getElementById('sidebarUser');
  if(topbarUser) topbarUser.textContent = u.name.split(' ')[0];
  if(sidebarUser) sidebarUser.textContent = u.name;
  const logout = document.getElementById('logoutBtn');
  if(logout){ logout.addEventListener('click', ()=>{ localStorage.removeItem('cp_session'); location.href='index.html'; })}
}

document.addEventListener('DOMContentLoaded', ()=>{
  const path = location.pathname.split('/').pop();

  // LOGIN
  if(path === '' || path === 'index.html'){
    const form = document.getElementById('loginForm');
    if(form){
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const pass = document.getElementById('loginPassword').value;
        const user = CP_USERS.find(u=>u.email.toLowerCase()===email && u.password===pass);
        if(user){ setSession(user); location.href='dashboard.html'; }
        else { document.getElementById('loginError').classList.remove('d-none'); }
      });
    }
    return;
  }

  // protected pages
  requireAuth();

  // DASHBOARD
  if(path === 'dashboard.html'){
    const list = document.getElementById('customerList');
    const typeLabel = c => (CP_TYPES.find(t=>t.code===c)||{label:c}).label;

    CP_USERS.slice(1,5).forEach((u, idx)=>{
      const related = CP_COLLECTIONS[idx % CP_COLLECTIONS.length];
      const weight = [40,60,10,100][idx % 4];
      const quality = ['Gold','Silver','Silver','Diamond'][idx % 4];
      const badgeClass = quality==='Gold'?'badge-gold':(quality==='Silver'?'badge-silver':'badge-diamond');
      const item = document.createElement('div');
      item.className = 'list-item';
      item.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${u.avatar}" width="44" height="44" class="rounded-circle">
          <div>
            <div class="fw-semibold">${u.name}</div>
            <div class="meta">${typeLabel(related.type)} • ${related.locality}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-4">
          <div class="text-end">
            <div class="fw-bold">${weight} KG</div>
            <div class="meta">Plastic / Cardboard</div>
          </div>
          <span class="badge badge-gold">${quality}</span>
          <i class="bi bi-three-dots-vertical"></i>
        </div>`;
      list.appendChild(item);
    });

    document.getElementById('statCollection').textContent = '25.1k';
    document.getElementById('statDeficit').textContent = '$2,435k';
    document.getElementById('statActive').textContent = '3.5M';
    document.getElementById('statNew').textContent = '43.5k';

    if(window.Chart){
      new Chart(document.getElementById('claimsChart'), {
        type: 'line',
        data: {
          labels: ['2015','2016','2017','2018','2019','2020'],
          datasets: [
            { label:'Approved', data:[20,28,18,35,22,39] },
            { label:'Submitted', data:[15,24,22,30,27,31] }
          ]
        },
        options: { responsive:true, tension:.4 }
      });
    }
  }

  // USERS
  if(path === 'users.html'){
    const list = document.getElementById('usersTable');
    CP_USERS.forEach(u=>{
      const li = document.createElement('a');
      li.href = '#';
      li.className = 'list-group-item list-group-item-action d-flex align-items-center justify-content-between';
      li.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${u.avatar}" class="rounded-circle" width="44" height="44">
          <div>
            <div class="fw-semibold">${u.name}</div>
            <div class="small text-muted">${u.role}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-4">
          <span class="badge ${u.status==='Online'?'text-bg-success':'badge-gold'}">${u.status}</span>
          <i class="bi bi-three-dots-vertical"></i>
        </div>`;
      list.appendChild(li);
    });
  }

  // WEIGHT
  if(path === 'weight-record.html'){
    const typeSel = document.getElementById('typeFilter');
    CP_TYPES.forEach(t=>{
      const opt = document.createElement('option'); opt.value=t.code; opt.textContent=t.label; typeSel.appendChild(opt);
    });

    document.getElementById('saveWeightBtn').addEventListener('click', ()=>{
      const selected = typeSel.value;
      const date = document.getElementById('dateFilter').value;
      const kg = parseFloat(document.getElementById('weightInput').value);
      if(!selected || !date || !kg){ alert('Complete all fields'); return; }
      const history = JSON.parse(localStorage.getItem('cp_weights')||'[]');
      history.push({date, kg, type:selected});
      localStorage.setItem('cp_weights', JSON.stringify(history));
      renderLatest(); renderChart();
      document.getElementById('weightInput').value='';
    });

    function renderLatest(){
      const list = document.getElementById('latestTx');
      list.innerHTML='';
      const local = JSON.parse(localStorage.getItem('cp_weights')||'[]');
      [...CP_WEIGHTS.map(w=>({date:w.recordedAt.slice(0,10), kg:w.kg, type:w.type})), ...local]
        .slice(-6).reverse()
        .forEach(item=>{
          const li = document.createElement('li');
          li.className='list-group-item d-flex justify-content-between';
          li.innerHTML = `<span>${item.date} — ${item.type}</span><strong>${item.kg} kg</strong>`;
          list.appendChild(li);
        });
    }

    function renderChart(){
      const el = document.getElementById('outlayChart');
      if(!el || !window.Chart) return;
      const local = JSON.parse(localStorage.getItem('cp_weights')||'[]');
      const all = [...CP_WEIGHTS.map(w=>({date:w.recordedAt.slice(8,10), kg:w.kg})), ...local.map(w=>({date:w.date.slice(8,10), kg:w.kg}))];
      const days = [...new Set(all.map(a=>a.date))].sort();
      const data = days.map(d=> all.filter(a=>a.date===d).reduce((s,a)=>s+a.kg,0));
      new Chart(el, { type:'line', data:{ labels:days, datasets:[{label:'Kg', data}] }, options:{tension:.4} });
    }

    renderLatest(); renderChart();
  }

  // POINTS
  if(path === 'points.html'){
    const u = getSession();
    const rec = CP_POINTS.find(p=>p.userId===u.id) || {earned:0, redeemed:0};
    document.getElementById('accumulated').textContent = rec.earned;
    document.getElementById('redeemed').textContent = rec.redeemed;
    document.getElementById('lost').textContent = Math.max(0, Math.floor(rec.earned*0.05)-rec.redeemed);
    document.getElementById('totalCollections').textContent = CP_WEIGHTS.length;

    const donut = id => window.Chart && new Chart(document.getElementById(id), {
      type:'doughnut',
      data:{ labels:['Used','Remaining'], datasets:[{data:[rec.redeemed, Math.max(0, rec.earned-rec.redeemed)]}] },
      options:{ cutout:'60%' }
    });
    donut('chartTotalPoints'); donut('chartLostPoints'); donut('chartTotalCollection');
  }
});

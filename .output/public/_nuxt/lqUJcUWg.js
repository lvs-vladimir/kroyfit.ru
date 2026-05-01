import{e as _,q as z,h as D,c as y,a as i,b as d,i as l,L as V,w as n,l as m,n as u,o,d as c,k as M,_ as B}from"./Dj3GEJJW.js";import{V as k}from"./D3gPRXG2.js";import{V as K}from"./BD6elVpZ.js";import{V as P}from"./B5L3MymN.js";import{V as h}from"./sGdznsOW.js";import{V as S}from"./Ic0exQns.js";import"./DkyNc0ZL.js";import"./DDU5QJyV.js";import"./DvoKm45Y.js";import"./DTSdd9jU.js";const T={class:"d-flex align-center mb-6"},F=["innerHTML"],L={key:1},N=_({__name:"index",setup(I){const t=u(!1),f=u(!1),a=u(""),p=u(""),g=`## ✅ Выполнено

### Дизайн
- [x] Админка в стиле nuxt.com (минимализм, зеленый акцент)
- [x] Fullscreen без отступов по бокам
- [x] Сэндвич-меню для мобильных
- [x] Светлое выделение меню

### Админка
- [x] Dashboard с последними покупками
- [x] Управление курсами
- [x] Управление пользователями
- [x] Настройки → ВКонтакте

### Интеграции
- [x] VK ID SDK кнопка логина
- [x] Автодобавление пользователя после VK авторизации

---

## 📋 Запланировано

### Приоритет: Высокий
- [ ] Интеграция ЮKassa (оплата курсов)
- [ ] Подключение базы данных
- [ ] Привязка VK группы к курсу

### Приоритет: Средний
- [ ] Страница профиля пользователя
- [ ] Личный кабинет ученика
- [ ] Email уведомления

*Обновлено: ${new Date().toLocaleDateString("ru-RU")}*`;z(async()=>{await $()});const $=async()=>{try{const r=await $fetch("/api/plan");a.value=r.content||g,p.value=x(a.value)}catch{a.value=g,p.value=x(g)}},w=()=>{t.value=!0},E=()=>{t.value=!1,$()},C=async()=>{f.value=!0;try{await $fetch("/api/plan",{method:"POST",body:{content:a.value}}),t.value=!1,p.value=x(a.value)}catch(r){console.error("Ошибка сохранения:",r),alert("Ошибка сохранения плана")}finally{f.value=!1}},x=r=>r?`<div style="line-height:1.6;overflow-y:auto;max-height:calc(100vh - 200px);">${r.replace(/^## (.+)$/gm,'<h2 style="color:#020617;font-size:1.25rem;font-weight:700;margin:1.5rem 0 0.5rem;">$1</h2>').replace(/^### (.+)$/gm,'<h3 style="color:#020617;font-size:1.1rem;font-weight:600;margin:1rem 0 0.25rem;">$1</h3>').replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/- \[x\] (.+)/gi,'<span style="color:#00DC82;">✓</span> $1').replace(/- \[ \] (.+)/gi,'<span style="color:#ccc;">○</span> $1').replace(/^- (.+)/gm,'<li style="margin-left:1rem;">$1</li>').replace(/^---$/gm,'<hr style="border:none;border-top:1px solid #E2E8F0;margin:1.5rem 0;">').replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/\|(.+)\|/g,v=>{const b=v.split("|").filter(s=>s.trim());return b.some(s=>/^-+$/.test(s.trim()))?"":`<tr>${b.map(s=>`<td style="padding:8px;border:1px solid #E2E8F0;">${s.trim()}</td>`).join("")}</tr>`}).replace(/\n\n/g,'</p><p style="margin:0.5rem 0;">').replace(/\n/g,"<br>").replace(/<br><hr/g,"<hr")}</div>`:"";return D({title:"План разработки — Админка"}),(r,e)=>(o(),y("div",null,[i("div",T,[e[6]||(e[6]=i("div",null,[i("h1",{class:"text-h4 font-weight-bold mb-1",style:{color:"#020617"}},"План разработки"),i("p",{class:"text-body-2 text-grey-darken-1"},"Текущие и будущие задачи")],-1)),d(P),l(t)?m("",!0):(o(),V(k,{key:0,color:"green-darken-3",variant:"flat",size:"small",style:{"border-radius":"8px"},onClick:w},{default:n(()=>[d(h,{start:"",size:"18"},{default:n(()=>[...e[1]||(e[1]=[c("mdi-pencil",-1)])]),_:1}),e[2]||(e[2]=c(" Редактировать ",-1))]),_:1})),l(t)?(o(),V(k,{key:1,color:"green-darken-3",variant:"flat",size:"small",style:{"border-radius":"8px"},loading:l(f),onClick:C},{default:n(()=>[d(h,{start:"",size:"18"},{default:n(()=>[...e[3]||(e[3]=[c("mdi-content-save",-1)])]),_:1}),e[4]||(e[4]=c(" Сохранить ",-1))]),_:1},8,["loading"])):m("",!0),l(t)?(o(),V(k,{key:2,variant:"text",color:"grey-darken-2",size:"small",class:"ml-2",onClick:E},{default:n(()=>[...e[5]||(e[5]=[c(" Отмена ",-1)])]),_:1})):m("",!0)]),d(K,{class:"pa-6",style:{border:"1px solid #E2E8F0","border-radius":"12px"}},{default:n(()=>[l(t)?m("",!0):(o(),y("div",{key:0,class:"plan-content",innerHTML:l(p)},null,8,F)),l(t)?(o(),y("div",L,[d(S,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=v=>M(a)?a.value=v:null),variant:"outlined",rows:"30","hide-details":"",class:"font-monospace"},null,8,["modelValue"]),e[7]||(e[7]=i("p",{class:"text-caption text-grey-darken-1 mt-2"}," Поддерживает Markdown. Используйте ## для заголовков, - [ ] для чекбоксов, | | для таблиц. ",-1))])):m("",!0)]),_:1})]))}}),W=B(N,[["__scopeId","data-v-8650774c"]]);export{W as default};

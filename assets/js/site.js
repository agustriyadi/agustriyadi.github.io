const contentFiles={profile:'content/profile.json',skills:'content/skills.json',experience:'content/experience.json',focus:'content/focus.json',projects:'content/projects.json'};
const $=(selector)=>document.querySelector(selector);
const setText=(selector,value)=>{const node=$(selector);if(node)node.textContent=value||''};
const card=(className,html)=>{const node=document.createElement('article');node.className=className;node.innerHTML=html;return node};
async function loadJson(path){const response=await fetch(path);if(!response.ok)throw new Error(`${path}: ${response.status}`);return response.json()}
async function render(){
  const [profile,skills,experience,focus,projects]=await Promise.all(Object.values(contentFiles).map(loadJson));
  setText('[data-profile="headline"]',profile.headline);setText('[data-profile="about"]',profile.about);setText('[data-profile="workingStyle"]',profile.workingStyle);
  document.querySelectorAll('[data-profile-link="email"]').forEach((link)=>{link.href=`mailto:${profile.email}`});
  document.querySelectorAll('[data-profile-link="instagram"]').forEach((link)=>{link.href=profile.instagram});
  skills.items.forEach((skill)=>{$('[data-skills]').append(card('skill',skill))});
  experience.items.forEach((item)=>{$('[data-experience]').append(card('timeline-item',`<div class="timeline-date">${item.period}</div><div><h3>${item.role} · ${item.company}</h3><ul>${item.responsibilities.map((text)=>`<li>${text}</li>`).join('')}</ul></div>`))});
  focus.items.forEach((item)=>{$('[data-focus]').append(card('focus-card',`<p class="focus-number">${item.label}</p><h3>${item.title}</h3><p>${item.description}</p>`))});
  projects.items.forEach((item)=>{$('[data-projects]').append(card('project-card',`<span class="project-status">${item.status}</span><h3>${item.title}</h3><p>${item.description}</p>`))});
  setText('[data-project-note]',projects.note);setText('[data-year]',new Date().getFullYear());
}
render().catch((error)=>{console.error(error);document.body.dataset.contentError='true'});

import{h as u,p as I}from"./hooks.module.a845df0c.js";import{S as x}from"./spinner.164b1eeb.js";import{a as G,T as k}from"./jwt.f0e0aa9c.js";import{a as p}from"./http.6d2b195c.js";import{o as r}from"./jsxRuntime.module.8b00cb04.js";import{k as R}from"./preact.module.f1575aff.js";const T="/_astro/github.ab5c33e4.svg",c="githubRedirectAt",l="githubLastPage";function B(v){const[n,e]=u(!1),[g,i]=u(""),f=n?x:T;return I(()=>{const t=new URLSearchParams(window.location.search),o=t.get("code"),w=t.get("state"),b=t.get("provider");!o||!w||b!=="github"||(e(!0),p(`https://api.roadmap.sh/v1-github-callback${window.location.search}`).then(({response:a,error:S})=>{if(!a?.token){const s=S?.message||"Something went wrong.";i(s),e(!1);return}let m="/";const d=localStorage.getItem(c),h=localStorage.getItem(l);if(d&&h){const s=parseInt(d,10);Date.now()-s<30*1e3&&(m=h)}localStorage.removeItem(c),localStorage.removeItem(l),G.set(k,a.token,{path:"/",expires:30}),window.location.href=m}).catch(a=>{i("Something went wrong. Please try again later."),e(!1)}))},[]),r(R,{children:[r("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:n,onClick:async()=>{e(!0);const{response:t,error:o}=await p("https://api.roadmap.sh/v1-github-login");if(o||!t?.loginUrl){i(o?.message||"Something went wrong. Please try again later."),e(!1);return}["/login","/signup"].includes(window.location.pathname)||(localStorage.setItem(c,Date.now().toString()),localStorage.setItem(l,window.location.pathname)),window.location.href=t.loginUrl},children:[r("img",{src:f,alt:"GitHub",class:`h-[18px] w-[18px] ${n?"animate-spin":""}`}),"Continue with GitHub"]}),g&&r("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:g})]})}export{B as GitHubButton};

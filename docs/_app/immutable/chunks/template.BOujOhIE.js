import{c as i,g as u,a as f,T as v,b as p,h as d,d as o,s as h,e as T}from"./runtime.DM6rebiC.js";function E(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=f;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,c=(t&p)!==0,a,_=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=E(_?r:"<!>"+r),e||(a=u(a)));var s=c?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=u(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=i(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),h(e)),n(e,e),e}function b(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),n(t,e),r}function x(r,t){if(d){f.nodes_end=o,T();return}r!==null&&r.before(t)}export{x as a,n as b,b as c,M as d,y as t};

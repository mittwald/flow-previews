let t=null;function s(o,e="assertive",i=7e3){t?t.announce(o,e,i):(t=new r,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?t.announce(o,e,i):setTimeout(()=>{t!=null&&t.isAttached()&&(t==null||t.announce(o,e,i))},100))}function h(o){t&&t.clear(o)}class r{isAttached(){var e;return(e=this.node)===null||e===void 0?void 0:e.isConnected}createLog(e){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",e),i.setAttribute("aria-relevant","additions"),i}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,i="assertive",a=7e3){var d,l;if(!this.node)return;let n=document.createElement("div");typeof e=="object"?(n.setAttribute("role","img"),n.setAttribute("aria-labelledby",e["aria-labelledby"])):n.textContent=e,i==="assertive"?(d=this.assertiveLog)===null||d===void 0||d.appendChild(n):(l=this.politeLog)===null||l===void 0||l.appendChild(n),e!==""&&setTimeout(()=>{n.remove()},a)}clear(e){this.node&&((!e||e==="assertive")&&this.assertiveLog&&(this.assertiveLog.innerHTML=""),(!e||e==="polite")&&this.politeLog&&(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}}export{s as $,h as a};
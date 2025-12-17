import{j as r,R as c}from"./iframe-CQakcPxy.js";import{P as p}from"./Popover-BybQ1H5j.js";import{B as l}from"./Button-BgdUtfaQ.js";import{O as i}from"./OverlayTrigger-ewIDRAFx.js";import{f as m}from"./flowComponent-CGl7t6Dn.js";import{D as g}from"./DialogTriggerView-DHt88gIJ.js";import{u}from"./useOverlayController-DnqhdB7Q.js";const d=m("PopoverTrigger",e=>{const{children:n,...a}=e;return r.jsx(i,{overlayType:"Popover",...a,component:g,children:n})},{type:"provider"}),f={title:"Overlays/Popover",component:p,render:e=>r.jsxs(d,{children:[r.jsx(l,{children:"Trigger popover"}),r.jsx(p,{...e,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},s={render:e=>{const n=u("Popover"),a=c.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(l,{ref:a,onPress:n.open,children:"Trigger popover"}),r.jsx(p,{triggerRef:a,...e,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...s.parameters?.docs?.source}}};const v=["Default","CustomWidth","WithController"],O=Object.freeze(Object.defineProperty({__proto__:null,CustomWidth:t,Default:o,WithController:s,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{O as D,d as P,f as m};

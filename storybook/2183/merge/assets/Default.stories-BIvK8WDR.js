import{j as r,R as a}from"./iframe-Br-RCPWN.js";import{P as s,u as c}from"./Popover-QdAZ89s_.js";import{B as m}from"./Button-D54g6t8r.js";import{P as l}from"./PopoverTrigger-B_oYUYip.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-De-RWUql.js";import"./Button-CoaZdKpJ.js";import"./utils-Dak_ECAp.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Bc5k9Bh6.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./browser-Dyp86VHf.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./PropsContextProvider-CSAj95jw.js";import"./useStatic-eGeAE8fm.js";import"./OverlayTrigger-D0y2BIl1.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./Text-CIylET5F.js";import"./EmulatedBoldText-DiJCrkGJ.js";import"./LoadingSpinner-B0xf-tui.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const M=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,M as __namedExportsOrder,L as default};

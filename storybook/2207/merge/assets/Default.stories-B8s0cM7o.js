import{j as r,R as a}from"./iframe-BA9q8iRx.js";import{P as s,u as c}from"./Popover-_2bXyvx4.js";import{B as m}from"./Button-DkX1WVEp.js";import{P as l}from"./PopoverTrigger-CMZxvGxV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./utils-QcIDpANH.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn4rMbpf.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./browser-XONib2dq.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./PropsContextProvider-BVBE-WhE.js";import"./useStatic-CdSu_vHo.js";import"./OverlayTrigger-Cse3DARB.js";import"./IconWarning-Ddu6VgyQ.js";import"./Text-Ms6nMBSf.js";import"./EmulatedBoldText-W46YB4wy.js";import"./LoadingSpinner-CRPfYfmX.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,L as __namedExportsOrder,K as default};

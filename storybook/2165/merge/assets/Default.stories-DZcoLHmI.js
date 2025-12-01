import{j as r,R as a}from"./iframe-Clmt7jYU.js";import{P as s,u as c}from"./Popover--yCHfjbQ.js";import{B as m}from"./Button-Cpx-qVCp.js";import{P as l}from"./PopoverTrigger-Bac14MEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-BbRYzAs6.js";import"./Button-MP-U6i_K.js";import"./utils-BaIVInUf.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-J-yaWB4J.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./browser-BVazs59Q.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./useStatic-Bnfhfmst.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./IconWarning-CMDAZJGy.js";import"./Text-BQs7jhBI.js";import"./EmulatedBoldText-D5ywUyQZ.js";import"./LoadingSpinner-CenMvatO.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

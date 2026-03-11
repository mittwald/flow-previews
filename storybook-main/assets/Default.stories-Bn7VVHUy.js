import{j as r,R as a}from"./iframe-BLisfkW1.js";import{P as i}from"./Popover-CG9tv1E3.js";import{B as n}from"./Button-BfYq4-Jl.js";import{P as c}from"./PopoverTrigger-5N7qks-B.js";import"./flowComponent-DivMJame.js";import{u as l}from"./useOverlayController-UaqgI9Sz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./utils-B2KexK2G.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./context-B09EtTwC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./Text-CMQTkDl6.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./VisuallyHidden-y8IU71vp.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./OverlayTrigger-47H3bobw.js";import"./DialogTriggerView-DSjjCQKo.js";import"./useStatic-Cf1wupkY.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const nr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,nr as __namedExportsOrder,sr as default};

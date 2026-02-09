import{j as r,R as a}from"./iframe-agbTJ2rk.js";import{P as i}from"./Popover-T-SqMr4y.js";import{B as n}from"./Button-Br9Yc6cY.js";import{P as c}from"./PopoverTrigger-CMX22-y3.js";import{u as l}from"./useOverlayController-CpxxUC1a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./OverlayContextProvider-CL8tIiF7.js";import"./context-Dm2xLzXZ.js";import"./useStatic-C0pFV-a-.js";import"./Dialog-A1OcXUz0.js";import"./Button-KwBkKB1A.js";import"./utils-Cg5Rmuuc.js";import"./ProgressBar-Dtf2TWy6.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-COQ7NCDT.js";import"./context-DNnfn7OO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DrXmkjxU.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useFocusable-Dcrl6Kh-.js";import"./RSPContexts-H7hhohAE.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./Text-B3pB98UM.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./VisuallyHidden-C-SP4JvM.js";import"./IconWarning-DBJeVzaP.js";import"./remote-zpHok2y4.js";import"./Text-DmtEYLwi.js";import"./browser-DcYn1DNE.js";import"./EmulatedBoldText-_6M-JboB.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./OverlayTrigger-BiKcN0tL.js";import"./DialogTriggerView-H0SCw3R3.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};

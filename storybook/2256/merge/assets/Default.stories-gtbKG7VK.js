import{j as r,R as a}from"./iframe-Dcjk2TLd.js";import{P as i}from"./Popover-v14vQrIU.js";import{B as n}from"./Button-D-jN4scm.js";import{P as c}from"./PopoverTrigger-kK9balPC.js";import{u as l}from"./useOverlayController-Bka7Uz7O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./OverlayContextProvider-BL4zS0NQ.js";import"./context-Dbo8u0HC.js";import"./useStatic-DYXSIhuP.js";import"./Dialog-Cncwnvc2.js";import"./Button-D3PtZgc0.js";import"./utils-C4npX7la.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./context-pAIzfbng.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useControlledState-DBXDF7mL.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./Text-zDtUk3hp.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./VisuallyHidden-D01b8Wlz.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Text-lyGbob8n.js";import"./browser-B8c1tkp7.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./LoadingSpinner-BbHp37hM.js";import"./OverlayTrigger-Cf-WmxV6.js";import"./DialogTriggerView-09icvsrZ.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

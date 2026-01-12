import{j as r,R as a}from"./iframe-DkC9HeFh.js";import{P as i}from"./Popover-nq4j79nG.js";import{B as n}from"./Button-B7ieOWfK.js";import{P as c}from"./PopoverTrigger-DCNslbt1.js";import{u as l}from"./useOverlayController-CKW4WHoS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./Dialog-BJyrAoE0.js";import"./Button-1sEra0ij.js";import"./utils-CQbe0cgS.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./context-FwWFVwDs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./Text-BZKGVCR5.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./VisuallyHidden-DWtp1z23.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Text-B-gx4bXK.js";import"./browser-tA6G_ksz.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./LoadingSpinner-lFYILNSp.js";import"./OverlayTrigger-BY_bjwFe.js";import"./DialogTriggerView-C81GdE1z.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

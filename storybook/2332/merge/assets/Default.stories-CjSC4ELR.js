import{j as r,R as a}from"./iframe-DunzINT4.js";import{P as i}from"./Popover-DJxHz7NJ.js";import{B as n}from"./Button-D4ye7DRq.js";import{P as c}from"./PopoverTrigger-DK4KXr3Y.js";import"./flowComponent-CeuyEBcJ.js";import{u as l}from"./useOverlayController-CeSeYZW0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./utils-B66WPIWK.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./context-XFBu4tuG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VDpDAbVy.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./Text-CMXpTIb-.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./VisuallyHidden-C85ONzQn.js";import"./IconWarning-kFcnfyhN.js";import"./remote-BHsosJBg.js";import"./Text-DTHO_DRR.js";import"./browser-CUqULdV9.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./LoadingSpinner-CzZyxAnt.js";import"./OverlayTrigger-B1b7JrEs.js";import"./DialogTriggerView-gAnD3119.js";import"./useStatic-CPAaCdO2.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

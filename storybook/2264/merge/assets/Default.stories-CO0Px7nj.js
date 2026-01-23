import{j as r,R as a}from"./iframe-CL_XwmGn.js";import{P as i}from"./Popover-DNdwUWwE.js";import{B as n}from"./Button-D2VcFxMo.js";import{P as c}from"./PopoverTrigger-c3LDQ2oA.js";import{u as l}from"./useOverlayController-BHc_huao.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./OverlayContextProvider-DerEZw4j.js";import"./context-C4d2ZO_d.js";import"./useStatic-KIt4AINJ.js";import"./Dialog-BknS8Hxj.js";import"./Button-CWqxXJtj.js";import"./utils-pMOpDdKA.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./context-BrZvYWUs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./Text-BoyMWt4b.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./VisuallyHidden-q4vxjiW8.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Text-D6CnWJI6.js";import"./browser-BUAGSuau.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./OverlayTrigger-2Lg8C4JA.js";import"./DialogTriggerView-Dt6C6eBY.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

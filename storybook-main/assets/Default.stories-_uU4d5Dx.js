import{j as r,R as a}from"./iframe-tDsAeGKm.js";import{P as i}from"./Popover-Dl9HCW3C.js";import{B as n}from"./Button-jRtlVENb.js";import{P as c}from"./PopoverTrigger-DXsUnqv-.js";import"./flowComponent-BfLM0c2n.js";import{u as l}from"./useOverlayController-B76T1UqF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./Dialog-BchFx3yj.js";import"./Button-DSgsBLqC.js";import"./utils-DhX5ITDy.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./context-B8HhXai5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DsHBwD0o.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useFocusable-Dhs_EAwV.js";import"./RSPContexts-1mHRta2c.js";import"./OverlayArrow-dAx307tU.js";import"./useControlledState-DJUoNOP3.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./Text-B29urVwj.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./VisuallyHidden-BeYtKSfy.js";import"./IconWarning-DKvGabEh.js";import"./remote-Dyxf39S8.js";import"./Text-D5NMs6cZ.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./LoadingSpinner-cVZxppZv.js";import"./OverlayTrigger-e7KCcZDP.js";import"./DialogTriggerView-CkHDJvb0.js";import"./useStatic-BTV6Su7X.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

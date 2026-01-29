import{j as r,R as a}from"./iframe-B9oS1eAm.js";import{P as i}from"./Popover-YwALvm8D.js";import{B as n}from"./Button-DYAI_N0q.js";import{P as c}from"./PopoverTrigger-BiMdrxzQ.js";import{u as l}from"./useOverlayController-kt2fLXEJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./context-CJJiwCXZ.js";import"./useStatic-D0W9io-P.js";import"./Dialog-DQxs1UCg.js";import"./Button-BCaEF3RH.js";import"./utils-CkbQ6lDO.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./context-CSGUwiAp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./Text-DSVxOKBO.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./VisuallyHidden-D5FMvG_d.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Text-D9DZPtYx.js";import"./browser-DuZ3LDHb.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./LoadingSpinner-BCe3g54S.js";import"./OverlayTrigger-BbXRNnL7.js";import"./DialogTriggerView-T7ydPhJ_.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

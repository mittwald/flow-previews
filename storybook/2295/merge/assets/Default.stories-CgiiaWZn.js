import{j as r,R as a}from"./iframe-DJlgDtsR.js";import{P as i}from"./Popover-Cjed0IxS.js";import{B as n}from"./Button-B5mEMvcP.js";import{P as c}from"./PopoverTrigger-HxhmXXHh.js";import{u as l}from"./useOverlayController-BccrWtDH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./OverlayContextProvider-CVHBadgO.js";import"./context-TnNtslmb.js";import"./useStatic-kKtkdJS1.js";import"./Dialog-BOJlWGO4.js";import"./Button-DjTNcQDc.js";import"./utils-xFKhKznh.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./context-XFPr5nuV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CWKDBuw6.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./Text-DD0-81CT.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./Text-B6SLv6do.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./LoadingSpinner-DvQzlWjD.js";import"./OverlayTrigger-02q3wf6R.js";import"./DialogTriggerView-DYDuc4xI.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

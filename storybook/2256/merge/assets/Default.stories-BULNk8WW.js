import{j as r,R as a}from"./iframe-D2BYf5-g.js";import{P as i}from"./Popover-xYzPuiR6.js";import{B as n}from"./Button-CDOjETwV.js";import{P as c}from"./PopoverTrigger-aiAiZ_H4.js";import{u as l}from"./useOverlayController-CdWYn5_T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./OverlayContextProvider-ddiXR-PL.js";import"./context-DatNKEIi.js";import"./useStatic-DA3fGq-b.js";import"./Dialog-DmGaLGl4.js";import"./Button-DuBdlowL.js";import"./utils-DHZ51AFQ.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./context-DWMR9XE1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wVuL2i-g.js";import"./useFocus-ORvRv07U.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocusable-BL0hS6to.js";import"./RSPContexts-Jo-zwAyH.js";import"./OverlayArrow-BMVG_KsN.js";import"./useControlledState-fyUF26L0.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./Text-Dog52uMi.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./VisuallyHidden-DcwEctQc.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./Text-D6N8Heh9.js";import"./browser-CRHYBb-w.js";import"./EmulatedBoldText-BewoRcqC.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./OverlayTrigger-BR1gsJaD.js";import"./DialogTriggerView-BxLYgvuO.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

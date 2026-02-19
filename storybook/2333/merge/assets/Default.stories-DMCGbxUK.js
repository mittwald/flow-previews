import{j as r,R as a}from"./iframe-CaMmm6JB.js";import{P as i}from"./Popover-DzUJnTX8.js";import{B as n}from"./Button-Ccdb4ZyB.js";import{P as c}from"./PopoverTrigger-BnatIGc3.js";import"./flowComponent-7fKv1TmI.js";import{u as l}from"./useOverlayController-DaRRxB6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-_LkIzv60.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./utils-BWel_6vJ.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./context-COlkIlq2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./RSPContexts-HzcDbyvj.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./Text-DltKapPO.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./Text-BytpHB1v.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./LoadingSpinner-D3IBMWR2.js";import"./OverlayTrigger-BDzY0sMA.js";import"./DialogTriggerView-DlW9M8qm.js";import"./useStatic-CQKXHPrs.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

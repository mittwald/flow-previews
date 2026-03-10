import{j as r,R as a}from"./iframe-Bge_iwzq.js";import{P as i}from"./Popover-DH8uNurD.js";import{B as n}from"./Button-DYq5oiR6.js";import{P as c}from"./PopoverTrigger-DmOzs2Om.js";import"./flowComponent-MzGAW5sa.js";import{u as l}from"./useOverlayController-wivVBOVc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./context-gG1Mi2B7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./Text-70WXc8nw.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./VisuallyHidden-BL5eqrat.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./LoadingSpinner-BWNPdeXh.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./DialogTriggerView-h-JMTVOn.js";import"./useStatic-CNeEScnJ.js";const mr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const sr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,sr as __namedExportsOrder,mr as default};

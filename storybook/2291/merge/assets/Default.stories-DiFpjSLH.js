import{j as r,R as a}from"./iframe-BIoFjWpr.js";import{P as i}from"./Popover-BZLukQkr.js";import{B as n}from"./Button-60lZfz3H.js";import{P as c}from"./PopoverTrigger-DZR_UyCv.js";import{u as l}from"./useOverlayController-OHHrE_gT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./Dialog-khxuiED6.js";import"./Button-9bxiqwiQ.js";import"./utils-DZ7CVsEQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./context-CeBhVpDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Uox4pFjd.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./Text-DporVAh2.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./VisuallyHidden-iLNm3MD9.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./Text-Dw86EjFX.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./LoadingSpinner-B_0T51TC.js";import"./OverlayTrigger-DP9QTZiV.js";import"./DialogTriggerView-DulWE1ex.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

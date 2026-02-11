import{j as r,R as a}from"./iframe-BYq2oLvG.js";import{P as i}from"./Popover-BI0oaFz7.js";import{B as n}from"./Button-DnTJdD84.js";import{P as c}from"./PopoverTrigger-C9A_rAdR.js";import{u as l}from"./useOverlayController-CI4A0ba3.js";import"./flowComponent-DHneW8T1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BMISrNul.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./Dialog-DIAje18X.js";import"./Button-Bk2CF5qa.js";import"./utils-Da-bhZeG.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./context-WfyLsYOo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CABccGP2.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./Text-BsD4qVoX.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./VisuallyHidden-4k4K_3kv.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./Text-Df3o0vPg.js";import"./browser-CRRI-wfh.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./LoadingSpinner-DIcYbI07.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./DialogTriggerView-DeSIkmGk.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

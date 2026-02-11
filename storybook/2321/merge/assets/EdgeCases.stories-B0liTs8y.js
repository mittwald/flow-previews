import{j as r}from"./iframe-BYq2oLvG.js";import{C as n,M as e}from"./MenuItem-Cg2zzPGf.js";import{C as s}from"./ContextMenuTrigger-hZ5SnPfM.js";import"./ContextMenuSection-7fn1Gt6w.js";import{B as u}from"./Button-DnTJdD84.js";import a from"./Default.stories-DPhPUQsl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Bd-ykVKX.js";import"./context-BgaPAiG2.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./clsx-B-dksMZM.js";import"./index-BCX3_YU5.js";import"./useStatic-CVBRAdvz.js";import"./browser-CRRI-wfh.js";import"./getActionGroupSlot-BbvszDVH.js";import"./dynamic-bmDFV0NR.js";import"./Popover-BI0oaFz7.js";import"./useOverlayController-CI4A0ba3.js";import"./OverlayContextProvider-BMISrNul.js";import"./Dialog-DIAje18X.js";import"./Button-Bk2CF5qa.js";import"./utils-Da-bhZeG.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./context-WfyLsYOo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CABccGP2.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./Text-BsD4qVoX.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./VisuallyHidden-4k4K_3kv.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./Switch-DI0HvRd_.js";import"./useFieldComponent-C42pk4aC.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DOj64LJq.js";import"./useFormReset-COvJ3vzl.js";import"./LoadingSpinner-DIcYbI07.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./Text-Df3o0vPg.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Separator-BZyQfv0F.js";import"./Heading-CpBZdPdX.js";import"./Heading-CuMsOcSF.js";import"./Avatar-BYmM3Hnr.js";import"./AlertIcon-DHHmiMC7.js";import"./Initials-_dA1r4-4.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...o.parameters?.docs?.source}}};const Er=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Er as __namedExportsOrder,Ar as default};

import{j as r}from"./iframe-DkC9HeFh.js";import{C as n,M as e}from"./ContextMenu-DI82mCqg.js";import{C as s}from"./ContextMenuTrigger-0Vh3RcUx.js";import"./ContextMenuSection-nkrIclXc.js";import{B as u}from"./Button-B7ieOWfK.js";import a from"./Default.stories-pOHP-MFY.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Switch-BVD1oNrX.js";import"./useFieldComponent-eCPWR12U.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CQbe0cgS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-D4UoN7sA.js";import"./useFormReset-BF2XnUgU.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./useControlledState-Ul0j90Sg.js";import"./VisuallyHidden-DWtp1z23.js";import"./Dialog-BJyrAoE0.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./useLabel-Yk9h4-sj.js";import"./context-FwWFVwDs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./Text-BZKGVCR5.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./Action-BeqMUzE-.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./browser-tA6G_ksz.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./dynamic-DDaduNaQ.js";import"./Popover-nq4j79nG.js";import"./useOverlayController-CKW4WHoS.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./OverlayTrigger-BY_bjwFe.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./LoadingSpinner-lFYILNSp.js";import"./Separator-Dkh1gUV_.js";import"./Heading-C5UH4Hr2.js";import"./Heading-C_Zexpqw.js";import"./Avatar-Bn3duAOj.js";import"./AlertIcon-BRQK8hpu.js";import"./Initials-DVFyINQa.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

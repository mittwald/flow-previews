import{j as r}from"./iframe-BfVXcSwu.js";import{C as n,M as e}from"./MenuItem-jRZJeTCK.js";import{C as s}from"./ContextMenuTrigger-CliJsYln.js";import"./ContextMenuSection-CkxzJqxG.js";import{B as u}from"./Button-BWaSf0b-.js";import a from"./Default.stories-Co7ktXW4.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CJiux6Y0.js";import"./context-C_1OFCCp.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./useStatic-DbJ3Jck6.js";import"./browser-6PMbihrp.js";import"./getActionGroupSlot-DFXtDzme.js";import"./dynamic-BmLDKJfM.js";import"./Popover-CcjFjnE9.js";import"./useOverlayController-DUljrIWa.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./Dialog-DclKvE_W.js";import"./Button-DmoQnqed.js";import"./utils-fXq1spu5.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./context-BIORzbvt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./Text-DLMHe2l_.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./VisuallyHidden-CW_0epyS.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Switch-eV6dxcII.js";import"./useFieldComponent-CiLN9FTD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BlNanmhk.js";import"./useFormReset-bqmCiwf6.js";import"./LoadingSpinner-uBvx8mS0.js";import"./OverlayTrigger-DRzwAl-J.js";import"./Text-DuT5OHtj.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Separator-DOe_4o_-.js";import"./Heading-gqF52g1x.js";import"./Heading-OAdJfP_j.js";import"./Avatar-CG1tod06.js";import"./AlertIcon-DMbcP_TF.js";import"./Initials-Dbsi07bz.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

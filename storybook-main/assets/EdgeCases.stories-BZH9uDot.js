import{j as r}from"./iframe-C-IsL8qN.js";import{C as n,M as e}from"./MenuItem-m3M9aA1C.js";import{C as s}from"./ContextMenuTrigger-FKBCTptq.js";import"./ContextMenuSection-Bkmt90BD.js";import{B as u}from"./Button-CjTDs8dt.js";import a from"./Default.stories-DnlEfn2q.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./clsx-B-dksMZM.js";import"./index-foeybvdq.js";import"./useStatic-D3Nt3l-7.js";import"./browser-Dh90zeJL.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./dynamic-Bim1MLHd.js";import"./Popover-DCVoYnRB.js";import"./useOverlayController-BD3uXW3f.js";import"./OverlayContextProvider-BRD-Zchx.js";import"./Dialog-DhruM_-_.js";import"./Button-Dm6X_wGa.js";import"./utils-CdIT7ixS.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C05pQW9y.js";import"./context-D_ogfP81.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bg3iVugG.js";import"./useFocus-NxQ40LWx.js";import"./useFocusRing-DAQnos8V.js";import"./useFocusable-9aQ0aONO.js";import"./RSPContexts-dApRMb3S.js";import"./OverlayArrow-Bm7lykW0.js";import"./useControlledState-D6WUL5XM.js";import"./Collection-BO8FiyTI.js";import"./CollectionBuilder-D--x571F.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./Separator-BkJE4Q3g.js";import"./Text-CQAUJHD3.js";import"./SelectionManager-tiaDTVEq.js";import"./useEvent-BSeSfGFl.js";import"./useCollator-CUcFaXNY.js";import"./FocusScope-DMp-Wrqn.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./VisuallyHidden-B09yhrQ-.js";import"./IconWarning-Dgpqm1wd.js";import"./remote-HwzzztjA.js";import"./Switch-BBJIBEAJ.js";import"./useFieldComponent-neJhoipE.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BEu0Fgym.js";import"./useFormReset-ovy8PPed.js";import"./LoadingSpinner-DNWLy5dx.js";import"./OverlayTrigger-emDMmbR-.js";import"./Text-zEwe4Yc5.js";import"./EmulatedBoldText-CbJEOPDL.js";import"./Separator-f5y9Myre.js";import"./Heading-DSZIHu00.js";import"./Heading-BOaxUh_X.js";import"./Avatar-DxbDv-Tu.js";import"./AlertIcon-Dd6PrMrE.js";import"./Initials-BUoyN6-Q.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CcUuYubL.js";import{C as n,M as e}from"./MenuItem-C4D-ndg_.js";import{C as s}from"./ContextMenuTrigger-CxCv85OI.js";import"./ContextMenuSection-DMta75t3.js";import{B as u}from"./Button-hsF3uCN8.js";import a from"./Default.stories-C55giwuu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B5lNwIyS.js";import"./context-BjvrdVaN.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./clsx-B-dksMZM.js";import"./index-C6oVqO8J.js";import"./useStatic-DtEAcyvY.js";import"./browser-DepVz5kj.js";import"./getActionGroupSlot-COit0AjF.js";import"./dynamic-BvCZ3AJL.js";import"./Popover-DmUHZ-tA.js";import"./useOverlayController-fROC4phl.js";import"./OverlayContextProvider-Br3sAK21.js";import"./Dialog-mDFWR8fO.js";import"./Button-D-Fqqf34.js";import"./utils-B3A9CwVo.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./context-BiAKFHSE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./RSPContexts-CCIxlK1Q.js";import"./OverlayArrow-LMNtsg17.js";import"./useControlledState-Cd7zGKC9.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./Text-B0FzOrzN.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./VisuallyHidden-DlLFaNIr.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./Switch-CoWfQ2jB.js";import"./useFieldComponent-DfHGJXnI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BWrwaeJV.js";import"./useFormReset-CtXF-ibf.js";import"./OverlayTrigger-DwWDWrw1.js";import"./Text-DY9Wsurd.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./LoadingSpinner-BSrbl83B.js";import"./Separator-BF5-EFRA.js";import"./Heading-BKl3Ob1v.js";import"./Heading-DhOjZbSl.js";import"./Avatar-D79A-b2Q.js";import"./AlertIcon-CFwObQfk.js";import"./Initials-DIu6ifJi.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

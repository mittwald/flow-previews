import{j as r}from"./iframe-DdPUg3l1.js";import{C as n,M as e}from"./MenuItem-zp1Hx9Zq.js";import{C as s}from"./ContextMenuTrigger-D6sfCNzc.js";import"./ContextMenuSection-CdzHr0DY.js";import{B as u}from"./Button-BArDp6jY.js";import a from"./Default.stories-PL7UtNgJ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./clsx-B-dksMZM.js";import"./index-DfF1Hh-7.js";import"./useStatic-BSymBvZm.js";import"./browser-CdIpgqNn.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./dynamic-nfXH0DAB.js";import"./Popover-MzjGOrse.js";import"./useOverlayController-CNjuPWf4.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./Dialog-B4itYT93.js";import"./Button-CezSw_uu.js";import"./utils-CZc2hRnH.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./context-eo9HPzgD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C4aurJT7.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./Text-JRLUlLnO.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./VisuallyHidden-DYHUXKrU.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./Switch-DQXjapA9.js";import"./useFieldComponent-CO5pYfeq.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ByPOsgAA.js";import"./useFormReset-B7Z_bYQn.js";import"./LoadingSpinner-CrAIHNN2.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./Text-DjGrgiDc.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Separator-CVNw0DuD.js";import"./Heading-L1WE8Mc-.js";import"./Heading-Daf4DLe6.js";import"./Avatar-Bou1AGyP.js";import"./AlertIcon-PzDvVuZo.js";import"./Initials-D1ehE4l5.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

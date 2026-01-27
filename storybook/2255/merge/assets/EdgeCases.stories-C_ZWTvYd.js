import{j as r}from"./iframe-DRxscI9O.js";import{C as n,M as e}from"./ContextMenu-5UQK_TNO.js";import{C as s}from"./ContextMenuTrigger-BKAZp_td.js";import"./ContextMenuSection-4Pmx83k8.js";import{B as u}from"./Button-Cn0kN-cE.js";import a from"./Default.stories-BPAJ8TpG.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./IconWarning-B0GCVytt.js";import"./remote-5HtQVd9k.js";import"./Switch-CBDugg9-.js";import"./useFieldComponent-B2FoAAf9.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CR6NBPUA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CpTt3FrW.js";import"./useFormReset-Ewuleuhs.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./useControlledState-CvH2MSRC.js";import"./VisuallyHidden-hMszIaj5.js";import"./Dialog-Ds8Y2vRW.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./useLabel-D6Iwc6BC.js";import"./context-B7-PA0L6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./Text-C61ezR9Z.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./Action-BUOqPppc.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./browser-D6b-4R0j.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./dynamic-CC7KPApC.js";import"./Popover-BKzwq5Pz.js";import"./useOverlayController-CJT4z6k_.js";import"./OverlayContextProvider-CoboHbSN.js";import"./OverlayTrigger-CijLEP7N.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./LoadingSpinner--1cga6s1.js";import"./Separator-RI6b7A4z.js";import"./Heading-xcTY6oLo.js";import"./Heading-IJ9Uopg1.js";import"./Avatar-CwOJTj9z.js";import"./AlertIcon-CLPvczjb.js";import"./Initials-ClRTh1kG.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

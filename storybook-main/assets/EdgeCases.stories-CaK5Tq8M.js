import{j as r}from"./iframe-CZIIjdGx.js";import{C as n,M as e}from"./MenuItem-DmwSc0mY.js";import{C as s}from"./ContextMenuTrigger-CEer3B8h.js";import"./ContextMenuSection-BEfLxAcM.js";import{B as u}from"./Button-ECMB5KMY.js";import a from"./Default.stories-B5Fi1sTJ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./clsx-B-dksMZM.js";import"./index-7Gan3Sd3.js";import"./useStatic-BkmFYiV8.js";import"./browser-Cl51s5Ql.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./dynamic-gRVBa7iD.js";import"./Popover-B4mVvqXX.js";import"./useOverlayController-BPxzacO6.js";import"./OverlayContextProvider-Dc5mpEmz.js";import"./Dialog-Cut31Nqj.js";import"./Button-NmLihlhr.js";import"./utils-CzlwFdSi.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./context-B5Owy1-_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFDeIEOr.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useFocusable-deUO30SV.js";import"./RSPContexts-BcZ6F9IB.js";import"./OverlayArrow-PNzJR_LP.js";import"./useControlledState-DqlM9bHJ.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./Text-B_tooMjG.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./Switch-8tzPEpcN.js";import"./useFieldComponent-DWG920Yi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DB2KzHpS.js";import"./useFormReset-DwvZDjIx.js";import"./LoadingSpinner-pfinSAIk.js";import"./OverlayTrigger-By5gsgrK.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Separator-Bc1I_v-P.js";import"./Heading-4cAYx9fy.js";import"./Heading-CVLd5xWO.js";import"./Avatar-lhD-lMow.js";import"./AlertIcon-WrrDZg35.js";import"./Initials-DZAIA2L-.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-l1bkuF5f.js";import{C as n,M as e}from"./MenuItem-C00U3lB0.js";import{C as s}from"./ContextMenuTrigger-CJO9Hwnv.js";import"./ContextMenuSection-ktUqVNzZ.js";import{B as u}from"./Button-pfxdB-3A.js";import a from"./Default.stories-GHlX-6PB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DCncdG_g.js";import"./context-DTty7kAQ.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./useStatic-BFe86sAb.js";import"./browser-BVqvvpC_.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./dynamic-BrVBKZhY.js";import"./Popover-DwVIQaA1.js";import"./useOverlayController-C6j4pd50.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./Dialog-DkFD9hxJ.js";import"./Button-DvXEMDiE.js";import"./utils-DCQYs-TM.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./context-C-s-FPG6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./Text-CmGzUVny.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./VisuallyHidden-GyOwAGCf.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Switch-DYwEFgBM.js";import"./useFieldComponent-C26zWsIy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DqenFEIF.js";import"./useFormReset-B-5bGtDV.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./OverlayTrigger-CsWZNQmA.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Separator-BSNiaDW5.js";import"./Heading-DaHrt9QJ.js";import"./Heading-B0CySuUv.js";import"./Avatar-Bz8hg9cx.js";import"./AlertIcon-DudqDlux.js";import"./Initials-hobt9qS2.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

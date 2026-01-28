import{j as r}from"./iframe-HHIIuBER.js";import{C as n,M as e}from"./MenuItem-pKG3ChGI.js";import{C as s}from"./ContextMenuTrigger-BEMJsYmt.js";import"./ContextMenuSection-CTAuboSL.js";import{B as u}from"./Button-D9uXd6kS.js";import a from"./Default.stories-D0prNffu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./useStatic-CHenPBZg.js";import"./browser-BiwdkBmz.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./dynamic-UvYry7O0.js";import"./Popover-vPNRkUgo.js";import"./useOverlayController-CPglRTe1.js";import"./OverlayContextProvider-C_3PlVFc.js";import"./Dialog-17xgL67A.js";import"./Button-B3mdCDJz.js";import"./utils-Cg0Q0SJj.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./context-BwOS-W-N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DR7SsbUT.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./Text-XNblTka2.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./VisuallyHidden-W06uk0vU.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Switch-CtGhC7sB.js";import"./useFieldComponent-DUw61_cc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-qjPeUCQ1.js";import"./useFormReset-9uO05BU2.js";import"./LoadingSpinner-DsMp8zOw.js";import"./OverlayTrigger-CzuKQCYE.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Separator-DzCXAwoU.js";import"./Heading-Dy213gst.js";import"./Heading-BMnEpmdL.js";import"./Avatar-Agd_jw9_.js";import"./AlertIcon-CK1OfGfa.js";import"./Initials-Dh4_87qy.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

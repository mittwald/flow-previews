import{j as r}from"./iframe-C5hcdLE6.js";import{C as n,M as e}from"./ContextMenu-D421fdTg.js";import{C as s}from"./ContextMenuTrigger-DEsmcf_G.js";import"./ContextMenuSection-Bm4KM0hd.js";import{B as u}from"./Button-CzDqHNvA.js";import a from"./Default.stories-DEHPGQkq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./IconWarning-BGpxRwU-.js";import"./remote-DfH19er1.js";import"./Switch-Bxb3DPvF.js";import"./useFieldComponent-t_EOnv-a.js";import"./Label.module-CUYTf9Jc.js";import"./utils-B3GIFt3C.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-ZZPmhJzz.js";import"./useFormReset-BnJ7w8Tn.js";import"./usePress-CyQlFp9g.js";import"./useFocus-Fr_BfSOs.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./useControlledState-C9jQ4AxE.js";import"./VisuallyHidden-n5FPXG3E.js";import"./Dialog-D66iw0U8.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./useLabel-DIyDpHH2.js";import"./context-E1uxYtQv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BMj0h4_3.js";import"./OverlayArrow-DN70rght.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./Text-79_FySwa.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./useStatic-CWBOctoH.js";import"./browser-BJ6k16eC.js";import"./getActionGroupSlot-CVriiRzc.js";import"./dynamic-DE5jfE1R.js";import"./Popover-CdmUaf65.js";import"./useOverlayController-BWvUtZsb.js";import"./OverlayContextProvider-CVTCD2MZ.js";import"./OverlayTrigger-DT2_gJPw.js";import"./Text-D8uazRXK.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./LoadingSpinner-hJnys7-d.js";import"./Separator-nyeZf8D0.js";import"./Heading-DWTXooi-.js";import"./Heading-Y84dBjpP.js";import"./Avatar-ssQ6-Ue6.js";import"./AlertIcon-DM3zFbIf.js";import"./Initials-CNEZSaHe.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

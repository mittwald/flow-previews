import{j as r}from"./iframe-BnHQGzj-.js";import{C as n,M as e}from"./MenuItem-DeAYTfXe.js";import{C as s}from"./ContextMenuTrigger-BXy8EQiw.js";import"./ContextMenuSection-BQD1q2_K.js";import{B as u}from"./Button-kOzdzwoL.js";import a from"./Default.stories-cAKgbW33.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D5FY68jf.js";import"./context-CLHbEMzO.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./useStatic-CXOpTYPY.js";import"./browser-Byd_T3zS.js";import"./getActionGroupSlot-DFydpqIy.js";import"./dynamic-Dg_y_eXk.js";import"./Popover-By64ee4S.js";import"./useOverlayController-nmD6fAp8.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./Dialog-vlYkkLZ8.js";import"./Button-7nIxjvHJ.js";import"./utils-B_drgFmA.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./Text-CP9lFNhL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./VisuallyHidden-DN_pHWhj.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Switch-BCdQfd5r.js";import"./useFieldComponent-BKOZgMTQ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-e3rXJv8v.js";import"./useFormReset-C2cP98Fi.js";import"./LoadingSpinner-DoB6VVvS.js";import"./OverlayTrigger-DgkWH0DW.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Separator-BzEFFfve.js";import"./Heading-2AT3piVo.js";import"./Heading-BZTJ56jD.js";import"./Avatar-D23x4mta.js";import"./AlertIcon-cpK7-VlX.js";import"./Initials-DUbOLXvO.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

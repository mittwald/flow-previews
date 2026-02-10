import{j as r}from"./iframe-1XlmVqd5.js";import{C as n,M as e}from"./MenuItem-BL5ggs-y.js";import{C as s}from"./ContextMenuTrigger-Bpqq4uO2.js";import"./ContextMenuSection-5WkAJf8V.js";import{B as u}from"./Button-QkNnHSXc.js";import a from"./Default.stories-CYOI5iMw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./clsx-B-dksMZM.js";import"./index-TUds5Kez.js";import"./useStatic-BBkG9kKa.js";import"./browser-BzXr98QP.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./dynamic-pa5Mho8z.js";import"./Popover-DWs4oiku.js";import"./useOverlayController-NHPQla43.js";import"./OverlayContextProvider-D7BkXl4r.js";import"./Dialog-RsR3YLab.js";import"./Button-DLO0tbpP.js";import"./utils-DcI_f0WL.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./context-cVtndIAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CBxBnL8r.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./RSPContexts-Dq529x8m.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./Text-DC6xHoyY.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./VisuallyHidden-Dm6nphJv.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./Switch-DMZJKQb_.js";import"./useFieldComponent--2vv_KDv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DDOFhGTk.js";import"./useFormReset-DNo3mt-e.js";import"./LoadingSpinner-BDWb_Uug.js";import"./OverlayTrigger-DCCWO6LH.js";import"./Text-DoMRIGKc.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Separator-CUy_0zy2.js";import"./Heading-BHa3WEIV.js";import"./Heading-CLPLrGSK.js";import"./Avatar-3YJQgKUR.js";import"./AlertIcon-B1ETMix0.js";import"./Initials-3fTsg3ev.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

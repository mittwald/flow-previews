import{j as r}from"./iframe-Bas3a7fO.js";import{C as n,M as m}from"./MenuItem-B8Aei4Jr.js";import{C as s}from"./ContextMenuTrigger-U1mVf7Ux.js";import"./ContextMenuSection-BzeJokDv.js";import{B as u}from"./Button-CCev3q47.js";import a from"./Default.stories-EzxZ1y0N.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Ctg3LC0z.js";import"./useOverlayController-Bne___mw.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./useStatic-LTDZm_8J.js";import"./browser-CI0OqVn7.js";import"./getActionGroupSlot-DxyevWSt.js";import"./dynamic-CtBYvx23.js";import"./Popover-DFE_w-KD.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./Dialog-BsJqG9mx.js";import"./Button-cgxxNusA.js";import"./utils-eswKxOcw.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./context-C6ovHfpS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./RSPContexts-BxdWTHUz.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./Text-Di9JAG-3.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./VisuallyHidden-DwReVjRm.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Switch-DPJxCsS4.js";import"./useFieldComponent-CHbV_zSr.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-obAaIAHP.js";import"./useFormReset-C6M9OYlp.js";import"./LoadingSpinner-CaJGFcVk.js";import"./OverlayTrigger-BU9PdTSa.js";import"./Text-D06q46lu.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Separator-DSXfDrFK.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./Avatar-EKXZa-Na.js";import"./AlertIcon-CfXFBmoz.js";import"./Initials-DpD1NGmZ.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};

import{j as r}from"./iframe-gtGtPSGX.js";import{C as n,M as m}from"./MenuItem-BfrZ4vbA.js";import{C as s}from"./ContextMenuTrigger-D1jiwTPQ.js";import"./ContextMenuSection-CDCzjc8m.js";import{B as u}from"./Button-CvhKZeTQ.js";import a from"./Default.stories-z8fK1Wl_.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-C6WY1Daf.js";import"./useOverlayController-ljUuhRV3.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./useStatic-CcUMZ2Ma.js";import"./browser-BLXRbgM1.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./dynamic-CLlIyxqz.js";import"./Popover-C2tFcXbP.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./utils-1b_KoCGs.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./context-B_6Y7rB4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./RSPContexts-L8MWaJ6n.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./Text-B8kBB-Il.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./VisuallyHidden-D8bGSG_p.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Switch-cVJrthqZ.js";import"./useFieldComponent-BaX-M8wV.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CNroCGEj.js";import"./useFormReset-TvJ_gIa-.js";import"./LoadingSpinner-DnqSg6_k.js";import"./OverlayTrigger-CmRNrsxN.js";import"./Text-QzTdDFQg.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Separator-DK63ndAh.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./Avatar-BL2jrYvb.js";import"./AlertIcon-BrLsNTwF.js";import"./Initials-3NJuvSoQ.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

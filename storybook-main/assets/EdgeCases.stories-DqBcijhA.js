import{j as r}from"./iframe-B-26223i.js";import{C as n,M as e}from"./ContextMenu-DWc5pZwk.js";import{C as s}from"./ContextMenuTrigger-Da1fN95X.js";import"./ContextMenuSection-EzbGflNa.js";import{B as u}from"./Button-B60fo84_.js";import a from"./Default.stories-A7AyfsI5.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./Switch-CURBIfIR.js";import"./useFieldComponent-eul3OsXk.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CprJ_klo.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-CI32NFO7.js";import"./useFormReset-BQreYCpE.js";import"./useFocusRing-DATGHg9y.js";import"./useFocus-DYSsUR82.js";import"./usePress-BlwAXRn7.js";import"./useFocusable-CRgLtiVg.js";import"./useControlledState-CCY4nzRh.js";import"./VisuallyHidden-DpBOnOEH.js";import"./Dialog-COoPEj_z.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./useLabel-DUREvcwl.js";import"./context-B9n95xcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./Text-CrdzXlCc.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./browser-DNWQphaZ.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./dynamic-DWm47R25.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./OverlayTrigger-DHG4FXf-.js";import"./Text-C25EED6m.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./LoadingSpinner-CNdw31t2.js";import"./Separator-Kmc0l0PZ.js";import"./Heading-BATksAHi.js";import"./Heading-BVbzfdRb.js";import"./Avatar-Q5gI0VPL.js";import"./AlertIcon-Bi7YC7dH.js";import"./Initials-DIh7PigW.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

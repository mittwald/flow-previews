import{j as r}from"./iframe-BE2KIrNP.js";import{C as n,M as e}from"./ContextMenu-D8I6UbrO.js";import{C as s}from"./ContextMenuTrigger-Bfqio4yp.js";import"./ContextMenuSection-DMoRGuCw.js";import{B as u}from"./Button-DTG6_onu.js";import a from"./Default.stories-RPOWXWzT.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./Switch-BJabR53n.js";import"./useFieldComponent-8fOA-m-u.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CetDBScY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-4MRD1tqn.js";import"./useFormReset-DGFO0EL0.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocus-D19rPtJ7.js";import"./usePress-wlnUrUkL.js";import"./useFocusable-PS7GdwKW.js";import"./useControlledState-O9ITVI5k.js";import"./VisuallyHidden-KypC6JrD.js";import"./Dialog-C3P1Ogqg.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./useLabel-DlCzrbVx.js";import"./context-Cl9Jg8XT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-B5Mb9Vey.js";import"./OverlayArrow-B7hxVbyO.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./Text-D-kvbByn.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./browser-B5VZQlUE.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./dynamic-DKw0AuDc.js";import"./Popover-Ba9XQcrf.js";import"./useOverlayController-CtV9FOyM.js";import"./OverlayContextProvider-DV_-MJEg.js";import"./OverlayTrigger-DnihfWmG.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./LoadingSpinner-CpXmc85g.js";import"./Separator-BgVrJWWb.js";import"./Heading-C03aqcaL.js";import"./Heading-CDAU15CX.js";import"./Avatar-St5qIscv.js";import"./AlertIcon-BSS6Y7Aa.js";import"./Initials-BhsydjYA.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

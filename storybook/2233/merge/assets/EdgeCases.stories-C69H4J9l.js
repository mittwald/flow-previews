import{j as r}from"./iframe-tI_lG94_.js";import{C as n,M as e}from"./MenuItem-Dmw5_dv8.js";import{C as s}from"./ContextMenuTrigger-6yymgrse.js";import"./ContextMenuSection-Co6pbj1l.js";import{B as u}from"./Button-WUI-ZJ9l.js";import a from"./Default.stories-DWA6URtC.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./clsx-B-dksMZM.js";import"./index-CBk6rXlg.js";import"./useStatic-vWo9ean7.js";import"./browser-DuhBvQkx.js";import"./getActionGroupSlot-DPvye52P.js";import"./dynamic-DqOiE30k.js";import"./Popover-DkoOxFI-.js";import"./useOverlayController-B_c7Bk6_.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./Dialog-Bo5p_Zqr.js";import"./Button-EHR8zEQX.js";import"./utils-bmh-HeLH.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./context-CBF_EHvQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./Text-Bx7ijqLX.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Switch-BFeIDSHe.js";import"./useFieldComponent-_Dyiwxtg.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BjZuw9A6.js";import"./useFormReset-LNt8buNd.js";import"./OverlayTrigger-CuZ4GO5W.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./LoadingSpinner-KbaLfraT.js";import"./Separator-VWf9hotQ.js";import"./Heading-BGy3_a0K.js";import"./Heading-Ds7I4FP5.js";import"./Avatar-DoJbiNKB.js";import"./AlertIcon-BkNTScum.js";import"./Initials-zjyy8Jhh.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

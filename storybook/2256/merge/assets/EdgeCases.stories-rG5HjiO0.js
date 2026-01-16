import{j as r}from"./iframe-CIXg2wml.js";import{C as n,M as e}from"./ContextMenu-DDI1GCKj.js";import{C as s}from"./ContextMenuTrigger-CfrI6N5Y.js";import"./ContextMenuSection-C_CrFgfB.js";import{B as u}from"./Button-BNUMHVa-.js";import a from"./Default.stories-C3sbgYA0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./Switch-DHew7IOY.js";import"./useFieldComponent-D7V8J4vf.js";import"./Label.module-CUYTf9Jc.js";import"./utils-E3QCR4Ei.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CFdCdm3H.js";import"./useFormReset-BWhLZN3-.js";import"./usePress-C_LDf41x.js";import"./useFocus-Xgz2P1v-.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./useControlledState-euBd3hty.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./Dialog-f9GqGINB.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./useLabel-pvILaDrT.js";import"./context-TKY6ae7T.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./Text-BTcAnKOQ.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./browser-CYeJE0Iy.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./dynamic-DkFDoLPd.js";import"./Popover-B98zkIIW.js";import"./useOverlayController-DihmuJIH.js";import"./OverlayContextProvider-BncgeVHa.js";import"./OverlayTrigger-Gn6syf8M.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./LoadingSpinner-DwfvHd6g.js";import"./Separator-7cBlcT3d.js";import"./Heading-IDnu3Squ.js";import"./Heading-NdZmHCy8.js";import"./Avatar-DwHlOaa1.js";import"./AlertIcon-DJUqjVOR.js";import"./Initials--tDm5JBY.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

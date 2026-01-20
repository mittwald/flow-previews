import{j as r}from"./iframe-BB26x0WO.js";import{C as n,M as e}from"./ContextMenu-BR94seEU.js";import{C as s}from"./ContextMenuTrigger-BcfkOMVx.js";import"./ContextMenuSection-DGimkJAp.js";import{B as u}from"./Button-BTY4YrG_.js";import a from"./Default.stories-U9mzntiI.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./Switch-DEmlbzrx.js";import"./useFieldComponent-uqIFFsha.js";import"./Label.module-CUYTf9Jc.js";import"./utils-B0cjT-cu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-C0CJHC_W.js";import"./useFormReset-DftD3Tx4.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./useControlledState-Bi3RtZ50.js";import"./VisuallyHidden-GAE_mByz.js";import"./Dialog-rd60ApeF.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./useLabel-CXkgZKB9.js";import"./context-CFwMSK2D.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./Text-C-QQ-f-7.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./useStatic-CBwNmb4h.js";import"./browser-CM4yKXDn.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./dynamic-iWxR2zWf.js";import"./Popover-Bk5Shd0d.js";import"./useOverlayController-CrgCUZX_.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./OverlayTrigger-CBbEoXQd.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./LoadingSpinner-jG3qv65g.js";import"./Separator-ChAztj66.js";import"./Heading-DjuXjgcE.js";import"./Heading-CYNLL9tG.js";import"./Avatar-B0PIZIjb.js";import"./AlertIcon-8w60vasN.js";import"./Initials-Bbnk_WCt.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

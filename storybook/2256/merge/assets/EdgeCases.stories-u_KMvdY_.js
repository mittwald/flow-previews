import{j as r}from"./iframe-ICCBaEZ0.js";import{C as n,M as e}from"./ContextMenu-CLsYj9Fl.js";import{C as s}from"./ContextMenuTrigger-CdIb2FEp.js";import"./ContextMenuSection-CUOZwZ8m.js";import{B as u}from"./Button-BPUjkcWl.js";import a from"./Default.stories-BPkJUsME.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Switch-BB_B0Nx_.js";import"./useFieldComponent-C2gLyH5u.js";import"./Label.module-CUYTf9Jc.js";import"./utils-Bdyed02U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CF685k98.js";import"./useFormReset-mc9YwuWr.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./useControlledState-0-xiytms.js";import"./VisuallyHidden-CIUq3upT.js";import"./Dialog-YdLNLYvV.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./Text-6VRpzXYD.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./Action-BI-eqtgf.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./browser-BXZux_wF.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./dynamic-D4nz3o_q.js";import"./Popover-BznUFd8V.js";import"./useOverlayController-CTkEh9O7.js";import"./OverlayContextProvider-DutSGNyV.js";import"./OverlayTrigger-CZVSbWDN.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./LoadingSpinner-DZTaEi_R.js";import"./Separator-Sllo4KwP.js";import"./Heading-_OIl0AzZ.js";import"./Heading-BmRm-FE-.js";import"./Avatar-rKS9jKjL.js";import"./AlertIcon-DVbl3jDT.js";import"./Initials-BqlP2xzA.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

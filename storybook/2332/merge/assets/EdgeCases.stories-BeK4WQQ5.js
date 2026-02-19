import{j as r}from"./iframe-CDsKaBRg.js";import{C as n,M as m}from"./MenuItem-BKQBPm9F.js";import{C as s}from"./ContextMenuTrigger-CsUJdiI4.js";import"./ContextMenuSection-BtR3HXLs.js";import{B as u}from"./Button-DrVGXfuQ.js";import a from"./Default.stories-nOORwGhH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./useStatic-B_kqalTp.js";import"./browser-CeRuCCb_.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./dynamic-CtOpUuGK.js";import"./Popover-EJFu47Qz.js";import"./OverlayContextProvider-C6_d12zo.js";import"./Dialog-C4SGct0D.js";import"./Button-BshsCdLp.js";import"./utils-D_LVRUjq.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./context-BPMj9VV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./RSPContexts-B8A9jPpa.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./Text-Ara-YSvE.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./VisuallyHidden-BzY4kZPn.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Switch-DhWZ-yCv.js";import"./useFieldComponent-CC8SHRwT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CldrOvnp.js";import"./useFormReset-CxPQXG_K.js";import"./LoadingSpinner-COR3vr_l.js";import"./OverlayTrigger-CHFi1X1A.js";import"./Text-BC05_GH2.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Separator-BK_2iNtD.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./Avatar-C45hpV4c.js";import"./AlertIcon-BRHbbzl7.js";import"./Initials-D-0n8ok3.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

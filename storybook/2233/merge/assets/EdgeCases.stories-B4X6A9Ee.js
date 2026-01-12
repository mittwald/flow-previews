import{j as r}from"./iframe-BUX4ZqHF.js";import{C as n,M as e}from"./ContextMenu-tsJODFLg.js";import{C as s}from"./ContextMenuTrigger-CMnatttX.js";import"./ContextMenuSection-B-plY6qU.js";import{B as u}from"./Button-BQks1Fwk.js";import a from"./Default.stories-Dksn-Khb.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./Switch-nGoYDFon.js";import"./useFieldComponent-L2xw4dQD.js";import"./Label.module-CUYTf9Jc.js";import"./utils-D9iTInv6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CgrRGd3M.js";import"./useFormReset-DwYjTvSA.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./useControlledState-CgyNYXn6.js";import"./VisuallyHidden-CEZo4IbP.js";import"./Dialog-Ds9eM6L5.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./useLabel-DVc7LJa4.js";import"./context-DdyqVFXP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./Text-BG7MORzn.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./Action-BoSxlb-x.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./browser-D0x3Xdqp.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./dynamic-C-JL21_Y.js";import"./Popover-Cjs7ZgFB.js";import"./useOverlayController-Di9xJg3a.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./OverlayTrigger-DrYjWhwY.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./LoadingSpinner-DAzOOzOm.js";import"./Separator-IJOoZkb8.js";import"./Heading-CZDnCkj5.js";import"./Heading-Dcla-H3e.js";import"./Avatar-BRdiAgaH.js";import"./AlertIcon-B17jmh6q.js";import"./Initials-OVtgA_n8.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

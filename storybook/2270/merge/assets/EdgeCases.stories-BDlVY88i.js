import{j as r}from"./iframe-B_VLmVOf.js";import{C as n,M as e}from"./ContextMenu-468WFC8g.js";import{C as s}from"./ContextMenuTrigger-CJxU4qkN.js";import"./ContextMenuSection-Bn3YLQv6.js";import{B as u}from"./Button-Bx9uZJMk.js";import a from"./Default.stories-DXjOD3Ak.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./index-Cpfd6Pim.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./Switch-DVX1qJIv.js";import"./useFieldComponent-CG-gR-7X.js";import"./Label.module-CUYTf9Jc.js";import"./utils-C3gFrn3p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CVL98gOE.js";import"./useFormReset-DzSH81mS.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./useControlledState-Cy2UyDQ-.js";import"./VisuallyHidden-neYV3Owd.js";import"./Dialog-B23HRyeo.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./useLabel-3m37nTep.js";import"./context-x63-ahNn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./Text-Cz72Ll4P.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./Action-Ct3jXlr4.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./browser-BI-ei-gA.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./dynamic-BPLgH_zA.js";import"./Popover-4LrwwwQo.js";import"./useOverlayController-C5Zlkgph.js";import"./OverlayContextProvider-BI7L_fxB.js";import"./OverlayTrigger-r-EuZvmq.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./LoadingSpinner-8NlAwzA_.js";import"./Separator-BhzDx8aL.js";import"./Heading-CnR3VTEF.js";import"./Heading-CCNcjRWR.js";import"./Avatar-CUJWVHuI.js";import"./AlertIcon-CQ3Ik0rE.js";import"./Initials-pWslV_sR.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

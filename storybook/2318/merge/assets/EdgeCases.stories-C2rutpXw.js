import{j as r}from"./iframe-D8EpHgnQ.js";import{C as n,M as e}from"./MenuItem-BXQZwjkt.js";import{C as s}from"./ContextMenuTrigger-DMWWmn2g.js";import"./ContextMenuSection-Bk-U6hYN.js";import{B as u}from"./Button-v3XDTDQm.js";import a from"./Default.stories-93vGMyP0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-Bqe5nSI1.js";import"./context-CfNS10y1.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./useStatic-BaYU_ZGV.js";import"./browser-CYlhW0g_.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./dynamic-DBeHUKte.js";import"./Popover-BAHX_8HU.js";import"./useOverlayController-0DhE6nST.js";import"./OverlayContextProvider-BwUSFJyo.js";import"./Dialog-CkEWxlO6.js";import"./Button-Kox0tnC0.js";import"./utils-DUD9ssEU.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./context-XjBPUYFu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./Text-BH6HQaIi.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./VisuallyHidden-maxPxeqi.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./Switch-Cw8-26Pv.js";import"./useFieldComponent-gPWDO_C1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5_w_6aq.js";import"./useFormReset-DtPxpP1_.js";import"./LoadingSpinner-BgyqdyMI.js";import"./OverlayTrigger-Df6W5haQ.js";import"./Text-Dkvkf5JK.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Separator-C4FO9f2f.js";import"./Heading-DbO5EpaN.js";import"./Heading-sCjlRmAM.js";import"./Avatar-DdONVude.js";import"./AlertIcon-Dtjl7KDj.js";import"./Initials-D-BeJYCY.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

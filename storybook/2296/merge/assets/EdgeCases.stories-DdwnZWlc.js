import{j as r}from"./iframe-ByQojKkA.js";import{C as n,M as e}from"./MenuItem-BUokxg7n.js";import{C as s}from"./ContextMenuTrigger-4DXUxMOx.js";import"./ContextMenuSection-6SzjTnwS.js";import{B as u}from"./Button-DG0b__xZ.js";import a from"./Default.stories-BFFryrCK.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./clsx-B-dksMZM.js";import"./index-DifIgMrD.js";import"./useStatic-ClNGpIKI.js";import"./browser-BgQK0KeO.js";import"./getActionGroupSlot-D7PQruO1.js";import"./dynamic-G0P_JzfN.js";import"./Popover-VY_G-8Aw.js";import"./useOverlayController-DPyEBWrx.js";import"./OverlayContextProvider-jZUXkiaW.js";import"./Dialog-B4qMOx1Z.js";import"./Button-psJerCAv.js";import"./utils-D3Fm7Ut8.js";import"./ProgressBar-bE4oj_9I.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./context-B2MAxUi3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwnADfjY.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocusable-BRqzZMJF.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./Text-BjqL4T8G.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./VisuallyHidden-Bik_STlT.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./Switch-DoxZw8o-.js";import"./useFieldComponent-Blt-XhY9.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Ctt2cCZ_.js";import"./useFormReset-CjuTJ3ym.js";import"./LoadingSpinner-Dd1p82wM.js";import"./OverlayTrigger-Bd_tt0nJ.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Separator-5dfmtVeW.js";import"./Heading-Cbba3Zbx.js";import"./Heading-CW6fzv-T.js";import"./Avatar-D08OheC3.js";import"./AlertIcon-C-5STchL.js";import"./Initials-CPSnmpT8.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Da9Lw8R_.js";import{C as n,M as e}from"./MenuItem-STdasGbK.js";import{C as s}from"./ContextMenuTrigger-DIoDWCy5.js";import"./ContextMenuSection-CnBpObAx.js";import{B as u}from"./Button-CkcTXATp.js";import a from"./Default.stories-UV3fG0t0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CSMihAu4.js";import"./context-DT0iENXB.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./clsx-B-dksMZM.js";import"./index-TT_JC2bB.js";import"./useStatic-BOFCRskE.js";import"./browser-DDWH8I0V.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./dynamic-bM8H28Zu.js";import"./Popover-FxFSsQeG.js";import"./useOverlayController-DXJN5Feb.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./Dialog-Cw1z9AtQ.js";import"./Button-CzbwBi45.js";import"./utils-Cwd4tFKX.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./context-CsdpTyhd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIogNAwh.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useControlledState-B4YxKAgg.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./Text-CpGlsQu3.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./VisuallyHidden-gkajg-fe.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./Switch-mGHee4dx.js";import"./useFieldComponent-yufHgNqa.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DQAe7dVS.js";import"./useFormReset-4DR8Px1h.js";import"./LoadingSpinner-DXGsR4uF.js";import"./OverlayTrigger-BJ63rVtT.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Separator-CR9VqeU0.js";import"./Heading-p9-3Hmaq.js";import"./Heading-CheJhR1R.js";import"./Avatar-CJCYVAwA.js";import"./AlertIcon-Co0MJDJf.js";import"./Initials-CFZEaPbD.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

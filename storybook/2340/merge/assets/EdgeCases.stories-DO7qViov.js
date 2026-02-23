import{j as r}from"./iframe-BoiTaxGN.js";import{C as n,M as m}from"./MenuItem-CDDy6p-6.js";import{C as s}from"./ContextMenuTrigger-CEzSc6a_.js";import"./ContextMenuSection-CBBb0XeQ.js";import{B as u}from"./Button-MYsVPgLO.js";import a from"./Default.stories-CodhzKhs.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./useStatic-bFyj34a0.js";import"./browser-zBSS86_h.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./dynamic-X8snMUB4.js";import"./Popover-CKTt2h1_.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./Dialog-BL8T3CnU.js";import"./Button-BZbFxF4O.js";import"./utils-RetFhwyR.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./context-hlBZKj-7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./Text-DnUg5-aR.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./VisuallyHidden-CML_0Z6P.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Switch-B3p6hgi_.js";import"./useFieldComponent-DiiGd8t3.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BHW6-QSh.js";import"./useFormReset-DsmV2EC6.js";import"./LoadingSpinner-BBdroSRA.js";import"./OverlayTrigger-Db6so5Mf.js";import"./Text-ClfpXeTF.js";import"./EmulatedBoldText-vFeun45o.js";import"./Separator-CZWTx42T.js";import"./Heading-9cwIlFFB.js";import"./Heading-BcC1Qw26.js";import"./Avatar-P2YueCDD.js";import"./AlertIcon-B1VBridV.js";import"./Initials-D9N_Q0tl.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

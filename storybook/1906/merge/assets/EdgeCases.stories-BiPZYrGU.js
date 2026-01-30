import{j as r}from"./iframe-B_TkxfTi.js";import{C as n,M as e}from"./MenuItem-2CqdUbRi.js";import{C as s}from"./ContextMenuTrigger-DuP3I3bE.js";import"./ContextMenuSection-DayPbCkQ.js";import{B as u}from"./Button-RJdr80c6.js";import a from"./Default.stories-DGLnYw6K.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./useStatic-cRv7_xgS.js";import"./browser-CLjLvoWS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./dynamic-BusjqWiY.js";import"./Popover-Dk2IZtcP.js";import"./useOverlayController-2wquljYS.js";import"./OverlayContextProvider-lGzaaamO.js";import"./Dialog-ChZYysky.js";import"./Button-n3CPGMPO.js";import"./utils-CEh0pYpN.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./context-Bqo0meff.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./Text-CBbNcQAF.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./VisuallyHidden-BGokW8gm.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Switch-Bx_Dj7VC.js";import"./useFieldComponent-C57DTYPz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BT69lslg.js";import"./useFormReset-BlUfWbi8.js";import"./LoadingSpinner-CjHOYBjr.js";import"./OverlayTrigger-De9wNpqE.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./Separator-CNQWV2PY.js";import"./Heading-DO4971VL.js";import"./Heading-_1YYOm-_.js";import"./Avatar-Xi1BV-nI.js";import"./AlertIcon-DJdpqIO-.js";import"./Initials-Izihbn1c.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DcHapM8k.js";import{C as n,M as e}from"./ContextMenu-DHk9U1Rx.js";import{C as s}from"./ContextMenuTrigger-BObfAlM2.js";import"./ContextMenuSection-Bxsn88Zf.js";import{B as u}from"./Button-C1DQEdG6.js";import a from"./Default.stories-DLwo9VJu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Switch-BGR4Cs8k.js";import"./useFieldComponent-DLXIz4kk.js";import"./Label.module-CUYTf9Jc.js";import"./utils-BN-Wf9GB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-ChVg7G-C.js";import"./useFormReset-DByFRxt8.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./useControlledState-CD18I4-6.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./Dialog-gML-GktL.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./useLabel-DVAEGcEm.js";import"./context-Camfekg3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./Text-KTnK0cez.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./Action-CLgptl7p.js";import"./context-C5BkLhj5.js";import"./useStatic-lCMR7rr_.js";import"./browser-BhJkGPhR.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./dynamic-B-FNOw2F.js";import"./Popover-8k6-3DAC.js";import"./useOverlayController-CLiM05Jw.js";import"./OverlayContextProvider-By_DTOub.js";import"./OverlayTrigger-2_tOKmYE.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./LoadingSpinner-DeuQI20n.js";import"./Separator-DJAxc-dO.js";import"./Heading-CSFiGnXH.js";import"./Heading-DlC7g6iA.js";import"./Avatar-Dan4vXzm.js";import"./AlertIcon-aSf31ti-.js";import"./Initials-CCrQ3qnU.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

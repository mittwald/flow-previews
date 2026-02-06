import{j as r}from"./iframe-P-BtG9en.js";import{C as n,M as e}from"./MenuItem-BX3sQ_NV.js";import{C as s}from"./ContextMenuTrigger-DAnP2pgI.js";import"./ContextMenuSection-DCh3mp1Z.js";import{B as u}from"./Button-BDKyvND0.js";import a from"./Default.stories-BENAXqKI.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useStatic-CkdzkAMF.js";import"./browser-CAs7Gyq6.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./dynamic-NZeYY7PB.js";import"./Popover-mshniZ9g.js";import"./useOverlayController-N6VWZ_a7.js";import"./OverlayContextProvider-c997mKVu.js";import"./Dialog-CXomJO1p.js";import"./Button-CkYmzEte.js";import"./utils-B0ReHH5J.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./context-DgQkEglP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./Text-Cuc5X3SS.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./VisuallyHidden-DdvDFx4J.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Switch-JzMieC5k.js";import"./useFieldComponent-DCdIumPj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DaxdEKB-.js";import"./useFormReset-EHJI2p2K.js";import"./LoadingSpinner-CEdiZrnd.js";import"./OverlayTrigger-C73x-77s.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Separator-BHoidzlt.js";import"./Heading-CnpYSlBq.js";import"./Heading-BpHPsioq.js";import"./Avatar-CVRvbsDI.js";import"./AlertIcon-D-lULPsb.js";import"./Initials-BJ9hKYGn.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

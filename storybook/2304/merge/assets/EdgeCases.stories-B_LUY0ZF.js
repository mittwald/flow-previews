import{j as r}from"./iframe-DsvUdpXw.js";import{C as n,M as e}from"./MenuItem-DZnhP1_w.js";import{C as s}from"./ContextMenuTrigger-CUvCYScP.js";import"./ContextMenuSection-CZOOjTrg.js";import{B as u}from"./Button-Bh17vETd.js";import a from"./Default.stories-BcInXvXa.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./useStatic-B4i3epQD.js";import"./browser-BtOTkQbR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./dynamic-B-6cr1cE.js";import"./Popover-CqiNCQcV.js";import"./useOverlayController-DxWxo43I.js";import"./OverlayContextProvider-DlpSiBKI.js";import"./Dialog-DDWgyAFS.js";import"./Button-RLHEBlnW.js";import"./utils-elFy1-Tx.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./context-BSJoRVhT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./Text-qH9eQPgP.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./VisuallyHidden-Ds80HbqR.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Switch-Dcz5kh9r.js";import"./useFieldComponent-CWVnpPPS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE3wBxmq.js";import"./useFormReset-BZPoHMi4.js";import"./LoadingSpinner-DQcVqwZx.js";import"./OverlayTrigger-iXNxq1oc.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Separator-CVKcSQ3e.js";import"./Heading-B52qHDza.js";import"./Heading-BVURhSI-.js";import"./Avatar-v2xSlmd1.js";import"./AlertIcon-C2Vz7YO6.js";import"./Initials-DnnbD9AV.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

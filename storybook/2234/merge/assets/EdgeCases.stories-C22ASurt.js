import{j as r}from"./iframe-Dnm846PF.js";import{C as n,M as e}from"./MenuItem-Dzhk-iiZ.js";import{C as s}from"./ContextMenuTrigger-DPg2ZRwx.js";import"./ContextMenuSection-C10PM8Bo.js";import{B as u}from"./Button-D3IXyzzj.js";import a from"./Default.stories-BuKnPEpP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-emK0mmvz.js";import"./context-CfRQ154N.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./clsx-B-dksMZM.js";import"./index-sBHKlQZD.js";import"./useStatic-D4cjHvMF.js";import"./browser-DEiAhc6G.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./dynamic-CwAvPpRM.js";import"./Popover-D8u9A93l.js";import"./useOverlayController-D7G3MHJE.js";import"./OverlayContextProvider-e7mKKUrq.js";import"./Dialog-BfuTmdIH.js";import"./Button-B-4mNKoj.js";import"./utils-VDIU0BnD.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./context-CoOH5oCy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CU4gAXU4.js";import"./useFocus-D-7SE4fF.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./Text-1v5GZWlz.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./VisuallyHidden-C6zUvnKf.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Switch-DT-bdce6.js";import"./useFieldComponent-CW3QYPg0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CR5d2iTy.js";import"./useFormReset-BiFYZY7a.js";import"./OverlayTrigger-D2F_jz3v.js";import"./Text-DtZxu6g8.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./LoadingSpinner-DASF7rgv.js";import"./Separator-DSeDqaWC.js";import"./Heading-DIDy3S_I.js";import"./Heading-BVtLIbvB.js";import"./Avatar-CUcr9Fyg.js";import"./AlertIcon-7aOFMVRI.js";import"./Initials-CsBB8C_4.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

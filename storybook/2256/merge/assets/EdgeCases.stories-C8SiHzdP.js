import{j as r}from"./iframe-Bc-jwLWq.js";import{C as n,M as e}from"./ContextMenu-D5tnVRpu.js";import{C as s}from"./ContextMenuTrigger-BEhNMwiU.js";import"./ContextMenuSection-DJB6II09.js";import{B as u}from"./Button-DRfNiyCG.js";import a from"./Default.stories-ZNIXshsU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./index-Ct8kadYq.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./Switch-BRJuQHTv.js";import"./useFieldComponent-ahSSNXad.js";import"./Label.module-CUYTf9Jc.js";import"./utils-BIv87FRG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-BnDjMcw1.js";import"./useFormReset-DFcj21LA.js";import"./usePress-NBjG5NMF.js";import"./useFocus-C6ldElRQ.js";import"./useFocusRing-B0jLa-Vk.js";import"./useFocusable-DIXmUg59.js";import"./useControlledState-IlB9I5Xo.js";import"./VisuallyHidden-CmlM99K4.js";import"./Dialog-BLkrUNfj.js";import"./Button-HPdphaJl.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./useLabel-BfZDlGh7.js";import"./context-BDmep644.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-pS-AnHir.js";import"./OverlayArrow-C2KXIoV9.js";import"./Collection-BCq2XeeE.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./SelectionIndicator-BwDlTF6c.js";import"./Separator-jBiWh72R.js";import"./Text-DgSTzWgU.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./Action-BW1QHV35.js";import"./context-CAc_7aQG.js";import"./useStatic-D2AFXt6d.js";import"./browser-Cfl6H5sa.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./dynamic-CTlJFVeg.js";import"./Popover-BnXLjntA.js";import"./useOverlayController-DoFosNgE.js";import"./OverlayContextProvider-BB6WVLCg.js";import"./OverlayTrigger-Cc-9XWER.js";import"./Text-Bs06tnQB.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./Separator-B8Cjd0jK.js";import"./Heading-Av026-5J.js";import"./Heading-DpsZJGvr.js";import"./Avatar-V3eohZA0.js";import"./AlertIcon-DCb6GQr1.js";import"./Initials-O0UJhlQH.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

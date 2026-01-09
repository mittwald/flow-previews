import{j as r}from"./iframe-4vGjmvQN.js";import{C as n,M as e}from"./MenuItem-Do7TLj7w.js";import{C as s}from"./ContextMenuTrigger-MvgN361A.js";import"./ContextMenuSection-uYq5CLUg.js";import{B as u}from"./Button-Dkb2KJyV.js";import a from"./Default.stories-DOFaUYHN.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DFPEzuYz.js";import"./context-C_iyWBEo.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./clsx-B-dksMZM.js";import"./index--XKY9bK1.js";import"./useStatic-CkngZPNU.js";import"./browser-BLim8y6B.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./dynamic-CTwyIkzY.js";import"./Popover-B7_IZjqh.js";import"./useOverlayController-D8-mco-D.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./Dialog-DWeru3ZY.js";import"./Button-C8uGqlfr.js";import"./utils-Cb3SeWCs.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./context-Cugfl_gO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-SP29s-a6.js";import"./useFocus-BGpJf3EA.js";import"./useFocusRing-ctZhab72.js";import"./useFocusable-BvBcbeR1.js";import"./RSPContexts-BAo2RxOH.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useControlledState-wPwtFL3G.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./Text-DO-ESRpi.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./VisuallyHidden-C3YQx9t_.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./Switch-BzuZdprQ.js";import"./useFieldComponent-diqFBc0H.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DqIeerOo.js";import"./useFormReset-BZ0fN7tZ.js";import"./OverlayTrigger-CIaqJQvR.js";import"./Text-D_m0UGXp.js";import"./EmulatedBoldText-DOuKha2y.js";import"./LoadingSpinner-Qei33fJA.js";import"./Separator-Co9kONL6.js";import"./Heading-DVNwCXdo.js";import"./Heading-D0PKdBSu.js";import"./Avatar-D4BBkXjt.js";import"./AlertIcon-Cm3SyDVG.js";import"./Initials-CidglX2O.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DB4UlQ_F.js";import{C as n,M as e}from"./MenuItem-DCn1_OA4.js";import{C as s}from"./ContextMenuTrigger-CAHVW_ZA.js";import"./ContextMenuSection-BHyvjJMz.js";import{B as u}from"./Button-DYIAULzM.js";import a from"./Default.stories-B60s5yi7.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D44Jy6S7.js";import"./context-b0VtR6po.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./useStatic-BsW-2tBw.js";import"./browser-CMEWPYW9.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./dynamic-CewJ3DJw.js";import"./Popover-C9bomiWQ.js";import"./useOverlayController-BTqpKE5m.js";import"./OverlayContextProvider-CZHDlMnp.js";import"./Dialog-B4nT46da.js";import"./Button-L-mN_PGj.js";import"./utils-B6Q0cVYp.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./context-BeH9c2u_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./Text-De_rG2Pz.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Switch-wfrPwUv2.js";import"./useFieldComponent-Dp69OqtL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-kc3vNB61.js";import"./useFormReset-zmgaZOpR.js";import"./OverlayTrigger-qoBp8HgP.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./LoadingSpinner-BUzKTNdb.js";import"./Separator-CYMgSuzA.js";import"./Heading-B71UuISa.js";import"./Heading-BIcTvsYt.js";import"./Avatar-z7IgWJ_K.js";import"./AlertIcon-BN1UL3Xe.js";import"./Initials-fvaDLTTP.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

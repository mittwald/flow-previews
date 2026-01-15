import{j as r}from"./iframe-DA37PzgD.js";import{C as n,M as e}from"./ContextMenu-BAl6IZ0U.js";import{C as s}from"./ContextMenuTrigger-CE49cPBe.js";import"./ContextMenuSection-DYM7NU_i.js";import{B as u}from"./Button-C_3hQ6qU.js";import a from"./Default.stories-ooFH8UT9.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./IconWarning-DMc9nDIB.js";import"./remote-BJWo5b31.js";import"./Switch-AEyhg5N0.js";import"./useFieldComponent-DTrWN6Rf.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DtYp6psM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-Y0erzZpk.js";import"./useFormReset-ChjOdAw3.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./useControlledState-izS5uoD6.js";import"./VisuallyHidden-C_Tup-b1.js";import"./Dialog-hpWxHudW.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./useLabel-CrQo68aR.js";import"./context-KzPqYKh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./Text-VNYIIeBR.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./Action-hYBLKXUj.js";import"./context-Cc9V1wfK.js";import"./useStatic-ChmTLNpH.js";import"./browser-Tq-Ovndo.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./dynamic-Cec-XZha.js";import"./Popover-CcmaDUys.js";import"./useOverlayController-h5OHZ8gf.js";import"./OverlayContextProvider-DWmJMYYY.js";import"./OverlayTrigger-BLRGcvFA.js";import"./Text-CKy5VQ2_.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./LoadingSpinner-YNnYvyP0.js";import"./Separator-3sz_tCnn.js";import"./Heading-IQrV0yVS.js";import"./Heading-C-vMGDS8.js";import"./Avatar-D2qchoY4.js";import"./AlertIcon-BbDcA2fv.js";import"./Initials-DU_7tL0F.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

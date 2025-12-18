import{j as r}from"./iframe-CywxDTj6.js";import{C as n,M as e}from"./MenuItem-D7WUzydX.js";import{C as s}from"./ContextMenuTrigger-Dpjwo80_.js";import"./ContextMenuSection-DDk2X5KZ.js";import{B as u}from"./Button-Dt6rqZC2.js";import a from"./Default.stories-BTryb_Bm.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DyuzWneU.js";import"./context-DM4I0BsB.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./useStatic-B4t8cENg.js";import"./browser-CaezisB_.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./dynamic-D64zpBY8.js";import"./Popover-CRD9Qx5x.js";import"./useOverlayController-CQzVIUEY.js";import"./OverlayContextProvider-C85v0gvj.js";import"./Dialog-RfbYVzK-.js";import"./Button-DzvzizsP.js";import"./utils-JmAwA3ix.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./context-Wz-N3Tdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./RSPContexts-DB0ICqF0.js";import"./OverlayArrow-kC1F2-h6.js";import"./useControlledState-CrIAtAXB.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./Text-Dc57gZlo.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./VisuallyHidden-CBo5v6jz.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./Switch-B4nHX8Il.js";import"./useFieldComponent-DA2iK2GC.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RNm0j7EN.js";import"./useFormReset-CCwx8s_G.js";import"./OverlayTrigger-DpHz--ek.js";import"./Text-vlJOJK2L.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./LoadingSpinner-Byj--1Pk.js";import"./Separator-hUqXww3X.js";import"./Heading-DXOJNO6C.js";import"./Heading-C30wQAmC.js";import"./Avatar-BSXYKNkw.js";import"./AlertIcon-B_eZBptx.js";import"./Initials-BFmj6k3h.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

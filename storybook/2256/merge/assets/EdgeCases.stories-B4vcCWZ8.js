import{j as r}from"./iframe-DjKJp4LH.js";import{C as n,M as e}from"./ContextMenu-Bi4-Rrdr.js";import{C as s}from"./ContextMenuTrigger-bYBn2D1O.js";import"./ContextMenuSection-D6Byc7PS.js";import{B as u}from"./Button-BDEZ1Pgg.js";import a from"./Default.stories-DPmIHcu-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./Switch-mP0ECEeM.js";import"./useFieldComponent-7yFtRUym.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DyC1AhIW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-DZbD7mMm.js";import"./useFormReset-BtBZQ9D7.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./useControlledState-B7AKSDvs.js";import"./VisuallyHidden-BM-dzb4f.js";import"./Dialog-B6ze-qTj.js";import"./Button-DheLTGmH.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./useLabel--MzsjFNv.js";import"./context-CaWPG6rd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./Text-DDR-J2dK.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./Action-CS8Seurr.js";import"./context-BJ5dxW4L.js";import"./useStatic-DSbbnRPw.js";import"./browser-DP-AFXYC.js";import"./getActionGroupSlot-BcFDPTef.js";import"./dynamic-Cwgd_SYw.js";import"./Popover-DZdPgP5E.js";import"./useOverlayController-CN88K5mF.js";import"./OverlayContextProvider-x3mZph6J.js";import"./OverlayTrigger-JCWGSatN.js";import"./Text-DIX_PQ8a.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./LoadingSpinner-pyPoMdb7.js";import"./Separator-C6tf6S93.js";import"./Heading-BlHRWoOy.js";import"./Heading-YfRwYxPu.js";import"./Avatar-BxU-tXte.js";import"./AlertIcon-DJ6AhYBh.js";import"./Initials-CEgoByNm.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BYlM8TfH.js";import{C as n,M as e}from"./MenuItem-DtjfqHY5.js";import{C as s}from"./ContextMenuTrigger-6C6Z2AYE.js";import"./ContextMenuSection-yyXtjvTi.js";import{B as u}from"./Button-DrjwoUCb.js";import a from"./Default.stories-DCO92v9H.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-i4rkq48V.js";import"./context-BILGmIqx.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useStatic-6sdTMqO6.js";import"./browser-D2sPcOVM.js";import"./getActionGroupSlot-nR5vf13o.js";import"./dynamic-BhGDraHV.js";import"./Popover-D-aIXqDf.js";import"./OverlayContextProvider-Dz9UAd6s.js";import"./Dialog-BSP5EDkY.js";import"./Button-BmIa1mS-.js";import"./utils-BDqIfUE7.js";import"./ProgressBar--do5EHZn.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./context-BxRqKeiD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./Text-Dc8La0ek.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./VisuallyHidden-D5yM91eE.js";import"./ClearPropsContextView-BJe-Torm.js";import"./ClearPropsContext-BpBo361K.js";import"./IconWarning-WQ4wo7kP.js";import"./Switch-DxT1a2F4.js";import"./useFieldComponent-BoJq1S9B.js";import"./react-children-utilities-DxnuAJ4K.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BmfPg07G.js";import"./useToggleState-LMXlfsGT.js";import"./useFormReset-Bl4vFhC1.js";import"./OverlayTrigger-B-qRJ8Xp.js";import"./ControlledNotification-Dl6zeRdw.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./LoadingSpinner-CqJPIXvI.js";import"./Separator-BQECgCLf.js";import"./Heading-CurQq7EL.js";import"./Heading-BrhKeiNO.js";import"./Avatar-D8T6dtm_.js";import"./AlertIcon-BJeOeOP1.js";import"./Initials-DXr3DU2b.js";const vr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const wr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,wr as __namedExportsOrder,vr as default};

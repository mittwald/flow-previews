import{j as r}from"./iframe-BK9Ry9wr.js";import{C as n,M as e}from"./ContextMenu-CN1RAZOk.js";import{C as s}from"./ContextMenuTrigger-D4daKNMe.js";import"./ContextMenuSection-BoFqJWQI.js";import{B as u}from"./Button-CHbQbW2n.js";import a from"./Default.stories-C6jNbFqs.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Switch-4NgsCL39.js";import"./useFieldComponent-DnU67IFr.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DO-BnPGQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CeqDToFs.js";import"./useFormReset-CaS7VrAz.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./useControlledState-D5gBJyZQ.js";import"./VisuallyHidden-D79PysQv.js";import"./Dialog-CFBRHxwp.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./useLabel-MQsZvy4I.js";import"./context-DsIoSqto.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./Text-Cq5Rc76r.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./useStatic-D1EtWzUP.js";import"./browser-DDyWafud.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./dynamic-QikLaQcI.js";import"./Popover-BQ3vFjP8.js";import"./useOverlayController-gbn3PAZ_.js";import"./OverlayContextProvider-9n1_NXqk.js";import"./OverlayTrigger-CIrGgPkU.js";import"./Text-kkda9Q25.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./LoadingSpinner-FeF_CDXe.js";import"./Separator-BIFvjswc.js";import"./Heading-DbP6ax1z.js";import"./Heading-AwuUEGOn.js";import"./Avatar-bhHDqwVa.js";import"./AlertIcon-CZTB9fHB.js";import"./Initials-D-sWCm8i.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

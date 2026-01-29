import{j as r}from"./iframe-DzPnzOIh.js";import{C as n,M as e}from"./MenuItem-YrPJ9QyW.js";import{C as s}from"./ContextMenuTrigger-DvdHPi80.js";import"./ContextMenuSection-DfF2Gqpp.js";import{B as u}from"./Button-B0xxYjKh.js";import a from"./Default.stories-C6A2evUn.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D4qqw_zO.js";import"./context-CvuQDK5p.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./useStatic-B5sjyhg8.js";import"./browser-DO1on-Lg.js";import"./getActionGroupSlot-BseyWuGA.js";import"./dynamic-CR1FGrpS.js";import"./Popover-DeK_Y-I_.js";import"./useOverlayController-DuzP2i3a.js";import"./OverlayContextProvider-DbqQHSiT.js";import"./Dialog-BkygjXx5.js";import"./Button-CCOKLUK2.js";import"./utils-DdPADezN.js";import"./ProgressBar-BDc0eUXF.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./context-D5QDMciq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./Text-CKGruhzq.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./VisuallyHidden-C2tKF7nl.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Switch-Byyg-dLh.js";import"./useFieldComponent-DttoHSbm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChWYNK0o.js";import"./useFormReset-D5TocNhH.js";import"./LoadingSpinner-3EdJH7-V.js";import"./OverlayTrigger-DzqcF9yd.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Separator-5OsqE3Pz.js";import"./Heading-DPjRgByp.js";import"./Heading-Dqw827jw.js";import"./Avatar-DxrbUwf8.js";import"./AlertIcon-BAMux0CS.js";import"./Initials-1lIwKFi4.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

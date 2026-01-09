import{j as r}from"./iframe-BoA7YzYm.js";import{C as n,M as e}from"./MenuItem-CZmGUGUO.js";import{C as s}from"./ContextMenuTrigger-C3SW7oKC.js";import"./ContextMenuSection-CVwpYLx9.js";import{B as u}from"./Button-BKFimoLG.js";import a from"./Default.stories-P6rvTdOr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./clsx-B-dksMZM.js";import"./index-C8IfwtBf.js";import"./useStatic-BAyQxveA.js";import"./browser--2iaZute.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./dynamic-DYpyzP7H.js";import"./Popover-tixea_gI.js";import"./useOverlayController-DTpdZrop.js";import"./OverlayContextProvider-CUahq4yj.js";import"./Dialog-BDOoN61w.js";import"./Button-BSweg4_1.js";import"./utils-CbCfmbCJ.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./context-Bl3IUlM5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./RSPContexts-D0KJsdCX.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./Text-DzES3Axw.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./VisuallyHidden-ulLndJxN.js";import"./IconWarning-Cm4x5FHH.js";import"./remote-W2BsjsJq.js";import"./Switch-3O19pOIK.js";import"./useFieldComponent-DkEUVrE8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-wU1PKsEf.js";import"./useFormReset-Lf5kfq5Z.js";import"./OverlayTrigger-sv_J9YIM.js";import"./Text-Dcujjsgx.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./LoadingSpinner-CJmPD5N7.js";import"./Separator-HfMY8LYC.js";import"./Heading-gW7z3NjW.js";import"./Heading-BxB-LiTB.js";import"./Avatar-nU7e8ZWQ.js";import"./AlertIcon-Cq_v5HPU.js";import"./Initials-BRr-Ptqb.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

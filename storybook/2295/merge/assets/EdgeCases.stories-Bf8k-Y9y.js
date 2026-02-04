import{j as r}from"./iframe-CBdrHiu-.js";import{C as n,M as e}from"./MenuItem-CN438eQs.js";import{C as s}from"./ContextMenuTrigger-BpyTR-jF.js";import"./ContextMenuSection-DKWGDRRC.js";import{B as u}from"./Button-CvrzgGgN.js";import a from"./Default.stories-D2D4v-j-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./clsx-B-dksMZM.js";import"./index-DbZpFDe3.js";import"./useStatic-Bx0cFIOO.js";import"./browser-DtunHlVO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./dynamic-Cbo9i_64.js";import"./Popover-Blf-QLvj.js";import"./useOverlayController-s1zH8rAH.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./Dialog-C9BJ8Byi.js";import"./Button-DGOdyj-q.js";import"./utils-DRjcKwJb.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./context-p6nKBAyO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNG00Dag.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./Text-DKFtzua6.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Switch-DWAzEHee.js";import"./useFieldComponent-CkNNSE-6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-WK2rrRWv.js";import"./useFormReset-DzYWM4EU.js";import"./LoadingSpinner-B7nOYR-m.js";import"./OverlayTrigger-CiCUVE66.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Separator-CoMj_IsK.js";import"./Heading-B0bk6t16.js";import"./Heading-BzPKH39A.js";import"./Avatar-BKBgfR9n.js";import"./AlertIcon-DkcKW-cj.js";import"./Initials-NZ8qWKMo.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

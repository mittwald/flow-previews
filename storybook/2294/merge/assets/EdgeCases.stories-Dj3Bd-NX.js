import{j as r}from"./iframe-CvJspzLv.js";import{C as n,M as e}from"./MenuItem-CsQOqwrc.js";import{C as s}from"./ContextMenuTrigger-BbJJXI9D.js";import"./ContextMenuSection-B9VXHai8.js";import{B as u}from"./Button-DPWvzJXv.js";import a from"./Default.stories-CyboqE6B.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CzgX1dLD.js";import"./context-KW9IbNQ1.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./clsx-B-dksMZM.js";import"./index-Df150GVy.js";import"./useStatic-B0ICfBk6.js";import"./browser-CBUTrPGa.js";import"./getActionGroupSlot-DdQssjpq.js";import"./dynamic-7-1UCAS5.js";import"./Popover-62VnHh_D.js";import"./useOverlayController-BI0XpmO3.js";import"./OverlayContextProvider-BI-9o36W.js";import"./Dialog-CNj22GpD.js";import"./Button-DpFh2ewL.js";import"./utils-BL4G7l_u.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./context-CQ77Qkvg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DO5nHrqL.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./Text-DHLl2ajF.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./Switch-CoKGarTH.js";import"./useFieldComponent-43Bszd6x.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BFwIgPNE.js";import"./useFormReset-ukaISav3.js";import"./LoadingSpinner-xAaU4yCn.js";import"./OverlayTrigger-08hVypIJ.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Separator-CXLDLHUl.js";import"./Heading-Ex-YKDBU.js";import"./Heading-BRBpvBMz.js";import"./Avatar-wY1Z7LlE.js";import"./AlertIcon-C15Ckg1B.js";import"./Initials-cp8COnaH.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

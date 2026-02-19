import{j as r}from"./iframe-je41IZNf.js";import{C as n,M as m}from"./MenuItem-DcJvwp72.js";import{C as s}from"./ContextMenuTrigger-D8i0SE5i.js";import"./ContextMenuSection-D3nZCtKg.js";import{B as u}from"./Button-CKqcv5FO.js";import a from"./Default.stories-DVylqrh0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-ChKsIRTP.js";import"./useOverlayController-BUOVgKeB.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./clsx-B-dksMZM.js";import"./index-DBepN-OD.js";import"./useStatic-DB-qeJ4V.js";import"./browser-Drae5Vqb.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./dynamic-BrtagzWP.js";import"./Popover-DIig3rOR.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./utils-Q4wA2zXG.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./context-533DYF-u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./RSPContexts-u6z1ubPU.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./Text-DidYm6nP.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./IconWarning-Bnxn-M7Y.js";import"./remote-CVh73cse.js";import"./Switch-C6sIOBz7.js";import"./useFieldComponent-b8-F_AVa.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-IFAQ1815.js";import"./useFormReset-BAaFkhxA.js";import"./LoadingSpinner-DltTQrQc.js";import"./OverlayTrigger-Bv_i_Yla.js";import"./Text-BC-RZ7k4.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Separator-B3Q0YIa0.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./Avatar-DAEYxPtj.js";import"./AlertIcon-g4_I2qja.js";import"./Initials-D19IiH3U.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};

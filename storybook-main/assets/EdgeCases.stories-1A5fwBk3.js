import{j as r}from"./iframe-C037GO3p.js";import{C as n,M as m}from"./MenuItem-DIYqFRkS.js";import{C as s}from"./ContextMenuTrigger-Bm7MmnCk.js";import"./ContextMenuSection-yxbgVkhw.js";import{B as u}from"./Button-Cf9guGvq.js";import a from"./Default.stories-DsxnIT1T.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./clsx-B-dksMZM.js";import"./index-aVIlTX7l.js";import"./useStatic-zK9KTA7T.js";import"./browser-CtD1Hg4J.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./dynamic-CXANBhHf.js";import"./Popover-B6RVLTNX.js";import"./OverlayContextProvider-saupE8AB.js";import"./Dialog-Sd6ebC5F.js";import"./Button-3UAE6tol.js";import"./utils-B21QcS96.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./context-Cm0s8R8a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DtHLFK3z.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./Text-BlWqR5Lx.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./VisuallyHidden-DBGkoZNP.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./Switch-rYCJKmsJ.js";import"./useFieldComponent-BW6tilSl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CUmJuox2.js";import"./useFormReset-BmsW_IRy.js";import"./LoadingSpinner-7anO2L1H.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./Text-1H8qvaGa.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Separator-Dh4XkHra.js";import"./Heading-D6ofxLDB.js";import"./Heading-DNAjQtPl.js";import"./Avatar-CReaUPQA.js";import"./AlertIcon-CoEhaz6M.js";import"./Initials-dnx4n43t.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

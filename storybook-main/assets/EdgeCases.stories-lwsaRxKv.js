import{j as r}from"./iframe-DwsGXJVG.js";import{C as n,M as m}from"./MenuItem-DvC4nW_N.js";import{C as s}from"./ContextMenuTrigger-BPepEjoh.js";import"./ContextMenuSection-X-b9aW1Y.js";import{B as u}from"./Button-CqL_vLUu.js";import a from"./Default.stories-n0k2mbjD.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CjTnBW9C.js";import"./useOverlayController-Bn3a-KRG.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./useStatic-BwWlrMEh.js";import"./browser-Cz_VorJk.js";import"./getActionGroupSlot-BRP57hZk.js";import"./dynamic-CY6fGUGp.js";import"./Popover-Cvxhvr4i.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./utils-DRn9wprx.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./context-aVGfmL8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./RSPContexts-CFeGdYTg.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./Text-_i5SHi6c.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./VisuallyHidden-Fvx90J8z.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Switch-BlCGn0Qm.js";import"./useFieldComponent-BobnjoTA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DlDrxqdX.js";import"./useFormReset-hk4HwqV2.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./OverlayTrigger-t2QYWnlS.js";import"./Text-BV6qM8pO.js";import"./EmulatedBoldText-C-itzyky.js";import"./Separator-aL8bFQ58.js";import"./Heading-BKffDfDn.js";import"./Heading-CsVZ9AEI.js";import"./Avatar-BkYwlH5l.js";import"./AlertIcon-BhWII3Mz.js";import"./Initials-CIJd6UOU.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

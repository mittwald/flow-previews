import{j as r}from"./iframe-DG8PGYI2.js";import{C as n,M as m}from"./MenuItem-DjMrLz3z.js";import{C as s}from"./ContextMenuTrigger-qWYNgQ1A.js";import"./ContextMenuSection-BKYmu9Je.js";import{B as u}from"./Button-DsdihroW.js";import a from"./Default.stories-CXS50VOX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BRiItlo9.js";import"./useOverlayController-BzZu7ty6.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./useStatic-BxWRYqBR.js";import"./browser-CdVMgEWJ.js";import"./getActionGroupSlot-D51i84O1.js";import"./dynamic-BkMen_On.js";import"./Popover-BqmVqall.js";import"./OverlayContextProvider-DoYhYc18.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./utils-07AIACoX.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./context-CRjwjO0_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./RSPContexts-DatC1hy5.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./Text-0L-5i7aJ.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Switch-B2t8clI5.js";import"./useFieldComponent-CBicToer.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DpBaLzJt.js";import"./useFormReset-BIdGIAau.js";import"./LoadingSpinner-JP8g8ixs.js";import"./OverlayTrigger-a3uZGxXg.js";import"./Text-DXfg_t75.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Separator-BHEBe6GY.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./Avatar-BgmulRyb.js";import"./AlertIcon-DlZAtoqh.js";import"./Initials-JAHMglxw.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

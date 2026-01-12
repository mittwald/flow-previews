import{j as r}from"./iframe-Ca6Y6Qbd.js";import{C as n,M as e}from"./ContextMenu-BN3FtodB.js";import{C as s}from"./ContextMenuTrigger-B4AkgpiJ.js";import"./ContextMenuSection-Dxs1x_rP.js";import{B as u}from"./Button-Cmpvhu71.js";import a from"./Default.stories-D9lJm9UF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Switch-DRcWuuo5.js";import"./useFieldComponent-Drxg4ucu.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CgPiupY7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-C8bfozUY.js";import"./useFormReset-QXLzcWbc.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./useControlledState-CsFJYMR6.js";import"./VisuallyHidden-DA0DNDbd.js";import"./Dialog-B1e_uHMT.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./Text-XI5tIYL5.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./Action-BHbL3yoQ.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./browser-CbMIui3y.js";import"./getActionGroupSlot-DZQMPipw.js";import"./dynamic-CaH7ifbO.js";import"./Popover-DUAQfyPS.js";import"./useOverlayController-D-zjYsKH.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./OverlayTrigger-ONQN5d76.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./Separator-BrJRLXAd.js";import"./Heading-CiyOEL28.js";import"./Heading-CtfKFM99.js";import"./Avatar-CWMmikpe.js";import"./AlertIcon-CE0IjQiw.js";import"./Initials-ClhypHfT.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

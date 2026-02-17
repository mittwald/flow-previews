import{j as r}from"./iframe-olJof__V.js";import{C as n,M as m}from"./MenuItem-CET-BlYw.js";import{C as s}from"./ContextMenuTrigger-DkBWWFGu.js";import"./ContextMenuSection-C9tKIY6H.js";import{B as u}from"./Button-CPlz8rsS.js";import a from"./Default.stories-C1_UkgT3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./clsx-B-dksMZM.js";import"./index-CQizCcaV.js";import"./useStatic-DVdbIJHO.js";import"./browser-IACFT9IC.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./dynamic-C_FBHMxE.js";import"./Popover-5M2oEFmF.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./utils-B7tchdhx.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./context-DOTF4vQp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./Text-PinZmeRI.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./VisuallyHidden-D0VqbVmf.js";import"./IconWarning-Dxqo3db7.js";import"./remote-BFSWQwUW.js";import"./Switch-CtXhHT6w.js";import"./useFieldComponent-BI2nSVzd.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dlp4u6PD.js";import"./useFormReset-BYGWiUrU.js";import"./LoadingSpinner-CT-rb4W5.js";import"./OverlayTrigger-CdRn1WXI.js";import"./Text-Dd-S15-B.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Separator-Cepkjnks.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./Avatar-Df7PeMRZ.js";import"./AlertIcon-DL26tbpe.js";import"./Initials-qz6jckWW.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

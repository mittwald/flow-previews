import{j as r}from"./iframe-B6FtZzVw.js";import{C as n,M as e}from"./MenuItem-Bi3PVbsN.js";import{C as s}from"./ContextMenuTrigger-BSBsD5_b.js";import"./ContextMenuSection-Hdwk65mt.js";import{B as u}from"./Button-HJgKWCOC.js";import a from"./Default.stories-Dx4gkkJd.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BQfBXJkE.js";import"./context-DELIC-Xh.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./clsx-B-dksMZM.js";import"./index-DprtUoGy.js";import"./useStatic-Du0weed2.js";import"./browser-D2cTR9e8.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./dynamic-HxtCVU2-.js";import"./Popover-CXHYUzbK.js";import"./useOverlayController-B2SRK6I3.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./Dialog-CxhUJg_S.js";import"./Button-DJB2g2P-.js";import"./utils-B053wNrY.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./context-D8VymAHE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./Text-Dn3IEVOe.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./VisuallyHidden-kv_mk74c.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./Switch-JoNg0BX9.js";import"./useFieldComponent-BNMXDSB6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BW5ypBnh.js";import"./useFormReset-CRRhvvtY.js";import"./OverlayTrigger-DubAi8QM.js";import"./Text-DPYEhwNL.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./LoadingSpinner-DXuLs3WE.js";import"./Separator-De3EoXd3.js";import"./Heading-DVq--lVl.js";import"./Heading-BVLRlyN8.js";import"./Avatar-fUuttNRE.js";import"./AlertIcon-CqMLsdbQ.js";import"./Initials-DzS8a-lo.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-y-Qy_Rwm.js";import{C as n,M as e}from"./ContextMenu-BdM_eL6w.js";import{C as s}from"./ContextMenuTrigger-Rw5n6N--.js";import"./ContextMenuSection-UUsl5yAi.js";import{B as u}from"./Button-BD4RfixQ.js";import a from"./Default.stories-BiJ9J31i.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./Switch-DtQRyVzP.js";import"./useFieldComponent-BPtwnKvp.js";import"./Label.module-CUYTf9Jc.js";import"./utils-Ek_OXClQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-Chk4kJZ9.js";import"./useFormReset-DmoJehYX.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./useControlledState-BivKNDQQ.js";import"./VisuallyHidden-uuI_aPdk.js";import"./Dialog-yt0PwtsU.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./useLabel-oIpNFQLF.js";import"./context-ukqkFony.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-D6kJ8Blw.js";import"./OverlayArrow-BfgbGjhP.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./Text-BUjonAbB.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./Action-DCkGWMlj.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./browser-BkGSrLgH.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./dynamic-DOzqWg4O.js";import"./Popover-E3KXF6KA.js";import"./useOverlayController-BBvbe3oK.js";import"./OverlayContextProvider-B0VW5X20.js";import"./OverlayTrigger-Ikn2lzdj.js";import"./Text-Dc6HCiIC.js";import"./EmulatedBoldText-BWRuiDih.js";import"./LoadingSpinner-CaEX00sr.js";import"./Separator-C7APhlPq.js";import"./Heading-BvcdH5AE.js";import"./Heading-DBwZPojJ.js";import"./Avatar-CLNZ0s2N.js";import"./AlertIcon-B-ySDH61.js";import"./Initials-D2XO-Idp.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

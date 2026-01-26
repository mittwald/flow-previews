import{j as r}from"./iframe-BZLAsPNC.js";import{C as n,M as e}from"./ContextMenu-BKmodNnt.js";import{C as s}from"./ContextMenuTrigger-DwSq8C9_.js";import"./ContextMenuSection-B5_hjl5E.js";import{B as u}from"./Button-CSRJ_rM3.js";import a from"./Default.stories-WpWkSSmp.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./Switch-DFdonVPE.js";import"./useFieldComponent-C5gewvzz.js";import"./Label.module-CUYTf9Jc.js";import"./utils-GBJhPEt0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-D_Xkru6C.js";import"./useFormReset-B4usOE4z.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./useControlledState-BdOl-nfx.js";import"./VisuallyHidden-B55KrhOv.js";import"./Dialog-BHTl5ZpY.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./useLabel-DAhF5fA-.js";import"./context-B1QKiSyt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./Text-C0MYo1gI.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./browser-D75BLayN.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./dynamic-DRBl70hS.js";import"./Popover-aQEA2L0G.js";import"./useOverlayController-C7H6e68I.js";import"./OverlayContextProvider-BlSJPydV.js";import"./OverlayTrigger-CosWzk9C.js";import"./Text-oqqebshB.js";import"./EmulatedBoldText-i2HM1out.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./Separator-D8bY6mTG.js";import"./Heading-CmA86V_y.js";import"./Heading-Bg25gZBW.js";import"./Avatar-Ck8xQEJR.js";import"./AlertIcon-wpFTQr76.js";import"./Initials-CNRqQniy.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

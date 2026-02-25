import{j as r}from"./iframe-Bh3xJiHl.js";import{C as n,M as m}from"./MenuItem-Ck1eV_yE.js";import{C as s}from"./ContextMenuTrigger-t2pu2qhP.js";import"./ContextMenuSection-rHl1P7lx.js";import{B as u}from"./Button-C1GDS2T5.js";import a from"./Default.stories-DgoxCZ8f.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-i2QcTjWd.js";import"./useOverlayController-DT1eg7nU.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./clsx-B-dksMZM.js";import"./index-CTdhbmBU.js";import"./useStatic-BN6jI5KS.js";import"./browser-8DYgdl68.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./dynamic-Cx5ap73z.js";import"./Popover-DZO-XDYX.js";import"./OverlayContextProvider-nbeISQDl.js";import"./Dialog-CdFvlhxh.js";import"./Button-BNrfYXOb.js";import"./utils-Dfx959rT.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./context-BR0BeWgQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B8ZJpDXl.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useFocusable-BqTTqTxS.js";import"./RSPContexts-CiTjd_Cl.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./Text-CYmLgYN4.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./VisuallyHidden-CnocgGJn.js";import"./IconWarning-BO5-ThfV.js";import"./remote-Bp1RK0aJ.js";import"./Switch-CSI0fQNR.js";import"./useFieldComponent-DixKAqTB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5O0ruM.js";import"./useFormReset-CbcSutFk.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./OverlayTrigger-xf6EpmWh.js";import"./Text-yap4nkEx.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Separator-HzHBagiQ.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./Avatar-D-GYlTlE.js";import"./AlertIcon-BebRztpd.js";import"./Initials-BgHL3cYh.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

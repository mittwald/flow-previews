import{j as r}from"./iframe-CBpAxFwW.js";import{C as n,M as m}from"./MenuItem-ZZ_2Y6z8.js";import{C as s}from"./ContextMenuTrigger-C4hUd_HP.js";import"./ContextMenuSection-CSCUKvfx.js";import{B as u}from"./Button-DJILh_tx.js";import a from"./Default.stories-DFTWdOt1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BgON7N4c.js";import"./useOverlayController-lEjhNgxt.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useStatic-CDkGs2jt.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./Popover-CbjXFr2h.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./utils-DlBHsIHw.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./context-BCPYrVw6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./VisuallyHidden-BLMNvyRL.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Switch-B7prEYzL.js";import"./useFieldComponent-PtL7ZYGA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C2wamhi2.js";import"./useFormReset-DcIaZXr3.js";import"./LoadingSpinner-kKg7jHcI.js";import"./OverlayTrigger-BoEnaKfv.js";import"./Text-DmIlada7.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Separator-DUYPTYlE.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./Avatar-COhgiUOT.js";import"./AlertIcon-DpBhbRLN.js";import"./Initials-Bd2-yJ9a.js";import"./index-BcxSEo57.js";const Br={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Lr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Lr as __namedExportsOrder,Br as default};

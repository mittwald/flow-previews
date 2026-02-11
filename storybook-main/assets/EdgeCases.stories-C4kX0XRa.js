import{j as r}from"./iframe-DFKQ2QsC.js";import{C as n,M as e}from"./MenuItem-DkK5bQwg.js";import{C as s}from"./ContextMenuTrigger-sBIsKvDl.js";import"./ContextMenuSection-DFA9uj7i.js";import{B as u}from"./Button-CumhvKwr.js";import a from"./Default.stories-CyvPy_kg.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./clsx-B-dksMZM.js";import"./index-BLTW5Tcp.js";import"./useStatic-BfD-d5xb.js";import"./browser-C3pjfYL0.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./dynamic-8YXtFeDo.js";import"./Popover-D_QG3gy8.js";import"./useOverlayController-r9uf67Om.js";import"./OverlayContextProvider-C7UAkNVd.js";import"./Dialog-BtwdVLzC.js";import"./Button-DBkz1b5H.js";import"./utils-BJXdD5he.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./context-m8OE0ddO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CE-sEEB4.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useFocusable-C6PlbLtm.js";import"./RSPContexts-ta7dPUPH.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./Text-D27_pVCF.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./VisuallyHidden-CKDTSDk1.js";import"./IconWarning-BuA9AHid.js";import"./remote-BP8uJVcU.js";import"./Switch-CVPjNDAE.js";import"./useFieldComponent-R5E6D8Ic.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-aXPCARy8.js";import"./useFormReset-DwR8gwPw.js";import"./LoadingSpinner-DwolGT18.js";import"./OverlayTrigger-BT52IZK9.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Separator-Bddsz9Mr.js";import"./Heading-DbtDsfGc.js";import"./Heading-DOKJ2uYX.js";import"./Avatar-CaGa3_rW.js";import"./AlertIcon-D5_dS1m5.js";import"./Initials-q3Ic_e14.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

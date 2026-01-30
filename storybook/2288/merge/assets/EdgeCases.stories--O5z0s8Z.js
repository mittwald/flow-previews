import{j as r}from"./iframe-BipmDVic.js";import{C as n,M as e}from"./MenuItem-Kv9-_7Wo.js";import{C as s}from"./ContextMenuTrigger-CsGUrRwl.js";import"./ContextMenuSection-CO4DhhVm.js";import{B as u}from"./Button-BuQAY4x2.js";import a from"./Default.stories-DlOmtyVj.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./clsx-B-dksMZM.js";import"./index-DhRV0L_D.js";import"./useStatic-DNvp4EKT.js";import"./browser-CR-oUB3P.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./dynamic-5Me7t2_P.js";import"./Popover-D6v11uuT.js";import"./useOverlayController-D0DRt1MZ.js";import"./OverlayContextProvider-DZ1Omm1z.js";import"./Dialog-BXIha8hU.js";import"./Button-JOtZZNa7.js";import"./utils-BmvAbY6y.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./context-Br1o_Gsv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGUPUAq5.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useFocusable-CoJ_GBdx.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./Text-Bx_sJIF1.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./IconWarning-CGnZi41_.js";import"./remote-Bx5-otuG.js";import"./Switch-DSdwIKZ_.js";import"./useFieldComponent-VycST_vs.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B5EhiEkH.js";import"./useFormReset-Bn-cpXjq.js";import"./LoadingSpinner-4_K5lSJw.js";import"./OverlayTrigger-DqBZOFmj.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Separator-BmoTQTtj.js";import"./Heading-BRGw-waJ.js";import"./Heading-uHa7bb0l.js";import"./Avatar-cuKuP-sl.js";import"./AlertIcon-Cy_cDr6j.js";import"./Initials-BTX4_WLb.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

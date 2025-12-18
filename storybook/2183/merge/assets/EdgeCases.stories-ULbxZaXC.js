import{j as r}from"./iframe-Bqcpbrss.js";import{C as n,M as e}from"./MenuItem-RgmvFlrB.js";import{C as s}from"./ContextMenuTrigger-BAwReSfr.js";import"./ContextMenuSection-C08RkJTE.js";import{B as u}from"./Button-Cnlerii9.js";import a from"./Default.stories-wB8TInLa.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B2JQUsel.js";import"./context-ChzSVWNL.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./useStatic-DxBp64zy.js";import"./browser-C4ue27yU.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./dynamic-Dekqokaj.js";import"./Popover-BzwM4JMX.js";import"./useOverlayController-b38M5Zqz.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./Dialog-Dpg78GNT.js";import"./Button-DylF7GCR.js";import"./utils-BJedWkRC.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./context-BrwEoz3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./Text-DG80-Tyy.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./Switch-b90-hH7G.js";import"./useFieldComponent-CI3p7oBW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-VW9tyNMs.js";import"./useFormReset-BuAWhlth.js";import"./OverlayTrigger-BuPKGzUB.js";import"./Text-BTcvwTq1.js";import"./EmulatedBoldText-CnuyczSs.js";import"./LoadingSpinner-CCDMAFHO.js";import"./Separator-BHcXNYLh.js";import"./Heading-BG_QqVK-.js";import"./Heading-BNK1YdHX.js";import"./Avatar-CYkIvhAm.js";import"./AlertIcon-glPdrYUy.js";import"./Initials-DBwWrHj6.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

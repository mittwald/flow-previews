import{j as r}from"./iframe-BWhqP90_.js";import{C as n,M as e}from"./ContextMenu-CLvJr5mp.js";import{C as s}from"./ContextMenuTrigger-217av2U0.js";import"./ContextMenuSection-DVcDBRAK.js";import{B as u}from"./Button-BciJVpgP.js";import a from"./Default.stories-TbegFfIj.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./Switch-CdYB6wok.js";import"./useFieldComponent-YclMbw8e.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DDxNv25V.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-Ctp5-5Xw.js";import"./useFormReset-DqbCot7l.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./useControlledState-hpfIa3L8.js";import"./VisuallyHidden-DRs-AG4l.js";import"./Dialog-CL817TCu.js";import"./Button-cDeaYk1j.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./useLabel-nvgQN0a7.js";import"./context-D1O-Xc3I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./Text-CjPzL55g.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./Action-CBNAKVRZ.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./browser-XxEUm-0T.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./dynamic-B9fZ3_-n.js";import"./Popover-S34byCU4.js";import"./useOverlayController-BDJ6Yr_G.js";import"./OverlayContextProvider-G1DVyXwK.js";import"./OverlayTrigger-CGA0SI1j.js";import"./Text-ClKyFsNf.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./LoadingSpinner-CBZxi8OD.js";import"./Separator-0ZQYI4A_.js";import"./Heading-B5yfVGXK.js";import"./Heading-qBHW75oC.js";import"./Avatar-COiHlYJa.js";import"./AlertIcon-DpUh0dNd.js";import"./Initials-DFmHZQOW.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

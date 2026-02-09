import{j as r}from"./iframe-CJFOFCad.js";import{C as n,M as e}from"./MenuItem-Br_P7Mqg.js";import{C as s}from"./ContextMenuTrigger-BdGqdAHu.js";import"./ContextMenuSection-C56vs4OS.js";import{B as u}from"./Button-D5kumnA4.js";import a from"./Default.stories-CVvNJt6X.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-Vq-tbHvg.js";import"./context-DTASnmZz.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./useStatic-C0hf5llT.js";import"./browser-C8kWAWSZ.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./dynamic-CfulQ7wG.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./OverlayContextProvider-DL2zELSv.js";import"./Dialog-YkcYiA7q.js";import"./Button-BaNQUerH.js";import"./utils-CsQ8IQtm.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./context-CMyux8LD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./Text-8vym_gVd.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./VisuallyHidden-CZLhXAB_.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Switch-UHd_QZqg.js";import"./useFieldComponent-CVIwC-Yy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DFzC1yi5.js";import"./useFormReset-DXleDB5s.js";import"./LoadingSpinner-CM8bIOhN.js";import"./OverlayTrigger-ByPpL00z.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Separator-BvK3DPN_.js";import"./Heading-BkdVO0Fc.js";import"./Heading-DOJDeA1a.js";import"./Avatar-C8l0STaK.js";import"./AlertIcon-BfQxSvrI.js";import"./Initials-xjdcYXPT.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

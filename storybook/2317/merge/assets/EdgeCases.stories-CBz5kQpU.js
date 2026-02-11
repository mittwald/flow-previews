import{j as r}from"./iframe-Czt-X4mt.js";import{C as n,M as e}from"./MenuItem-B5z2qnS9.js";import{C as s}from"./ContextMenuTrigger-BTcSczWB.js";import"./ContextMenuSection-CUYBU0Kr.js";import{B as u}from"./Button-CD6msFpC.js";import a from"./Default.stories-D58YHxnQ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./clsx-B-dksMZM.js";import"./index-Dtw36EGp.js";import"./useStatic-C0a0tu6G.js";import"./browser-CPd8oh-y.js";import"./dynamic-BXoid3qz.js";import"./getActionGroupSlot-5QVk2C33.js";import"./Popover-B8tcz0Bd.js";import"./useOverlayController-D_3uUTDx.js";import"./OverlayContextProvider-DqUVzQmH.js";import"./Dialog-CYkX7YiI.js";import"./Button-YmddG4Dp.js";import"./utils-CU6JriEK.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./context-BsnVI305.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEVH16Jn.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./RSPContexts-BGSIbyEV.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./Text-t3MR2mNG.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./VisuallyHidden-jSb2CZNn.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./Switch-DZeWCQbp.js";import"./useFieldComponent-CjTkiSgD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BLpJhXEB.js";import"./useFormReset-5KG7Gyo5.js";import"./LoadingSpinner-B3-O-X86.js";import"./OverlayTrigger-D2Ur5kvg.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Separator-BayJyET4.js";import"./Heading-53sbNT6w.js";import"./Heading-DpW_T125.js";import"./Avatar-nxdk2h98.js";import"./AlertIcon-DBLlr2Uy.js";import"./Initials-B5vAu3eB.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

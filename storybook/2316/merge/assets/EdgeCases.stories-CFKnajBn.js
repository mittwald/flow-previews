import{j as r}from"./iframe-B___tkgA.js";import{C as n,M as e}from"./MenuItem-DcpEHUUA.js";import{C as s}from"./ContextMenuTrigger-BVEbbbmS.js";import"./ContextMenuSection-BssuI41M.js";import{B as u}from"./Button-CK4qYUON.js";import a from"./Default.stories-Bmj3j9Cp.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./useStatic-DSdFfo4Y.js";import"./browser-C6gsgKxf.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./dynamic-BEuCOou2.js";import"./Popover-C7J9xDtg.js";import"./useOverlayController-eJqKV_lL.js";import"./OverlayContextProvider-CZtKT-tq.js";import"./Dialog-SqXlQhu9.js";import"./Button-dgLzajPx.js";import"./utils-BoKG2kRw.js";import"./ProgressBar-CdmwSyiz.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./context-CHjly9N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./Text-CbxRuAhG.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./VisuallyHidden-feej_kfu.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./Switch-HXSiSYTh.js";import"./useFieldComponent-vfbWFIJK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgOt3Jhs.js";import"./useFormReset-BMzMnmaN.js";import"./LoadingSpinner-gELkMREc.js";import"./OverlayTrigger-29xp9YbL.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Separator-BuoApKAE.js";import"./Heading-LM5CzMob.js";import"./Heading-2NkxAW1G.js";import"./Avatar-DgDPxRQK.js";import"./AlertIcon-COjYyYJX.js";import"./Initials-EUCprTwb.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

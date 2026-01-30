import{j as r}from"./iframe-DkT4d7Ot.js";import{C as n,M as e}from"./MenuItem-BZFo2dup.js";import{C as s}from"./ContextMenuTrigger-BoOjIu37.js";import"./ContextMenuSection-NCgBu2Na.js";import{B as u}from"./Button-B3KXRm13.js";import a from"./Default.stories-DU_YlVEC.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BKfs-erd.js";import"./context-CpYzats6.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./clsx-B-dksMZM.js";import"./index-CA8YyeFM.js";import"./useStatic-DmZQ70we.js";import"./browser-CwBpRuL-.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./dynamic-AbOzqnd1.js";import"./Popover-D3bIYHAi.js";import"./useOverlayController-C-1Q9KjD.js";import"./OverlayContextProvider-CjNcO-pQ.js";import"./Dialog-DEf0gwvq.js";import"./Button-DKCc9Jm1.js";import"./utils-up3lG_mb.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./context-BhNnKB4w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-loL-ySzv.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocusable-oFwI_mrj.js";import"./RSPContexts-rkHdJ27o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./Text-C_PPHbON.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./VisuallyHidden-BhWvypZu.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./Switch-5LKlhjSf.js";import"./useFieldComponent-FHnXwL7q.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Gm4GrSHl.js";import"./useFormReset-DMhhuJvy.js";import"./LoadingSpinner-DZGxTG7I.js";import"./OverlayTrigger-ChHec0Fn.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Separator-HzIpP0WC.js";import"./Heading-BxekkuWK.js";import"./Heading-DoshCNUZ.js";import"./Avatar-ClD90Wm0.js";import"./AlertIcon-CGIGsQoy.js";import"./Initials-D4Qme-q1.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

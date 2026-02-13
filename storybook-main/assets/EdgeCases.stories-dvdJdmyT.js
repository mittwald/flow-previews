import{j as r}from"./iframe-C2cGCWBO.js";import{C as n,M as m}from"./MenuItem-BVkkGfjr.js";import{C as s}from"./ContextMenuTrigger-C91aIj9h.js";import"./ContextMenuSection-DuK0dlwa.js";import{B as u}from"./Button-B41LUuF3.js";import a from"./Default.stories-BIcIRTFA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BZcBHaPT.js";import"./useOverlayController-CtyPLm8k.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./clsx-B-dksMZM.js";import"./index-Du1kNfMe.js";import"./useStatic-DUMwmPN3.js";import"./browser-BGhQMCSV.js";import"./getActionGroupSlot-C9frEoU7.js";import"./dynamic-DhyEqTLI.js";import"./Popover-DJnPn-3r.js";import"./OverlayContextProvider-BBwaePGz.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./utils-CPzpSZL2.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./context-2EfdQWx2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./Text-D1LgYL-c.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./Switch-D9l8HAch.js";import"./useFieldComponent-D_KC3UxI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DN8cgAFI.js";import"./useFormReset-BdRaO3QH.js";import"./LoadingSpinner-DIaaAh-V.js";import"./OverlayTrigger-C08PeZoT.js";import"./Text-D3xXIOyH.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Separator-BfjCusui.js";import"./Heading-BMwLGtkc.js";import"./Heading-Dg4rLfib.js";import"./Avatar-Ry328RJe.js";import"./AlertIcon-B9QySSBk.js";import"./Initials-DG0chAlB.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

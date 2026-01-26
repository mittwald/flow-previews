import{j as r}from"./iframe-CBKKDtut.js";import{C as n,M as e}from"./MenuItem-BEfLjZdp.js";import{C as s}from"./ContextMenuTrigger-C6LzS5MO.js";import"./ContextMenuSection-CIoY6k-y.js";import{B as u}from"./Button-B9OQWjLR.js";import a from"./Default.stories-DCUPinI3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DoBIVRDz.js";import"./context-B4Ey35Kl.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./useStatic-n8g6U0tI.js";import"./browser-C9q5kf03.js";import"./getActionGroupSlot-CKDi87pY.js";import"./dynamic-C3t3tmF9.js";import"./Popover-C-P6E-d5.js";import"./useOverlayController-BrNAIcQ_.js";import"./OverlayContextProvider-C-EovWON.js";import"./Dialog-DqG8ZP0V.js";import"./Button-DyYsKNHg.js";import"./utils-CzD9rXMA.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./context-Bvh_z46p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./Text-BipkjXt2.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./VisuallyHidden-BTRh3ybS.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Switch-D0fDz9QQ.js";import"./useFieldComponent-377eOR22.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CjbcZx63.js";import"./useFormReset-tFiefpak.js";import"./LoadingSpinner-BvfPlxYK.js";import"./OverlayTrigger-CgRJiL0z.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Separator-Cr7Epsqr.js";import"./Heading-i6OL6vOG.js";import"./Heading-BVbeBqwL.js";import"./Avatar-CGZ6Kc2Z.js";import"./AlertIcon-R8qprUXz.js";import"./Initials-CMzAxphU.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

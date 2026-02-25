import{j as r}from"./iframe-PZSwL5UI.js";import{C as n,M as m}from"./MenuItem-C0bB-Fyc.js";import{C as s}from"./ContextMenuTrigger-Ca2zwc8B.js";import"./ContextMenuSection-B4TWz5w1.js";import{B as u}from"./Button-Dx8ytIXV.js";import a from"./Default.stories-CMe0fomY.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./clsx-B-dksMZM.js";import"./index-Da7vmrj1.js";import"./useStatic-Bw6k9Sf5.js";import"./browser-Ds1bEyov.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./dynamic-DDVyub9n.js";import"./Popover-sNv2wezL.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./utils-lOj21ZD_.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./context-Ff7U_4vz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./RSPContexts-TcotrMre.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./Text-BG-2dzKS.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./VisuallyHidden-UxX7HzEl.js";import"./IconWarning-Brl3hUMe.js";import"./remote-mdYu2fN6.js";import"./Switch-DNzaYbla.js";import"./useFieldComponent-BUmkKSsK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZx5qkov.js";import"./useFormReset-DtrcblTn.js";import"./LoadingSpinner-kHlSwNnH.js";import"./OverlayTrigger-w9ToWuXF.js";import"./Text-CkpR2hqn.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Separator-BNESHi7w.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./Avatar-DkdidpBe.js";import"./AlertIcon-BtM4zuia.js";import"./Initials-BtP6eKKb.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

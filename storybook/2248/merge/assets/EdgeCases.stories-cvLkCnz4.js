import{j as r}from"./iframe-CF9WEugj.js";import{C as n,M as e}from"./ContextMenu-DeTI5k7j.js";import{C as s}from"./ContextMenuTrigger-CKc2z3rW.js";import"./ContextMenuSection-ChhzEL-I.js";import{B as u}from"./Button-Dt7_Feft.js";import a from"./Default.stories-ogbtI443.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Switch-OpasMww3.js";import"./useFieldComponent-B3P2g6wY.js";import"./Label.module-CUYTf9Jc.js";import"./utils-B4BZttt0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-DWZRhZpT.js";import"./useFormReset-w9h9-zRZ.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./useControlledState-C05rL349.js";import"./VisuallyHidden-C66z9jQL.js";import"./Dialog-Dbq5Vprd.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./useLabel-DF6AwuO5.js";import"./context-Bi2P07EN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./Text-wlSF0gym.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./Action-DBGOtx5u.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./browser-CV2qUG2E.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./dynamic-DQFpeFdM.js";import"./Popover-Cnq1gXmI.js";import"./useOverlayController-CbGkJu3W.js";import"./OverlayContextProvider-BjE0srji.js";import"./OverlayTrigger-ZNA0xvDx.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./LoadingSpinner-CdxOiWQd.js";import"./Separator-DvRRAmyv.js";import"./Heading-CDe2moQI.js";import"./Heading-DsznpHXx.js";import"./Avatar-DTioLuX0.js";import"./AlertIcon-Ck6cmA9H.js";import"./Initials-2DuWWyDS.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

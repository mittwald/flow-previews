import{j as r}from"./iframe-BgKMnsqP.js";import{C as n,M as m}from"./MenuItem-BDaUhBvC.js";import{C as s}from"./ContextMenuTrigger-wRUtG6NL.js";import"./ContextMenuSection-DBH05xVc.js";import{B as u}from"./Button-BtfzhoC2.js";import a from"./Default.stories-CEwJgEuX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-4ndP-n8L.js";import"./useOverlayController-D55f6wXT.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./useStatic-BGwbdR9P.js";import"./browser-CrtXW1Io.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./dynamic-EDiDAp0E.js";import"./Popover-DwOIDTsd.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./Dialog-BWmXoaKF.js";import"./Button-CpsY86Gq.js";import"./utils-DF7rIzyn.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./context-bU_PoVUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./Text-DxRa_Q_m.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./VisuallyHidden-CtgyRlvv.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Switch-CR0u7DKP.js";import"./useFieldComponent-BrPuybAK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5q4xvrfU.js";import"./useFormReset-BD4Q_TlS.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./OverlayTrigger-B2K0MccU.js";import"./Text-C3i_8DOD.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Separator-fBp8SCE1.js";import"./Heading-Dr5lCRWs.js";import"./Heading-DVJa8yG2.js";import"./Avatar-BzZWgZ5O.js";import"./AlertIcon-CcDG2G1r.js";import"./Initials-CZuIf6d_.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

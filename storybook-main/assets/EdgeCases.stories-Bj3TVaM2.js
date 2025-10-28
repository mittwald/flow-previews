import{j as r}from"./iframe-GtWYOLNc.js";import{C as n,M as e}from"./MenuItem-DRICh8aJ.js";import{C as s}from"./ContextMenuTrigger-DS8mWOZA.js";import"./ContextMenuSection-BqJoKa5n.js";import{B as u}from"./Button-DAMH2RQe.js";import a from"./Default.stories-BeT98XZN.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-DgPdZSGQ.js";import"./context-B79p2l6c.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./clsx-B-dksMZM.js";import"./index-Do7K3gX4.js";import"./useStatic-BUau0uD4.js";import"./browser-Dfdmz1Vs.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./dynamic-D_-LYO4W.js";import"./Popover-BloSQfLN.js";import"./useOverlayController-Cm_PeV9X.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./Dialog-E17SkaPF.js";import"./Button-DAFfpCNE.js";import"./utils-DD5Sc9KY.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./context-D40YBGtd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./Text-CjcFKgn5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./VisuallyHidden-CMXGnTyG.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./IconWarning-D3qu7dXh.js";import"./Switch-B0GEED2g.js";import"./useFieldComponent-CFSDwBJf.js";import"./react-children-utilities-BE-u8eGk.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-6t1tYcWi.js";import"./useToggleState-YV7abEAU.js";import"./useFormReset-C8pOBnDM.js";import"./OverlayTrigger-C3VeFBdc.js";import"./ControlledNotification-YDt7-Pno.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./LoadingSpinner-BgxzSWV-.js";import"./Separator-b4F9U2bi.js";import"./Heading-D17rAsKb.js";import"./Heading-D0R31Oqj.js";import"./Avatar-C6um1Hl_.js";import"./AlertIcon-Bj1ASDHT.js";import"./Initials-BToEoHO2.js";const wr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};

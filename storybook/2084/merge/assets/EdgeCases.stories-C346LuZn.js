import{j as r}from"./iframe-CPZmCQj-.js";import{C as n,M as e}from"./MenuItem-B0niEcq2.js";import{C as s}from"./ContextMenuTrigger-CC_b7EJi.js";import"./ContextMenuSection-Dto6kOnn.js";import{B as u}from"./Button-CO0ZKbGC.js";import a from"./Default.stories-Cst2K8nS.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./useStatic-BEtxpUKF.js";import"./browser-Vbuqg8Bp.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./dynamic-C0WBJwRj.js";import"./Popover-B5_3Py3v.js";import"./useOverlayController-DCVLgcvS.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./Dialog-DJw1jmu7.js";import"./Button-BLjAzLtk.js";import"./utils-DbTuSxgD.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./context-vwBy6rn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./Text-ev6zCoFy.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./VisuallyHidden-m06vE6aQ.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./IconWarning-BHYwQlMQ.js";import"./Switch-DWBf4OAI.js";import"./useFieldComponent-ZdrCImE8.js";import"./react-children-utilities-BpPrmtLj.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BIcdpqxH.js";import"./useToggleState-CgU4ubbL.js";import"./useFormReset-BZ0LqTvh.js";import"./OverlayTrigger-Cze0ok7i.js";import"./ControlledNotification-EmmTuegF.js";import"./Text-cGw-MBFK.js";import"./EmulatedBoldText-D8f43xv1.js";import"./LoadingSpinner-Cx2qWY44.js";import"./Separator-DWutvkh2.js";import"./Heading-CTnOUdED.js";import"./Heading-3nGV8T5A.js";import"./Avatar-BPB3ZEEI.js";import"./AlertIcon-B7P7Rebb.js";import"./Initials-qm6Fs73f.js";const wr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

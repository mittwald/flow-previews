import{j as r,R}from"./iframe-MfQSddZq.js";import{P as i,a as x}from"./Popover-D-Bgp8L1.js";import{B as h}from"./Button-CXZWinZX.js";import{u as P}from"./DialogTriggerView-CQyF4Z23.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./Dialog-BeFP_b5_.js";import"./Button-Br-9CQSd.js";import"./utils-CF_tf6Cs.js";import"./ProgressBar-zSuzGCCN.js";import"./Label-DLpcVX-r.js";import"./Hidden-DKR3rgXU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BGyOt14X.js";import"./context-sxseT2gC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bu3yAehE.js";import"./useFocus-CxcaXJfN.js";import"./useFocusRing-DF4UiXkf.js";import"./useFocusable-DPxyYzAu.js";import"./RSPContexts-XbeDUJEH.js";import"./OverlayArrow-CjYCja9D.js";import"./useControlledState-C4XOt-mm.js";import"./Collection-DIan0_PG.js";import"./CollectionBuilder-DTZJMA-R.js";import"./Separator-CUz3MRZ1.js";import"./Text-CWf2hLST.js";import"./Group-BQ9WJhL1.js";import"./SearchField-D_EUMNnm.js";import"./FieldError-DZKq6jul.js";import"./Form-DVtgW9Vh.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./useTextField-B4Sx1pdV.js";import"./useFormReset-DZNBd5mO.js";import"./TextField-D1Wfh07Y.js";import"./useEvent-yqplpnvs.js";import"./SelectionManager-CN4BV5dR.js";import"./useCollator-DRmYCL8E.js";import"./FocusScope-CMbYg7QE.js";import"./VisuallyHidden-Civfar1x.js";import"./IconWarning-CP6VaQZL.js";import"./Text-UwmO1_LL.js";import"./browser-BU-cRKf1.js";import"./EmulatedBoldText-B3c3-PLP.js";import"./LoadingSpinner-BBIckw2_.js";import"./context-6MsjwYoY.js";import"./useStatic-BZhX7pn2.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};

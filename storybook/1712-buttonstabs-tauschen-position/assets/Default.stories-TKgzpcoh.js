import{j as r,R}from"./iframe-DLPMA2Jy.js";import{P as i,a as x}from"./Popover-BbAmJ5oq.js";import{B as h}from"./Button-Bg9EI6ke.js";import{u as P}from"./DialogTriggerView-DAw6tYdk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./Dialog-ClROTFho.js";import"./Button-D9zXVRa2.js";import"./utils-b1QyYEgl.js";import"./ProgressBar-DSj6SBtF.js";import"./Label-tqYGMXcy.js";import"./Hidden-Ba5oTT5z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D3WVZ9yP.js";import"./context-BFBvnlV1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DwtsQH2c.js";import"./useFocus-rX-PXuLl.js";import"./useFocusRing-DFqScG39.js";import"./useFocusable-CToQXnw-.js";import"./RSPContexts-ClqXx4oa.js";import"./OverlayArrow-3BLRTQic.js";import"./useControlledState-Btp8qCFq.js";import"./Collection-B7eLtKl3.js";import"./CollectionBuilder-CE08yFAM.js";import"./Separator-BudPJPnA.js";import"./Text-DL4PvoSo.js";import"./Group-CGwZZGNH.js";import"./SearchField-CSx5BdQ3.js";import"./FieldError-Cgq9toxC.js";import"./Form-DfIg0xpy.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./TextField--NLdPxFk.js";import"./useEvent-PyKag1Em.js";import"./SelectionManager-D0ySastt.js";import"./useCollator-DMUqz4RZ.js";import"./FocusScope-DA4TfNEK.js";import"./VisuallyHidden-C4Kk4Esh.js";import"./IconWarning-BZNHqQOv.js";import"./Text-BHcv_RSt.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./LoadingSpinner-BpI0Au67.js";import"./context-DC5SRHlZ.js";import"./useStatic-m6uLMmhn.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

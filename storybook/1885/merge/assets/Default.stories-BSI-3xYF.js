import{j as r,R}from"./iframe-Bcy3WBLD.js";import{P as i,a as x}from"./Popover-BBFOwcYX.js";import{B as h}from"./Button-D1gTYi2b.js";import{u as P}from"./DialogTriggerView-txSV1TrO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./Dialog-D3iEa7Qs.js";import"./Button-j-dhdB0v.js";import"./utils-DWRY5rRS.js";import"./ProgressBar-DOzZ26z9.js";import"./Label-mUSxsxBX.js";import"./Hidden-Dv6inJmm.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJG08svr.js";import"./context-COJrQ54s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA9PIUpq.js";import"./useFocus-Dgw0vV32.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocusable-C_MY2EQ_.js";import"./RSPContexts-Bts87vXR.js";import"./OverlayArrow-C5shyw1z.js";import"./useControlledState-gINmRHbE.js";import"./Collection-CRHqEzPy.js";import"./CollectionBuilder-BpdNBb0a.js";import"./Separator-BMBwVh1p.js";import"./Text-B9FmTM8Z.js";import"./Group-CKjDXA5J.js";import"./SearchField-uTJdbFFf.js";import"./FieldError-l-G1_SjF.js";import"./Form-PJgehRtv.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./useTextField-KFIXFoXA.js";import"./useFormReset-COOu3OXz.js";import"./TextField-OZ5xDcTU.js";import"./useEvent-Bt8sVsIM.js";import"./SelectionManager-VjBSS0Z5.js";import"./useCollator-sTarHb1o.js";import"./FocusScope-DTvTpHKs.js";import"./VisuallyHidden-B7epvPUM.js";import"./IconWarning-Vd06CvkA.js";import"./Text-BKZvU2Ep.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";import"./LoadingSpinner-CH6ajn32.js";import"./context-BOV0Rbpo.js";import"./useStatic-D4VOD2iQ.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

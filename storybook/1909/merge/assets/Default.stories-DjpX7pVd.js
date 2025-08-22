import{j as r,R}from"./iframe-CbGYfYhl.js";import{P as i,a as x}from"./Popover-AInzHW1-.js";import{B as h}from"./Button-Gcjkh2he.js";import{u as P}from"./DialogTriggerView-BAlepQJB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./Dialog-DWI3Gb4X.js";import"./Button-dGVmYdyu.js";import"./utils-Bta_km8V.js";import"./ProgressBar-C2FOdX6j.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D6vayTQl.js";import"./context-DrN7EfSG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B6TDm-Ku.js";import"./useFocus-CgyMmhEU.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./RSPContexts-CWauLjE1.js";import"./OverlayArrow-CAzhQBDT.js";import"./useControlledState-Ckf81dN5.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./Text-B56mlhY7.js";import"./Group-G140fFme.js";import"./SearchField-0rw3SXHS.js";import"./FieldError-CCN5oAXI.js";import"./Form-dHMqMIPi.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./TextField-DGs8gg6j.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./useCollator-B95zPweT.js";import"./FocusScope-CXp1mWOp.js";import"./VisuallyHidden-BDzAgjFk.js";import"./IconWarning-DbjMP3z5.js";import"./Text-OS1-aGym.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./LoadingSpinner-BIdUmOnp.js";import"./context-J2lB5nq9.js";import"./useStatic-CDZ8mZeU.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

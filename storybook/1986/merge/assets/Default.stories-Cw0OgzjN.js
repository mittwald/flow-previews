import{j as r,R}from"./iframe-ct20Zc4_.js";import{P as i,a as x}from"./Popover-DidQYUqo.js";import{B as h}from"./Button-D_7HTG7B.js";import{u as P}from"./DialogTriggerView-Dw2hBdec.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./ClearPropsContextView-YUez0bQh.js";import"./useFocus-BkH8qcCX.js";import"./ProgressBar-CK-tPEaL.js";import"./utils-DpMwq36_.js";import"./Label-Acl7hQj6.js";import"./Hidden-B9i9z_Z9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cp6IFTTd.js";import"./context-DnCGX3ZW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CwKmYwnv.js";import"./IconWarning-CcsQkvTO.js";import"./Text-DcjvjsPV.js";import"./browser-Cy4n9sSP.js";import"./EmulatedBoldText-CxSwZZv_.js";import"./Text-BxKbsi5b.js";import"./LoadingSpinner-UirJOZi_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./Button-DDK8DVRp.js";import"./usePress-C5fNoyVy.js";import"./useFocusRing-D8miGa7N.js";import"./useFocusable-CQ8WqruE.js";import"./context-BYoyCjQY.js";import"./useStatic-x6Peb5cY.js";import"./RSPContexts-C51MpexI.js";import"./FocusScope-B8eJTcfl.js";import"./useCollator-CiYYIB6D.js";import"./VisuallyHidden-TqoC2igt.js";import"./Collection-IIiQ3cHk.js";import"./CollectionBuilder-hbCRLoQk.js";import"./Separator-C0MPI4X4.js";import"./Group-DAb_r1xm.js";import"./SearchField-nImGJb9R.js";import"./FieldError-kSnIjzvs.js";import"./Form-BSds6g5P.js";import"./useTextField-B0tvR0aW.js";import"./useFormReset-DrqvUx_9.js";import"./TextField-BxnrnSEC.js";import"./useEvent-u8lVOPY0.js";import"./SelectionManager-C0f7nk4D.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};

import{j as r,R}from"./iframe-vEDY1jTX.js";import{P as i,a as x}from"./Popover-C5GydJN0.js";import{B as h}from"./Button-xQdRWtXu.js";import{u as P}from"./DialogTriggerView-BCIqYBll.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./Dialog-BJmoKeFy.js";import"./Button-CkK3LebK.js";import"./utils-gfhUS_KB.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./context-DTpTEKQR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocus-bOn2kcoo.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./RSPContexts-DWSs-nZQ.js";import"./OverlayArrow-twlWLGKk.js";import"./useControlledState-CQf3r7ZL.js";import"./Collection-CGUFB12f.js";import"./CollectionBuilder-Czcc5V6M.js";import"./Separator-CcFrx14D.js";import"./Text-C6tNNGeu.js";import"./Input-CX0hj3qY.js";import"./SearchField-CjtC4DwQ.js";import"./FieldError-QhGTfIPV.js";import"./Form-CA3We__k.js";import"./Group-Bwqfb8JX.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./useTextField-DyXRlqMQ.js";import"./useFormReset-CgZBEhDH.js";import"./TextField-wFSW5he1.js";import"./SelectionManager-Co-ck4zL.js";import"./useEvent-7vAcQsYf.js";import"./useCollator-F0CDxzTU.js";import"./FocusScope-DqjTzzUX.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./IconWarning-Br_z56yn.js";import"./Text-75grQ_r_.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";import"./LoadingSpinner-DEOdZhCL.js";import"./context-CCKbj613.js";import"./useStatic-BCP0-isc.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};

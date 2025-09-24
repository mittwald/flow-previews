import{j as r,R}from"./iframe-nPsKv9M3.js";import{P as i,a as x}from"./Popover-DBvyH1F8.js";import{B as h}from"./Button-Cwt3YooV.js";import{u as P}from"./DialogTriggerView-Cm1t_yF_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR7735qm.js";import"./mergeRefs-DGqX8NnL.js";import"./index-BHi6sGsK.js";import"./ClearPropsContextView-R1wYtvDX.js";import"./useFocus-D6fxwPDF.js";import"./ProgressBar-Bh2LZauY.js";import"./utils-8bL4GcU7.js";import"./Label-BrXjgpUy.js";import"./Hidden-BiSDldQr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-VKnQkuTS.js";import"./context-mwZCjolN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CsXjitNs.js";import"./IconWarning-D7ef3xYO.js";import"./Text-XZwmfgbx.js";import"./browser-BzcSKw7f.js";import"./EmulatedBoldText-B79vZW6N.js";import"./Text-BIdL4sNQ.js";import"./LoadingSpinner-C1ZMRQIb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DSEYfllN.js";import"./Button-_y3k4Es0.js";import"./usePress-CD1xEu4S.js";import"./useFocusRing-caiKUn6t.js";import"./useFocusable-QTkHwuSk.js";import"./context-CC3ykTmh.js";import"./useStatic-CwmIPWCn.js";import"./RSPContexts-4Iqr_AQa.js";import"./FocusScope-Bk-s4YOY.js";import"./useCollator-Dm05pnhO.js";import"./VisuallyHidden-DzuuU_mQ.js";import"./Collection-BH5fUWZT.js";import"./CollectionBuilder-BsO6Q-Ae.js";import"./Separator-Cl85CK-5.js";import"./Group-N7Se0mQR.js";import"./SearchField-DpvPGqnX.js";import"./FieldError-BeWVHHOP.js";import"./Form-C8Y-x06x.js";import"./useTextField-5p-5mVZt.js";import"./useFormReset-JMfDIv5v.js";import"./TextField-Bthj1NJK.js";import"./useEvent-Lgym_IyA.js";import"./SelectionManager-_SjxoMvT.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

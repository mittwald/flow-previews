import{j as r,R}from"./iframe-DoW4S5y5.js";import{P as i,a as x}from"./Popover-DjXoYR6o.js";import{B as h}from"./Button-CJ9GVWSA.js";import{u as P}from"./DialogTriggerView-Cc9fs5Ki.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./Dialog-BNyqjTo3.js";import"./Button-DnWzyqBm.js";import"./utils-BERKyAtu.js";import"./ProgressBar-Cw6ko2xq.js";import"./Label-BiPavfPM.js";import"./Hidden-DdNFa5_a.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAN8HAzj.js";import"./context-DLINqX3o.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BTQEKaY-.js";import"./useFocus-CTercWxn.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocusable-Caaze2NE.js";import"./RSPContexts-BR0kwtoC.js";import"./OverlayArrow-Cnmawvtl.js";import"./useControlledState-DwXivsGS.js";import"./Collection-Bm_qpX5D.js";import"./CollectionBuilder-zDP_AyQT.js";import"./Separator-B7bt-k6s.js";import"./Text-C09El9xQ.js";import"./Group-BtU7cQ2J.js";import"./SearchField-BenY0OV9.js";import"./FieldError-DdRlRixc.js";import"./Form-1DUWHykH.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./useTextField-DmJTXkvZ.js";import"./useFormReset-DRCEBnHw.js";import"./TextField-DHHX1OVE.js";import"./useEvent-rS73qyHD.js";import"./SelectionManager-B1xZchnP.js";import"./useCollator-CKm8HelV.js";import"./FocusScope-C1si8CoR.js";import"./VisuallyHidden-BKF9ViHg.js";import"./IconWarning-1bSGr7bL.js";import"./Text-BWWLLA_C.js";import"./browser-1Svz-vih.js";import"./EmulatedBoldText-88Z3nw3V.js";import"./LoadingSpinner-C4oFajCL.js";import"./context-Ex8JCHDm.js";import"./useStatic-CyJ13LoA.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

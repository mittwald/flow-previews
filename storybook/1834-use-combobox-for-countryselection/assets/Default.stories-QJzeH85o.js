import{j as r,R}from"./iframe-DL1Xk_TW.js";import{P as i,a as x}from"./Popover-Ce0HJOgD.js";import{B as h}from"./Button-CSYR-8zw.js";import{u as P}from"./DialogTriggerView-DxPEo7_6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./Dialog-BV4IJ0nk.js";import"./Button-D1cW4wjn.js";import"./utils-CQ_zdhKT.js";import"./ProgressBar-B-kphiC_.js";import"./Label-BAbeU0V_.js";import"./Hidden-DR9x0YX2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-W7XlL7TD.js";import"./context-DL9YfZ-4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DN8Ip39y.js";import"./useFocus-XNeQty2s.js";import"./useFocusRing-Ch_JF-Gz.js";import"./useFocusable-D0Knm-Aw.js";import"./RSPContexts-x84Hoe_h.js";import"./OverlayArrow-D3HDkbZg.js";import"./useControlledState-m-GoXsAY.js";import"./Collection-C6Hsa1NN.js";import"./CollectionBuilder-DomLDs3M.js";import"./Separator-7Z7HyIGD.js";import"./Text-hY-xwtRO.js";import"./Group-Dvl4nkih.js";import"./SearchField-DmEcaw4n.js";import"./FieldError-BUlchV0X.js";import"./Form-DgOn25JB.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./useTextField-D29gkUES.js";import"./useFormReset-BVtOSdS9.js";import"./TextField-DfEA8x8Q.js";import"./useEvent-BwN_9XGI.js";import"./SelectionManager-98zZcpep.js";import"./useCollator-CIWymtw-.js";import"./FocusScope-CddfFBWs.js";import"./VisuallyHidden-OD3rFgcd.js";import"./IconWarning-CDWDVN9t.js";import"./Text-BarKc5iO.js";import"./browser-DlWkPxXn.js";import"./EmulatedBoldText-Cuoo9C-B.js";import"./LoadingSpinner-eLX_rEKw.js";import"./context-DUQna2Na.js";import"./useStatic-CDHuYpjM.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

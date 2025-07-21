import{j as r,R}from"./iframe-Bd70UBfQ.js";import{P as i,a as x}from"./Popover-ChoCuIY1.js";import{B as h}from"./Button-ABWfnhuf.js";import{u as P}from"./DialogTriggerView-DIXKjk2D.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./Dialog-CX-LU2mB.js";import"./Button-BTLR1vS2.js";import"./utils-BmyyYDYY.js";import"./ProgressBar-CU3IfAKj.js";import"./Label-g6yaf0Tw.js";import"./Hidden-CvIRFHlC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-w4mzRly1.js";import"./context-C3LNBa76.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Z-qLfgnH.js";import"./useFocus-_CMpkysi.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocusable-rNBIEL3L.js";import"./RSPContexts-ByMUw4AZ.js";import"./OverlayArrow-Cw8nIh42.js";import"./useControlledState-ChZkaxon.js";import"./Collection-S5kPVUME.js";import"./CollectionBuilder-DkUHX8v0.js";import"./Separator-DmvFwBU3.js";import"./Text-DnJtq-Ca.js";import"./Input-UumKyZ__.js";import"./SearchField-DmyF7w_w.js";import"./FieldError-BoxMIPJS.js";import"./Form-hLedV1Ku.js";import"./Group-DfP_y73Q.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./useTextField-CAXEM3Cr.js";import"./useFormReset-D2aXstqB.js";import"./TextField-CLBMJ7hZ.js";import"./SelectionManager-CaueLSz8.js";import"./useEvent-EcQqHcfQ.js";import"./useCollator-DzDuPy2D.js";import"./FocusScope-Bx1kvcbQ.js";import"./VisuallyHidden-CEaQSbTN.js";import"./IconWarning-Dx4sU-j9.js";import"./Text-DDmCr0c3.js";import"./browser-CDzL9dyN.js";import"./EmulatedBoldText-CROyqepx.js";import"./LoadingSpinner-C9Uerl8R.js";import"./context-CCwAOuxY.js";import"./useStatic-LzaGYsCx.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

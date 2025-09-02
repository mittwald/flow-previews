import{j as r,R}from"./iframe-CPSqmfOl.js";import{P as i,a as x}from"./Popover-8saljIIx.js";import{B as h}from"./Button-hKWpSws2.js";import{u as P}from"./DialogTriggerView-DhEtoXKf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./Dialog-BRCyKDs6.js";import"./Button-e2WWi27E.js";import"./utils-Bp4pxj2u.js";import"./ProgressBar-BjfkTy0Q.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGlbpXp.js";import"./context-DzKnIoVi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIALPEwc.js";import"./useFocus-BS8EzIP7.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./RSPContexts-D2HT_eZz.js";import"./OverlayArrow-Cn6JJnKz.js";import"./useControlledState-BlXvRNFY.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./Text-BvvdQ7EK.js";import"./Group-BmbgIKSk.js";import"./SearchField-DIrZjnJq.js";import"./FieldError-CM7w-aUX.js";import"./Form-1yVZIEH7.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./useTextField-Dv6BLFv4.js";import"./useFormReset-BUGG2d-X.js";import"./TextField-nrw2PmZM.js";import"./useEvent-COUAymzI.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";import"./IconWarning-Dz0_MR_L.js";import"./Text-CpNtEmk9.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";import"./LoadingSpinner-DLNH37Uk.js";import"./context-zgsQo9O-.js";import"./useStatic-OfVjkk_J.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

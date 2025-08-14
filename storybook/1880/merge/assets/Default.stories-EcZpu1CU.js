import{j as r,R}from"./iframe-BXDMX86q.js";import{P as i,a as x}from"./Popover-Can9HETa.js";import{B as h}from"./Button-BmoIjDQV.js";import{u as P}from"./DialogTriggerView-CDb3rmL9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CA-rRUQt.js";import"./mergeRefs-BlQ7xsLt.js";import"./index-CXUv09w1.js";import"./Dialog-B1-wK1GW.js";import"./Button-CTCpguPA.js";import"./utils-BbnHDINk.js";import"./ProgressBar-CqOUw3BL.js";import"./Label-KbRAOmA4.js";import"./Hidden-9xlFaPY3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B1CTPn-c.js";import"./context-DyduO5X5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrTnWIPr.js";import"./useFocus-EmCEI_3W.js";import"./useFocusRing-dYveCnJn.js";import"./useFocusable-x1ctHjf6.js";import"./RSPContexts-BVwGfu3g.js";import"./OverlayArrow-CxKD8bHN.js";import"./useControlledState-8m1Jp16z.js";import"./Collection-DRL76Dr2.js";import"./CollectionBuilder-tPYtcWuA.js";import"./Separator-dxgt4vJy.js";import"./Text-8unsz-5q.js";import"./Group-UZonwJ93.js";import"./SearchField-MnOXAoEn.js";import"./FieldError-B3Nc_fB3.js";import"./Form-BaF7AzDl.js";import"./useLocalizedStringFormatter-Cu-ju4he.js";import"./useTextField-DRlSiNws.js";import"./useFormReset-CB9QX2BV.js";import"./TextField-ByaluKOI.js";import"./useEvent-DDpQr-S3.js";import"./SelectionManager-DxlIos2Z.js";import"./useCollator-4XxMIsgb.js";import"./FocusScope-CI4D8ZGu.js";import"./VisuallyHidden-_kOtwmic.js";import"./IconWarning-CtdkcZph.js";import"./Text-bj3uPEQb.js";import"./browser-1ziQicFl.js";import"./EmulatedBoldText-hpKq7Hz7.js";import"./LoadingSpinner-B8vc0P23.js";import"./context-CKEF2sYl.js";import"./useStatic-B3xzZHSp.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

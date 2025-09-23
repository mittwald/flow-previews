import{j as r,R}from"./iframe-BJWngGl7.js";import{P as i,a as x}from"./Popover-DBKfYnMB.js";import{B as h}from"./Button-Dpovk5Ay.js";import{u as P}from"./DialogTriggerView-G0XTVNWS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./useFocus-B52D3fzv.js";import"./ProgressBar-IjP_LWAf.js";import"./utils-BjLoxrER.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./context-ZX7huqtR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DIKMvFKO.js";import"./IconWarning-CLxGQCa2.js";import"./Text-D-lw11hw.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";import"./Text-zfbbvU9b.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./Button-BC63ENzq.js";import"./usePress-Bx1Ga4ml.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./context-D9sg3hhH.js";import"./useStatic-BpRokF7z.js";import"./RSPContexts-1ZAuRZHz.js";import"./FocusScope-DwCuMKHy.js";import"./useCollator-Qs-Te_M3.js";import"./VisuallyHidden-5aVnsY39.js";import"./Collection-CxJ7q3qS.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Separator-DE1lcCbm.js";import"./Group-BEwONPHD.js";import"./SearchField-Cm99TGpl.js";import"./FieldError-RjUORd-P.js";import"./Form-DRROzcFd.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./TextField-BtON624e.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

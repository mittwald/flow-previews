import{j as r,R}from"./iframe-BpdxrwIb.js";import{P as i,a as x}from"./Popover-DtlXaqHk.js";import{B as h}from"./Button-CwyQ24Il.js";import{u as P}from"./DialogTriggerView-B4FX_acS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./Dialog--6GRJbyV.js";import"./Button-0E_exH3L.js";import"./utils-60PhQC-u.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./context-CefFUzIe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CXS9utKX.js";import"./useFocus-C0zYbozs.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";import"./RSPContexts-COprRsvg.js";import"./OverlayArrow-C7JKPmKj.js";import"./useControlledState-BiXfF0Y1.js";import"./Collection-DxypVpmd.js";import"./CollectionBuilder-DBkURgoe.js";import"./Separator-DodoKnoT.js";import"./Text-s-uJNCfK.js";import"./Group-DJY0cn_B.js";import"./SearchField-DAJQjktq.js";import"./FieldError-CSYQEfgd.js";import"./Form-BBooAEet.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./useTextField-BxOi2WYK.js";import"./useFormReset-BDGpTE2A.js";import"./TextField-Ikioio4Y.js";import"./useEvent-CgmVVSAd.js";import"./SelectionManager-u7tMSqsB.js";import"./useCollator-YHcMoLBN.js";import"./FocusScope-CzMQYsxZ.js";import"./VisuallyHidden-C_bZjV4d.js";import"./IconWarning-DfpVuNuz.js";import"./Text-DE4Q9wlE.js";import"./browser-CjlkZb14.js";import"./EmulatedBoldText-BK7BqSsu.js";import"./LoadingSpinner-CTxNA6YP.js";import"./context-Cy2K_ymr.js";import"./useStatic-_L-kGsxT.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

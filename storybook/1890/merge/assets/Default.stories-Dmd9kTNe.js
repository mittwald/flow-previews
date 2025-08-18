import{j as r,R}from"./iframe-giJ3PN41.js";import{P as i,a as x}from"./Popover-wrThc68r.js";import{B as h}from"./Button-t3gsP1h6.js";import{u as P}from"./DialogTriggerView-D_msadZI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./Dialog-BJZav00b.js";import"./Button-DJpSVAFI.js";import"./utils-CXDqZ2sl.js";import"./ProgressBar-B5g3Upep.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DTs_WTOS.js";import"./context-B5VaUXEx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D1wL7cKS.js";import"./useFocus-CuIPz-Kl.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./RSPContexts-D9-_jwd4.js";import"./OverlayArrow-BGGM7Kja.js";import"./useControlledState-BdipClPW.js";import"./Collection-DKY2nhBh.js";import"./CollectionBuilder-DGOIxE5b.js";import"./Separator-pxt8W_GD.js";import"./Text-CPIeRDsX.js";import"./Group-CrHdP7HD.js";import"./SearchField-TlY83ID8.js";import"./FieldError-nVLUoiBd.js";import"./Form-DPXxe_7V.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./useTextField-_WbwmA1r.js";import"./useFormReset-ChCBJkpa.js";import"./TextField-CJSQz5rH.js";import"./useEvent-BWSnRzjc.js";import"./SelectionManager-xGqpQwPR.js";import"./useCollator-n7eXimmn.js";import"./FocusScope-D6b4m46d.js";import"./VisuallyHidden-DL0JmpvH.js";import"./IconWarning-Dj_wwKGm.js";import"./Text-unBq3m4E.js";import"./browser-DkEs9M37.js";import"./EmulatedBoldText-D-WMJ6En.js";import"./LoadingSpinner-kOBWqA9j.js";import"./context-CtVI5d4l.js";import"./useStatic-BgGRa1ft.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

import{j as r,R}from"./iframe-Nqcw2rDw.js";import{P as i,a as x}from"./Popover-CNJM6LCy.js";import{B as h}from"./Button-Cgaohe9-.js";import{u as P}from"./DialogTriggerView-CFMQIVcR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./Dialog--HSHBiJO.js";import"./Button-qshs3T0G.js";import"./utils-Bp1w5lkv.js";import"./ProgressBar-Sv3Hk_vO.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DV1Mt0Tl.js";import"./context-Btv9vDKp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLwwvcX7.js";import"./useFocus-C0d_BuOG.js";import"./useFocusRing-CuYhL92s.js";import"./useFocusable-C3WyBOJs.js";import"./RSPContexts-iQSSy6Xo.js";import"./OverlayArrow-Da2mMVHM.js";import"./useControlledState-Cj9ITNGF.js";import"./Collection-Dnpb3Bt1.js";import"./CollectionBuilder-DJE4aqj-.js";import"./Separator-CRfWHhtA.js";import"./Text-CIgQjC5i.js";import"./Group-8CGiAkDp.js";import"./SearchField-DVNFC-Ik.js";import"./FieldError-BpNobjrx.js";import"./Form-DdlSQ4T5.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./useTextField-B4dlVx9P.js";import"./useFormReset-CuLrpRbL.js";import"./TextField--xsqEd_p.js";import"./useEvent-D-ifiSoO.js";import"./SelectionManager-BU8YZ5iT.js";import"./useCollator-SfrY7Omb.js";import"./FocusScope-BuhXHJsl.js";import"./VisuallyHidden-CR5lrquH.js";import"./IconWarning-B5Ig4VhK.js";import"./Text-xc4JCB-X.js";import"./browser-BgnnD3cg.js";import"./EmulatedBoldText-Cwk1IhrY.js";import"./LoadingSpinner-Bp03oye4.js";import"./context-v3ONCW42.js";import"./useStatic-CP_9Iese.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

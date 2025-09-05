import{j as r,R}from"./iframe-BGMqIB5E.js";import{P as i,a as x}from"./Popover-C0n8OrmN.js";import{B as h}from"./Button-BFNUJ6Pn.js";import{u as P}from"./DialogTriggerView-DGq9KeX3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./Dialog-hZ8yeQT4.js";import"./Button-C2r7IuQP.js";import"./utils-DSJ2fpWd.js";import"./ProgressBar-D-EmigOC.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DEWKGCco.js";import"./context-C9jpkMPH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DciW20d_.js";import"./useFocus-DimIAfL3.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocusable-DsCZ72OQ.js";import"./RSPContexts-W4yDCNDw.js";import"./OverlayArrow-BCKhjmtK.js";import"./useControlledState-CyFiZ_AX.js";import"./Collection-CCbdzQqw.js";import"./CollectionBuilder-CvszDNI1.js";import"./Separator-DQBycTyN.js";import"./Text-BM4jLh1h.js";import"./Group-Cwbp1Rxy.js";import"./SearchField-BGYYvbmv.js";import"./FieldError-ClTlFvX2.js";import"./Form-DIhLFb81.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./useTextField-0bIYzpQ5.js";import"./useFormReset-CGt1BQBC.js";import"./TextField-B67QJCcl.js";import"./useEvent-CUMNl0wi.js";import"./SelectionManager-Ci5onPc0.js";import"./useCollator-CDcEI0Bz.js";import"./FocusScope-DJHRiFNO.js";import"./VisuallyHidden-C_NToHIT.js";import"./IconWarning-mDCCMBSQ.js";import"./Text-CM0LFMBt.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./context-FbZS6Lb6.js";import"./useStatic-ERGKGHTj.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

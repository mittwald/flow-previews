import{j as r,R}from"./iframe-ZeYQaqTq.js";import{P as i,a as x}from"./Popover-CkN76oe6.js";import{B as h}from"./Button-CmxRhHKt.js";import{u as P}from"./DialogTriggerView-Udssk73q.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./Dialog-CPFJ-em9.js";import"./Button-8lvA6fYu.js";import"./utils-CZSTTIRS.js";import"./ProgressBar-y-6EHwAj.js";import"./Label-BCX0WWwJ.js";import"./Hidden-BCzOp-Gy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QKgiZqr.js";import"./context-BdRPu6tD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./useFocus-EvOFeEzd.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocusable-_P_eC141.js";import"./RSPContexts-B51mpv1W.js";import"./OverlayArrow-BX3D_PZr.js";import"./useControlledState-fovAuXst.js";import"./Collection-DRioiR9B.js";import"./CollectionBuilder-_wjpVTSh.js";import"./Separator-CPoxSccm.js";import"./Text-CTESEC7p.js";import"./Input-Co1lLTdd.js";import"./SearchField-Bklbm_03.js";import"./FieldError-mFBw1lmq.js";import"./Form-MeaiSeb5.js";import"./Group-DRjYMMoj.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./useTextField-D3PtH1hi.js";import"./useFormReset-DYMhoeZf.js";import"./TextField-C77kbV9Z.js";import"./SelectionManager-exFNYZLH.js";import"./useEvent-BAIrY4aR.js";import"./useCollator-CCl5WH_E.js";import"./FocusScope-C_dTN5HC.js";import"./VisuallyHidden-CW-y3tuT.js";import"./IconWarning-Mt76M62l.js";import"./Text-ADEYgpsM.js";import"./browser-BE8-G2h8.js";import"./EmulatedBoldText-CNK-5iTs.js";import"./LoadingSpinner-BsYGnIlm.js";import"./context-D0miJpww.js";import"./useStatic-B42yuxiF.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

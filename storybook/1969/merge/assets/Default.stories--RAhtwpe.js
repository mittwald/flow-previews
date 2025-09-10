import{j as r,R}from"./iframe-DcFGg16D.js";import{P as i,a as x}from"./Popover-DNcGxoGD.js";import{B as h}from"./Button-DJ4LLcBR.js";import{u as P}from"./DialogTriggerView-I--QKd5T.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./Dialog-BjymA24M.js";import"./Button-eLaBErzq.js";import"./utils-MGL4-aZB.js";import"./ProgressBar-B1oFmI6J.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BWfTCaKH.js";import"./context-2JOSlQoN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dxku2mh7.js";import"./useFocus-U4AMFjB6.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocusable-CBHGItg9.js";import"./RSPContexts-BGgHSZk2.js";import"./OverlayArrow-D67G4pFu.js";import"./useControlledState-ecFtZ1Px.js";import"./Collection-DSC_s3_U.js";import"./CollectionBuilder-C1fftWwC.js";import"./Separator-RxFnsY_N.js";import"./Text-Bo-pyWRw.js";import"./Group-Cfinkx-g.js";import"./SearchField-DOOJGDQj.js";import"./FieldError-Dg2s55Gd.js";import"./Form-67TyawWi.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./TextField-DxEII3el.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./useCollator-IqIPfKpf.js";import"./FocusScope-Csa5zz-0.js";import"./VisuallyHidden-MvD6uM4h.js";import"./IconWarning-CHPRxwlr.js";import"./Text-DMVvzt3E.js";import"./browser-CVxrqIOh.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./LoadingSpinner-B2KP9AW1.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

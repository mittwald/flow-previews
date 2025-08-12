import{j as r,R}from"./iframe-C1l4k2HV.js";import{P as i,a as x}from"./Popover-nCt9z7Um.js";import{B as h}from"./Button-CknaAKeQ.js";import{u as P}from"./DialogTriggerView-CDSNVlGP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-UGszKfi1.js";import"./mergeRefs-Dwr6BYYS.js";import"./index-D2SS6_dL.js";import"./Dialog-TYA03L2P.js";import"./Button-CNQMHeIL.js";import"./utils-v9anKdvO.js";import"./ProgressBar-DvublPU5.js";import"./Label-BgYgpH4h.js";import"./Hidden-Bf1cKpiB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DOI1XvOs.js";import"./context-DZKv31KF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DuL0mT4v.js";import"./useFocus-DYgEZHE7.js";import"./useFocusRing-UjyG7JyR.js";import"./useFocusable-BYtFdzHx.js";import"./RSPContexts-BcFnB_Bf.js";import"./OverlayArrow-DkLbTEcV.js";import"./useControlledState-C9Oc57Yt.js";import"./Collection-B5WxU_Tr.js";import"./CollectionBuilder-5yucyFA6.js";import"./Separator-DvVADXJA.js";import"./Text-CRjxumht.js";import"./Group-UiVaQAL3.js";import"./SearchField-B9KiNtuR.js";import"./FieldError-1hdg8Lt2.js";import"./Form-AqkLdwZK.js";import"./useLocalizedStringFormatter-Cfss7tUo.js";import"./useTextField-COpDxnv4.js";import"./useFormReset-CBR7MSqM.js";import"./TextField-BUvKpsdJ.js";import"./useEvent-CEVQhyLE.js";import"./SelectionManager-BROy-fD_.js";import"./useCollator-uWxVCJwD.js";import"./FocusScope-CHMeNqcW.js";import"./VisuallyHidden-BCmSOm_5.js";import"./IconWarning-DU-YpMEs.js";import"./Text-TULuMeKV.js";import"./browser-kLrz4LrJ.js";import"./EmulatedBoldText-g1-xYpae.js";import"./LoadingSpinner-CZRDoJTo.js";import"./context-D-GsK0VP.js";import"./useStatic-B47nXigD.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

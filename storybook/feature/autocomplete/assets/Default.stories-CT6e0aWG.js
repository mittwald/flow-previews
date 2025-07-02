import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-sKrbnid6.js";import{R as x}from"./index-BdpSHsi2.js";import{B as h}from"./Button-B13tId7B.js";import{u as P}from"./DialogTriggerView-C1dza55a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D25_VE1T.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-D69yjTCs.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Dialog-CleslRVA.js";import"./Button-DnnpdS5P.js";import"./utils-q_Aud5Js.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./context-C-2WHVw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx3ZvVfI.js";import"./useFocus-BK-u4cdi.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BHF1MVGt.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-oJzNy84A.js";import"./CollectionBuilder-C2AfWA97.js";import"./Separator-D8lRHJ5d.js";import"./Text-DtGJyZhh.js";import"./Input-DKshHGKQ.js";import"./SearchField-BPqcjU2c.js";import"./FieldError-rzQ5ghoP.js";import"./Form-Ckmgkmz_.js";import"./Group-46VfC_jx.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./useTextField-CNVbrZkS.js";import"./useFormReset-B9LhY6oC.js";import"./TextField-C3T3nKGe.js";import"./SelectionManager-CRLw705v.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D5hiFDC1.js";import"./VisuallyHidden-CRdqyLT8.js";import"./index-BAMY2Nnw.js";import"./IconWarning-DgzDceT9.js";import"./Text-Dl143bat.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./LoadingSpinner-Dvx90mt-.js";import"./context-C7fQD-qy.js";import"./useStatic-GZxy2igr.js";const Br={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Or=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Or as __namedExportsOrder,Br as default};

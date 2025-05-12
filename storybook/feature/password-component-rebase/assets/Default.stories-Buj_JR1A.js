import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-B7tJL-G2.js";import{R as x}from"./index-BdpSHsi2.js";import{B as h}from"./Button-BxYcNOFo.js";import{u as P}from"./OverlayTrigger---J8gobb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DPpY_m4Q.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-BMXV9deb.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-DY68-2mA.js";import"./Dialog-BtyX_L6z.js";import"./Button-0sHIpBCS.js";import"./utils-B2jHvTU8.js";import"./ProgressBar-D87xnYtB.js";import"./Label-DULpRqFS.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-J3t5Qa20.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-KvxCYtVf.js";import"./Collection-DiFzyIMP.js";import"./CollectionBuilder-CBZ2qMwz.js";import"./Separator-C9CvzOtQ.js";import"./Text-bCwBREBS.js";import"./useOverlayTriggerState-Bx6p_QPa.js";import"./useControlledState-B-V-WRDl.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./index-BAMY2Nnw.js";import"./IconWarning-Wb0-E6wX.js";import"./Text-Bjrd7pUX.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./LoadingSpinner-BeODXER_.js";import"./context-DbUQKISe.js";import"./useStatic-BhcDaSLC.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

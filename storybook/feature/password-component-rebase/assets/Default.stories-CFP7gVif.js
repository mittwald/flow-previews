import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-BDnbSNhY.js";import{R as x}from"./index-BdpSHsi2.js";import{B as h}from"./Button-HU0IDT58.js";import{u as P}from"./OverlayTrigger-CJXo0isK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Etx32Jzv.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-xQM8WmXm.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./DialogTriggerView-BbP3qYQ0.js";import"./Dialog-9stIWeEN.js";import"./Button-DMR6N1Wj.js";import"./utils-k5T1Axi4.js";import"./ProgressBar-CwgzMXGv.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C2rzDuF5.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CmGWUGtX.js";import"./CollectionBuilder-CZDODqbS.js";import"./Separator-Cy_qZ13i.js";import"./Text-CCjUyjXh.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./index-BAMY2Nnw.js";import"./IconWarning-CZe_1AXl.js";import"./Text-sNkeUIht.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./LoadingSpinner-SrGa4qnn.js";import"./context-BgP-s3U9.js";import"./useStatic-Bhw6e3Xl.js";const fr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,vr as __namedExportsOrder,fr as default};

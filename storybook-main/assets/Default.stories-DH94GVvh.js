import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-D0aLOs1r.js";import{R as x}from"./index-CgfFrydU.js";import{B as h}from"./Button-St2U3cmh.js";import{u as P}from"./DialogTriggerView-XlSWauwy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9e9kKsf.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./Dialog-CDyjGb2K.js";import"./Button-3GcZ2y2i.js";import"./utils-Bm37ngJk.js";import"./ProgressBar-lRSo0OUL.js";import"./Label-B_sU3NXB.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ8zpiVY.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CC9yd5Fh.js";import"./useFocus-C3ExUvEL.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocusable-CzgSXE3t.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CyRBwams.js";import"./useControlledState-YIijONQK.js";import"./Collection-43aF_0U7.js";import"./CollectionBuilder--ipx_qrV.js";import"./Separator-By-KuC_f.js";import"./Text-I7rzu-gq.js";import"./SelectionManager-W-F9tXjW.js";import"./useEvent-Dw3zA1wO.js";import"./useCollator-rVor1fd8.js";import"./FocusScope--xlp8sQI.js";import"./VisuallyHidden-C4REVXC4.js";import"./IconWarning-CuaYDKOA.js";import"./Text-BsonjX7Q.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-C2aL1KTo.js";import"./context-lMIlJEpi.js";import"./useStatic-DyeYbbC-.js";const ur={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const dr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,dr as __namedExportsOrder,ur as default};

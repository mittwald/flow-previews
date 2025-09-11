import{j as r,R}from"./iframe-BsMxae-o.js";import{P as i,a as x}from"./Popover-IbF6moTA.js";import{B as h}from"./Button-DfdH0gMv.js";import{u as P}from"./DialogTriggerView-B1KD3q3O.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./Dialog-otIdMc29.js";import"./Button-Cr74-zWI.js";import"./utils-BMVQSkne.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvYe3LSr.js";import"./context-DrnfoIRz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrYqgVGE.js";import"./useFocus-HKqTfwLq.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocusable-DYhRFaOI.js";import"./RSPContexts-Bo0-inYM.js";import"./OverlayArrow-CRlBDhHx.js";import"./useControlledState-CcMFCsVI.js";import"./Collection-BsdihtfM.js";import"./CollectionBuilder--Y6752fw.js";import"./Separator-BgSjOnqA.js";import"./Text-B7BhLbkb.js";import"./Group-CKe7hi61.js";import"./SearchField-C1j-ZqX1.js";import"./FieldError-BMEYjrX6.js";import"./Form-D5ALWCUg.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./TextField-BomFOzDr.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./useCollator-BG1bVIzj.js";import"./FocusScope-CZ17A4u_.js";import"./VisuallyHidden-D9PR17i6.js";import"./IconWarning-B9I94qHq.js";import"./Text-B7cMlOzY.js";import"./browser-BOk4ZIfK.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./LoadingSpinner-B-hN89-2.js";import"./context-BQl0W7wd.js";import"./useStatic-NxgnZ87E.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

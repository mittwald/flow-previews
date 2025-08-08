import{j as r,R}from"./iframe-BTcUxdaq.js";import{P as i,a as x}from"./Popover-cq_CoGS1.js";import{B as h}from"./Button-SMMW9b8C.js";import{u as P}from"./DialogTriggerView-vV1bA8CD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./Dialog-Cp_7H9MS.js";import"./Button-R5yzYc06.js";import"./utils-QQf7G53U.js";import"./ProgressBar-DujcM5UT.js";import"./Label-N2lNAPH4.js";import"./Hidden-C0wGKKFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-COrOgVB9.js";import"./context-DPBkKLSs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CFIgJOpO.js";import"./useFocus-BGyfOFlp.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocusable-BavwL0Gh.js";import"./RSPContexts-BdDzjtbv.js";import"./OverlayArrow-BOe63Seg.js";import"./useControlledState-UFVvdmji.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./Text-DQ5f9mUM.js";import"./Group-Bij86ZzX.js";import"./SearchField-BjsA91o0.js";import"./FieldError-CZwoNVbm.js";import"./Form-BWd8hqS-.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./TextField-BAMKAOQn.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./useCollator-BEdiRQuO.js";import"./FocusScope-_yP39RaH.js";import"./VisuallyHidden-17OXXq4D.js";import"./IconWarning-DQhgAuti.js";import"./Text-Cyud7aU0.js";import"./browser-B8OJoPhG.js";import"./EmulatedBoldText-CDVaFR1M.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./context-BOTu0wPK.js";import"./useStatic-D47W8BT_.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

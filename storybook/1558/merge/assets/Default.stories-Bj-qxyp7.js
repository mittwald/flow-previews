import{j as r,R}from"./iframe-oDnSRKrU.js";import{P as i,a as x}from"./Popover-BAr3bKt4.js";import{B as h}from"./Button-Cfj_belE.js";import{u as P}from"./DialogTriggerView-Ce3L8qPr.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./useFocus-CBAj8SSC.js";import"./ProgressBar-BuCs3ZnW.js";import"./utils-BOFgiu6B.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IKTU3VFM.js";import"./context-BACVj_LI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C4SjqBt9.js";import"./IconWarning-BDchKd2I.js";import"./Text-BRg3dDEW.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Text-BhCBXCIE.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./Button-D46_pkFx.js";import"./usePress-BlfeWo8-.js";import"./useFocusRing-BvVC0KGc.js";import"./useFocusable-BIMsrSRy.js";import"./context-BfF8CEMr.js";import"./useStatic-B5fiOOMU.js";import"./RSPContexts-wR3TIPq6.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./CollectionBuilder-BqrWk4D3.js";import"./context-D1pfjzoG.js";import"./Separator-DoYImFmL.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ur=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,ur as __namedExportsOrder,lr as default};

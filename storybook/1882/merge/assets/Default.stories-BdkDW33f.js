import{j as r,R}from"./iframe-ANbYZxYh.js";import{P as i,a as x}from"./Popover-DMYIjMJ2.js";import{B as h}from"./Button-BrOgS8k0.js";import{u as P}from"./DialogTriggerView--0vIXGZw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./Dialog-DAXXYblm.js";import"./Button-pW7XEr-A.js";import"./utils-Cy_MvyB4.js";import"./ProgressBar-D0pevNPv.js";import"./Label-DHVn08UY.js";import"./Hidden-CKPTgp3M.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BSgApQcW.js";import"./context-C29UMt2a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-YyV1OQc2.js";import"./useFocus-TkuOvp2H.js";import"./useFocusRing-CdWhuOPm.js";import"./useFocusable-Do5j3Niz.js";import"./RSPContexts-BF3izYoh.js";import"./OverlayArrow-DdhXoA2p.js";import"./useControlledState-qP1KlDsL.js";import"./Collection-CGyTBmm7.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Separator-C5R7VkmP.js";import"./Text-DtPhrSvp.js";import"./Group-BbZVKWqc.js";import"./SearchField-CA0soI3_.js";import"./FieldError-8FwQObi_.js";import"./Form-BzuKHEmj.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./TextField-Cq94faz6.js";import"./useEvent-C-0WgXZh.js";import"./SelectionManager-CqcRxmrm.js";import"./useCollator-CfSYVQsJ.js";import"./FocusScope-DrloOZeI.js";import"./VisuallyHidden-Dkqu2xa7.js";import"./IconWarning-DS7IkYNL.js";import"./Text-M71Ue6Ol.js";import"./browser-DiQDtMf4.js";import"./EmulatedBoldText-D7XMT75r.js";import"./LoadingSpinner-BalYmqav.js";import"./context-XBkMChDn.js";import"./useStatic-C8P39Z3X.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

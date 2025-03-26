import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-C7hXwPPn.js";import{R as x}from"./index-CXcpQZ5J.js";import{B as h}from"./Button-DoxNqpU5.js";import{u as P}from"./OverlayTrigger-Dv9azQvo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-gOfyQuAV.js";import"./Dialog-D9rW5YgD.js";import"./Button-BcgzNVYq.js";import"./utils-D_n-6U4k.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./Text-BUuVncJZ.js";import"./useOverlayTriggerState-EP699KjE.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./Wrap-DQq6jo70.js";import"./Text-Dr5MNJ9m.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./LoadingSpinner-C8RokD4H.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

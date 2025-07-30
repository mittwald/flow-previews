import{j as r,R}from"./iframe-DJR6bG_N.js";import{P as i,a as x}from"./Popover-DLNqBLfZ.js";import{B as h}from"./Button-BcHxSHOm.js";import{u as P}from"./DialogTriggerView-DkospgpI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BL9cdq29.js";import"./mergeRefs-Hpx63azc.js";import"./index-C22qm2g8.js";import"./Dialog-B2WyxH4W.js";import"./Button-C47dkwdH.js";import"./utils-DRP6LXVD.js";import"./ProgressBar-B9rixrKR.js";import"./Label-sZvCZMuk.js";import"./Hidden-BHSOAXCo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DhfP4m7A.js";import"./context-DgBdWYay.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnK8r-az.js";import"./useFocus-BcpzqQNe.js";import"./useFocusRing-CfOOnzfL.js";import"./useFocusable-BEA6ccjd.js";import"./RSPContexts-DiuHitS7.js";import"./OverlayArrow-Dty9UTNu.js";import"./useControlledState-CYpB0MkV.js";import"./Collection-Bn5uLIdX.js";import"./CollectionBuilder-Kei65M9q.js";import"./Separator-43LoEa0E.js";import"./Text-BqN-_O45.js";import"./Group-CE0iASVZ.js";import"./SearchField-CR0mUJzd.js";import"./FieldError-Cb0gzYqD.js";import"./Form-BkELhqZm.js";import"./useLocalizedStringFormatter-DqMJYvZV.js";import"./useTextField-CXWfURMQ.js";import"./useFormReset-DJO_Tyel.js";import"./TextField-CZNDqobz.js";import"./useEvent-SSoNVoxa.js";import"./SelectionManager-DV-un0OH.js";import"./useCollator-CQl6CZ5b.js";import"./FocusScope-nXLL4j6O.js";import"./VisuallyHidden-Capsm3hZ.js";import"./IconWarning-TBIhG4gU.js";import"./Text-CxYW3yHX.js";import"./browser-B_AF4VAW.js";import"./EmulatedBoldText-DOjRM7Xy.js";import"./LoadingSpinner-BP8XYJb-.js";import"./context-tBw8Lqjb.js";import"./useStatic-CIf-dq2E.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

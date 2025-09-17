import{j as r,R}from"./iframe-BXWHolr7.js";import{P as i,a as x}from"./Popover-DMHeBmQY.js";import{B as h}from"./Button-CnhqfASw.js";import{u as P}from"./DialogTriggerView-ULagL9pU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./Dialog-C_udrGIm.js";import"./Button-YX5RGg2w.js";import"./utils-B2TamtWx.js";import"./ProgressBar-CBzNVdsU.js";import"./Label-BCj8S481.js";import"./Hidden-BM-MvoWz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CPYM8v3M.js";import"./context-Dja7lVng.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C1TcPoWb.js";import"./useFocus-BHj76f0r.js";import"./useFocusRing-C9RrD32J.js";import"./useFocusable-CA3YRohc.js";import"./RSPContexts-804iL0FW.js";import"./OverlayArrow-ttgUUjRL.js";import"./useControlledState-Dr1QSdOx.js";import"./Collection-C0Q6vASR.js";import"./CollectionBuilder-d4B1PmIH.js";import"./Separator-1cY_KjOn.js";import"./Text-CshnnIVL.js";import"./Group-DKRCTPap.js";import"./SearchField-CrZc0iss.js";import"./FieldError-kOzNSTVH.js";import"./Form-C40WvtQf.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./useTextField-CHuCSPiE.js";import"./useFormReset-D3PYmlJ_.js";import"./TextField-vF4BsGOY.js";import"./useEvent-DVY60GN0.js";import"./SelectionManager-C8B9SdRc.js";import"./useCollator-DktWPlR1.js";import"./FocusScope-Bq5J7cyD.js";import"./VisuallyHidden-BHe7S0lR.js";import"./IconWarning-C9wAMmE4.js";import"./Text-cublDBL7.js";import"./browser-tTf4FW93.js";import"./EmulatedBoldText-C4nbdyGF.js";import"./LoadingSpinner-CMZ7XUGA.js";import"./context-Cnp30bgj.js";import"./useStatic-C8CrPjkp.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

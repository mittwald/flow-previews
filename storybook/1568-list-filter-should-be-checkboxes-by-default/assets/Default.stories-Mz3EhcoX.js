import{j as r,R}from"./iframe-CMpsVwOM.js";import{P as i,a as x}from"./Popover-ChWuErEI.js";import{B as h}from"./Button-B762HPeD.js";import{u as P}from"./DialogTriggerView-zPfOYurT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BMeS3O6n.js";import"./mergeRefs-C92X0W_p.js";import"./index-CZ3QCY_v.js";import"./Dialog-4INrBZTO.js";import"./Button-CNx4aTn8.js";import"./utils-pWRi9foc.js";import"./ProgressBar-DR_zEB_o.js";import"./Label-CYx7L7HM.js";import"./Hidden-Cyo3M4hZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BA3FU80w.js";import"./context-EPQ013pJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dcm4Z-gf.js";import"./useFocus-C9MMrMar.js";import"./useFocusRing-DqD2BiAa.js";import"./useFocusable-FYb42PWO.js";import"./RSPContexts-DHCERfty.js";import"./OverlayArrow-CMVfGmQe.js";import"./useControlledState-BNxfrGT2.js";import"./Collection-C_dbbgqH.js";import"./CollectionBuilder-Cc21ue3R.js";import"./Separator-ySPE90Jb.js";import"./Text-CCkfOTTF.js";import"./Group-BmHKM3mz.js";import"./SearchField-yY4hDHGI.js";import"./FieldError-Dnex0fXb.js";import"./Form-BGZ-9vu8.js";import"./useLocalizedStringFormatter-BlPP9i8C.js";import"./useTextField-CVfCDHOY.js";import"./useFormReset-CrSG7MNm.js";import"./TextField-Cwtkj9As.js";import"./useEvent-CBtEWer2.js";import"./SelectionManager-Bwjhvkb_.js";import"./useCollator-CBSgX5OE.js";import"./FocusScope-HNBnbjNF.js";import"./VisuallyHidden-Ctc-ZpYI.js";import"./IconWarning-D8u_mAP3.js";import"./Text-BimBNWGT.js";import"./browser-B-2It7Rx.js";import"./EmulatedBoldText-M-EPRI7w.js";import"./LoadingSpinner-C0J7J3GJ.js";import"./context-BB_uKWDa.js";import"./useStatic-BFocWmVI.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

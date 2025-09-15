import{j as r,R}from"./iframe-BEG7G6KF.js";import{P as i,a as x}from"./Popover-Be_7n19e.js";import{B as h}from"./Button-C8pjFnNt.js";import{u as P}from"./DialogTriggerView-QPowEEXn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./Dialog-B1wekzMl.js";import"./Button-DTQhGa04.js";import"./utils-LUgpLpbe.js";import"./ProgressBar-ZHT95b40.js";import"./Label-14uT22y-.js";import"./Hidden-CoHG5x6F.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bw-P6Vd2.js";import"./context-PcVqvq8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CNi18aVS.js";import"./useFocus-C-WlMmOQ.js";import"./useFocusRing-COhl_nbF.js";import"./useFocusable-CiBlyEkt.js";import"./RSPContexts-BS1UUkSC.js";import"./OverlayArrow-DQ1DVDYI.js";import"./useControlledState-D4nWDDQs.js";import"./Collection-Q6_7RVnG.js";import"./CollectionBuilder-BfQ_bfa9.js";import"./Separator-CEaf2o7P.js";import"./Text-CjtFlosk.js";import"./Group-Bu8ViuOf.js";import"./SearchField-DCAIqxcw.js";import"./FieldError-Ce2Todsu.js";import"./Form-CRnDK1No.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./useTextField-DYB1JFCS.js";import"./useFormReset-D7bUq-wz.js";import"./TextField-BtimxscU.js";import"./useEvent-CaCnB0bX.js";import"./SelectionManager-CXVNswVM.js";import"./useCollator-CTD1PftI.js";import"./FocusScope-CVsbtSBN.js";import"./VisuallyHidden-DBx6majZ.js";import"./IconWarning-a2LhFy5L.js";import"./Text-CsmURpVi.js";import"./browser-hhGcWijl.js";import"./EmulatedBoldText-BEr1TBhP.js";import"./LoadingSpinner-SGV_yUHE.js";import"./context-C9GFjuXq.js";import"./useStatic-HcSwkvD9.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

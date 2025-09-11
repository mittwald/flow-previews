import{j as r,R}from"./iframe-DvGStSYQ.js";import{P as i,a as x}from"./Popover-CSEwrymH.js";import{B as h}from"./Button-DjKTL3-y.js";import{u as P}from"./DialogTriggerView-BbgRv1Oa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./Dialog-CYVeUmsI.js";import"./Button-BSYAfZ7k.js";import"./utils-BfKSOXmh.js";import"./ProgressBar-BElErXd2.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-pezwcoCn.js";import"./context-AtsIIwtl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-i0ws38c9.js";import"./useFocus-Dk72H1bO.js";import"./useFocusRing-ldGrbWty.js";import"./useFocusable-51csEq1k.js";import"./RSPContexts-Dwdml_ht.js";import"./OverlayArrow-Cm-qLoTT.js";import"./useControlledState-BCrcM4bM.js";import"./Collection-C-BG6Vrm.js";import"./CollectionBuilder-DHXYJDan.js";import"./Separator-dZEiMybe.js";import"./Text-C8nQapVu.js";import"./Group-BlAVBLoF.js";import"./SearchField-BP1Cyyuc.js";import"./FieldError-Cv8C3-Ec.js";import"./Form-BeVzvFPG.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./useTextField-Su4XsVqq.js";import"./useFormReset-CpcIO9Ob.js";import"./TextField-DaGxzBCI.js";import"./useEvent-P2zKSTCT.js";import"./SelectionManager-CRcC2iB_.js";import"./useCollator-CtQygjZr.js";import"./FocusScope-Dv52udGl.js";import"./VisuallyHidden-BQiIpSgJ.js";import"./IconWarning-PCMncW0h.js";import"./Text-aqY_knFC.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./LoadingSpinner-KPhGKvxN.js";import"./context-Cq3VHa6C.js";import"./useStatic-DiIM3txy.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

import{j as r,R}from"./iframe-CbwCPhjt.js";import{P as i,a as x}from"./Popover-BGNe2BOX.js";import{B as h}from"./Button-nOGOhIJH.js";import{u as P}from"./DialogTriggerView-UbA78170.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./Dialog-BLGTqvvx.js";import"./Button-DQX_QvYf.js";import"./utils-DoFRGSuI.js";import"./ProgressBar-Boef7pj0.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZwWLEEp.js";import"./context-DGTw6Ntc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B0jvTCtV.js";import"./useFocus-BeWrqrnh.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./RSPContexts-CJnpvChB.js";import"./OverlayArrow-CBC8qT36.js";import"./useControlledState-vYcp2K1J.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./Text-Bo_2a3q0.js";import"./Group-DlZG06gX.js";import"./SearchField-WLounB_6.js";import"./FieldError-WwADG8x9.js";import"./Form-8EM0qQv2.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./TextField-5B8lnaMV.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./useCollator-CAu6FifQ.js";import"./FocusScope-CmGH9Vi6.js";import"./VisuallyHidden-DvTk0uSk.js";import"./IconWarning-B6sLHyS3.js";import"./Text-Ci_Uq_zV.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./context-zAWxkEGj.js";import"./useStatic-CNtjMAIH.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

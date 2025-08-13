import{j as r,R}from"./iframe-BsKdyUUo.js";import{P as i,a as x}from"./Popover-DxBNWdCE.js";import{B as h}from"./Button-QyPw2-70.js";import{u as P}from"./DialogTriggerView-u1JI-dwi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./Dialog-CR91adc_.js";import"./Button-DLwd4SNh.js";import"./utils-DeHCGthq.js";import"./ProgressBar-C4DAHdKI.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BowSekYU.js";import"./context-NhbPwiu7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./useFocus-BvYTyo5a.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./RSPContexts-DxWJbArM.js";import"./OverlayArrow-CO3Q51Tz.js";import"./useControlledState-BMR5C57X.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./Text-BeFIQxaH.js";import"./Group-Dk0IJ4vM.js";import"./SearchField-DHm90Ej9.js";import"./FieldError-CHLtNaA2.js";import"./Form-DEii-ghQ.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./useTextField-BDfBPM-X.js";import"./useFormReset-BCcZ866S.js";import"./TextField-DVuykaoA.js";import"./useEvent-Bb929JbC.js";import"./SelectionManager-bkmIMDCG.js";import"./useCollator-vsGgvR80.js";import"./FocusScope-r24VL_U3.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./IconWarning-BNNa1TWi.js";import"./Text-DM7V5ibr.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";import"./LoadingSpinner-pItv9nzE.js";import"./context-LgmDjMSt.js";import"./useStatic-BdSd4Y0O.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

import{r as F,j as r}from"./iframe-BJFPIndf.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./FormRootError-Dqv401TK.js";import{L as o}from"./Label-CVJICKuL.js";import{B as c}from"./Button-CMLIz8EV.js";import{S as g}from"./Section-C6f0l2Xs.js";import{A as b}from"./ActionGroup-DdfrGWlw.js";import{s as u}from"./ActionBatch-91iU7Ul_.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-D-NMDpKV.js";import{F as S}from"./FieldError-CerVitTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ds5yn-UC.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./ActionGroupView-Dw8RZYa_.js";import"./Content-Dz9K6tbl.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./RSPContexts-BXfCPyGV.js";import"./utils-WT8FFEB4.js";import"./Text-CGF68X8s.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./Modal-BGgt1ria.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./Overlay-BWkVMZMt.js";import"./OverlayContextProvider-BuTLd76h.js";import"./LoadingSpinner-mc2sXUEG.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./ButtonView-BZflCgnt.js";import"./Flex-7kPLhUeS.js";import"./useRef-BdfxdyUk.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BXIYeg2w.js";import"./getActionGroupSlot-ggari8la.js";import"./useFieldComponent-gU-XMME4.js";import"./useControlledHostValueProps-D9H6S5M8.js";import"./FieldDescription-D_PxiSL1.js";import"./TextField-C4VgOiC3.js";import"./FieldError-Coj9-PqS.js";import"./Form-x5xxOUHd.js";import"./Group-Cnjfsww6.js";import"./Input-BWdvoxfF.js";import"./useTextField-D6MsdQlq.js";import"./useFormReset-CwfjSagb.js";import"./useFormValidation-BhmC515N.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Xr as __namedExportsOrder,Qr as default};

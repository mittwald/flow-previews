import{r as F,j as r}from"./iframe-B2CTi6cm.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-DfhEXo1u.js";import{L as o}from"./Label-DccH0oyj.js";import{B as c}from"./Button-_yLWek3e.js";import{S as g}from"./Section-Cp9Lc84Y.js";import{A as b}from"./ActionGroup-DUcqnoyz.js";import{s as u}from"./ActionBatch-BYvDqB3T.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CHEow88E.js";import{F as S}from"./FieldError-Cpb_w0Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQSnLDrl.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./ActionGroupView-CqxJNoqF.js";import"./Content-CXBi8j7T.js";import"./Heading-DlmM6Hn_.js";import"./Heading-C9cKQsqE.js";import"./RSPContexts-BnlNRtVT.js";import"./utils-CFhs-kxq.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./Modal-CkPrUDri.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./Overlay-BCcgEorp.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./LoadingSpinner-DnfUZyUE.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Dialog-D2pl7IFn.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";import"./ButtonView-vAiOEZiU.js";import"./Flex-B3V1yHmd.js";import"./useRef-vkhYMc-H.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DUei6bL0.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./useFieldComponent-DO-gEAYc.js";import"./useControlledHostValueProps-ClUMTGdq.js";import"./FieldDescription-Cp3TAr2a.js";import"./TextField-DfcZqbUi.js";import"./FieldError-Cj-zQd3o.js";import"./Form-Cx6Bm7Pi.js";import"./Group-Dv7pzL4P.js";import"./Input-KDCOY3Ar.js";import"./useTextField-BalQ2GqF.js";import"./useFormReset-BMX0RNLQ.js";import"./useFormValidation-BDHhHN4L.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

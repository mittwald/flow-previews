import{r as F,j as r}from"./iframe-ByHSJ7Zj.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-BIryrxd9.js";import{L as o}from"./Label-tcy2V_mA.js";import{B as c}from"./Button-DRqw54Mf.js";import{S as g}from"./Section-MBeJOyG5.js";import{A as b}from"./ActionGroup-gRZ2yxB4.js";import{s as u}from"./ActionBatch-DAYGGFfY.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-nOay8X8S.js";import{F as S}from"./FieldError-C1ELgHYl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8-Mz4LM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./ActionGroupView-WZNbE7iy.js";import"./Content-CmPZ5biX.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./utils-AuVRPQNE.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./Modal-CSnqDHAV.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./Overlay-BXECwhfH.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Dialog-Bv6y7U-F.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-53w3WrUq.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocusable-CTHcGGNa.js";import"./OverlayArrow-y5FFWgxm.js";import"./useControlledState-CZXI0X0f.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./useRef-C1sK2iwB.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DKVD58cw.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./useFieldComponent-CBB8cMnJ.js";import"./useControlledHostValueProps-BcSvQjHa.js";import"./FieldDescription-BGXfCMai.js";import"./TextField-B3HDf383.js";import"./FieldError-N78nigrI.js";import"./Form-B6nfDOYR.js";import"./Group-D2DTtkcC.js";import"./Input-Cjg2Ef7t.js";import"./useTextField-1pYdfEhT.js";import"./useFormReset-BeZmi33v.js";import"./useFormValidation-BGcU6QC0.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

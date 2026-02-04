import{j as e,r as E}from"./iframe-RCf6-4YI.js";import{A as j}from"./ActionGroup-MIHI0hnG.js";import{B as f}from"./Button-CRZ6FKVD.js";import{L as t}from"./Label-BRnkJYm7.js";import{S as b}from"./Section-Bw7Tk3Pz.js";import{T as n}from"./TextField-CWcd4UkL.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-DEh7vI15.js";import{s as F}from"./Action-3k_Z5Vty.js";import{F as B}from"./FieldError-KQe80RuS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYjVHqFc.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./clsx-B-dksMZM.js";import"./index-BOW2unrE.js";import"./getActionGroupSlot-D-mME3-D.js";import"./useStatic-CutofGFR.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./Text-HaNR6yqL.js";import"./browser-CrfZ_U78.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./utils-2Kt3K5yX.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--XVd0Ch5.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocusable-CGRcLUlH.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BKm1CmgZ.js";import"./Dialog-DSQ8RGJ5.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";import"./TextFieldBase-TygCww5R.js";import"./FieldDescription-BvKq_AxB.js";import"./useFieldComponent-C9VOsv8D.js";import"./TextField-hSyP7KVC.js";import"./FieldError-C_jxYX-6.js";import"./Form-DuREI75N.js";import"./Group-CFlsgvT_.js";import"./Input-7NMAjvPw.js";import"./useTextField-BprYoYqM.js";import"./useFormReset-CpZDZfD6.js";import"./useFormValidation-WgNojhOC.js";import"./useControlledHostValueProps-B5mIbE0-.js";import"./useRef-CTBQaoXs.js";import"./useOverlayController-CujP3Hug.js";import"./context-CPkaXk0v.js";import"./ButtonView-Bsuml8lR.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const ke=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ke as __namedExportsOrder,Ge as default};

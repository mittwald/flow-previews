import{j as e,r as E}from"./iframe-DALg75d7.js";import{A as j}from"./ActionGroup-uPexo89O.js";import{B as f}from"./Button-CxCFU3Sm.js";import{L as t}from"./Label-CllN_pGF.js";import{S as b}from"./Section--EZ_JCJz.js";import{T as n}from"./TextField-CM_LrQhk.js";import{b as p,u,F as c,t as S}from"./Form-BBd4GmKs.js";import{R as h,S as x}from"./ResetButton-BqGFti5i.js";import{s as F}from"./Action-B-LX0Gdh.js";import{F as B}from"./FieldError-JMY6vjHT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DnyVnPzZ.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./useStatic-C_Axqqwt.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./Text-BfSm9wB3.js";import"./browser-BOjJAEEq.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./utils-CCMGMBS3.js";import"./LoadingSpinner-DKmXkdSk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./context-D-SwIuvT.js";import"./Button-CAn5W5h2.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-nagFkt4I.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./TextFieldBase-DgSROcfW.js";import"./FieldDescription-CPnssZ8z.js";import"./useFieldComponent-BaBZIB3g.js";import"./TextField-aWZOiaVk.js";import"./FieldError-B5AAUQ1i.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useTextField-B5pPfAtE.js";import"./useFormReset-D3blZuYj.js";import"./useFormValidation-jiwCVXG0.js";import"./useControlledHostValueProps-Ce6KWhnZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Cb6IcnGU.js";import"./context-VL9rXB3T.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ue as __namedExportsOrder,Ie as default};

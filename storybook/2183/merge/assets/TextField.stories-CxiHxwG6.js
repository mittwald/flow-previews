import{j as e,r as E}from"./iframe-BzW-9mMD.js";import{A as j}from"./ActionGroup-DtgroWHO.js";import{B as F}from"./Button-kdt8pR0M.js";import{L as t}from"./Label-BuckRFL6.js";import{S as b}from"./Section-CEIUQkyy.js";import{T as o}from"./TextField-1_bzVPz_.js";import{F as p,t as S}from"./Field-DBa6Uppk.js";import{s as h}from"./Action-B9rUenjA.js";import{u,F as c}from"./Form-xEKyLAtK.js";import{F as B}from"./FieldError-CEOf2ovw.js";import{R as x}from"./ResetButton-D6wtVwDI.js";import{S as f}from"./SubmitButton-CJq3gcLg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C266PTaS.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./clsx-B-dksMZM.js";import"./index-DBI39Uex.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./useStatic-CTmF8sLz.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./Text-V56jcQh9.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./Text-lCB5Bcpt.js";import"./utils-BrWwMsiw.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DvCS3UY5.js";import"./lib-90ocxLs-.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./TextFieldBase-BnUms5IN.js";import"./FieldDescription-DOg-G1iQ.js";import"./useFieldComponent-CbusyouS.js";import"./TextField-CzlELa-i.js";import"./FieldError-YIyLtRkF.js";import"./Form-DVsU3UIy.js";import"./Group-DlZIxVzc.js";import"./Input-DnvETqzY.js";import"./useTextField-DejpfAEP.js";import"./useFormReset-DSNp4f3d.js";import"./useFormValidation-CVoSAArr.js";import"./useControlledHostValueProps-Drs0uCj9.js";import"./context-CzkXJT4I.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-BcSmAgIr.js";import"./useRef-D0yR5Dxm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const n=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};

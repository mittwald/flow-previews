import{j as e,r as E}from"./iframe-pec-daIN.js";import{A as j}from"./ActionGroup-Cw8xMur0.js";import{B as f}from"./Button-TbsWowXg.js";import{L as t}from"./Label-CElVOifK.js";import{S as b}from"./Section-DDPMHRBL.js";import{T as n}from"./TextField-DrktUyUR.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-BHrI3BIr.js";import{s as F}from"./Action-8dbKhHvU.js";import{F as B}from"./FieldError-r6Iz548x.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYdmGlVp.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./useStatic-DtKIUYIw.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./Text-KadZ5_Og.js";import"./browser-CB013lxp.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./utils-DgvXfbTX.js";import"./LoadingSpinner-DJdNJN2d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXePSkUY.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DNSduqHu.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./TextFieldBase-Cbh6O4XS.js";import"./FieldDescription-C3yB_B9f.js";import"./useFieldComponent-BVaTpDhT.js";import"./TextField-DAVi84by.js";import"./FieldError-DRdVsyAa.js";import"./Form-D9urj6j4.js";import"./Group-DrdjXHuf.js";import"./Input-nceBJ8Dt.js";import"./useTextField-DMccosFc.js";import"./useFormReset-DlmAX50c.js";import"./useFormValidation-Cw4fPepy.js";import"./useControlledHostValueProps-DES1YIm6.js";import"./useRef-DUas6rLX.js";import"./ButtonView-DOrN6z8l.js";import"./context-CSF0VmIA.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};

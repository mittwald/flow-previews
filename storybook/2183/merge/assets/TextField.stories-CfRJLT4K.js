import{j as e,r as E}from"./iframe-VGYf9uSR.js";import{A as j}from"./ActionGroup-BlzYnYWF.js";import{B as F}from"./Button-C33JxfbF.js";import{L as t}from"./Label--ix077tG.js";import{S as b}from"./Section-DooU3tnD.js";import{T as n}from"./TextField-CGceQJXr.js";import{F as p,t as S}from"./Field-FVf6FHyZ.js";import{s as h}from"./Action-BU572vpz.js";import{u,F as c}from"./Form-CqpM73eC.js";import{F as B}from"./FieldError-CLzXjLUN.js";import{R as x}from"./ResetButton-CH8u8jqD.js";import{S as f}from"./SubmitButton-Q6E9h_vz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsOFxWd.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./useStatic-DRLyxIeE.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./Text-CGbJaU4z.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./Label.module-lamhxTiw.js";import"./ContextMenuSection-BlQWtT47.js";import"./lib-90ocxLs-.js";import"./context-DPoGZDoo.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./TextFieldBase-DI1J7N7f.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./Activity-CX_biUm5.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useFieldComponent-DiUYLu0s.js";import"./TextField-C4mpb9SM.js";import"./FieldError-AWx0XaHn.js";import"./Form-CEBTvUmY.js";import"./Group-DDpm-w1G.js";import"./Input-DAGTqZv7.js";import"./useTextField-3t2wWbTv.js";import"./useFormReset-D2LFGRel.js";import"./useFormValidation-DNcRsa8m.js";import"./useControlledHostValueProps-zg0QpAjj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-B5Kx1O1H.js";import"./useRef-CXvi-_o4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Pe={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const We=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,We as __namedExportsOrder,Pe as default};

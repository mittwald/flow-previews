import{r as E,j as e}from"./iframe-BRGIT6aC.js";import{A as j}from"./ActionGroup-DbWhQ292.js";import{B as f}from"./Button-CQ_f9ZVl.js";import{L as t}from"./Label-DYHgdjdj.js";import{S as b}from"./Section-DEfQkscU.js";import{T as n}from"./TextField-CaWcPbzO.js";import{a as p,u,F as c,R as h,S as x,t as S}from"./ResetButton-Q24A8VNC.js";import{s as F}from"./Action-BloO9QUi.js";import{F as B}from"./FieldError-BPfKA2u4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJEA9S0A.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./useStatic-3STTURCL.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./Text-RxDad6dn.js";import"./browser-BYxlW31W.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./utils-D-ssFu49.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGLZGzkl.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-a8sl_NQx.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./useControlledHostValueProps-BPfEHTeU.js";import"./useFieldComponent-CMRD4Pyo.js";import"./FieldDescription-BhKmM-2J.js";import"./TextField-C-kYnaGH.js";import"./FieldError-f7o5-LTX.js";import"./Form-97YOGsKi.js";import"./Group-COVCD_be.js";import"./Input-CEj_QPsV.js";import"./useTextField-BXyTAsaB.js";import"./useFormReset-CXZmek7W.js";import"./useFormValidation-D-IfNlYy.js";import"./useRef-BP6FbjN4.js";import"./ButtonView-Cu_PLq3T.js";import"./context-Dnnfbmmg.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

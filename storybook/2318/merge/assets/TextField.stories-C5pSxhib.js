import{r as E,j as e}from"./iframe-BuRyV86k.js";import{A as j}from"./ActionGroup-B0lwPl2x.js";import{B as f}from"./Button-CyndH9Xm.js";import{L as t}from"./Label-D5Mh9PbX.js";import{S as b}from"./Section-BWXoAIXO.js";import{T as n}from"./TextField-BU6Qa5BU.js";import{a as p,u,F as c,R as h,S as x,t as S}from"./ResetButton-1DNuWBXl.js";import{s as F}from"./Action-KY3p1CrK.js";import{F as B}from"./FieldError-CyZxViQf.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-clmxwr04.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./clsx-B-dksMZM.js";import"./index-DXDzX26U.js";import"./getActionGroupSlot-BzS6Espk.js";import"./useStatic-Bozflp-3.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./Text-DPwKDAaR.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./utils-DCjU3VYp.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B_1LlkAk.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Mj7n-SRG.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./useControlledHostValueProps-BxMuxOiL.js";import"./useFieldComponent-Duyh6ShH.js";import"./FieldDescription-DTtWzPY6.js";import"./TextField-DZvNX4Ri.js";import"./FieldError-BEkkBW9r.js";import"./Form-C4eLdnUU.js";import"./Group-Ct0D2Y45.js";import"./Input-BOqi5cwZ.js";import"./useTextField-CPw5IR_g.js";import"./useFormReset-BkHfz2ea.js";import"./useFormValidation-DZRdJrD7.js";import"./useRef-dnDUVyEs.js";import"./ButtonView-CxrixtJG.js";import"./context-BBsiVWSW.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

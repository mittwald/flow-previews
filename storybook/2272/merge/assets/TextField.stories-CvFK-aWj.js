import{j as e,r as E}from"./iframe-COrLnxQ5.js";import{A as j}from"./ActionGroup-BkAJhlM8.js";import{B as f}from"./Button-B5T-9t49.js";import{L as t}from"./Label-D_znJf4n.js";import{S as b}from"./Section-BHGdwW8g.js";import{T as n}from"./TextField-CL6fk9Rg.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-CkJNStvh.js";import{s as F}from"./Action-DL1crjzC.js";import{F as B}from"./FieldError-CF8bH68v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6q-iLiJj.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./clsx-B-dksMZM.js";import"./index-C_Qn4vD5.js";import"./getActionGroupSlot-CizQjHpL.js";import"./useStatic-CZwWlCB5.js";import"./IconWarning-CG-OJrgb.js";import"./remote-DmDOnO_p.js";import"./Text-xUIxpGpZ.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./utils-VsjjISTT.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./Button-XrgEKXm-.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYo5WNMt.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Beuid9XD.js";import"./Dialog-CXGseDzt.js";import"./RSPContexts-Ds5AG3kQ.js";import"./OverlayArrow-B9AznsvA.js";import"./useControlledState-B-eslxlj.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";import"./TextFieldBase-DUUoSO-b.js";import"./FieldDescription-BK-1FDkp.js";import"./useFieldComponent-CTuZy_pY.js";import"./TextField-CeJRoU-4.js";import"./FieldError-Ed5Dpq4f.js";import"./Form-nqQow0mS.js";import"./Group-Bxis-9K0.js";import"./Input-CS1DBvPY.js";import"./useTextField-CN826EJi.js";import"./useFormReset-CUYGlILL.js";import"./useFormValidation-Cve5G398.js";import"./useControlledHostValueProps-BXV19N0X.js";import"./useRef-r_rObu5f.js";import"./ButtonView-BaOHg3N5.js";import"./context-Dy8NilHt.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

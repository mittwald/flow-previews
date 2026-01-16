import{j as e,r as E}from"./iframe-CIXg2wml.js";import{A as j}from"./ActionGroup-D8b5vxgA.js";import{B as f}from"./Button-BNUMHVa-.js";import{L as t}from"./Label-qxc1gCGy.js";import{S as b}from"./Section-BHH0DwO5.js";import{T as n}from"./TextField-1g51VDI2.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-C1eP4EZB.js";import{s as F}from"./Action-BuQCX6jm.js";import{F as B}from"./FieldError-BH2vnwI0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DkFDoLPd.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./clsx-B-dksMZM.js";import"./index-CUACQQJf.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./useStatic-CosBs7oI.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./Text-ClE4EaJv.js";import"./browser-CYeJE0Iy.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./utils-E3QCR4Ei.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_LDf41x.js";import"./useFocus-Xgz2P1v-.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useControlledState-euBd3hty.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./TextFieldBase-OLNRDnvK.js";import"./FieldDescription-Ca0n3MzM.js";import"./useFieldComponent-D7V8J4vf.js";import"./TextField-CAQY9kvO.js";import"./FieldError-B2EiL9vq.js";import"./Form-AGjJK_iq.js";import"./Group-BARt7F5J.js";import"./Input-DGQ1K2ts.js";import"./useTextField-CGoqsooy.js";import"./useFormReset-BWhLZN3-.js";import"./useFormValidation-B5rYBS3I.js";import"./useControlledHostValueProps-DNw2Nj9Y.js";import"./useRef-BLTU0nYb.js";import"./ButtonView-BpZiG3F4.js";import"./context-CXkwD4h5.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

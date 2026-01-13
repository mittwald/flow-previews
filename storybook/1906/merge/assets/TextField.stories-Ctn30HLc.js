import{j as e,r as E}from"./iframe-Cwcli8hM.js";import{A as j}from"./ActionGroup-CmTRqzAJ.js";import{B as f}from"./Button-I78ZffkB.js";import{L as t}from"./Label-CdIP0Akw.js";import{S as b}from"./Section-DEX4-fyD.js";import{T as n}from"./TextField-BwCJiiXt.js";import{b as p,u,F as c,t as S}from"./Form-BjeSNwhI.js";import{R as h,S as x}from"./ResetButton-ByzjRyrZ.js";import{s as F}from"./Action-BmzkYOqA.js";import{F as B}from"./FieldError-C_uRtYKD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-kiJ_5GPX.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./getActionGroupSlot-DirYDTjy.js";import"./useStatic-DFI4OZ-s.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Text-D-waKGHU.js";import"./browser-Dim89v3O.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./utils-C3qjWKVL.js";import"./LoadingSpinner-KOoU2K2x.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BAImieHE.js";import"./Dialog-q_50MZOU.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./VisuallyHidden-BpjAuZe7.js";import"./TextFieldBase-B5TrCQHW.js";import"./FieldDescription-Cjbk4mgT.js";import"./useFieldComponent-DIqLhVln.js";import"./TextField-CSzsaios.js";import"./FieldError-CJJNrBrn.js";import"./Form-BXllkstm.js";import"./Group-B4sml9Xm.js";import"./Input-BrN80aSI.js";import"./useTextField-By7tfDpK.js";import"./useFormReset-BDGa5C7A.js";import"./useFormValidation-BcDhKfF3.js";import"./useControlledHostValueProps-dmC9QLbU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DCEFieT1.js";import"./context-Cu13uzRC.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

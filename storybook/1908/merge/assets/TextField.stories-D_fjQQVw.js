import{j as e}from"./iframe-CbGYfYhl.js";import{A as j}from"./ActionGroup-DVTfyg3C.js";import{B as p}from"./Button-Gcjkh2he.js";import{L as o}from"./Label-ChSLebPR.js";import{S as f}from"./Section-BbmZZsTL.js";import{T as n}from"./TextField-BL7xkzQ2.js";import{a as N,u as b,F,t as S}from"./Form-TtiWG0JA.js";import{s as O}from"./Action-QD7EalEG.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DTlXxCo0.js";import"./useStatic-CDZ8mZeU.js";import"./IconWarning-DbjMP3z5.js";import"./Text-OS1-aGym.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./Text-B56mlhY7.js";import"./utils-Bta_km8V.js";import"./LoadingSpinner-BIdUmOnp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./context-DrN7EfSG.js";import"./Button-dGVmYdyu.js";import"./ProgressBar-C2FOdX6j.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D6vayTQl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B6TDm-Ku.js";import"./useFocus-CgyMmhEU.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./ContextMenuSection-COmeM-5Q.js";import"./Dialog-DWI3Gb4X.js";import"./RSPContexts-CWauLjE1.js";import"./OverlayArrow-CAzhQBDT.js";import"./useControlledState-Ckf81dN5.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./Group-G140fFme.js";import"./SearchField-0rw3SXHS.js";import"./FieldError-CCN5oAXI.js";import"./Form-dHMqMIPi.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./TextField-DGs8gg6j.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./useCollator-B95zPweT.js";import"./FocusScope-CXp1mWOp.js";import"./VisuallyHidden-BDzAgjFk.js";import"./TextFieldBase-DWb3SUpl.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DIOhoIE9.js";import"./FieldDescription-D4tY6X_s.js";import"./ReactAriaControlledValueFix-B7ow68aT.js";import"./context-J2lB5nq9.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};

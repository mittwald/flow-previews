import{j as e}from"./iframe-CMpsVwOM.js";import{A as j}from"./ActionGroup-nxKAVe34.js";import{B as p}from"./Button-B762HPeD.js";import{L as o}from"./Label-kjk-IWzA.js";import{S as f}from"./Section-DVLAwJSl.js";import{T as n}from"./TextField-X2qFy2d9.js";import{a as N,u as b,F,t as S}from"./Form-D1uf8pOr.js";import{s as O}from"./Action-C-7Oy_wv.js";import"./PropsContextProvider-BMeS3O6n.js";import"./mergeRefs-C92X0W_p.js";import"./index-CZ3QCY_v.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CEeEGEjJ.js";import"./useStatic-BFocWmVI.js";import"./IconWarning-D8u_mAP3.js";import"./Text-BimBNWGT.js";import"./browser-B-2It7Rx.js";import"./EmulatedBoldText-M-EPRI7w.js";import"./Text-CCkfOTTF.js";import"./utils-pWRi9foc.js";import"./LoadingSpinner-C0J7J3GJ.js";import"./useLocalizedStringFormatter-BlPP9i8C.js";import"./context-EPQ013pJ.js";import"./Button-CNx4aTn8.js";import"./ProgressBar-DR_zEB_o.js";import"./Label-CYx7L7HM.js";import"./Hidden-Cyo3M4hZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BA3FU80w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dcm4Z-gf.js";import"./useFocus-C9MMrMar.js";import"./useFocusRing-DqD2BiAa.js";import"./useFocusable-FYb42PWO.js";import"./ContextMenuSection-DE_hzDAF.js";import"./Dialog-4INrBZTO.js";import"./RSPContexts-DHCERfty.js";import"./OverlayArrow-CMVfGmQe.js";import"./useControlledState-BNxfrGT2.js";import"./Collection-C_dbbgqH.js";import"./CollectionBuilder-Cc21ue3R.js";import"./Separator-ySPE90Jb.js";import"./Group-BmHKM3mz.js";import"./SearchField-yY4hDHGI.js";import"./FieldError-Dnex0fXb.js";import"./Form-BGZ-9vu8.js";import"./useTextField-CVfCDHOY.js";import"./useFormReset-CrSG7MNm.js";import"./TextField-Cwtkj9As.js";import"./useEvent-CBtEWer2.js";import"./SelectionManager-Bwjhvkb_.js";import"./useCollator-CBSgX5OE.js";import"./FocusScope-HNBnbjNF.js";import"./VisuallyHidden-Ctc-ZpYI.js";import"./TextFieldBase-1XLupNxU.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DenvXdCo.js";import"./FieldDescription-63c09u0s.js";import"./ReactAriaControlledValueFix-oklrrIu3.js";import"./context-BB_uKWDa.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

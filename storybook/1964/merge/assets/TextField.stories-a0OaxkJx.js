import{j as e}from"./iframe-CW4eA9k4.js";import{A as j}from"./ActionGroup-Y-QP267j.js";import{B as p}from"./Button-BjlFMLDb.js";import{L as o}from"./Label-BmbUI49G.js";import{S as f}from"./Section-DZ628zs3.js";import{T as n}from"./TextField-DAJXQQ7-.js";import{a as N,u as b,F,t as S}from"./Form-Bh3TNRhF.js";import{s as O}from"./Action-Bf9Z-Hza.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./useStatic-DUg3iw8_.js";import"./IconWarning-D1jj5TJf.js";import"./Text-Db3UCsEl.js";import"./browser-CS0dj8Dh.js";import"./EmulatedBoldText-Dbwzf73Y.js";import"./Text-CUI2zCQ5.js";import"./utils-LQZW6rX9.js";import"./LoadingSpinner-BE9DZA1q.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./context-DFsoEI_J.js";import"./Button-LSmOeJqu.js";import"./ProgressBar-CmNSRDCs.js";import"./Label-Bbcp5SCN.js";import"./Hidden-DmXjFFnH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsKDXT_H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Du8ADkCR.js";import"./useFocus-rpK25HP0.js";import"./useFocusRing-O7qNIesH.js";import"./useFocusable-UDevydpZ.js";import"./ContextMenuSection-9hjVwN3o.js";import"./Dialog-WgwS_B3t.js";import"./RSPContexts--2BkcUf2.js";import"./OverlayArrow-92dvWqKB.js";import"./useControlledState-Dx2k1uzE.js";import"./Collection-BBOAX0bv.js";import"./CollectionBuilder-COr3RMXa.js";import"./Separator-DG994JLx.js";import"./Group-dsIczUwA.js";import"./SearchField-uV4xHJex.js";import"./FieldError-DfDNH_Ov.js";import"./Form-Carw_-CN.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./TextField-B9ZB3AOz.js";import"./useEvent-g2bJgFQA.js";import"./SelectionManager-c5mN7BQ-.js";import"./useCollator-DeJ4YmOD.js";import"./FocusScope-DDrNwogJ.js";import"./VisuallyHidden-DAkOZO38.js";import"./TextFieldBase-YyeI2pd6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DDMeD0d0.js";import"./FieldDescription-DHRtWdZV.js";import"./ReactAriaControlledValueFix-BsA3nL3X.js";import"./context-D5N2lUOa.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

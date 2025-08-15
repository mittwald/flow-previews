import{j as e}from"./iframe-DRWwRHPb.js";import{A as j}from"./ActionGroup-BVmYSP6K.js";import{B as p}from"./Button-C17kQQYD.js";import{L as o}from"./Label-DMZs6_dS.js";import{S as f}from"./Section-D4sRx5-4.js";import{T as n}from"./TextField-rWg3HYM9.js";import{a as N,u as b,F,t as S}from"./Form-BZ4izQL_.js";import{s as O}from"./Action-Bq2hQ8Bh.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-C6b8pLJW.js";import"./useStatic-u3WHDxzv.js";import"./IconWarning-DhSonKOB.js";import"./Text-BIokAaTQ.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./Text-XTosNzcc.js";import"./utils-9ciE-ZWz.js";import"./LoadingSpinner-B_6uztW9.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./context-jL0Ioa3t.js";import"./Button-BJEoKlME.js";import"./ProgressBar-lrbeVblJ.js";import"./Label-DWKl8ZCI.js";import"./Hidden-CgY-Zzb9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C1sZK0NB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZFGRV58.js";import"./useFocus-Cklz1p5-.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocusable-CTYzjUzk.js";import"./ContextMenuSection-YVOsEwEr.js";import"./Dialog-ImkhFy9O.js";import"./RSPContexts-BIfyYgqP.js";import"./OverlayArrow-CjAgqYv2.js";import"./useControlledState-BmVuB4nj.js";import"./Collection-LSZw9Opa.js";import"./CollectionBuilder-DMMzaxy1.js";import"./Separator-Cq-Q8G1M.js";import"./Group-DyuuzcKr.js";import"./SearchField-9TpmVPLK.js";import"./FieldError-sbX835HY.js";import"./Form-C-fYDZS9.js";import"./useTextField-C4Pn4RsW.js";import"./useFormReset-XyyE6UJM.js";import"./TextField-BHCgELYj.js";import"./useEvent-D_icz2Dp.js";import"./SelectionManager-w9v-Ws39.js";import"./useCollator-CaT5c7qP.js";import"./FocusScope-hUGkKLjX.js";import"./VisuallyHidden-CJKgqKOh.js";import"./TextFieldBase-DD8VXus3.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BxgQBJxP.js";import"./FieldDescription-B8gji3F1.js";import"./ReactAriaControlledValueFix-v2LYO4nG.js";import"./context-GwQ3zI17.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

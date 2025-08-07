import{j as e}from"./iframe-C7QIGs8p.js";import{A as j}from"./ActionGroup-Bo98KuL-.js";import{B as p}from"./Button-BGr41c7E.js";import{L as o}from"./Label-Bc44wfjj.js";import{S as f}from"./Section-B3OxLutv.js";import{T as n}from"./TextField-DiM4dFCG.js";import{a as N,u as b,F,t as S}from"./Form-CYUunjPS.js";import{s as O}from"./Action-CyofG-Bf.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bx6JDBXT.js";import"./useStatic-BWe9m1of.js";import"./IconWarning-X_5SFXzD.js";import"./Text-CTrM2jC7.js";import"./browser-C2BAwQT3.js";import"./EmulatedBoldText-_WA-B4P4.js";import"./Text-FQKaNMRy.js";import"./utils-BtsnBH_L.js";import"./LoadingSpinner-Ce2BrOYf.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./context-C2AKAduY.js";import"./Button-B7-ATyHT.js";import"./ProgressBar-IpWCr7qx.js";import"./Label-BSYnHYDD.js";import"./Hidden-DWOQ1i8d.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D-QYQdwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bh987CF2.js";import"./useFocus-ypxUxEvE.js";import"./useFocusRing-DKwzelHt.js";import"./useFocusable-C2Z9oquv.js";import"./ContextMenuSection-IPvrjop8.js";import"./Dialog-J3EA-UkZ.js";import"./RSPContexts-vCu29erK.js";import"./OverlayArrow-ZcBTChKb.js";import"./useControlledState-KNtUQTSK.js";import"./Collection-Boesk9-D.js";import"./CollectionBuilder-DmHyKuX1.js";import"./Separator-l8xhzRbI.js";import"./Group-C1WKhAvj.js";import"./SearchField-D_-o_-wM.js";import"./FieldError-DNXr8e-i.js";import"./Form-BYQvXm3I.js";import"./useTextField-DceDZrVQ.js";import"./useFormReset-DrAuwzZe.js";import"./TextField-BQAs_udX.js";import"./useEvent-DpcPK9yZ.js";import"./SelectionManager-jQp60uSJ.js";import"./useCollator-AgXB0Oy1.js";import"./FocusScope-BUYOglmY.js";import"./VisuallyHidden-DORJbjtt.js";import"./TextFieldBase-BBN05aG_.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BirN45_p.js";import"./FieldDescription-Dzb0uNYE.js";import"./ReactAriaControlledValueFix-BeIThg3D.js";import"./context-BDfHuVBm.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

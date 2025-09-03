import{j as e}from"./iframe-Budb-7am.js";import{A as j}from"./ActionGroup-BXxBA1OB.js";import{B as p}from"./Button-DlmJA7gy.js";import{L as o}from"./Label-DzBJxL-G.js";import{S as f}from"./Section-DSsLRbzV.js";import{T as n}from"./TextField-DBWkPowt.js";import{a as N,u as b,F,t as S}from"./Form-DEfLTd7k.js";import{s as O}from"./Action-B12Ua1Cm.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-_4HxksMv.js";import"./useStatic-DaioOtN4.js";import"./IconWarning-DHwZhMPm.js";import"./Text-1Vh0OzT8.js";import"./browser-DtJAwUnv.js";import"./EmulatedBoldText-os5LgzLJ.js";import"./Text-3Ba5r2Ha.js";import"./utils-BvIm0V7l.js";import"./LoadingSpinner-akPoSbp3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./context-CJMSS7cd.js";import"./Button-DjLWq9Wn.js";import"./ProgressBar-CfQlEPzK.js";import"./Label-RM_Po7kI.js";import"./Hidden-ldu86gX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TSCdqSxt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loP-J0cx.js";import"./useFocus-Pkimm2oK.js";import"./useFocusRing-Dpjm87_-.js";import"./useFocusable-CC21Us72.js";import"./ContextMenuSection-Co3uaLKd.js";import"./Dialog-D1PODoJe.js";import"./RSPContexts-Tr5byqnH.js";import"./OverlayArrow-DviLC0jr.js";import"./useControlledState-SkoShBYt.js";import"./Collection-CvfcDEqP.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Separator-D8RFWE6v.js";import"./Group-DBRwONdh.js";import"./SearchField-CJT12BWN.js";import"./FieldError--Cn4xsFj.js";import"./Form-DC4Rz7ax.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./TextField-BONCp9nZ.js";import"./useEvent-Ced8YBYQ.js";import"./SelectionManager-CyTDI0bw.js";import"./useCollator-DG886A6G.js";import"./FocusScope-Bx0T309W.js";import"./VisuallyHidden-BhwKMH6u.js";import"./TextFieldBase-Dke5YmSV.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-YXSjvpRj.js";import"./FieldDescription-6ByGRMUQ.js";import"./ReactAriaControlledValueFix-BoadMls3.js";import"./context-BsbU81yG.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

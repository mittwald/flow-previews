import{j as e}from"./iframe-BXDMX86q.js";import{A as j}from"./ActionGroup-CsUWjkqz.js";import{B as p}from"./Button-BmoIjDQV.js";import{L as o}from"./Label-CEOTZRHh.js";import{S as f}from"./Section-Cqnmyugw.js";import{T as n}from"./TextField-G-qH5ezV.js";import{a as N,u as b,F,t as S}from"./Form-D6mG4--u.js";import{s as O}from"./Action-BFcs-WUV.js";import"./PropsContextProvider-CA-rRUQt.js";import"./mergeRefs-BlQ7xsLt.js";import"./index-CXUv09w1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-C0k2Pat9.js";import"./useStatic-B3xzZHSp.js";import"./IconWarning-CtdkcZph.js";import"./Text-bj3uPEQb.js";import"./browser-1ziQicFl.js";import"./EmulatedBoldText-hpKq7Hz7.js";import"./Text-8unsz-5q.js";import"./utils-BbnHDINk.js";import"./LoadingSpinner-B8vc0P23.js";import"./useLocalizedStringFormatter-Cu-ju4he.js";import"./context-DyduO5X5.js";import"./Button-CTCpguPA.js";import"./ProgressBar-CqOUw3BL.js";import"./Label-KbRAOmA4.js";import"./Hidden-9xlFaPY3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B1CTPn-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrTnWIPr.js";import"./useFocus-EmCEI_3W.js";import"./useFocusRing-dYveCnJn.js";import"./useFocusable-x1ctHjf6.js";import"./ContextMenuSection-ClOvBHg6.js";import"./Dialog-B1-wK1GW.js";import"./RSPContexts-BVwGfu3g.js";import"./OverlayArrow-CxKD8bHN.js";import"./useControlledState-8m1Jp16z.js";import"./Collection-DRL76Dr2.js";import"./CollectionBuilder-tPYtcWuA.js";import"./Separator-dxgt4vJy.js";import"./Group-UZonwJ93.js";import"./SearchField-MnOXAoEn.js";import"./FieldError-B3Nc_fB3.js";import"./Form-BaF7AzDl.js";import"./useTextField-DRlSiNws.js";import"./useFormReset-CB9QX2BV.js";import"./TextField-ByaluKOI.js";import"./useEvent-DDpQr-S3.js";import"./SelectionManager-DxlIos2Z.js";import"./useCollator-4XxMIsgb.js";import"./FocusScope-CI4D8ZGu.js";import"./VisuallyHidden-_kOtwmic.js";import"./TextFieldBase-DfX6ddjI.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-qg7uGN0h.js";import"./FieldDescription-DoqYRnl8.js";import"./ReactAriaControlledValueFix-DG6XYhgW.js";import"./context-CKEF2sYl.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

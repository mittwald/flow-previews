import{j as e}from"./iframe-9NvHEEYX.js";import{A as j}from"./ActionGroup-CQgUAs9m.js";import{B as p}from"./Button-DNkWV-Zy.js";import{L as o}from"./Label-Bp2WajZU.js";import{S as f}from"./Section-BzjEtJr9.js";import{T as n}from"./TextField-CFJW8Pjc.js";import{a as N,u as b,F,t as S}from"./Form-CEzK2E1I.js";import{s as O}from"./Action-DrNj8V5h.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-v3xFcxcI.js";import"./useStatic-CR_xkm7d.js";import"./IconWarning-BrSB4tEd.js";import"./Text-DmCU-xjB.js";import"./browser-bwKj2ElG.js";import"./EmulatedBoldText-D0lgjAwv.js";import"./Text-BvWwS3Z5.js";import"./utils-phTOhdhB.js";import"./LoadingSpinner-8k09TVCC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./context-1WNE-E4a.js";import"./Button-BcHYciFT.js";import"./ProgressBar-OiyktaR6.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BM-ocsZo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B41vbTz8.js";import"./useFocus-D6PAQN6n.js";import"./useFocusRing-B-QDi9By.js";import"./useFocusable-B9Hhp3CR.js";import"./ContextMenuSection-0a3H8mws.js";import"./Dialog-CIsBrKRV.js";import"./RSPContexts-C2QF7PgZ.js";import"./OverlayArrow-Csc6TqF8.js";import"./useControlledState-QTuKyMuz.js";import"./Collection-CLjZHuNo.js";import"./CollectionBuilder-BHg4Vaik.js";import"./Separator-CzXxLIRa.js";import"./Group-HJeSUD3y.js";import"./SearchField-BZ4AdFAe.js";import"./FieldError-osHXMSr-.js";import"./Form-Bv_h1ugL.js";import"./useTextField-DLSWgg2h.js";import"./useFormReset-CqIGJUAV.js";import"./TextField-CFZkN_yv.js";import"./useEvent-DCcWwaFm.js";import"./SelectionManager-Q48diFGT.js";import"./useCollator-BvoG3B46.js";import"./FocusScope-pZ9Wg3C8.js";import"./VisuallyHidden-BMUrvrGU.js";import"./TextFieldBase-CoRRRdrF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B6ipGGiX.js";import"./FieldDescription-BaEgR1T7.js";import"./ReactAriaControlledValueFix-CYYlRawh.js";import"./context-BhkBgBm1.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

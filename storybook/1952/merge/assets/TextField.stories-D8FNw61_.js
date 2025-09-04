import{j as e}from"./iframe-BuQIW6_u.js";import{A as j}from"./ActionGroup-CDBzwOeI.js";import{B as p}from"./Button-DlXaalMD.js";import{L as o}from"./Label-_oW49-Il.js";import{S as f}from"./Section-DITRu-iD.js";import{T as n}from"./TextField-BlD5gHUJ.js";import{a as N,u as b,F,t as S}from"./Form-BULXkxDJ.js";import{s as O}from"./Action-NQcD1SkN.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DeOL7iYR.js";import"./useStatic-Cs9s3jvC.js";import"./IconWarning-CTHW-5ya.js";import"./Text-8TMWzlfF.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";import"./utils-C3-2IFIX.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./Button-BKD05Onb.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-V7qiuXiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKHC3-jq.js";import"./useFocus-CJRfh2Zc.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./ContextMenuSection-k-oykwvR.js";import"./Dialog-DEmHowc0.js";import"./RSPContexts-CueUa63T.js";import"./OverlayArrow-BFcQ4aC2.js";import"./useControlledState-DeMfvYEX.js";import"./Collection-BX_jXMRy.js";import"./CollectionBuilder-kPYqAuhc.js";import"./Separator-D2HmxWfn.js";import"./Group-C2-D-gHZ.js";import"./SearchField-BQcQWlfh.js";import"./FieldError-CwfU_VRl.js";import"./Form-QX_URUcu.js";import"./useTextField-ChNo9r-2.js";import"./useFormReset-Cq5VWng9.js";import"./TextField-B1BJmtCC.js";import"./useEvent-Cn4un1lG.js";import"./SelectionManager-pzK_YEl4.js";import"./useCollator-QIDMCYGr.js";import"./FocusScope-CbX1YQFz.js";import"./VisuallyHidden-Db59Lmwd.js";import"./TextFieldBase-Bu0l_F9x.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Jn80i9Ms.js";import"./FieldDescription-CzXhQYx4.js";import"./ReactAriaControlledValueFix-C1hWP_qf.js";import"./context-nH1y_ndl.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

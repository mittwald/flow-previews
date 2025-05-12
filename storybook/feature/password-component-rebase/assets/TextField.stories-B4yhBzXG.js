import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-C0UIXB8Y.js";import{B as f}from"./Button-FYdEfAPS.js";import{L as m}from"./Label-RNQn_NAE.js";import{S as j}from"./Section-C-ZC57DR.js";import{T as n}from"./TextField-B48bMVLU.js";import{a as g,u as b,F,t as S}from"./Form-DShYMyrk.js";import{s as y}from"./Action-BLwy8x-7.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-F2Fta7eo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DgOV_5yI.js";import"./useStatic-DZIU6iu_.js";import"./IconWarning-BXNHVn6I.js";import"./Text-CSTNT9NW.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-D85TVzOv.js";import"./utils-DsSK6wng.js";import"./LoadingSpinner-FjZNoaNQ.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Button-xWdcV2_p.js";import"./ProgressBar-C0yX1I0t.js";import"./Label-DhTxnYZq.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-S4fA3fDW.js";import"./ContextMenuSection-CrpLscK9.js";import"./Dialog-Btg-CSVS.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-DrRmwQ1y.js";import"./Collection-CXg7zLcg.js";import"./CollectionBuilder-YMr182AN.js";import"./Separator-9Mo8yYmd.js";import"./useOverlayTriggerState-DOVnl7Ya.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./TextFieldBase-B3HRuok7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-vV6cTwrc.js";import"./FieldError-BaSwT8L9.js";import"./FieldDescription-CqiWff4d.js";import"./TextField-DhsJuBzf.js";import"./Form-DGdGrcxA.js";import"./useFormValidation-Cx3HAYEY.js";import"./Input-U0jm-HC5.js";import"./useTextField-DNqZJpGv.js";import"./useFormReset-hDk0Ijlo.js";import"./context-B4icoHkB.js";import"./v4-CtRu48qb.js";const V=L("submit"),Ee={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},i={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Me=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Me as __namedExportsOrder,Ee as default};

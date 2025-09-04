import{j as e}from"./iframe--ZPVLz8g.js";import{A as j}from"./ActionGroup-lLniZOzG.js";import{B as p}from"./Button-ipeD2xQq.js";import{L as o}from"./Label-CEhk5YLt.js";import{S as f}from"./Section-CuoJ4ODt.js";import{T as n}from"./TextField--shl7M9A.js";import{a as N,u as b,F,t as S}from"./Form-C4Q336nW.js";import{s as O}from"./Action-B8fzCGcN.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CF1hG1RQ.js";import"./useStatic-IQie-ZqP.js";import"./IconWarning-4_E3WNTs.js";import"./Text-BWChA6Qp.js";import"./browser-D6_kvesK.js";import"./EmulatedBoldText-Qqp8fG5V.js";import"./Text-du_1NL-y.js";import"./utils-CjuahFs2.js";import"./LoadingSpinner-DOWHWybS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./context-CYq-vfev.js";import"./Button-nXFtpqu6.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BT12SUT-.js";import"./useFocus-BI6mVvV1.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./ContextMenuSection-R5ibJYOc.js";import"./Dialog-C5Xh-9_q.js";import"./RSPContexts-4UEDZgUk.js";import"./OverlayArrow-BrvbOkZ-.js";import"./useControlledState-CTCa-DaJ.js";import"./Collection-BOzi5_VH.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Separator-BUnYRuL5.js";import"./Group-CTVEw3FJ.js";import"./SearchField-DDwMLnUN.js";import"./FieldError-jq5pvDUD.js";import"./Form-CzoyYLrP.js";import"./useTextField-DLQgkNBY.js";import"./useFormReset-B3ZybcNU.js";import"./TextField-BusVcIbT.js";import"./useEvent-Co8EjSPm.js";import"./SelectionManager-V388soIh.js";import"./useCollator-CfPt7Von.js";import"./FocusScope-C9FAKDVz.js";import"./VisuallyHidden-CbNFz2F0.js";import"./TextFieldBase-Cn-O1K8l.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-D2ZL0CC8.js";import"./FieldDescription-CeJeSW2L.js";import"./ReactAriaControlledValueFix-D0soGR-L.js";import"./context-BCg0Ekp8.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

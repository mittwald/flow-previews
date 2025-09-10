import{j as e}from"./iframe-BpdxrwIb.js";import{A as j}from"./ActionGroup-Dk7-IbAC.js";import{B as p}from"./Button-CwyQ24Il.js";import{L as o}from"./Label-B05m9Jha.js";import{S as f}from"./Section-Aj8NHk1U.js";import{T as n}from"./TextField-D53jkJGS.js";import{a as N,u as b,F,t as S}from"./Form-ChoNkt05.js";import{s as O}from"./Action-COhKRbVc.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-8B6o1Jcn.js";import"./useStatic-_L-kGsxT.js";import"./IconWarning-DfpVuNuz.js";import"./Text-DE4Q9wlE.js";import"./browser-CjlkZb14.js";import"./EmulatedBoldText-BK7BqSsu.js";import"./Text-s-uJNCfK.js";import"./utils-60PhQC-u.js";import"./LoadingSpinner-CTxNA6YP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./context-CefFUzIe.js";import"./Button-0E_exH3L.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXS9utKX.js";import"./useFocus-C0zYbozs.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";import"./ContextMenuSection-DOSMoV2f.js";import"./Dialog--6GRJbyV.js";import"./RSPContexts-COprRsvg.js";import"./OverlayArrow-C7JKPmKj.js";import"./useControlledState-BiXfF0Y1.js";import"./Collection-DxypVpmd.js";import"./CollectionBuilder-DBkURgoe.js";import"./Separator-DodoKnoT.js";import"./Group-DJY0cn_B.js";import"./SearchField-DAJQjktq.js";import"./FieldError-CSYQEfgd.js";import"./Form-BBooAEet.js";import"./useTextField-BxOi2WYK.js";import"./useFormReset-BDGpTE2A.js";import"./TextField-Ikioio4Y.js";import"./useEvent-CgmVVSAd.js";import"./SelectionManager-u7tMSqsB.js";import"./useCollator-YHcMoLBN.js";import"./FocusScope-CzMQYsxZ.js";import"./VisuallyHidden-C_bZjV4d.js";import"./TextFieldBase-WFAwlHON.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BNkV0zVI.js";import"./FieldDescription-uSlQSXhR.js";import"./ReactAriaControlledValueFix-BHN5aKS1.js";import"./context-Cy2K_ymr.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

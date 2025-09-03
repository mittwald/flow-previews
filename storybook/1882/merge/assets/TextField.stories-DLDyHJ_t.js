import{j as e}from"./iframe-BPnb-8PC.js";import{A as j}from"./ActionGroup-DCIMc_j4.js";import{B as p}from"./Button-chDOhf6m.js";import{L as o}from"./Label-bLTq-ewh.js";import{S as f}from"./Section-BdlMDPLS.js";import{T as n}from"./TextField-BYISiUux.js";import{a as N,u as b,F,t as S}from"./Form-B1foVCQX.js";import{s as O}from"./Action-Bmubu_cL.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./useStatic-2pKXc1Kg.js";import"./IconWarning-j0MoznR6.js";import"./Text-Ba-uZw6F.js";import"./browser-tQ-t1xxT.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./Text-KWqvWgwT.js";import"./utils-BNZdeyCH.js";import"./LoadingSpinner-BUt2pcHy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./context-Cvzu1MDH.js";import"./Button-DWahSmPc.js";import"./ProgressBar-C4vCg6TA.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Mae_nSQP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbV6qfru.js";import"./useFocus-CQt3VlDx.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocusable-DW9GZi2B.js";import"./ContextMenuSection-D-7n8W_E.js";import"./Dialog-ChpM20JY.js";import"./RSPContexts-2Y1bGEeq.js";import"./OverlayArrow-DddHfoXR.js";import"./useControlledState-BZWp4i98.js";import"./Collection-FyZk2N5J.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Separator-ACF8I6Sm.js";import"./Group-BfJL9-FJ.js";import"./SearchField-DgHP0CGL.js";import"./FieldError-Dg8qbhsB.js";import"./Form-CLKe_oCF.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./TextField-DLL4ZGuM.js";import"./useEvent-C_P8io5N.js";import"./SelectionManager-BBZQaH8A.js";import"./useCollator-bsozdqlF.js";import"./FocusScope-CnAVXuaX.js";import"./VisuallyHidden-BEucGg6b.js";import"./TextFieldBase-BBZplfvk.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-hQRdtdq8.js";import"./FieldDescription-CGFQo9BV.js";import"./ReactAriaControlledValueFix-cCDZWueK.js";import"./context-DmMltsbs.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

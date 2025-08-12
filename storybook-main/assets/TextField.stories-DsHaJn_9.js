import{j as e}from"./iframe-DiTvlIx0.js";import{A as j}from"./ActionGroup-8bYosJdc.js";import{B as p}from"./Button-BiD6Lawu.js";import{L as o}from"./Label-M3UKHXXD.js";import{S as f}from"./Section-D4JT3sGr.js";import{T as n}from"./TextField-D5KBOu-Z.js";import{a as N,u as b,F,t as S}from"./Form-8ae7zdn_.js";import{s as O}from"./Action-Vim0FXk8.js";import"./PropsContextProvider-CFcpYPaZ.js";import"./mergeRefs-B_ak7i-H.js";import"./index-BnnHP1pm.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DsxZE0Zq.js";import"./useStatic-DdGraPJb.js";import"./IconWarning-G89JjWcD.js";import"./Text-DI1PKUAj.js";import"./browser-BaahsGvK.js";import"./EmulatedBoldText-drbL--yb.js";import"./Text-Rz2GzXDH.js";import"./utils-BABRtEIC.js";import"./LoadingSpinner-DaBaZ8Mn.js";import"./useLocalizedStringFormatter-S2PSgqtc.js";import"./context-DGhDP4Fo.js";import"./Button-B0hpxsDM.js";import"./ProgressBar-B0Vgjwix.js";import"./Label-DVhhRECd.js";import"./Hidden-Bpwwde4M.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-du6TudaG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-gIhSeEMK.js";import"./useFocus-Csuog0QY.js";import"./useFocusRing-B2-Vw04x.js";import"./useFocusable-BMX7QfiV.js";import"./ContextMenuSection-BhaAfmgY.js";import"./Dialog-ByglpE6R.js";import"./RSPContexts-RnDkEBIV.js";import"./OverlayArrow-CXEJUrV_.js";import"./useControlledState-Cw5WssZN.js";import"./Collection-DCDGv6Hn.js";import"./CollectionBuilder-Dz71Bmkn.js";import"./Separator-CUbm99qE.js";import"./Group-CCQCMpIY.js";import"./SearchField-ch9pUxlM.js";import"./FieldError-DCG_xqAH.js";import"./Form-BkiUDrTE.js";import"./useTextField-Bj0Agq48.js";import"./useFormReset-DnAkrJEx.js";import"./TextField-vFmkS8-q.js";import"./useEvent-CKujStdr.js";import"./SelectionManager-DKKfhyH7.js";import"./useCollator-CLHz9ghx.js";import"./FocusScope-DA66A_td.js";import"./VisuallyHidden-DqT0mP1T.js";import"./TextFieldBase-D_ChESq1.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DWkDGB3S.js";import"./FieldDescription-Fi8LTOfM.js";import"./ReactAriaControlledValueFix-DruCn9KL.js";import"./context-DkfqWRD_.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

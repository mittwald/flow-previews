import{j as e}from"./iframe-BDw0JWSR.js";import{A as j}from"./ActionGroup-DK1GcaEq.js";import{B as p}from"./Button-yu20EEPl.js";import{L as o}from"./Label-Be_-w5vU.js";import{S as f}from"./Section-BLSxG7BI.js";import{T as n}from"./TextField-CBQN9l2a.js";import{a as N,u as b,F,t as S}from"./Form-BDovRbyw.js";import{s as O}from"./Action-BixN79Ov.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CeAfv5DI.js";import"./useStatic-D7eirymu.js";import"./IconWarning-C4ko8TBx.js";import"./Text-BXVMRRcn.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";import"./Text-DEFEolTP.js";import"./utils-D_w6CRD2.js";import"./LoadingSpinner-CFe72iUG.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./context-D5nQNM7t.js";import"./Button-lKZFx-Lr.js";import"./ProgressBar-CyYOn_uf.js";import"./Label-CUqrwqQ8.js";import"./Hidden-pH7w6Mtj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C5kEgDfJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BNZPQqcG.js";import"./useFocus-Dj2Ek65f.js";import"./useFocusRing-52GqPzGX.js";import"./useFocusable-D3-cRXek.js";import"./ContextMenuSection-CwVQtv9j.js";import"./Dialog-D8b2kpaQ.js";import"./RSPContexts-0zkktiyR.js";import"./OverlayArrow-CwRuRLsS.js";import"./useControlledState-Cvl_BVXS.js";import"./Collection-DDNNYOGK.js";import"./CollectionBuilder-DuESWRb0.js";import"./Separator-Cydo87Fk.js";import"./Group-CKyiWQ2U.js";import"./SearchField-DqNeviEu.js";import"./FieldError-ByToyRq3.js";import"./Form-Q2KPI748.js";import"./useTextField-qrm6HsnU.js";import"./useFormReset-JMYigv_3.js";import"./TextField-DXLuZ0kd.js";import"./useEvent-Cw4Az-S_.js";import"./SelectionManager-CoRWAbK4.js";import"./useCollator-DLoPjsqn.js";import"./FocusScope-CC9BsQaO.js";import"./VisuallyHidden-BSZ5GesV.js";import"./TextFieldBase-CagjfWYN.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-D-ArndZL.js";import"./FieldDescription-CKlNthzu.js";import"./ReactAriaControlledValueFix-DtrCAPIs.js";import"./context-DDduvggu.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

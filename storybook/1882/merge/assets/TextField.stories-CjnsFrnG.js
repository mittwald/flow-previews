import{j as e}from"./iframe-ANbYZxYh.js";import{A as j}from"./ActionGroup-DiWnJNYa.js";import{B as p}from"./Button-BrOgS8k0.js";import{L as o}from"./Label-BNGIQ-CZ.js";import{S as f}from"./Section-BZ3Pd5oL.js";import{T as n}from"./TextField-DkvG3hb0.js";import{a as N,u as b,F,t as S}from"./Form-CUUGX5XA.js";import{s as O}from"./Action-BWJuvjrq.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-3JUuJVM4.js";import"./useStatic-C8P39Z3X.js";import"./IconWarning-DS7IkYNL.js";import"./Text-M71Ue6Ol.js";import"./browser-DiQDtMf4.js";import"./EmulatedBoldText-D7XMT75r.js";import"./Text-DtPhrSvp.js";import"./utils-Cy_MvyB4.js";import"./LoadingSpinner-BalYmqav.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./context-C29UMt2a.js";import"./Button-pW7XEr-A.js";import"./ProgressBar-D0pevNPv.js";import"./Label-DHVn08UY.js";import"./Hidden-CKPTgp3M.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BSgApQcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-YyV1OQc2.js";import"./useFocus-TkuOvp2H.js";import"./useFocusRing-CdWhuOPm.js";import"./useFocusable-Do5j3Niz.js";import"./ContextMenuSection-CEfz6G3k.js";import"./Dialog-DAXXYblm.js";import"./RSPContexts-BF3izYoh.js";import"./OverlayArrow-DdhXoA2p.js";import"./useControlledState-qP1KlDsL.js";import"./Collection-CGyTBmm7.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Separator-C5R7VkmP.js";import"./Group-BbZVKWqc.js";import"./SearchField-CA0soI3_.js";import"./FieldError-8FwQObi_.js";import"./Form-BzuKHEmj.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./TextField-Cq94faz6.js";import"./useEvent-C-0WgXZh.js";import"./SelectionManager-CqcRxmrm.js";import"./useCollator-CfSYVQsJ.js";import"./FocusScope-DrloOZeI.js";import"./VisuallyHidden-Dkqu2xa7.js";import"./TextFieldBase-CC-A0Z4q.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CknxTZ0z.js";import"./FieldDescription-BZEk77xv.js";import"./ReactAriaControlledValueFix-Dcoh4pDk.js";import"./context-XBkMChDn.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

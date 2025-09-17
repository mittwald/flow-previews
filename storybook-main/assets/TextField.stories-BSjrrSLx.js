import{j as e}from"./iframe-BXWHolr7.js";import{A as j}from"./ActionGroup-ByPmdftr.js";import{B as p}from"./Button-CnhqfASw.js";import{L as t}from"./Label-CRWIqmlk.js";import{S as f}from"./Section-CJvU0Ysi.js";import{T as n}from"./TextField-DfzDaEuH.js";import{a as V,u as b,F,t as S}from"./Form-ZscHQela.js";import{s as g}from"./Action-CuEh1pD2.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CpZVtoBZ.js";import"./useStatic-C8CrPjkp.js";import"./IconWarning-C9wAMmE4.js";import"./Text-cublDBL7.js";import"./browser-tTf4FW93.js";import"./EmulatedBoldText-C4nbdyGF.js";import"./Text-CshnnIVL.js";import"./utils-B2TamtWx.js";import"./LoadingSpinner-CMZ7XUGA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./context-Dja7lVng.js";import"./Button-YX5RGg2w.js";import"./ProgressBar-CBzNVdsU.js";import"./Label-BCj8S481.js";import"./Hidden-BM-MvoWz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CPYM8v3M.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1TcPoWb.js";import"./useFocus-BHj76f0r.js";import"./useFocusRing-C9RrD32J.js";import"./useFocusable-CA3YRohc.js";import"./ContextMenuSection-DOruUyk9.js";import"./Dialog-C_udrGIm.js";import"./RSPContexts-804iL0FW.js";import"./OverlayArrow-ttgUUjRL.js";import"./useControlledState-Dr1QSdOx.js";import"./Collection-C0Q6vASR.js";import"./CollectionBuilder-d4B1PmIH.js";import"./Separator-1cY_KjOn.js";import"./Group-DKRCTPap.js";import"./SearchField-CrZc0iss.js";import"./FieldError-kOzNSTVH.js";import"./Form-C40WvtQf.js";import"./useTextField-CHuCSPiE.js";import"./useFormReset-D3PYmlJ_.js";import"./TextField-vF4BsGOY.js";import"./useEvent-DVY60GN0.js";import"./SelectionManager-C8B9SdRc.js";import"./useCollator-DktWPlR1.js";import"./FocusScope-Bq5J7cyD.js";import"./VisuallyHidden-BHe7S0lR.js";import"./TextFieldBase-IG9Tx_bB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Dg8tiTi9.js";import"./FieldDescription-uhd6Mbtt.js";import"./ReactAriaControlledValueFix-4_aywS1Z.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./context-Cnp30bgj.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Be={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};

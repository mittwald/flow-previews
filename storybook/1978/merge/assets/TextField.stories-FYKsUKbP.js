import{j as e}from"./iframe-FeXPLmWJ.js";import{A as j}from"./ActionGroup-CnZgjYx_.js";import{B as p}from"./Button-DtLhlb3k.js";import{L as o}from"./Label-DeaIyOHa.js";import{S as f}from"./Section-B2xtFxKU.js";import{T as n}from"./TextField-BDQz5er3.js";import{a as N,u as b,F,t as S}from"./Form-CNjHs-j_.js";import{s as O}from"./Action-BZKWIbfP.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BYx46ZMw.js";import"./useStatic-LuaoAJ0q.js";import"./IconWarning-Bft-d4EJ.js";import"./Text-Bk-26kZZ.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";import"./Text-D-W6Oypd.js";import"./utils-CXtn_DQA.js";import"./LoadingSpinner-C0aHJiGC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./context-CdDLZW_F.js";import"./Button-DC1Hivs6.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CiJ5VmDC.js";import"./useFocus-utUwSX9z.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./ContextMenuSection-IpD277NB.js";import"./Dialog-D0hlM8gs.js";import"./RSPContexts-l4hadVnr.js";import"./OverlayArrow-QfoTus34.js";import"./useControlledState-Bg7JB_7p.js";import"./Collection-BSFTurc1.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Separator-qHYMipPY.js";import"./Group-BYKu_D4V.js";import"./SearchField-CExAiUx6.js";import"./FieldError-C1vR0UXv.js";import"./Form-1I64UDUq.js";import"./useTextField-DIQk2fEk.js";import"./useFormReset-Dq2F4z6p.js";import"./TextField-EiqUYwfM.js";import"./useEvent-VX8xqKP_.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";import"./TextFieldBase-B7mSxicB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-kve_n9nq.js";import"./FieldDescription-Cu45yjjx.js";import"./ReactAriaControlledValueFix-B-Uf8adH.js";import"./context-BnjGRpmB.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

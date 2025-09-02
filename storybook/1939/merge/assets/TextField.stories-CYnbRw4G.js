import{j as e}from"./iframe-h8pIb5Kv.js";import{A as j}from"./ActionGroup-WmI-Nmw9.js";import{B as p}from"./Button-BCd5wwjT.js";import{L as o}from"./Label-B99siZxZ.js";import{S as f}from"./Section-CioKxp-Z.js";import{T as n}from"./TextField-BqVgg2Xy.js";import{a as N,u as b,F,t as S}from"./Form-B31odCWn.js";import{s as O}from"./Action-gSATwLl0.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-e-XHpWMr.js";import"./useStatic-DDG80hCS.js";import"./IconWarning-sarICh-8.js";import"./Text-BnbJhuWd.js";import"./browser-f0s2BEP-.js";import"./EmulatedBoldText-D5nLjsiS.js";import"./Text-DqGJg9Bh.js";import"./utils-Cexs4pbb.js";import"./LoadingSpinner-D0_GuOvu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./context-pcAEe7OC.js";import"./Button-CV7XsWAw.js";import"./ProgressBar-BoBEJuQ0.js";import"./Label-BakLPZbA.js";import"./Hidden-Dc9Kv2au.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DzpD0Vg0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeaeLWhg.js";import"./useFocus-B-etxL-K.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocusable-CAY1QTdY.js";import"./ContextMenuSection-BHRqy7hA.js";import"./Dialog-C9-zvFsT.js";import"./RSPContexts-Cd0V4yxa.js";import"./OverlayArrow-DnTwsWqb.js";import"./useControlledState-BXC3uZfW.js";import"./Collection-jwpUx6pV.js";import"./CollectionBuilder-CLrwyJlT.js";import"./Separator-CedZax0a.js";import"./Group-DyQYlV1N.js";import"./SearchField-Pbcm1Prj.js";import"./FieldError-DvcRcsU3.js";import"./Form-Cc9esAZh.js";import"./useTextField-661dC4d6.js";import"./useFormReset-BL-bWUrE.js";import"./TextField-BlHsJIwz.js";import"./useEvent-KXd4In2f.js";import"./SelectionManager-ClbqTV3I.js";import"./useCollator-CMfRCWJM.js";import"./FocusScope-CkC1yDzC.js";import"./VisuallyHidden-CByVy45C.js";import"./TextFieldBase-DVH0Y_XE.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Df2paDgt.js";import"./FieldDescription-DHjSwSuh.js";import"./ReactAriaControlledValueFix-C5M_eLWV.js";import"./context-BoMfRFQo.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

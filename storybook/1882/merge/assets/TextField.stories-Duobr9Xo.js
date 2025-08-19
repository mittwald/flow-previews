import{j as e}from"./iframe-B2KmHf-y.js";import{A as j}from"./ActionGroup-uK1MkQbw.js";import{B as p}from"./Button-BbFeJzIv.js";import{L as o}from"./Label-CEurSWF2.js";import{S as f}from"./Section-Ddf5vsbG.js";import{T as n}from"./TextField-eS304tXE.js";import{a as N,u as b,F,t as S}from"./Form-WvlmjZjk.js";import{s as O}from"./Action-Cvpx0uN8.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./useStatic-CZG3tzpM.js";import"./IconWarning-BfZFkMSG.js";import"./Text-BTzROJ4u.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./Text-BzjjTZNC.js";import"./utils-CGNLDjxu.js";import"./LoadingSpinner-BqqlEuny.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./context-BMg6CKyL.js";import"./Button-DtifiV_Y.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-p5QRldAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DTR6VjFp.js";import"./useFocus-BfYJCy_-.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./ContextMenuSection-CTAUVaKV.js";import"./Dialog-CNeQhTzc.js";import"./RSPContexts-D8MVQLAj.js";import"./OverlayArrow-Bl6z6NHA.js";import"./useControlledState-CjBtDVaa.js";import"./Collection-BwA2dvt3.js";import"./CollectionBuilder-BYnkarjY.js";import"./Separator-BMWcHxIk.js";import"./Group-BWIcWIx6.js";import"./SearchField-C4xC6zLO.js";import"./FieldError-DUJhKpS8.js";import"./Form-fpEywjGd.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./TextField-qqPTWDF0.js";import"./useEvent-BZTmiYG1.js";import"./SelectionManager-D1JYq7To.js";import"./useCollator-kI-OIdrZ.js";import"./FocusScope-DhJvjcql.js";import"./VisuallyHidden-C6qwrwG6.js";import"./TextFieldBase-Uj-ENcIH.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Rn5jDQFX.js";import"./FieldDescription-BnvktwU2.js";import"./ReactAriaControlledValueFix-RoNrHbUR.js";import"./context-U_3b6bvq.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

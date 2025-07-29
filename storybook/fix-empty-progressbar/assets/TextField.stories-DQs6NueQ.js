import{j as e}from"./iframe-BmySKFCq.js";import{A as j}from"./ActionGroup-C5R2kNE-.js";import{B as p}from"./Button-wwRASOhM.js";import{L as o}from"./Label-D07kElwt.js";import{S as f}from"./Section-B7MUuKmq.js";import{T as n}from"./TextField-R3K_Lz_7.js";import{a as N,u as b,F,t as S}from"./Form-CpYKQ6ml.js";import{s as O}from"./Action-Dkxo0LVM.js";import"./PropsContextProvider-BOmyjk4c.js";import"./mergeRefs-B6V94bK_.js";import"./index-BzrGOqLm.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BOTGlhaL.js";import"./useStatic-D7ToV0Cs.js";import"./IconWarning-DwPTlpqV.js";import"./Text-VzeX0aJg.js";import"./browser-Bc8vbUyQ.js";import"./EmulatedBoldText-DPhJV8kT.js";import"./Text-DabCaf9H.js";import"./utils-DoYwLUW3.js";import"./LoadingSpinner-8ONEDUJ3.js";import"./useLocalizedStringFormatter-DQn86H97.js";import"./context-CMcVAeGU.js";import"./Button-PXGB-mGz.js";import"./ProgressBar-CRcrCKjd.js";import"./Label-BqzVWqzc.js";import"./Hidden-CRzIvDGy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH0aVX1E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMuaLZjl.js";import"./useFocus-XVtYQ6Ak.js";import"./useFocusRing-C4oIu2i3.js";import"./useFocusable-DwzVkHoA.js";import"./ContextMenuSection-DdCSmoBP.js";import"./Dialog-BeGSh39F.js";import"./RSPContexts-BM6OcLSl.js";import"./OverlayArrow-RMxusYD6.js";import"./useControlledState-CAYoIw9O.js";import"./Collection-Cyg6AXNz.js";import"./CollectionBuilder-D9VQY6hP.js";import"./Separator-Dtd7OmID.js";import"./Group-DXKI6wUk.js";import"./SearchField-w_ZoQukU.js";import"./FieldError-l_dSmRSM.js";import"./Form-mecE9jTR.js";import"./useTextField-CAqvvnqS.js";import"./useFormReset-LQ-kKN_o.js";import"./TextField-EWYq_6o7.js";import"./useEvent-BQlUDiGM.js";import"./SelectionManager-DI5u0v70.js";import"./useCollator-CmZhOI3C.js";import"./FocusScope-Bruj9SRJ.js";import"./VisuallyHidden-CTALs_-h.js";import"./TextFieldBase-BMff-ZSg.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DoR06PZF.js";import"./FieldDescription-DZSCJ8f9.js";import"./ReactAriaControlledValueFix-CzAP8Z_t.js";import"./context-BePneJT8.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

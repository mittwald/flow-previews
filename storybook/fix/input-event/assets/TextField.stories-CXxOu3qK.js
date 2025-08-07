import{j as e}from"./iframe-D5sJq8Pp.js";import{A as j}from"./ActionGroup-BQAzYZMD.js";import{B as p}from"./Button-6TUR0Zrk.js";import{L as o}from"./Label-C9pkE3_l.js";import{S as f}from"./Section-BB00AiD9.js";import{T as n}from"./TextField-udQEFZlo.js";import{a as N,u as b,F,t as S}from"./Form-D5WniLeE.js";import{s as O}from"./Action-DMCbC-Mq.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DeknL7IW.js";import"./useStatic-C2JikVB-.js";import"./IconWarning-DOhF27zV.js";import"./Text-DSs6zbpd.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";import"./Text-DkuK7F_5.js";import"./utils-9AX_qn18.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./context-C2iapZe2.js";import"./Button-B2KXtDin.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ch8Q4uqY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./useFocus-RhB9nR94.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./ContextMenuSection-B7Ct79il.js";import"./Dialog-D26-Wb54.js";import"./RSPContexts-DjLkZjo9.js";import"./OverlayArrow-DbUVmUBM.js";import"./useControlledState-BiqnvFAK.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./Group-DaTscDKv.js";import"./SearchField-D8zXD-s8.js";import"./FieldError-DPBRE9in.js";import"./Form-B6p3srko.js";import"./useTextField-BQF8DS2o.js";import"./useFormReset-BYD-PEh4.js";import"./TextField-Ce9H6aw_.js";import"./useEvent-Nf0LSw3x.js";import"./SelectionManager-B8zwja7I.js";import"./useCollator-i6ItQplZ.js";import"./FocusScope-Rm6rMrw2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./TextFieldBase-BykphwFD.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-C_BRxZGF.js";import"./FieldDescription-C5ZBHu1g.js";import"./ReactAriaControlledValueFix-2d0sGep5.js";import"./context-Bqz1H1Fh.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

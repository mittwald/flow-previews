import{j as e}from"./iframe-BvdD6qXg.js";import{A as j}from"./ActionGroup-DgQib4i3.js";import{B as p}from"./Button-7ivsFGmn.js";import{L as o}from"./Label-BnuyVShl.js";import{S as f}from"./Section-Bdu5CK1H.js";import{T as n}from"./TextField-Dl27L1_G.js";import{a as N,u as b,F,t as S}from"./Form-0-PEKG-0.js";import{s as O}from"./Action-GPgeTEUr.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D52RJivz.js";import"./useStatic-uGULccbV.js";import"./IconWarning-BNkxb_83.js";import"./Text-CCdgZxrm.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./Text-D84jcunx.js";import"./utils-DLyEFlgv.js";import"./LoadingSpinner-BmDETFjn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./context-CM85t4Ux.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-qrx4I7MD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-2QIW6EnW.js";import"./useFocus-ByAGBV0g.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./ContextMenuSection-CAjXX6Mq.js";import"./Dialog-BGFaL9Kl.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./useControlledState-9GcYGGux.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./Group-CrFlWLH5.js";import"./SearchField-Cf5LxW_o.js";import"./FieldError-BhEhBaOS.js";import"./Form-BShbB3hD.js";import"./useTextField-8lhmPbxJ.js";import"./useFormReset-yMYSmHMi.js";import"./TextField-DFc82d9L.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./TextFieldBase-Cj13KVNG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BU8vkL3I.js";import"./FieldDescription-Bun17LEn.js";import"./ReactAriaControlledValueFix-CeIeXfUd.js";import"./context-CUfZZ1vn.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

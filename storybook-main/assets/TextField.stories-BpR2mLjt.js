import{j as e}from"./iframe-DTi9QmA0.js";import{A as j}from"./ActionGroup-HN0xeesM.js";import{B as p}from"./Button-DSq_4Ojq.js";import{L as o}from"./Label-CQetSSMr.js";import{S as f}from"./Section-JeKvmrtD.js";import{T as n}from"./TextField-D9W-1YZw.js";import{a as N,u as b,F,t as S}from"./Form-CxbZBpI7.js";import{s as O}from"./Action-xnhUT-gM.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-ViofuXey.js";import"./useStatic-CrO0OLrU.js";import"./IconWarning-DxYwd6KK.js";import"./Text-rZE64TpZ.js";import"./browser-C8n4ubUN.js";import"./EmulatedBoldText-CvSsCxBp.js";import"./Text-uHJoYlsI.js";import"./utils-CL7caOLd.js";import"./LoadingSpinner-CxmP28Uh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./context-CCdZhs-h.js";import"./Button-DEHF5lJo.js";import"./ProgressBar-CZcDm412.js";import"./Label-CZheX-BS.js";import"./Hidden-vKywT2Di.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BsOHSad-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGBc0zwK.js";import"./useFocus-ZZE_0lQ_.js";import"./useFocusRing-DtGgtmUN.js";import"./useFocusable-C9TzKwDz.js";import"./ContextMenuSection-CUzpVhwH.js";import"./Dialog-D6TGzY5R.js";import"./RSPContexts-AUq49PY7.js";import"./OverlayArrow-CdR0wOB6.js";import"./useControlledState-plF7sQ7U.js";import"./Collection-ChROeXcJ.js";import"./CollectionBuilder-DdDVVtah.js";import"./Separator-rsJpBnK2.js";import"./Group-C0wS_Dx9.js";import"./SearchField-baoCU1ZF.js";import"./FieldError-B9D2P1L5.js";import"./Form-MgZU7Vwa.js";import"./useTextField-DlNFPg1I.js";import"./useFormReset-BLacz0U5.js";import"./TextField-1nP9PUNp.js";import"./useEvent-CA_eanes.js";import"./SelectionManager-B8EhsD0x.js";import"./useCollator-9sk9Xc09.js";import"./FocusScope-Dyo2gp6z.js";import"./VisuallyHidden-vt7X_vEY.js";import"./TextFieldBase-BvVbvdce.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-GbuBlm-B.js";import"./FieldDescription-RVA1j_lW.js";import"./ReactAriaControlledValueFix-COFKvOa9.js";import"./context-O1stu3iI.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

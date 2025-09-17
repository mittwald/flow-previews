import{j as e}from"./iframe-BKOyO0tU.js";import{A as j}from"./ActionGroup-DEeYD_cT.js";import{B as p}from"./Button-BRmnXyIg.js";import{L as t}from"./Label-DvNp2qob.js";import{S as f}from"./Section-DcBOfrzF.js";import{T as n}from"./TextField-DOVqXvoO.js";import{a as V,u as b,F,t as S}from"./Form-DlZgNljl.js";import{s as g}from"./Action-C_4EL_0e.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./useStatic-DBBw__yr.js";import"./IconWarning-WHLX57m9.js";import"./Text-ExzQZ1Qc.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./Text-ACnzImZy.js";import"./utils-B2BekvYW.js";import"./LoadingSpinner-B8cx3qaz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./context-wvutwpZE.js";import"./Button-DqwKzt0W.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kfVNblq3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CfgifMFV.js";import"./useFocus-dHggTvNn.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";import"./ContextMenuSection-DnHutdVr.js";import"./Dialog-BbUqm1un.js";import"./RSPContexts-BmPvawj4.js";import"./OverlayArrow-CigCDiMF.js";import"./useControlledState-B16HJi6R.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./Group-iIjIB8eM.js";import"./SearchField-BqOdnuK_.js";import"./FieldError-D2kmkBqC.js";import"./Form-D-YH0smr.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./TextField-tmvkgR0S.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";import"./TextFieldBase-BftAr_eF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Da4EtItW.js";import"./FieldDescription-hDtyIPHR.js";import"./ReactAriaControlledValueFix-BdQg6gA1.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./context-rPjQ9i-i.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Be={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

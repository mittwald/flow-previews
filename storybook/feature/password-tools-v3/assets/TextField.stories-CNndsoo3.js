import{j as e}from"./iframe-k40rl9C_.js";import{A as j}from"./ActionGroup-BCcrSe-K.js";import{B as p}from"./Button-kvMweZlt.js";import{L as o}from"./Label-f_MJI4Fh.js";import{S as f}from"./Section-BGzgGzSQ.js";import{T as n}from"./TextField-LxQmuG-v.js";import{a as N,u as b,F,t as S}from"./Form-BHidgBam.js";import{s as O}from"./Action-B7n1-Sy0.js";import"./PropsContextProvider-DHimXFH6.js";import"./mergeRefs-DeLnkq3n.js";import"./index-0ME5rF8X.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-U4y_tPB5.js";import"./useStatic-DmhG0skw.js";import"./IconWarning-Cbv9M52D.js";import"./Text-B-gvPcDV.js";import"./browser-CjSC5npA.js";import"./EmulatedBoldText-BNBH8DgQ.js";import"./Text-BHVi9XYC.js";import"./utils-KRUPT0lQ.js";import"./LoadingSpinner-BP4NYh9i.js";import"./useLocalizedStringFormatter-DKKzTgA5.js";import"./context-B7pdk5J-.js";import"./Button-BPg5w5qS.js";import"./ProgressBar-CLj2PpPD.js";import"./Label-DIzINetI.js";import"./Hidden-U9FjqIX0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D45A24Bq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdMS6zrp.js";import"./useFocus-CSVfmLbx.js";import"./useFocusRing-xJVp1dT7.js";import"./useFocusable-Bkb1JWUQ.js";import"./ContextMenuSection-ccfdorOp.js";import"./Dialog-DFB0ODmg.js";import"./RSPContexts-D3A90Utg.js";import"./OverlayArrow-QTNcdBpj.js";import"./useControlledState-BJUCb_CR.js";import"./Collection-kWkb4Zd-.js";import"./CollectionBuilder-ByxuUit6.js";import"./Separator-8D9fucmC.js";import"./Group-chjP6waA.js";import"./SearchField-CwrX6gQO.js";import"./FieldError-rn1TZOfn.js";import"./Form-c2DgNPZJ.js";import"./useTextField-C_psbwqH.js";import"./useFormReset-CIlCc03R.js";import"./TextField-SZ2aXgcA.js";import"./useEvent-DRBB5MX_.js";import"./SelectionManager-BMLyIVh6.js";import"./useCollator-84Y8Mk4i.js";import"./FocusScope-D54ZyU14.js";import"./VisuallyHidden-CgVp0Wt0.js";import"./TextFieldBase-DrqazNX8.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CXDHQN9H.js";import"./FieldDescription-D5llzvlM.js";import"./ReactAriaControlledValueFix-BzyUjwlp.js";import"./context-D0ri2Dmb.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

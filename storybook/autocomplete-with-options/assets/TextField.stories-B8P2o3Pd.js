import{j as e}from"./iframe-ABGSKs5r.js";import{A as j}from"./ActionGroup-BnRYMoCo.js";import{B as p}from"./Button-Q43F_r8t.js";import{L as o}from"./Label-B_lAnajd.js";import{S as f}from"./Section-Bo-OB3QN.js";import{T as n}from"./TextField-CxdQMsq_.js";import{a as N,u as b,F,t as S}from"./Form-B-B81hdU.js";import{s as O}from"./Action-CUvrUwti.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-GvSmty2r.js";import"./useStatic-CcRZhvyK.js";import"./IconWarning-CrQ4Sq1v.js";import"./Text-DtVn_38U.js";import"./browser-BJO6t65z.js";import"./EmulatedBoldText-GSAm8QjJ.js";import"./Text-BcmTaKwf.js";import"./utils-DiDGDlBS.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./context-DyJmA51t.js";import"./Button-iaRAOLSz.js";import"./ProgressBar-CGoCl-ZJ.js";import"./Label-BwOKtJNA.js";import"./Hidden-B4dLwXdT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcKqU1cs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./useFocus-Dg7gZngi.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocusable-BAjBFm0a.js";import"./ContextMenuSection-C2tUWO8i.js";import"./Dialog-BtJFOPGU.js";import"./RSPContexts-fBWTPx9Q.js";import"./OverlayArrow-bYgiNorp.js";import"./useControlledState-Un3rm8eO.js";import"./Collection-Dxy4s6rJ.js";import"./CollectionBuilder-COEyccke.js";import"./Separator-CSQ2PCE5.js";import"./Group-WLHEG_qD.js";import"./SearchField-C3LVCaj4.js";import"./FieldError-B1yCOr13.js";import"./Form-CvEoesSu.js";import"./useTextField-A3YOYzMp.js";import"./useFormReset-CDcF8HBQ.js";import"./TextField-CYxV6_KF.js";import"./useEvent-D4qKx0m_.js";import"./SelectionManager-_MA_Xqcw.js";import"./useCollator-W9bifTbC.js";import"./FocusScope-CeShPDZQ.js";import"./VisuallyHidden-DZthTgNa.js";import"./TextFieldBase-BTiyntqw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-C4jPbCeF.js";import"./FieldDescription-IjkSN3jj.js";import"./ReactAriaControlledValueFix-CADqCVYh.js";import"./context-D7oi58C7.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-D8FrJ-CZ.js";import{A as j}from"./ActionGroup-Bf3adsmK.js";import{B as p}from"./Button-Cq__NSNu.js";import{L as o}from"./Label-Cw_HB0L8.js";import{S as f}from"./Section-7XksVYFo.js";import{T as n}from"./TextField-DLmEOol8.js";import{a as N,u as b,F,t as S}from"./Form-DWHZtf8w.js";import{s as O}from"./Action-_fiDaeQa.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-kdQR9GNf.js";import"./useStatic-3eGZwKWm.js";import"./IconWarning-C11FXGxU.js";import"./Text-CijQgHlf.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./Text-CjVOmJR3.js";import"./utils-DLru3qrQ.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./context-Dz2Qbbtu.js";import"./Button-DVdJDgqt.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-mcSHbC1W.js";import"./useFocus-_KFCgimG.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./ContextMenuSection-Bx237WzR.js";import"./Dialog-D2aL6iTu.js";import"./RSPContexts-DvajV3uw.js";import"./OverlayArrow-DjgfcPnj.js";import"./useControlledState-Bhtz6D6k.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./Group-CHBQvVuc.js";import"./SearchField-BVNSbwCA.js";import"./FieldError-DUyd9_2U.js";import"./Form-DsyloFzD.js";import"./useTextField-mqiYsdTK.js";import"./useFormReset-BMZp-ADn.js";import"./TextField-DhjdGSid.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./useCollator-D1vKzkof.js";import"./FocusScope-BCf9GP_l.js";import"./VisuallyHidden-HCxlUedB.js";import"./TextFieldBase-BcLyI9rn.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-6eoAimLP.js";import"./FieldDescription-fOgrhKsc.js";import"./ReactAriaControlledValueFix-CujzpT_Y.js";import"./context-DfaRjifq.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

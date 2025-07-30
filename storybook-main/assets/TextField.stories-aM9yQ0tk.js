import{j as e}from"./iframe-5e2kPeup.js";import{A as j}from"./ActionGroup-TeGEU1Wd.js";import{B as p}from"./Button-BSAdG0Rb.js";import{L as o}from"./Label-rQ1K5PG1.js";import{S as f}from"./Section-Bu5yQTuK.js";import{T as n}from"./TextField-lQqaLARI.js";import{a as N,u as b,F,t as S}from"./Form-BRRqFQyb.js";import{s as O}from"./Action-DcYaOngB.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BumiIRNm.js";import"./useStatic-8VbMuKEU.js";import"./IconWarning-CAYwnCqi.js";import"./Text-CEKkIKYs.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./Text-DiRiFDT_.js";import"./utils-Bj-e-2L9.js";import"./LoadingSpinner-D5xWaFe2.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./context-BlWBKAs5.js";import"./Button-DovRDHW7.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocus-CgJ_pcIH.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./ContextMenuSection-CpzUQ3fn.js";import"./Dialog-BrwhBbGd.js";import"./RSPContexts-DWx74BAe.js";import"./OverlayArrow-GmN5SuYH.js";import"./useControlledState-CITgxuHh.js";import"./Collection-AOfdJwwW.js";import"./CollectionBuilder-BEe1h0VT.js";import"./Separator-C6iA2-Vt.js";import"./Group-CcUvI-aQ.js";import"./SearchField-BRz9qbLc.js";import"./FieldError-CADLGuZ8.js";import"./Form-Dy9v5K9J.js";import"./useTextField-B1rPS-0t.js";import"./useFormReset-SVEOBZG_.js";import"./TextField-bzeDf3ll.js";import"./useEvent-WpBbrSIs.js";import"./SelectionManager-C5ZwUPgy.js";import"./useCollator-BVV2o25k.js";import"./FocusScope-BoeQH_qo.js";import"./VisuallyHidden-DW4vMZrD.js";import"./TextFieldBase-Cfw2aORd.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CL__YS6Z.js";import"./FieldDescription-Sok04slJ.js";import"./ReactAriaControlledValueFix-DxOdoahG.js";import"./context-B0hGlOln.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

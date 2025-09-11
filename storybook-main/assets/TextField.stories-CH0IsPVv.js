import{j as e}from"./iframe-BsMxae-o.js";import{A as j}from"./ActionGroup-BiXdkPZ9.js";import{B as p}from"./Button-DfdH0gMv.js";import{L as o}from"./Label-BYgJ_MYX.js";import{S as f}from"./Section-C3fuBbF5.js";import{T as n}from"./TextField-Ur86UAfN.js";import{a as N,u as b,F,t as S}from"./Form-Di6nNt_Y.js";import{s as O}from"./Action-Cu5585NU.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DrUE4wXM.js";import"./useStatic-NxgnZ87E.js";import"./IconWarning-B9I94qHq.js";import"./Text-B7cMlOzY.js";import"./browser-BOk4ZIfK.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./Text-B7BhLbkb.js";import"./utils-BMVQSkne.js";import"./LoadingSpinner-B-hN89-2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./context-DrnfoIRz.js";import"./Button-Cr74-zWI.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvYe3LSr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrYqgVGE.js";import"./useFocus-HKqTfwLq.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocusable-DYhRFaOI.js";import"./ContextMenuSection-BPJsTYfZ.js";import"./Dialog-otIdMc29.js";import"./RSPContexts-Bo0-inYM.js";import"./OverlayArrow-CRlBDhHx.js";import"./useControlledState-CcMFCsVI.js";import"./Collection-BsdihtfM.js";import"./CollectionBuilder--Y6752fw.js";import"./Separator-BgSjOnqA.js";import"./Group-CKe7hi61.js";import"./SearchField-C1j-ZqX1.js";import"./FieldError-BMEYjrX6.js";import"./Form-D5ALWCUg.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./TextField-BomFOzDr.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./useCollator-BG1bVIzj.js";import"./FocusScope-CZ17A4u_.js";import"./VisuallyHidden-D9PR17i6.js";import"./TextFieldBase-D47S17MP.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bafd17gj.js";import"./FieldDescription-BnPdtoeH.js";import"./ReactAriaControlledValueFix-F62Dze-M.js";import"./context-BQl0W7wd.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

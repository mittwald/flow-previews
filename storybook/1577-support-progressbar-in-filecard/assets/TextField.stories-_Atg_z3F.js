import{j as e}from"./iframe-DdApAMdB.js";import{A as j}from"./ActionGroup-B9aosHGA.js";import{B as p}from"./Button-BxqrW572.js";import{L as o}from"./Label-Yw88ZPyv.js";import{S as f}from"./Section-CHCYfAvd.js";import{T as n}from"./TextField-DgvI98vi.js";import{a as N,u as b,F,t as S}from"./Form-BnKCjhff.js";import{s as O}from"./Action-CsdkjVM_.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-w8JWX1Ad.js";import"./useStatic-CD0TvTTa.js";import"./IconWarning-Cpaydhok.js";import"./Text-BwGnDMAi.js";import"./browser-Bz93nYTI.js";import"./EmulatedBoldText-BU0UeOKO.js";import"./Text-CGWbxphN.js";import"./utils-DAIXfBLw.js";import"./LoadingSpinner-BhKvcbL5.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./context-DR2Fzh74.js";import"./Button-C9Xh5N71.js";import"./ProgressBar-Cc1yHw2d.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DpyWwSJM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRRHPdfj.js";import"./useFocus-D5He2YFW.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./ContextMenuSection-BSkJWNpm.js";import"./Dialog-BpJkjD9u.js";import"./RSPContexts-BOrJeOok.js";import"./OverlayArrow-C4-25t1a.js";import"./useControlledState-BEGJzQOc.js";import"./Collection-DGYwVSuD.js";import"./CollectionBuilder-EIxRxNub.js";import"./Separator-S3NhCE8J.js";import"./Group-D5m3Hvm8.js";import"./SearchField-C5uNx_R9.js";import"./FieldError-CIX9Q6F5.js";import"./Form-EknBmRno.js";import"./useTextField-5LH3O4RW.js";import"./useFormReset-BHdeIf20.js";import"./TextField-DkSNZzFP.js";import"./useEvent-L4LWTqTI.js";import"./SelectionManager-CLIYI5bX.js";import"./useCollator-DB6a0khr.js";import"./FocusScope-CMXbBALw.js";import"./VisuallyHidden-DyxmrKqh.js";import"./TextFieldBase-xJJjTc5C.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-D-Hf7sx5.js";import"./FieldDescription-C8ajk1oL.js";import"./ReactAriaControlledValueFix-D9mZmcZN.js";import"./context-ruD8SKGF.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

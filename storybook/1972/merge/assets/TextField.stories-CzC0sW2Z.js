import{j as e}from"./iframe-ezKPDceg.js";import{A as j}from"./ActionGroup-C5zgwFls.js";import{B as l}from"./Button-DbzZMeUS.js";import{L as t}from"./Label-BzVYbGPL.js";import{S as f}from"./Section-DbGFM1vN.js";import{T as n}from"./TextField-BCuF_ns_.js";import{a as V,u as b,F,t as S}from"./Form-D1RaqgWo.js";import{s as g}from"./Action-BGk66KIT.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BkTiqldw.js";import"./useStatic-CNaXVqhs.js";import"./IconWarning-iHRHTv2O.js";import"./Text-CUR3tOrp.js";import"./browser-BOjVaVGi.js";import"./EmulatedBoldText-BpljTSGS.js";import"./Text-BuR4UJfD.js";import"./utils-DzswpBsb.js";import"./LoadingSpinner-BRfDN20n.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./context-BrV7YpGK.js";import"./Button-DO9HCw5q.js";import"./ProgressBar-C6U_wRip.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CN4tRF6C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DYKNfU9_.js";import"./useFocus-DJ-TYVVM.js";import"./useFocusRing-gH5JHApn.js";import"./useFocusable-B-msIfGP.js";import"./ContextMenuSection-Dcb6Xv1B.js";import"./Dialog-CsG1YX16.js";import"./RSPContexts-D9JC3ke5.js";import"./OverlayArrow-Cg5cqTaC.js";import"./useControlledState-BblR5lPL.js";import"./Collection-ZxatR5QS.js";import"./CollectionBuilder-CeLFQwBB.js";import"./Separator-Dbz-9PCT.js";import"./Group-BDVVyk9o.js";import"./SearchField-CcD3FqPJ.js";import"./FieldError-D8wvACBx.js";import"./Form-CmBAUGhT.js";import"./useTextField-Dj17RY-h.js";import"./useFormReset-pmH2UUNu.js";import"./TextField-CfP2mJzy.js";import"./useEvent-RmC2LF0W.js";import"./SelectionManager-DbiWXVNm.js";import"./useCollator-CIKaMC9W.js";import"./FocusScope-eYFIheUb.js";import"./VisuallyHidden-CoNZ8DQ3.js";import"./TextFieldBase-746khTLn.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CKyjXhYf.js";import"./FieldDescription-CjFZjOmo.js";import"./ReactAriaControlledValueFix-C-K1Fn8c.js";import"./context-dSZ45fFT.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),we={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(l,{type:"reset",children:"Reset"}),e.jsx(l,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(l,{type:"submit",children:"Submit"})})]})})}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

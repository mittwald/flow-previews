import{j as e}from"./iframe-BBU8Vi5z.js";import{A as j}from"./ActionGroup-Ccj7KSq_.js";import{B as p}from"./Button-NW1Of_qV.js";import{L as o}from"./Label-C0WPThdc.js";import{S as f}from"./Section-BHtuKRQv.js";import{T as n}from"./TextField-CPDEfqDl.js";import{a as N,u as b,F,t as S}from"./Form-CEuevqEv.js";import{s as O}from"./Action-DsHIOktH.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-fjA7p-Zb.js";import"./useStatic-D_gn09gr.js";import"./IconWarning-Dzfnqwsx.js";import"./Text-Dmx06jI1.js";import"./browser-ZEfsbAUe.js";import"./EmulatedBoldText-CqafDXFr.js";import"./Text-DKRByA_e.js";import"./utils-Bl0beZ_h.js";import"./LoadingSpinner-Y9e7IKXn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./context-LLBgjHpi.js";import"./Button-KQBofztE.js";import"./ProgressBar-BVefmcd6.js";import"./Label-DtosUGK-.js";import"./Hidden-BzeT6TXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dhqi6uDE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VQWCXiAV.js";import"./useFocus-BO2H44GU.js";import"./useFocusRing-CcJdq_JE.js";import"./useFocusable-CH53ZRkg.js";import"./ContextMenuSection-Bmtsd9QN.js";import"./Dialog-CLHxRTEc.js";import"./RSPContexts-CuT-5ERO.js";import"./OverlayArrow-CTw_TzGf.js";import"./useControlledState-JBkrIXcy.js";import"./Collection-CAYUknat.js";import"./CollectionBuilder-Ck3uMDqM.js";import"./Separator-SD0n1yxH.js";import"./Group-SY2qABfH.js";import"./SearchField-CLTvmi2R.js";import"./FieldError-DZ37g0Dt.js";import"./Form-CKpkDEiG.js";import"./useTextField-7Er_r7Sk.js";import"./useFormReset-CcPabkKc.js";import"./TextField-ByGAuS2u.js";import"./useEvent-COUneAHH.js";import"./SelectionManager-C_TBHMOd.js";import"./useCollator-kculxw9I.js";import"./FocusScope-DSRDaxy2.js";import"./VisuallyHidden-DSdNvIxr.js";import"./TextFieldBase-Dy7iNhVJ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Bm5U6po7.js";import"./FieldDescription-BWVpZiVv.js";import"./ReactAriaControlledValueFix-k2qPwuWk.js";import"./context-6Ujzj1TE.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

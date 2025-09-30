import{j as e}from"./iframe-BkQEXHdV.js";import{A as j}from"./ActionGroup-kwwJbAoN.js";import{B as p}from"./Button-Pi6ts98U.js";import{L as t}from"./Label-DCwzji4R.js";import{S as f}from"./Section-FKwjM1dg.js";import{T as o}from"./TextField-bci_FI5T.js";import{a as V,u as b,F,t as S}from"./Form-DpSOJqhG.js";import{s as g}from"./Action-ZxRK_-5p.js";import"./index-Cun1SEai.js";import"./dynamic-BBWe3ygL.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./useStatic-D2LoWVgv.js";import"./IconWarning-Bhg2W068.js";import"./Text-waR3uY_i.js";import"./browser-T6JBIPNk.js";import"./EmulatedBoldText-DAPjbogn.js";import"./Text-vqf5-lqk.js";import"./utils-vh8nJaNh.js";import"./LoadingSpinner-BoU0TUya.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./context-DYNAGC-2.js";import"./Button-U99YD9dQ.js";import"./ProgressBar-BZ-kanOy.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B9G_gEh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CS8Sp9_K.js";import"./useFocus-DvrdYcoe.js";import"./useFocusRing-DgjuUHXy.js";import"./useFocusable-E_oKRPWi.js";import"./ContextMenuSection-fPmGy5Mt.js";import"./Popover-8rOZkqNf.js";import"./DialogTriggerView-wkk6S007.js";import"./context-D6bN450f.js";import"./RSPContexts-BoauDkAB.js";import"./ClearPropsContextView-DluELhC2.js";import"./useControlledState-DaeuqNOc.js";import"./FocusScope-1Unh1ODV.js";import"./useCollator-CckG7hwg.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Collection-41evgXm1.js";import"./CollectionBuilder-CMEP5N_o.js";import"./context-Df1kKepL.js";import"./Separator-ITSOrukA.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";import"./Switch-BbY-iNWo.js";import"./useToggleState-D586bBrY.js";import"./useFormReset-C2GAx1Zc.js";import"./TextFieldBase-DQ6x1oIb.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-1DZO4FvY.js";import"./FieldError-DGWLCZ3i.js";import"./FieldDescription-H6gY4iu-.js";import"./TextField-C0qXDBxZ.js";import"./Form-BhNATljn.js";import"./Group-048JPUOO.js";import"./Input-B_J8uYe3.js";import"./useTextField-ZuBW_ptm.js";import"./useFormValidation-O3WohNjc.js";import"./ReactAriaControlledValueFix-CvjKg_5M.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ie=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ie as __namedExportsOrder,Ge as default};

import{j as e}from"./iframe-DUtcAVii.js";import{A as j}from"./ActionGroup-DzQEgvAL.js";import{B as p}from"./Button-DULuqu_l.js";import{L as t}from"./Label-D2FAkV6T.js";import{S as f}from"./Section-O2Vc0Edx.js";import{T as n}from"./TextField-C4gzFkUl.js";import{a as V,u as b,F,t as S}from"./Form-BhbXo5cm.js";import{s as g}from"./Action-DkcWlbm8.js";import"./dynamic-BPQY4zlZ.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-CSj3Q-Jf.js";import"./useStatic-BRK6B1ib.js";import"./IconWarning-BDc9REUs.js";import"./Text-CIiZgPf0.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Text-DD2-gbIJ.js";import"./utils-BJK0bMVs.js";import"./LoadingSpinner-3c39ELf0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./context-DAjKPHt4.js";import"./Button-2XgEXCNC.js";import"./ProgressBar-DzueJvvV.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbIX1hOn.js";import"./useFocus-BBGclxaJ.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./ContextMenuSection-BbIodJXW.js";import"./Popover-Bm-rwUXe.js";import"./DialogTriggerView-D0BwiIeE.js";import"./context-DAzA1DTj.js";import"./RSPContexts-DD7I-zbI.js";import"./ClearPropsContextView-CAu383Hu.js";import"./useControlledState-G4tJUSCb.js";import"./FocusScope-Bx_BpPkG.js";import"./useCollator-BJahqQL5.js";import"./VisuallyHidden-CsqdnZMW.js";import"./Collection-YnS658O_.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Separator-DNulUYCD.js";import"./Group-QAGn5nhU.js";import"./SearchField-6u-M9e2f.js";import"./FieldError-B_KU3Njk.js";import"./Form-pelauJUP.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./TextField-w7amMjDR.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";import"./Switch-Dw1iDizI.js";import"./useToggleState-fIj2JyOG.js";import"./TextFieldBase-CCq1KYqZ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CldLJigO.js";import"./FieldDescription-CgOqQd8T.js";import"./ReactAriaControlledValueFix-CNNoItwk.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ue=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ue as __namedExportsOrder,Me as default};

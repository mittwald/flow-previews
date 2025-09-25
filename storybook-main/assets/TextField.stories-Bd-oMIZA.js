import{j as e}from"./iframe-DaY0X55-.js";import{A as j}from"./ActionGroup-BD_nrMv_.js";import{B as p}from"./Button-DR2yamsk.js";import{L as t}from"./Label-DBJBtDhT.js";import{S as f}from"./Section-DRtmAM1v.js";import{T as n}from"./TextField-KAJAN_aL.js";import{a as V,u as b,F,t as S}from"./Form-CwHYHJ1f.js";import{s as g}from"./Action-Dwh6hg15.js";import"./dynamic-BrkEgl8o.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-CD_4vSTY.js";import"./useStatic-uS-e-hBF.js";import"./IconWarning-DpKTVHID.js";import"./Text-ClBV1PzQ.js";import"./browser-DCXXMZF1.js";import"./EmulatedBoldText-NGGT27hA.js";import"./Text-CmOgQYod.js";import"./utils-BNq2bbe-.js";import"./LoadingSpinner-L8q-c8wY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./context-C83_ciAo.js";import"./Button-BFtXZvnQ.js";import"./ProgressBar-feyz4V57.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0_kEahO.js";import"./useFocus-Bx9r-om_.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./ContextMenuSection-BODKwBXC.js";import"./Popover-CX1cowkX.js";import"./DialogTriggerView-Bf1Z1A17.js";import"./context-By-CGifB.js";import"./RSPContexts-DzPn71fZ.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./useControlledState-ChlOye-e.js";import"./FocusScope-BkSA93dQ.js";import"./useCollator-0HaIqY_5.js";import"./VisuallyHidden-BYSFBZbq.js";import"./Collection-BNCGMhbn.js";import"./CollectionBuilder-r4GPnu41.js";import"./Separator-B-P32e-W.js";import"./Group-BRma_Z3w.js";import"./SearchField-BRBjfrRR.js";import"./FieldError-B2eDKzT7.js";import"./Form-C_YqGgE4.js";import"./useTextField-ChCqJFCV.js";import"./useFormReset-Cfy0Tx0G.js";import"./TextField-CrD7kLQK.js";import"./useEvent-CVZyjoEr.js";import"./SelectionManager-22HKkmij.js";import"./Switch-Clv7PjHW.js";import"./useToggleState-BIgXbakK.js";import"./TextFieldBase-DgDLWNa6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B-BsJ3J5.js";import"./FieldDescription-CtMWmXTu.js";import"./ReactAriaControlledValueFix-t0msjNL2.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

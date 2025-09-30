import{j as e}from"./iframe-oDnSRKrU.js";import{A as j}from"./ActionGroup-CZruOmMh.js";import{B as p}from"./Button-Cfj_belE.js";import{L as t}from"./Label-DdcSy8o6.js";import{S as f}from"./Section-BTdyD-Hd.js";import{T as o}from"./TextField-k4AIpYHK.js";import{a as V,u as b,F,t as S}from"./Form-BxXqQblL.js";import{s as g}from"./Action-BMGnqQDt.js";import"./index-Cun1SEai.js";import"./dynamic-B66wdgIv.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DD5xlWbQ.js";import"./useStatic-B5fiOOMU.js";import"./IconWarning-BDchKd2I.js";import"./Text-BRg3dDEW.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Text-BhCBXCIE.js";import"./utils-BOFgiu6B.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./context-BACVj_LI.js";import"./Button-D46_pkFx.js";import"./ProgressBar-BuCs3ZnW.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IKTU3VFM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlfeWo8-.js";import"./useFocus-CBAj8SSC.js";import"./useFocusRing-BvVC0KGc.js";import"./useFocusable-BIMsrSRy.js";import"./ContextMenuSection-ivUXKKhV.js";import"./Popover-BAr3bKt4.js";import"./DialogTriggerView-Ce3L8qPr.js";import"./context-BfF8CEMr.js";import"./RSPContexts-wR3TIPq6.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./useControlledState-C4SjqBt9.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./CollectionBuilder-BqrWk4D3.js";import"./context-D1pfjzoG.js";import"./Separator-DoYImFmL.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";import"./Switch-CmESvRX8.js";import"./useToggleState-9AVyzi3E.js";import"./useFormReset-m0r5jrEx.js";import"./TextFieldBase-Cg6npoNG.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CEpLicN2.js";import"./FieldError-Cv1iD8Fq.js";import"./FieldDescription-DoMeWMhu.js";import"./TextField-BhUX-Snw.js";import"./Form-HfZRlNH7.js";import"./Group-BZ_dBAGe.js";import"./Input-BviYuwQ8.js";import"./useTextField-C3G6D0-T.js";import"./useFormValidation-CpLCzOC_.js";import"./ReactAriaControlledValueFix-p0Vw7kd4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

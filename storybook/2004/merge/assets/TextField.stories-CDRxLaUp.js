import{j as e}from"./iframe-D1JKOwdq.js";import{A as j}from"./ActionGroup-Q2_yFNv7.js";import{B as p}from"./Button-DG818FIU.js";import{L as t}from"./Label-Cf_c9vA3.js";import{S as f}from"./Section-xjezlXwm.js";import{T as n}from"./TextField-BdejU74e.js";import{a as V,u as b,F,t as S}from"./Form-DIybQHuX.js";import{s as g}from"./Action-CgsrqEHD.js";import"./dynamic-ar8rpZDa.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DpLzBOSg.js";import"./useStatic-D26xSXCN.js";import"./IconWarning-DZISCuC-.js";import"./Text-Cv35yGBC.js";import"./browser-BI97FZcU.js";import"./EmulatedBoldText-d9mRwZf5.js";import"./Text-BIeeVT6X.js";import"./utils-BVsEXjGQ.js";import"./LoadingSpinner-D-A5UE94.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./context-Bzqo5E_q.js";import"./Button-DG6zvYi3.js";import"./ProgressBar-4Tm_fzI6.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Uyswehsd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CwJM0Ele.js";import"./useFocus-CYEgIwnz.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocusable-wd6aWIaf.js";import"./ContextMenuSection-8CoHO1G8.js";import"./Popover-CJsB8pDc.js";import"./DialogTriggerView-BgJsodt7.js";import"./context-Cusklrj0.js";import"./RSPContexts-CoUOlwWC.js";import"./ClearPropsContextView-Be28GGXB.js";import"./useControlledState-CYjuzTtD.js";import"./FocusScope-B4gQukNN.js";import"./useCollator-sKXsPUo5.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./Collection-Zsa7miPe.js";import"./CollectionBuilder-B5sifEeq.js";import"./Separator-BMEhDY-1.js";import"./Group-B-JYoqhF.js";import"./SearchField-BZI0oCti.js";import"./FieldError-BZfRYFbv.js";import"./Form-CftHRla7.js";import"./useTextField-xidCibEs.js";import"./useFormReset-CG85pNSA.js";import"./TextField-DfMFf88Q.js";import"./useEvent-DQOxTklk.js";import"./SelectionManager-DFpd0p6B.js";import"./Switch-Be2IZpQQ.js";import"./useToggleState-Dan021zf.js";import"./TextFieldBase-D8dURz3_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DJpBvO0q.js";import"./FieldDescription-DXguCw-8.js";import"./ReactAriaControlledValueFix-B3m6RDpm.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

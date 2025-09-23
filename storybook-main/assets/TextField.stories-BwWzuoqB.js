import{j as e}from"./iframe-PPscN4tr.js";import{A as j}from"./ActionGroup-BmY62BYn.js";import{B as p}from"./Button-DOt7fXGF.js";import{L as t}from"./Label-Bf1duK2q.js";import{S as f}from"./Section-ByzE7qdy.js";import{T as n}from"./TextField-CI5-CS1q.js";import{a as V,u as b,F,t as S}from"./Form-BeMUT1Qa.js";import{s as g}from"./Action-Cx_qZqiS.js";import"./dynamic-DLKBnFH6.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-CEref5CZ.js";import"./useStatic-BImXXSW3.js";import"./IconWarning-DCjExedU.js";import"./Text-Cr4g403k.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Text-DOZF1D9Q.js";import"./utils-DsPiQVUE.js";import"./LoadingSpinner-BmIM-aij.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./context-BC4DP49M.js";import"./Button-Dq2iCs8C.js";import"./ProgressBar-jJ6XsPfz.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKGHEFGx.js";import"./useFocus-C4zNlByO.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";import"./ContextMenuSection-CrLKntAn.js";import"./Popover-B4Thu_Ca.js";import"./DialogTriggerView-B2ubRe0W.js";import"./context-DPnYEMwE.js";import"./RSPContexts-CmKI408-.js";import"./ClearPropsContextView-CiAwXYC8.js";import"./useControlledState-Bj7Ci1Bi.js";import"./FocusScope-DT8YcIVm.js";import"./useCollator-DgDjDGmg.js";import"./VisuallyHidden-DdPky-fR.js";import"./Collection-C__y2sy-.js";import"./CollectionBuilder-BAD3bxW3.js";import"./Separator-CQECSlkM.js";import"./Group-Bw_Vhw_L.js";import"./SearchField-BPbBm38f.js";import"./FieldError-Ccwwr1FD.js";import"./Form-D8YNg8fo.js";import"./useTextField-DGdrajZE.js";import"./useFormReset-CpR4G9FH.js";import"./TextField-C9dqtDV6.js";import"./useEvent-Dso9VxuL.js";import"./SelectionManager-D_TAE1Vs.js";import"./Switch-CpzuIrtB.js";import"./useToggleState-BumZJUjk.js";import"./TextFieldBase-OfgjIVtZ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-_wKjORAk.js";import"./FieldDescription-DF-WO_WU.js";import"./ReactAriaControlledValueFix-CKE4t8pW.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

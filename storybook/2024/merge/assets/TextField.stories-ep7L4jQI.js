import{j as e}from"./iframe-BEnK-FWT.js";import{A as j}from"./ActionGroup-DMqxq9TU.js";import{B as p}from"./Button-Du_IXIsC.js";import{L as t}from"./Label-jTnCUURY.js";import{S as f}from"./Section-JAnPv3Yh.js";import{T as n}from"./TextField-DiyZthmb.js";import{a as V,u as b,F,t as S}from"./Form-OB_na3YK.js";import{s as g}from"./Action-Dje9lihP.js";import"./index-Cun1SEai.js";import"./dynamic-DjJiwxiO.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./clsx-B-dksMZM.js";import"./index-DmntYai2.js";import"./getActionGroupSlot-W7A_YSpc.js";import"./useStatic-B4Kccozc.js";import"./IconWarning-Du8jrWof.js";import"./Text-DfapAs8s.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Text-pg5s_iHF.js";import"./utils-HuzRHECM.js";import"./LoadingSpinner-BRr-XCzk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./context-B1E8CUSR.js";import"./Button-CDOmUSXw.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH4gBFQn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BT-0Cvdy.js";import"./useFocus-DNN1vAkK.js";import"./useFocusRing-Bx80huIr.js";import"./useFocusable-B7vzQveK.js";import"./ContextMenuSection-DnHVIOni.js";import"./Dialog-CDa_BhSJ.js";import"./RSPContexts-BUhaye_C.js";import"./OverlayArrow-CtuVQXhz.js";import"./useControlledState-M8qHyrFf.js";import"./Collection-BOkVQ-64.js";import"./CollectionBuilder-BHVjkzb6.js";import"./context-C5-mMKGT.js";import"./Separator-Cp8WNBkf.js";import"./SelectionManager-C9W_dvum.js";import"./useEvent-CuOy2IQf.js";import"./useCollator-B8pGQ6dk.js";import"./FocusScope-CIlgtdEP.js";import"./VisuallyHidden-uM_MQnLf.js";import"./TextFieldBase-ID_q4LH3.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BuJc9GYO.js";import"./FieldError-BHfIYnvw.js";import"./FieldDescription-CxSMNnGp.js";import"./TextField-BoBwO4B-.js";import"./Form-B4lJ4F2B.js";import"./Group-CMYFByMY.js";import"./Input-D7T6tVMZ.js";import"./useTextField-GOqjTl_D.js";import"./useFormReset-UhEuFSE1.js";import"./useFormValidation-CaI2qlPb.js";import"./ReactAriaControlledValueFix-C1kT0Js9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-BV6G6ZUO.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

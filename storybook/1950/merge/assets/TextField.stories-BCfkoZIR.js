import{j as e}from"./iframe-DT0a5lsj.js";import{A as j}from"./ActionGroup-BaUeucfA.js";import{B as p}from"./Button-BnKE_3tA.js";import{L as o}from"./Label-Dszv3nJ4.js";import{S as f}from"./Section-C1eIi3dX.js";import{T as n}from"./TextField-DygujcQw.js";import{a as N,u as b,F,t as S}from"./Form-CDOymGpF.js";import{s as O}from"./Action-DYEDj9x0.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-SZaPZq2Z.js";import"./useStatic-WTXFIrX_.js";import"./IconWarning-CP_9phWh.js";import"./Text-CWVnGydc.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./Text-C8QSq9Z3.js";import"./utils-BDe-fZfW.js";import"./LoadingSpinner-8cDNCbSg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./context-DtNWionw.js";import"./Button-BNdmwyxy.js";import"./ProgressBar-ByaJujBA.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BMvlVo7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wu8eZQGI.js";import"./useFocus-BPGD2VLY.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./ContextMenuSection-BUuRVmvO.js";import"./Dialog-BHWnDcSc.js";import"./RSPContexts-acmSHJ3A.js";import"./OverlayArrow-HNgDPPr3.js";import"./useControlledState-C-X9sbbL.js";import"./Collection-Dyt6IE1A.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Separator-AkxPmIRq.js";import"./Group-MdCfc2bT.js";import"./SearchField-Doktui3O.js";import"./FieldError-Ccza_qSZ.js";import"./Form-BqKRbvb9.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./TextField-Cx5OsYq1.js";import"./useEvent-DVcRtgtL.js";import"./SelectionManager-JcMzUkMf.js";import"./useCollator-Zc_ZemNk.js";import"./FocusScope-BOmeY0Fa.js";import"./VisuallyHidden-DDMzvk-a.js";import"./TextFieldBase-MfcjJLuF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-xtdcz2l6.js";import"./FieldDescription-CZTm8SfG.js";import"./ReactAriaControlledValueFix-BxcjtgAG.js";import"./context-DJTNNuyW.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

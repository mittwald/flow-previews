import{j as e}from"./iframe-DRNY0HV6.js";import{A as j}from"./ActionGroup-CFAB-XEb.js";import{B as p}from"./Button-B6yc1Izp.js";import{L as o}from"./Label-ByUmX-vC.js";import{S as f}from"./Section-CfCSivBp.js";import{T as n}from"./TextField-BVRcEX09.js";import{a as N,u as b,F,t as S}from"./Form-CVtlqum6.js";import{s as O}from"./Action-DekOUdHR.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BrLOW8U6.js";import"./useStatic-Kjlf0EN3.js";import"./IconWarning-BbRR4ujq.js";import"./Text-oBJONlUH.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";import"./Text-laSnJE4K.js";import"./utils-BGYRLt27.js";import"./LoadingSpinner-CWL8TI7G.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./context-wh02hEcl.js";import"./Button-k2MLEVng.js";import"./ProgressBar-Bn7inR-A.js";import"./Label-Ddh_b_TK.js";import"./Hidden-tTaWOvSZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGx8VCK9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CqeZb5V3.js";import"./useFocus-BhLRMKCW.js";import"./useFocusRing-kW39cg4V.js";import"./useFocusable-BSwP4fZ7.js";import"./ContextMenuSection-BOBu6KTs.js";import"./Dialog-DNtMkIXU.js";import"./RSPContexts-CA3pTynJ.js";import"./OverlayArrow-p5g0EdPE.js";import"./useControlledState-EC94ILpF.js";import"./Collection-BD7tjUyW.js";import"./CollectionBuilder-DcMhY1Ql.js";import"./Separator-BpqvMMaG.js";import"./Group-BnZVzQNe.js";import"./SearchField-VUEN69Zq.js";import"./FieldError-WemdyPf5.js";import"./Form-DE2ohvFV.js";import"./useTextField-CR9o_0bN.js";import"./useFormReset-CQ99iq-2.js";import"./TextField-Bjv3Nexs.js";import"./useEvent-Bg507xpS.js";import"./SelectionManager-DXHYZg2X.js";import"./useCollator-BrAMHcAl.js";import"./FocusScope-CchoPqp2.js";import"./VisuallyHidden-B4EZo48X.js";import"./TextFieldBase-DuzGgGDf.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BR7j6BGO.js";import"./FieldDescription-CbamIeBX.js";import"./ReactAriaControlledValueFix-CABNhOAl.js";import"./context-Ceu1foDq.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

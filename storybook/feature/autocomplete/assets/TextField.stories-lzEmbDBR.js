import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as j}from"./ActionGroup-BSEoJ804.js";import{B as p}from"./Button-ztvkvyqb.js";import{L as o}from"./Label-D5mrWAot.js";import{S as f}from"./Section-CC8-Tfj5.js";import{T as m}from"./TextField-DTeTYn6i.js";import{a as N,u as b,F,t as S}from"./Form-DGva0As-.js";import{s as g}from"./Action-DmnYjrEw.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-BdpSHsi2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./PropsContextProvider-CRt_mvE6.js";import"./mergeRefs-COuk0-v5.js";import"./clsx-B-dksMZM.js";import"./iframe--R-fPseT.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BXbbKhUe.js";import"./useStatic-CMo_ZMTl.js";import"./IconWarning-oDNMKlpY.js";import"./Text-CaAfoaom.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./utils-q_Aud5Js.js";import"./LoadingSpinner-D38sGEO2.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./context-C-2WHVw-.js";import"./Button-DnnpdS5P.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx3ZvVfI.js";import"./useFocus-BK-u4cdi.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";import"./ContextMenuSection-DqnkTQ1u.js";import"./Dialog-BTeLUaFE.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BHF1MVGt.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-oJzNy84A.js";import"./CollectionBuilder-C2AfWA97.js";import"./Separator-D8lRHJ5d.js";import"./Input-DKshHGKQ.js";import"./SearchField-BPqcjU2c.js";import"./FieldError-rzQ5ghoP.js";import"./Form-Ckmgkmz_.js";import"./Group-46VfC_jx.js";import"./useTextField-CNVbrZkS.js";import"./useFormReset-B9LhY6oC.js";import"./TextField-C3T3nKGe.js";import"./SelectionManager-CRLw705v.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D5hiFDC1.js";import"./VisuallyHidden-CRdqyLT8.js";import"./TextFieldBase-G1qFtIjG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B7jQZP-I.js";import"./FieldDescription-Cw3u_ZW-.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./context-BAdenZOi.js";import"./v4-CtRu48qb.js";const V=y("submit"),_e={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ke=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,ke as __namedExportsOrder,_e as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as j}from"./ActionGroup-RShdspvD.js";import{B as p}from"./Button-78qkFCMJ.js";import{L as o}from"./Label-bqUfW7BT.js";import{S as f}from"./Section-U47fNYl0.js";import{T as m}from"./TextField-QgCx8N1h.js";import{a as N,u as b,F,t as S}from"./Form-Deqto9zm.js";import{s as g}from"./Action-C2wp0mH9.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-BdpSHsi2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./PropsContextProvider-DVKy8vv7.js";import"./mergeRefs-C3hk6Bw5.js";import"./clsx-B-dksMZM.js";import"./iframe-CKDvs4CE.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-G_IXla-u.js";import"./useStatic-WqapJzYO.js";import"./IconWarning-CK356P05.js";import"./Text-DkYh63l_.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-CCjUyjXh.js";import"./utils-k5T1Axi4.js";import"./LoadingSpinner-zZ6fpTQi.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Button-DMR6N1Wj.js";import"./ProgressBar-CwgzMXGv.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./ContextMenuSection-ThhZDKqp.js";import"./Dialog-9stIWeEN.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C2rzDuF5.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CmGWUGtX.js";import"./CollectionBuilder-CZDODqbS.js";import"./Separator-Cy_qZ13i.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./TextFieldBase-CGzHNdIa.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-dk6DcvhS.js";import"./FieldError-CWvjII8X.js";import"./FieldDescription-Cv8pyP45.js";import"./TextField-C1NhRoS9.js";import"./Form-D_RCBvUR.js";import"./Input-Cd1RXmlA.js";import"./useTextField-DnMzpv2M.js";import"./useFormReset-dEmc_A_j.js";import"./useFormValidation-BVpaaUUN.js";import"./ReactAriaControlledValueFix-CMcMOTkp.js";import"./context-BoSU1-cj.js";import"./v4-CtRu48qb.js";const V=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const We=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,We as __namedExportsOrder,Me as default};

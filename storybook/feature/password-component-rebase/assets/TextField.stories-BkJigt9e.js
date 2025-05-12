import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-c_sQmoBr.js";import{B as f}from"./Button-BxYcNOFo.js";import{L as m}from"./Label-BmZK1Q_a.js";import{S as j}from"./Section-IpIEwyfr.js";import{T as i}from"./TextField-uLIpfnIz.js";import{a as g,u as b,F,t as S}from"./Form-7KXuKUUD.js";import{s as y}from"./Action-BZIy_kGp.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-BdpSHsi2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./PropsContextProvider-DPpY_m4Q.js";import"./mergeRefs-C3hk6Bw5.js";import"./clsx-B-dksMZM.js";import"./iframe-BMXV9deb.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-UgjuQpky.js";import"./useStatic-BhcDaSLC.js";import"./IconWarning-Wb0-E6wX.js";import"./Text-Bjrd7pUX.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-bCwBREBS.js";import"./utils-B2jHvTU8.js";import"./LoadingSpinner-BeODXER_.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Button-0sHIpBCS.js";import"./ProgressBar-D87xnYtB.js";import"./Label-DULpRqFS.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-J3t5Qa20.js";import"./ContextMenuSection-DzjCKlPC.js";import"./Dialog-BtyX_L6z.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-KvxCYtVf.js";import"./Collection-DiFzyIMP.js";import"./CollectionBuilder-CBZ2qMwz.js";import"./Separator-C9CvzOtQ.js";import"./useOverlayTriggerState-Bx6p_QPa.js";import"./useControlledState-B-V-WRDl.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./TextFieldBase-RosPdo5x.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B5tyjEsk.js";import"./FieldError-DsqxgZkx.js";import"./FieldDescription-BhZ3XAgj.js";import"./TextField-BR0ksJnm.js";import"./Form-DCnQ25K4.js";import"./useFormValidation-D7ymAxFV.js";import"./Input-Cd7kiHog.js";import"./useTextField-D55dxUea.js";import"./useFormReset-dEmc_A_j.js";import"./context-DbUQKISe.js";import"./v4-CtRu48qb.js";const V=L("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(i,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(i,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(i,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(i,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const We=["Default","WithTransformedValue"];export{n as Default,a as WithTransformedValue,We as __namedExportsOrder,Ue as default};

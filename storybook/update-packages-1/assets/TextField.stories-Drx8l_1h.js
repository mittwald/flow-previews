import{j as e}from"./iframe-DkoDxfR2.js";import{A as j}from"./ActionGroup-B7KCCKqS.js";import{B as p}from"./Button-Cp9hbBL4.js";import{L as o}from"./Label-XXLO5rpK.js";import{S as f}from"./Section-aatm0iXa.js";import{T as n}from"./TextField-BkBNrgNk.js";import{a as N,u as b,F,t as S}from"./Form--YIAPmWe.js";import{s as O}from"./Action-Bcu2qL72.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BidRnFe8.js";import"./useStatic-DQBBioJh.js";import"./IconWarning-Ck0HvR0Q.js";import"./Text-CnS74kup.js";import"./browser-Bh7wweWi.js";import"./EmulatedBoldText-CUhPQfrL.js";import"./Text-Ctymnv7p.js";import"./utils-BOrYOV9F.js";import"./LoadingSpinner-kZmvy7rj.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./context-De-s_lIT.js";import"./Button-DYTF7ZZs.js";import"./ProgressBar-D05nSwtV.js";import"./Label-DRKfcyWW.js";import"./Hidden-De8D6e53.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BuM0FhpV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxrgSCNh.js";import"./useFocus-Ca2dqt2u.js";import"./useFocusRing-BDB7k6Pq.js";import"./useFocusable-BICMmXOk.js";import"./ContextMenuSection-BdY28UX7.js";import"./Dialog-C4-038Ac.js";import"./RSPContexts-CqAwA2eB.js";import"./OverlayArrow-DZuWnV6Z.js";import"./useControlledState-JTLXT68E.js";import"./Collection-B9R2_Cw6.js";import"./CollectionBuilder-DALOaQAz.js";import"./Separator-CIHlVyAb.js";import"./Group-T6PFTdYn.js";import"./SearchField-z4vXhhfv.js";import"./FieldError-X-QluTji.js";import"./Form-CnPMOS5f.js";import"./useTextField-D0_dgvqT.js";import"./useFormReset-BbPVrHjA.js";import"./TextField-CLGPgbQU.js";import"./useEvent-C4SFAJBx.js";import"./SelectionManager-CvEqXULD.js";import"./useCollator-COoHYzT4.js";import"./FocusScope-DjWdfa-n.js";import"./VisuallyHidden-C20fNH5S.js";import"./TextFieldBase-BvTgTifA.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-lU0r29TM.js";import"./FieldDescription-BVYKETey.js";import"./ReactAriaControlledValueFix-r54tIFdD.js";import"./context-92DLRHvs.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

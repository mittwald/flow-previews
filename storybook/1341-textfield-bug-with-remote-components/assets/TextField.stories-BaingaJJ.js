import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-btqjAAND.js";import{B as f}from"./Button-CkVi4rXV.js";import{L as m}from"./Label-C3GsNgl3.js";import{S as j}from"./Section-C2M3YcEF.js";import{T as n}from"./TextField-BYQKV9VP.js";import{a as g,u as b,F,t as S}from"./Form-CI4yJ3Ga.js";import{s as y}from"./Action-BzpotNjO.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./clsx-B-dksMZM.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./useStatic-6gmUMcuL.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-DwN0_tyk.js";import"./Text-VF_oP7nB.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";import"./utils-D0CTRpvX.js";import"./LoadingSpinner-CuFSnwXw.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Button-BEBevqbU.js";import"./ProgressBar-DPPT7aTs.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./ContextMenuSection-CazUyE0l.js";import"./Dialog-D2bUbTtQ.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./useOverlayTriggerState-BZ_Sugy1.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./TextFieldBase-DYOOBnjZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CXuJOxH0.js";import"./FieldError-DHw7a52T.js";import"./FieldDescription-DV5kfhzf.js";import"./Form-DrDCrztH.js";import"./Input-DIVKzZcg.js";import"./useTextField-CGlHkggm.js";import"./useFormReset-Dt6BcYvw.js";import"./useFormValidation-CI5EZsou.js";import"./context-CTL7IXlD.js";import"./v4-CtRu48qb.js";const V=L("submit"),Ee={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},i={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Me=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Me as __namedExportsOrder,Ee as default};

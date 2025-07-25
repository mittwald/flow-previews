import{j as e}from"./iframe-BjkHoCV_.js";import{A as j}from"./ActionGroup-Dtw_UogW.js";import{B as p}from"./Button-DVqiRGCO.js";import{L as o}from"./Label-BYU6zcWR.js";import{S as f}from"./Section-DhI7rSAc.js";import{T as m}from"./TextField-BxRjx6ME.js";import{a as N,u as b,F,t as S}from"./Form-x4DN-GwU.js";import{s as O}from"./Action-CzPwWBMx.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bo5RA54w.js";import"./useStatic-D1q5yxzl.js";import"./IconWarning-CwiGKHoc.js";import"./Text-eTJAYSJY.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";import"./Text-C4ERGDAc.js";import"./utils-CGiEt-XO.js";import"./LoadingSpinner-DEvuHU_p.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./context-rlbqmEoV.js";import"./Button-Di6PObN5.js";import"./ProgressBar-B7PSoMX-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QSzRNK-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./useFocus-xSbgpmNE.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./ContextMenuSection-BSbpkMS3.js";import"./Dialog-DTbN5TSI.js";import"./RSPContexts-B3qavTDI.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./useControlledState-DGwCCxzP.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./Input-CkroWKbe.js";import"./SearchField-C9v5dfT_.js";import"./FieldError-BxnpY5Jk.js";import"./Form-PglXiK24.js";import"./Group-CFG6yZ2f.js";import"./useTextField-DkP6KCaQ.js";import"./useFormReset-DzRnd0mU.js";import"./TextField-gOyCtBR-.js";import"./SelectionManager-DffnzBv0.js";import"./useEvent-DmGZIyRy.js";import"./useCollator-BsISA5DC.js";import"./FocusScope-mH_5A_-I.js";import"./VisuallyHidden-DAjtA0IX.js";import"./TextFieldBase-Ko8pTPQ4.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-mxRvqHca.js";import"./FieldDescription-CbqPGn6F.js";import"./ReactAriaControlledValueFix-CAFTLK0K.js";import"./context-CsL7NKVl.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};

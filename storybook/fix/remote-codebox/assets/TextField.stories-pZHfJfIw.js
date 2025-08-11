import{j as e}from"./iframe-D2buA_qM.js";import{A as j}from"./ActionGroup-BnTjuqT1.js";import{B as p}from"./Button-zVUpRv9Z.js";import{L as o}from"./Label-BBxZTNKD.js";import{S as f}from"./Section-B24mVyfd.js";import{T as n}from"./TextField-DA1gMnVe.js";import{a as N,u as b,F,t as S}from"./Form-mvVWTRke.js";import{s as O}from"./Action-DwzQTwOD.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./useStatic-DUlV9yhw.js";import"./IconWarning-IOoTZAJG.js";import"./Text-yAGEZlE0.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Text-BCY1tMCR.js";import"./utils-C_LZ7m3D.js";import"./LoadingSpinner-ja7u21Ua.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CoFh3sW6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocus-1B3Rl8Uo.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./ContextMenuSection-rnuJ58YB.js";import"./Dialog-DvjD4YKx.js";import"./RSPContexts-BGMIawCG.js";import"./OverlayArrow-Cjyx3coH.js";import"./useControlledState-DPiym9a8.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./Group-BFErIHGB.js";import"./SearchField-Zb9DN-44.js";import"./FieldError-B8sT_j_d.js";import"./Form-BNf6kdxI.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./TextField-BPJkVYT-.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./useCollator-ThJgZh_Z.js";import"./FocusScope-D_7nktvV.js";import"./VisuallyHidden-CgNpbGUk.js";import"./TextFieldBase-DXuEzz0S.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DDV9a_7l.js";import"./FieldDescription-J-tPiH_P.js";import"./ReactAriaControlledValueFix-CBMkzs62.js";import"./context-BfKgyIPw.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-BrFbgMdZ.js";import{A as j}from"./ActionGroup-DRgN58LI.js";import{B as p}from"./Button-DrqjXTlc.js";import{L as o}from"./Label-BdYHzXib.js";import{S as f}from"./Section-JJYt51v4.js";import{T as n}from"./TextField-XM8Xzwv5.js";import{a as N,u as b,F,t as S}from"./Form-BGZhiE7p.js";import{s as O}from"./Action-ZQeDjVvM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B9Qutl-P.js";import"./useStatic-BFH-Nkbb.js";import"./IconWarning-aBCbZP3e.js";import"./Text-C3YpUANr.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";import"./Text-B3veiim8.js";import"./utils-uGt6lEHy.js";import"./LoadingSpinner-3OtgiQa9.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./context-B0-ElNi2.js";import"./Button-dFM767hW.js";import"./ProgressBar-CACYrIaY.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BY-hcXqn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./useFocus-D9Wd5vZ-.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./ContextMenuSection-DDzDyQ2c.js";import"./Dialog-CO5NQ1rj.js";import"./RSPContexts-Dtf8PKxD.js";import"./OverlayArrow-BK6QcEmE.js";import"./useControlledState-n0b34ryi.js";import"./Collection-Djxaz1Ld.js";import"./CollectionBuilder-DxJUJjXq.js";import"./Separator-wEFTp470.js";import"./Group-BgvCwvxg.js";import"./SearchField-BfR4RjBt.js";import"./FieldError-DSdi5gGz.js";import"./Form-DphLKB0O.js";import"./useTextField-Hu8b04JP.js";import"./useFormReset-UpbI-Wf0.js";import"./TextField-Cv2sUUZR.js";import"./useEvent-8VQ1yeDi.js";import"./SelectionManager-BC1RK9KO.js";import"./useCollator-BKa_st1y.js";import"./FocusScope-ksb906db.js";import"./VisuallyHidden-BzneT5H9.js";import"./TextFieldBase-BLGMTTF1.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BCnk_DY_.js";import"./FieldDescription-CNEYNLxI.js";import"./ReactAriaControlledValueFix-tEBO8Uew.js";import"./context-CFd8jkW8.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

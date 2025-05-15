import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as f}from"./ActionGroup-Ctzl3N1i.js";import{B as p}from"./Button-BLGNEMW7.js";import{L as o}from"./Label-bOVntHUy.js";import{S as j}from"./Section-D1p7ntAU.js";import{T as m}from"./TextField-ODVSW8Zm.js";import{a as N,u as b,F,t as S}from"./Form-C-2wyPaw.js";import{s as g}from"./Action-CXU1vJUm.js";import{a as v}from"./index-B-lxVbXh.js";import"./index-F2Fta7eo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-CGP4rIIM.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Cwkd5BAj.js";import"./useStatic-CeLwg7Tb.js";import"./IconWarning-JHNVKD2U.js";import"./Text-C0sWdp1H.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-B6xPbVJ8.js";import"./utils-DCmqzjri.js";import"./LoadingSpinner-IrCiETzR.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Button-CEdwHtJW.js";import"./ProgressBar-BxwrPIRf.js";import"./Label-DKaTUQz-.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-BlNB76NP.js";import"./ContextMenuSection-Cu2bLHsG.js";import"./Dialog-7H2cTJka.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-NIVDv4-Z.js";import"./Collection-CW2dxbCi.js";import"./CollectionBuilder-DuMx_c7J.js";import"./Separator-DdlpIzj5.js";import"./useOverlayTriggerState-D0DLvnhT.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./TextFieldBase-fQaefIQS.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B7WE-msJ.js";import"./FieldError-BIIkw2ft.js";import"./FieldDescription-ujFz9pWL.js";import"./Form-YK_aY0K2.js";import"./Input-Cy89Xo-s.js";import"./useTextField-BbIZEqTu.js";import"./useFormReset-hDk0Ijlo.js";import"./useFormValidation-C9irvmUd.js";import"./ReactAriaControlledValueFix-2mXEZviY.js";import"./context-Df4xkzhD.js";import"./v4-CtRu48qb.js";const V=v("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},r=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=S();return e.jsx(F,{form:r,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(t,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(m,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(f,{children:[e.jsx(p,{variant:"soft",color:"secondary",onPress:()=>{r.reset()},children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},r=b({defaultValues:{name:""}}),t=S();return e.jsx(F,{form:r,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(t,{name:"name",children:e.jsx(m,{value:r.watch("name"),onChange:n=>{r.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(f,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ee=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ee as __namedExportsOrder,Ue as default};

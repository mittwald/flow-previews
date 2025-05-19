import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as j}from"./ActionGroup-CU_DCJPO.js";import{B as p}from"./Button-HNIyHWur.js";import{L as o}from"./Label-BnZNwGkU.js";import{S as f}from"./Section-B_P_yWD7.js";import{T as m}from"./TextField-Cy_UdSUA.js";import{a as N,u as b,F,t as S}from"./Form-5hOT6oYo.js";import{s as g}from"./Action-DEz0u6lN.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./clsx-B-dksMZM.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Q0xeGE_F.js";import"./useStatic-_S75A7Vn.js";import"./IconWarning-Dhqk9c5Q.js";import"./Text-DAta9oPQ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-RYc5i20l.js";import"./utils-D9H5ZYVa.js";import"./LoadingSpinner-DV38nRyp.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./Button-C4BByqx5.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./ContextMenuSection-D53Rz7V5.js";import"./Dialog-B0vEu32W.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-DLYo5xVk.js";import"./useControlledState-YIijONQK.js";import"./Collection-DH8MVYRU.js";import"./CollectionBuilder-B62dxoFp.js";import"./Separator-CJYrkcAH.js";import"./SelectionManager-Clajy7Q-.js";import"./useEvent-CfLopXbq.js";import"./useCollator-B5zTmuon.js";import"./FocusScope-me2WFoLK.js";import"./VisuallyHidden-CNMq674x.js";import"./TextFieldBase-2p0I6BT4.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Dbc2xQBL.js";import"./FieldError-CYJLgZCM.js";import"./FieldDescription-Cnqxjw9-.js";import"./Form-BPgN4cN5.js";import"./Input-D2-OWLqW.js";import"./useTextField-B5Y4zdAW.js";import"./useFormReset-wPtuGCA4.js";import"./useFormValidation-BSu4mMLa.js";import"./ReactAriaControlledValueFix-CNAcTnQK.js";import"./context-C9AG9o4h.js";import"./v4-CtRu48qb.js";const V=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ue=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ue as __namedExportsOrder,Ge as default};

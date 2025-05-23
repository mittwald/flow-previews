import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as j}from"./ActionGroup-BOpkwUJI.js";import{B as p}from"./Button-CT6jKELJ.js";import{L as o}from"./Label-Bp6Pnofu.js";import{S as f}from"./Section-Coqp9vad.js";import{T as m}from"./TextField-BUX7IupV.js";import{a as N,u as b,F,t as S}from"./Form-BHGiHopX.js";import{s as g}from"./Action-BASfP4Hw.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./PropsContextProvider-yY6RzzUT.js";import"./mergeRefs-_uxeg_17.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BoNoL21H.js";import"./useStatic-CLm-J0DW.js";import"./IconWarning-70jApbHx.js";import"./Text-9PUJLXl5.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-1CJ30n_Q.js";import"./utils-DvYDvJ-W.js";import"./LoadingSpinner-BHQSc97o.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./ContextMenuSection-CNNj2Vix.js";import"./Dialog-WcTWvLN6.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./useCollator-Cym9_BaK.js";import"./FocusScope-BCiwkv3e.js";import"./VisuallyHidden-B4AzoGqn.js";import"./TextFieldBase-GVMdq-tN.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-00yIk5F2.js";import"./FieldError-DQg1rr6h.js";import"./FieldDescription-DiuoPF4X.js";import"./Form-eodUc7lY.js";import"./Input-Bwq1TeOx.js";import"./useTextField-CfbNrntM.js";import"./useFormReset-BiMHJINb.js";import"./useFormValidation-9a9nu2yD.js";import"./ReactAriaControlledValueFix-CzEct_qc.js";import"./context-DnKpt6Zm.js";import"./v4-CtRu48qb.js";const V=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

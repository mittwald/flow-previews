import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as j}from"./ActionGroup-BX5yaItJ.js";import{B as p}from"./Button-C5D3ZbLG.js";import{L as o}from"./Label-DNGkpAab.js";import{S as f}from"./Section-B72N-ElC.js";import{T as m}from"./TextField-Da4S393r.js";import{a as N,u as b,F,t as S}from"./Form-CmNmVYtq.js";import{s as g}from"./Action-BcHXQegi.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DApccOIm.js";import"./useStatic-Dvh5S8aV.js";import"./IconWarning-C_dXgkkz.js";import"./Text-CZf9tped.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-H2FrnJWx.js";import"./utils-CEW6KzsL.js";import"./LoadingSpinner-BoRooXD5.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./Button-DbeMfWvm.js";import"./ProgressBar-BwuCIevz.js";import"./Label-i46snhnj.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bwhd-XGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocus-DQVi-kHM.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-D2JRVW0s.js";import"./ContextMenuSection-DxByWojZ.js";import"./Dialog-CUX3Lpsb.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-Di3CJEzN.js";import"./useControlledState-DjePt-lg.js";import"./Collection-1W2nMlzD.js";import"./CollectionBuilder-BA6UKfGt.js";import"./Separator-CS3AZFDu.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./TextFieldBase-D5ddhlAG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BcUarTjp.js";import"./FieldError-CSoyHznZ.js";import"./FieldDescription-CgVPFufB.js";import"./Form-Ce06eXuO.js";import"./Input-CDnAdcih.js";import"./useTextField-DOdnF9jK.js";import"./useFormReset-Cri5RZCQ.js";import"./useFormValidation-Ck8Kc0sM.js";import"./ReactAriaControlledValueFix-DrXiRobm.js";import"./context-Ci9m7_Nm.js";import"./v4-CtRu48qb.js";const V=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await g(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

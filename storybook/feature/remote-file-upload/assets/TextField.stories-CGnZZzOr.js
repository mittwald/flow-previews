import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-BX5yaItJ.js";import{B as f}from"./Button-nLOUeIYJ.js";import{L as m}from"./Label-CvAEyXQc.js";import{S as j}from"./Section-CHBd8Rxq.js";import{T as n}from"./TextField-BDFJllcH.js";import{a as g,u as b,F,t as S}from"./Form-Bf7-XU2T.js";import{s as y}from"./Action-BcHXQegi.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DApccOIm.js";import"./useStatic-Dvh5S8aV.js";import"./IconWarning-C_dXgkkz.js";import"./Text-acTHRGjJ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-PWuSNm-G.js";import"./utils-C22QCCbL.js";import"./LoadingSpinner-BoRooXD5.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./Button-CvRwfedC.js";import"./ProgressBar-CWMH1Kpx.js";import"./Label-DKfobBxX.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bwhd-XGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocus-DQVi-kHM.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-7WyUSQpO.js";import"./ContextMenuSection-CMS8qi4B.js";import"./Dialog-BroBw1Jq.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CZdmdrug.js";import"./useControlledState-DjePt-lg.js";import"./Collection-BAXYBWcT.js";import"./CollectionBuilder-BP3fHMQL.js";import"./Separator-_mK8Veof.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./TextFieldBase-YyHHvKti.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Bhr3DTnb.js";import"./FieldError-BNWc2UXg.js";import"./FieldDescription-t1_GWMpp.js";import"./Form-Ce06eXuO.js";import"./Input-CjZe9lfS.js";import"./useTextField-CU3Xanqw.js";import"./useFormReset-Cri5RZCQ.js";import"./useFormValidation-Ck8Kc0sM.js";import"./context-Ci9m7_Nm.js";import"./v4-CtRu48qb.js";const V=L("submit"),qe={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},i={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ge=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ge as __namedExportsOrder,qe as default};

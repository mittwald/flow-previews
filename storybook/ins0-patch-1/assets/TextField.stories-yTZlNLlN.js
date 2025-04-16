import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-BSzUWElk.js";import{B as f}from"./Button-DwgkhfFv.js";import{L as m}from"./Label-Ccht5eDB.js";import{S as j}from"./Section-Devnga4A.js";import{T as n}from"./TextField-nauLyfQY.js";import{a as g,u as b,F,t as S}from"./Form-DSNXfIMG.js";import{s as y}from"./Action-BfuzMKoN.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./clsx-B-dksMZM.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./useStatic-CZNshcmv.js";import"./IconWarning-B9HL9CFH.js";import"./Text-ilWQSh2o.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-WoclspSc.js";import"./utils-Df1au6pS.js";import"./LoadingSpinner-GJE4fldi.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrVJGper.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./ContextMenuSection-CuRIPxil.js";import"./Dialog-DGCaVP1m.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./useCollator-gRp1mHBo.js";import"./FocusScope-DN1fuaqe.js";import"./VisuallyHidden-D7VTLdOh.js";import"./TextFieldBase-Dz5vW8_0.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Egs4LnTH.js";import"./FieldError-Cz4aM9kS.js";import"./FieldDescription-h80YvCXc.js";import"./Form-BxoNbjqJ.js";import"./Input-Bw24jdWy.js";import"./useTextField-Dw0gyLlm.js";import"./useFormReset-McAVcQ-S.js";import"./useFormValidation-CX89bhxE.js";import"./context-BJd9A0SI.js";import"./v4-CtRu48qb.js";const V=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},i={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ee=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ee as __namedExportsOrder,Ge as default};

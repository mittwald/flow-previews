import{j as e}from"./iframe-DdrpCK7O.js";import{A as l}from"./ActionGroup-CZjBKbuV.js";import{B as p}from"./Button-DMAlCpIp.js";import{L as o}from"./Label-icuqrMlJ.js";import{S as c}from"./Section-B60whbJQ.js";import{T as m}from"./TextField-C77c2lU6.js";import{a as j,u as d,F as u,t as h}from"./Form-D3UfobUI.js";import{s as f}from"./Action-gNhXMKos.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D7vgPX0T.js";import"./useStatic-BgXEq_zL.js";import"./IconWarning-lf4U_i6L.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./Text-Diya8EQq.js";import"./utils-jbl8fYpp.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./context-BHbmanCt.js";import"./Button-TD7SThT2.js";import"./ProgressBar-DX53PXke.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./useFocus-DysN_qPg.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocusable-CpPH01B7.js";import"./ContextMenuSection-B9J-8lhi.js";import"./Dialog-B-Srzcok.js";import"./RSPContexts-C1d3DcZT.js";import"./OverlayArrow-Igqyksxq.js";import"./useControlledState-N3OdDP8Q.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./Input-BQD-OzUK.js";import"./SearchField-Noy99wMh.js";import"./FieldError-ENGkQJvk.js";import"./Form-BaMTKeVV.js";import"./Group-7fH98enb.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./TextField-l3Z8KRyH.js";import"./SelectionManager-D2bv-DGd.js";import"./useEvent-Bo6FRXFm.js";import"./useCollator-uOsZKEYD.js";import"./FocusScope-DAuqHH8A.js";import"./VisuallyHidden--_7cmU_k.js";import"./TextFieldBase-wU6hYWtu.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CvYAv6kd.js";import"./FieldDescription-Bk8ggkBm.js";import"./ReactAriaControlledValueFix-DfJe_EDn.js";import"./context-CvEBZO7B.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,x=b("submit"),Le={title:"Integrations/React Hook Form/TextField",component:j,render:()=>{const s=async n=>{await f(1500),x(n)},t=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=h();return e.jsx(u,{form:t,onSubmit:s,children:e.jsxs(c,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(l,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{x(n)},t=d({defaultValues:{name:""}}),r=h();return e.jsx(u,{form:t,onSubmit:s,children:e.jsxs(c,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(l,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const _e=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,_e as __namedExportsOrder,Le as default};

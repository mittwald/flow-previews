import{j as e}from"./iframe-D_4x6qMj.js";import{A as j}from"./ActionGroup-BXfiOlv4.js";import{B as l}from"./Button-CEOuDC8N.js";import{L as t}from"./Label-DYejL5eD.js";import{S as f}from"./Section-D4gOspAt.js";import{T as n}from"./TextField-C-YGnD6l.js";import{a as V,u as b,F,t as S}from"./Form-D6PyxozE.js";import{s as g}from"./Action-B-FwCqpK.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-NuufWXWm.js";import"./useStatic-BjYYLPCu.js";import"./IconWarning-Dzi10vRl.js";import"./Text-CweuBtPf.js";import"./browser-CZBg7HNp.js";import"./EmulatedBoldText-B9kAgGNC.js";import"./Text-Cu7PdI7W.js";import"./utils-xe5YSam6.js";import"./LoadingSpinner-YiUTGVQG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./context-DM98rbVc.js";import"./Button-CpmoBq4h.js";import"./ProgressBar-CJC6Hhu1.js";import"./Label-CCRaVzEI.js";import"./Hidden-B0gkrfj6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CiC867Ap.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9nt0YbM.js";import"./useFocus-Drnb5e9K.js";import"./useFocusRing-TvNskxef.js";import"./useFocusable-B8Ri4aea.js";import"./ContextMenuSection-C8JEahQ3.js";import"./Dialog-DPQkTFHJ.js";import"./RSPContexts-bNEpgRFQ.js";import"./OverlayArrow-CvQNm9iK.js";import"./useControlledState-CYhMOmxg.js";import"./Collection-CnzW5hBw.js";import"./CollectionBuilder-NsEnfSHY.js";import"./Separator-DqWrBJRs.js";import"./Group-DiVNF80n.js";import"./SearchField-FNUBcSFK.js";import"./FieldError-DwM-vJJl.js";import"./Form-D0g69-ep.js";import"./useTextField-U9hEKPZN.js";import"./useFormReset-Bck6lqok.js";import"./TextField-DSJ_5HB7.js";import"./useEvent-CxdF7c9o.js";import"./SelectionManager-Dt4Zb6ag.js";import"./useCollator-Bn9eJ8f5.js";import"./FocusScope-CncZTdzF.js";import"./VisuallyHidden-tZR9lL9G.js";import"./TextFieldBase-8Iyer9w-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B9c3ag_Q.js";import"./FieldDescription-CeF2d92u.js";import"./ReactAriaControlledValueFix-Co9Cp--Q.js";import"./context-BMDWm5Qc.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),we={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(l,{type:"reset",children:"Reset"}),e.jsx(l,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(l,{type:"submit",children:"Submit"})})]})})}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-CbwCPhjt.js";import{A as j}from"./ActionGroup-DAXGCV3G.js";import{B as p}from"./Button-nOGOhIJH.js";import{L as o}from"./Label-LAkLliwq.js";import{S as f}from"./Section-j9Fbm8Ks.js";import{T as n}from"./TextField-0zAvqNk2.js";import{a as N,u as b,F,t as S}from"./Form-NG31Okbr.js";import{s as O}from"./Action-C2KK5_kv.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B5o4vquU.js";import"./useStatic-CNtjMAIH.js";import"./IconWarning-B6sLHyS3.js";import"./Text-Ci_Uq_zV.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";import"./Text-Bo_2a3q0.js";import"./utils-DoFRGSuI.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./context-DGTw6Ntc.js";import"./Button-DQX_QvYf.js";import"./ProgressBar-Boef7pj0.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZwWLEEp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B0jvTCtV.js";import"./useFocus-BeWrqrnh.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./ContextMenuSection-AwsY5DNE.js";import"./Dialog-BLGTqvvx.js";import"./RSPContexts-CJnpvChB.js";import"./OverlayArrow-CBC8qT36.js";import"./useControlledState-vYcp2K1J.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./Group-DlZG06gX.js";import"./SearchField-WLounB_6.js";import"./FieldError-WwADG8x9.js";import"./Form-8EM0qQv2.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./TextField-5B8lnaMV.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./useCollator-CAu6FifQ.js";import"./FocusScope-CmGH9Vi6.js";import"./VisuallyHidden-DvTk0uSk.js";import"./TextFieldBase-DbsFqPI7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-q3vdaDa_.js";import"./FieldDescription-8zvI-l_0.js";import"./ReactAriaControlledValueFix-w1wi2MQY.js";import"./context-zAWxkEGj.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

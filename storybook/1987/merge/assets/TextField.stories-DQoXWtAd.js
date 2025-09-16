import{j as e}from"./iframe-DhBjVFTT.js";import{A as j}from"./ActionGroup-BuAUu5gQ.js";import{B as l}from"./Button-Dt7yciC3.js";import{L as t}from"./Label-CYVPNsy_.js";import{S as f}from"./Section-Bi6d6L_y.js";import{T as n}from"./TextField-B_XttPQ0.js";import{a as V,u as b,F,t as S}from"./Form-Bdiu5ga7.js";import{s as g}from"./Action-D5bbeFf7.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-C52LfH-w.js";import"./useStatic-b8Yzhzvr.js";import"./IconWarning-BnanZbEc.js";import"./Text-DF-6yo40.js";import"./browser-C93HlYrv.js";import"./EmulatedBoldText-BWS0giPu.js";import"./Text-BCOK263g.js";import"./utils-BiTM62RC.js";import"./LoadingSpinner-HTsZz-Eh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./context-BcZ3stI5.js";import"./Button-ClnqUudF.js";import"./ProgressBar-wpu_Jmey.js";import"./Label-9p36wJlw.js";import"./Hidden-CPEF8tx-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cy7W7M25.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IeWuLCB9.js";import"./useFocus-Boz126Wy.js";import"./useFocusRing-CZOlFmxO.js";import"./useFocusable-t-PCv4_E.js";import"./ContextMenuSection-CT3iYxF3.js";import"./Dialog-BVFVztxJ.js";import"./RSPContexts-CwPCOUNA.js";import"./OverlayArrow-CEwR5798.js";import"./useControlledState-Cf0EFMq_.js";import"./Collection-BOa2gfjn.js";import"./CollectionBuilder-C5ynp6as.js";import"./Separator-LVnLAfMb.js";import"./Group-DbR3J14H.js";import"./SearchField-o8QMGYZs.js";import"./FieldError-NbMb9-3J.js";import"./Form-CStdbKj5.js";import"./useTextField-CmDnLbvp.js";import"./useFormReset-CLUGxJas.js";import"./TextField-BjhwsOaA.js";import"./useEvent-CK4Bm0IT.js";import"./SelectionManager-TQlp0lcm.js";import"./useCollator-Ds09yMoF.js";import"./FocusScope-Cxsex6N2.js";import"./VisuallyHidden-BaY3Aahk.js";import"./TextFieldBase-2Xjpboio.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B3yibmjV.js";import"./FieldDescription-BYEOk6pt.js";import"./ReactAriaControlledValueFix-v6pyw84W.js";import"./context-DD9eHGwL.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),we={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(l,{type:"reset",children:"Reset"}),e.jsx(l,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(l,{type:"submit",children:"Submit"})})]})})}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

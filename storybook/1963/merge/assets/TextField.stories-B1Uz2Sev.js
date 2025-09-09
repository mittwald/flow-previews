import{j as e}from"./iframe-DVH1JXtP.js";import{A as j}from"./ActionGroup-BNnyxEGB.js";import{B as p}from"./Button-DSdtNwsI.js";import{L as o}from"./Label-CxrJqwXs.js";import{S as f}from"./Section-QPeHJ69O.js";import{T as n}from"./TextField-5ZaoMj6K.js";import{a as N,u as b,F,t as S}from"./Form-BpB0g6Oe.js";import{s as O}from"./Action-Dfm0OsG2.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B8kYKXqG.js";import"./useStatic-DdpPKhEz.js";import"./IconWarning-CU_Jn-Rh.js";import"./Text-D1P9H2_H.js";import"./browser-C28Fm9d0.js";import"./EmulatedBoldText-Bdvunp4L.js";import"./Text-CBJ04nMy.js";import"./utils-BK8baG-i.js";import"./LoadingSpinner-BkBLmddP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./context-CdYfmHmn.js";import"./Button-DzMSo0AA.js";import"./ProgressBar-BUKyhVQw.js";import"./Label-CMyz7O-I.js";import"./Hidden-weVCu2TA.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-NP7-116U.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeW5A3Oi.js";import"./useFocus-CQVh66mU.js";import"./useFocusRing-DRg_t-7O.js";import"./useFocusable-T2p-jFMn.js";import"./ContextMenuSection-CAJ8w-gs.js";import"./Dialog-CmRE6s2J.js";import"./RSPContexts-B3CI5xG8.js";import"./OverlayArrow-ChkDdsgW.js";import"./useControlledState-Urxw2XXp.js";import"./Collection-D1ordEmx.js";import"./CollectionBuilder-ChFPkv_k.js";import"./Separator-QeHbXW8z.js";import"./Group-DXbOZXZb.js";import"./SearchField-BBggbv2v.js";import"./FieldError-DwXG4Veb.js";import"./Form-BPwJmxNt.js";import"./useTextField-qeWtBHoH.js";import"./useFormReset-rRCeDrNW.js";import"./TextField-DIPy1Cq_.js";import"./useEvent-D6G3dElA.js";import"./SelectionManager-olLeBgyH.js";import"./useCollator-DOzXEcud.js";import"./FocusScope-BiiCP1_E.js";import"./VisuallyHidden-DtF4wZC2.js";import"./TextFieldBase-BSZa_ur9.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-4LhCBGmq.js";import"./FieldDescription-Dh2sYvVC.js";import"./ReactAriaControlledValueFix-DWpTaiEI.js";import"./context-agOgnAGz.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as x}from"./ActionGroup-CSzbvW_E.js";import{B as f}from"./Button-Dhpj9FRh.js";import{L as m}from"./Label-DuWaARVY.js";import{S as j}from"./Section-YW-6nUkS.js";import{T as n}from"./TextField-uvDX0XvK.js";import{a as g,u as b,F,t as S}from"./Form-DO-9hbU-.js";import{s as y}from"./Action-VjMgs9Db.js";import{a as L}from"./index-B-lxVbXh.js";import"./index-n-xcLTj3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./clsx-B-dksMZM.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-huFUK6tI.js";import"./useStatic-bVMyw5l7.js";import"./IconWarning-BT9Vk3ZR.js";import"./Text-CvWN1dQn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";import"./utils-CHEN54dH.js";import"./LoadingSpinner-V_OKVJm3.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./ContextMenuSection-B_OuJeoD.js";import"./Dialog-DMm5cJWQ.js";import"./RSPContexts-DXggXklQ.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./useControlledState-B6lyO5nT.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./useCollator-DYp7eA3k.js";import"./FocusScope-VprgOmaE.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./TextFieldBase-CNaFa31t.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DTHL6QGh.js";import"./FieldError-D-X35EJ8.js";import"./FieldDescription-DuCTkKO2.js";import"./Form-ChuGhSFG.js";import"./Input-CzLAkyht.js";import"./useTextField-CbF7aTVM.js";import"./useFormReset-DmN8pfru.js";import"./useFormValidation-BxWfN6mX.js";import"./context-ah73-6JJ.js";import"./v4-CtRu48qb.js";const V=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:g,render:()=>{const s=async o=>{await y(1500),V(o)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(m,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}},i={},a={render:()=>{const s=o=>{V(o)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(j,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:o=>{t.setValue("name",o.toUpperCase())},children:e.jsx(m,{children:"Name"})})}),e.jsx(x,{children:e.jsx(f,{type:"submit",children:"Submit"})})]})})}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-DqL79zQf.js";import{A as j}from"./ActionGroup-ByAiU6V0.js";import{B as p}from"./Button-QUsEiN5S.js";import{L as o}from"./Label-BLSzr0Yv.js";import{S as f}from"./Section-CsLDUiWG.js";import{T as n}from"./TextField-COMJuL88.js";import{a as N,u as b,F,t as S}from"./Form-DhQSQckz.js";import{s as O}from"./Action-BupBWbcG.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Baj1oFA-.js";import"./useStatic-iq1b9ojT.js";import"./IconWarning-B2WreSxS.js";import"./Text-M86zJQcf.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./Text-zdoGkENQ.js";import"./utils-z68HW5Om.js";import"./LoadingSpinner-BTTfXDBN.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./context-CSgowZ2Z.js";import"./Button-BgVR6Xai.js";import"./ProgressBar-CH989tir.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BjvlKqLd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CO3SG6lx.js";import"./useFocus-BD5ovWzl.js";import"./useFocusRing-CbrFyu86.js";import"./useFocusable-B73WrcgM.js";import"./ContextMenuSection-Bc2cNWBe.js";import"./Dialog-DObE5EO4.js";import"./RSPContexts-9NN5zZW2.js";import"./OverlayArrow-5jZt71m1.js";import"./useControlledState--BvK6IW4.js";import"./Collection-8wT1TvCk.js";import"./CollectionBuilder-CvELNXxX.js";import"./Separator-DaCZt9C1.js";import"./Group-DPDytGTQ.js";import"./SearchField-C7aME9MG.js";import"./FieldError-DNlWKJE8.js";import"./Form-R5LTMmOa.js";import"./useTextField-Cpjxci2I.js";import"./useFormReset-CsKPjgKa.js";import"./TextField-2CLvDbyV.js";import"./useEvent-nuKRicCO.js";import"./SelectionManager-Jx2Za9Eq.js";import"./useCollator-DUL5JuJR.js";import"./FocusScope-DbqtD9id.js";import"./VisuallyHidden-BQckF0OS.js";import"./TextFieldBase-BmJwQmuK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bx1fPtVC.js";import"./FieldDescription-BHFEL7TK.js";import"./ReactAriaControlledValueFix-BCNQYcDJ.js";import"./context-J1QRUcAO.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-TjmQ4-hc.js";import{A as j}from"./ActionGroup-C9cQEwIw.js";import{B as p}from"./Button-CjK60Gy6.js";import{L as o}from"./Label-_xLVsaVJ.js";import{S as f}from"./Section-qCbPSOEE.js";import{T as n}from"./TextField-B0xqzoUq.js";import{a as N,u as b,F,t as S}from"./Form-CGbkK6YN.js";import{s as O}from"./Action-B2WqKUlH.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CibZr1oe.js";import"./useStatic-r5kIO8BX.js";import"./IconWarning-1inC7auC.js";import"./Text-B1ccA9_H.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Text-C2aObJTh.js";import"./utils-DD1RW9f4.js";import"./LoadingSpinner-NnONiqHm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./context-R7iXnnvL.js";import"./Button-ZmvxJ__-.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BK59oRjy.js";import"./useFocus-Bp-EL3Xp.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./ContextMenuSection-C2WKk6Hp.js";import"./Dialog-BYQB8QOB.js";import"./RSPContexts-DCrZu0Mf.js";import"./OverlayArrow-Dfaoqrsw.js";import"./useControlledState-Cdf0eZg6.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./Group-9f-8oWvR.js";import"./SearchField-DwL5wZDS.js";import"./FieldError-Bn62nal0.js";import"./Form-Bwnncz0S.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./TextField-BMUXjdB8.js";import"./useEvent-lWEWCECp.js";import"./SelectionManager-uQED9UcT.js";import"./useCollator-mmVXCJGc.js";import"./FocusScope-DiLIjyrf.js";import"./VisuallyHidden-EAsiRlUn.js";import"./TextFieldBase-CdBlibz_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DnzwKCtL.js";import"./FieldDescription-Cp16D2cG.js";import"./ReactAriaControlledValueFix-DdZDRweO.js";import"./context-Brmjsdqe.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

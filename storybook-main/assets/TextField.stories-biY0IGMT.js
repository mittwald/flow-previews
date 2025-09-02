import{j as e}from"./iframe-cK4MHKim.js";import{A as j}from"./ActionGroup-R8BjU1ZZ.js";import{B as p}from"./Button-tRyoiE64.js";import{L as o}from"./Label-DBVrm7rf.js";import{S as f}from"./Section-BzkOS2ta.js";import{T as n}from"./TextField-BvITn9QN.js";import{a as N,u as b,F,t as S}from"./Form-BH0gpjFQ.js";import{s as O}from"./Action-Bmtfn7OI.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Dq1WdNDk.js";import"./useStatic-CeVBJjTX.js";import"./IconWarning-DC4_CpRf.js";import"./Text-FUpRzF42.js";import"./browser-DLRwst_8.js";import"./EmulatedBoldText-DX7VDiw5.js";import"./Text-CdSAgC2T.js";import"./utils-DNizpOE3.js";import"./LoadingSpinner-Be0PLLzY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./context-BROjSY2y.js";import"./Button-j0J6t_ue.js";import"./ProgressBar-D0PLg1H8.js";import"./Label-0KSLZDSS.js";import"./Hidden-DPS3aF7x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CcxHXXo7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DxZYFGgJ.js";import"./useFocus-PfRPzZF9.js";import"./useFocusRing-CfOQ7Cy2.js";import"./useFocusable-D26CMdgI.js";import"./ContextMenuSection-DyxtMrK9.js";import"./Dialog-BMNDou9L.js";import"./RSPContexts-DhgL2OGs.js";import"./OverlayArrow-Dw1wGyeW.js";import"./useControlledState-BIGan-OB.js";import"./Collection-DDFYkT_e.js";import"./CollectionBuilder-DWibNHzH.js";import"./Separator-C_60SsjZ.js";import"./Group-zgF9gzKV.js";import"./SearchField-BZKVt08V.js";import"./FieldError-DXq6AbFm.js";import"./Form-Bkh8JfAF.js";import"./useTextField-Bd94TOwc.js";import"./useFormReset-8LX1mmkH.js";import"./TextField-B4j1tk_1.js";import"./useEvent-BXCZp1cQ.js";import"./SelectionManager-D8Yp4yhw.js";import"./useCollator-CxGNCHfH.js";import"./FocusScope-D00_KgQG.js";import"./VisuallyHidden-Bp326u91.js";import"./TextFieldBase-BlOJTLnL.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-lgMlex5D.js";import"./FieldDescription-DPhI7FEj.js";import"./ReactAriaControlledValueFix-Dit9VqUU.js";import"./context-BAX0bMt2.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

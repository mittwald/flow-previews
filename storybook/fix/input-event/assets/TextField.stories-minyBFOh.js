import{j as e}from"./iframe-Bl4Z707A.js";import{A as j}from"./ActionGroup-C1Fczimo.js";import{B as p}from"./Button-CAeJc8Z4.js";import{L as o}from"./Label-CPCFvVkX.js";import{S as f}from"./Section-XBpvj9Ol.js";import{T as n}from"./TextField-CQcBPesq.js";import{a as N,u as b,F,t as S}from"./Form-QL7RCKvX.js";import{s as O}from"./Action-Xhvrngkc.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CiRXGJlD.js";import"./useStatic-CbeUAfqO.js";import"./IconWarning-BzUaRhpv.js";import"./Text-NIRm_0Gu.js";import"./browser-CQSXz4Vb.js";import"./EmulatedBoldText-BAGT2_Bu.js";import"./Text-DhMTI7iw.js";import"./utils-B5rgjLnQ.js";import"./LoadingSpinner-RrbLYMgz.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./context-DCYh_tbU.js";import"./Button-H_Ok05n0.js";import"./ProgressBar-Cbl5iDEF.js";import"./Label-G_0fE9c9.js";import"./Hidden-CHUtH-RP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CUTayXOd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cab7A3iT.js";import"./useFocus-CBM9z24y.js";import"./useFocusRing-CE5kArcs.js";import"./useFocusable-D6HN1uNY.js";import"./ContextMenuSection-NKfRt_X1.js";import"./Dialog-DBqZXEFY.js";import"./RSPContexts-Cn8bYmaC.js";import"./OverlayArrow-BA0zDJHh.js";import"./useControlledState-CTldHWvB.js";import"./Collection-Ujk4Ju59.js";import"./CollectionBuilder-OReuuDhF.js";import"./Separator-CHUHKizG.js";import"./Group-C53hMQbG.js";import"./SearchField-C3XyOz-3.js";import"./FieldError-C8A_yU5e.js";import"./Form-Ch0FWOcT.js";import"./useTextField-B3Re73jf.js";import"./useFormReset-knu-9Cub.js";import"./TextField-BXBGjaTA.js";import"./useEvent-Bs-KGgDm.js";import"./SelectionManager-BhBrKG28.js";import"./useCollator-BR3Iakvu.js";import"./FocusScope-DPadz4__.js";import"./VisuallyHidden-DoxRRjGn.js";import"./TextFieldBase-BVBDG2Lv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-QhX9CBNs.js";import"./FieldDescription-BMYWLYwx.js";import"./ReactAriaControlledValueFix-_ARDmRvQ.js";import"./context-BTbq7RPj.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

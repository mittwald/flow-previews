import{j as e}from"./iframe-_AHHYLe8.js";import{A as j}from"./ActionGroup-CEp8kbRn.js";import{B as p}from"./Button-DpBb7dXP.js";import{L as o}from"./Label-CmGN6q6h.js";import{S as f}from"./Section-DvRvDn3Z.js";import{T as n}from"./TextField-gezqTmSV.js";import{a as N,u as b,F,t as S}from"./Form-CmCMiWEO.js";import{s as O}from"./Action-DvAxFpQR.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-NbcIocov.js";import"./useStatic-D0qKbiKB.js";import"./IconWarning-CK_fmTss.js";import"./Text-Cmtv_jKA.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./Text-Bojy_plc.js";import"./utils-q-IwrKfZ.js";import"./LoadingSpinner-DRmJrHkB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./context-CUyryTbq.js";import"./Button-C5j2D-85.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-lAnn0GIu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSHe1cmn.js";import"./useFocus-Cc4rXbR6.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./ContextMenuSection-BJaXJ97q.js";import"./Dialog-CHTGTlq0.js";import"./RSPContexts-D87DkYMD.js";import"./OverlayArrow-QRBdoqIe.js";import"./useControlledState-Ck4hxHjX.js";import"./Collection-CCW92VXm.js";import"./CollectionBuilder-ZwH2Lf2j.js";import"./Separator-Dnk3E0kw.js";import"./Group-DIV0b_ks.js";import"./SearchField-BDX95NUI.js";import"./FieldError-7uZDpm9k.js";import"./Form-1aZb-GsH.js";import"./useTextField-DtgE5gD9.js";import"./useFormReset-BXtaLb8e.js";import"./TextField-D1FfviRQ.js";import"./useEvent-Chot4vqs.js";import"./SelectionManager-BurdSYdt.js";import"./useCollator-motRCGH3.js";import"./FocusScope-s_Xca6uO.js";import"./VisuallyHidden-WDbGyUVH.js";import"./TextFieldBase-Bv0Q94uv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DuMkkaZm.js";import"./FieldDescription-D3vrobdh.js";import"./ReactAriaControlledValueFix-BATfbmZI.js";import"./context-CggRfmhL.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

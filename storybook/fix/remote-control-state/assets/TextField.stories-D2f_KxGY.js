import{j as e}from"./iframe-CTS_vBBR.js";import{A as j}from"./ActionGroup-Cc1FZ34E.js";import{B as p}from"./Button-BCm6-QqX.js";import{L as o}from"./Label-CTpKXefw.js";import{S as f}from"./Section-CYDGz1Y4.js";import{T as m}from"./TextField-BHvC9jdG.js";import{a as N,u as b,F,t as S}from"./Form-BhnDceOw.js";import{s as O}from"./Action--huDMFDn.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CnqxasHi.js";import"./useStatic-DjQWr1Kz.js";import"./IconWarning-fu5B3ESI.js";import"./Text-BLj2iCUU.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";import"./Text-obNOHtVo.js";import"./utils-jZBUW_kd.js";import"./LoadingSpinner-B_uSEYnz.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./context-bQBwJTVW.js";import"./Button-Ckv0OeVG.js";import"./ProgressBar-DhYw7mhF.js";import"./Label-Bn0NFPwe.js";import"./Hidden-BZmRwcL-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-ByTznw_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Wiw2pSFm.js";import"./useFocus-TOgYA3QQ.js";import"./useFocusRing-BBi2D29q.js";import"./useFocusable-CKYlOhg9.js";import"./ContextMenuSection-D2rMPrbP.js";import"./Dialog-Dh-wheuD.js";import"./RSPContexts-Crw6uEAA.js";import"./OverlayArrow-DHDCgEG9.js";import"./useControlledState-Bfc6Wiov.js";import"./Collection-D8tFv91v.js";import"./CollectionBuilder-C2lc3lzM.js";import"./Separator-Cm_kwdR6.js";import"./Input-DWYalt4t.js";import"./SearchField-Bligs5CS.js";import"./FieldError-BrC_mw1K.js";import"./Form-CUREqm_L.js";import"./Group-DV2ZKREv.js";import"./useTextField-B5AiFiGq.js";import"./useFormReset-CIT6qu5J.js";import"./TextField-Dg76NbVN.js";import"./SelectionManager-D97bCv4u.js";import"./useEvent-B-FqLBei.js";import"./useCollator-SPBrq1bE.js";import"./FocusScope-B79Zy1Lp.js";import"./VisuallyHidden-C7PlrqLT.js";import"./TextFieldBase-Bp9rCj-c.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B7bjxi-T.js";import"./FieldDescription-dv_Z4MiL.js";import"./ReactAriaControlledValueFix-mH1PGZwl.js";import"./context-Qd68n4pj.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};

import{j as e}from"./iframe-CIziUxb4.js";import{A as j}from"./ActionGroup-gPOC8Udj.js";import{B as p}from"./Button-Bo5QyJiI.js";import{L as o}from"./Label-CDKeaBWT.js";import{S as f}from"./Section-CzTHUw0w.js";import{T as m}from"./TextField-B2Jcz4Ol.js";import{a as N,u as b,F,t as S}from"./Form-DuQp_24T.js";import{s as O}from"./Action-D9fRtCz0.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bm-tl-k-.js";import"./useStatic-jzgjWO-I.js";import"./IconWarning-Bo3R4dY7.js";import"./Text-BbvPR7fy.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Text-CgaJS0Gc.js";import"./utils-CDtaCsrA.js";import"./LoadingSpinner-CF4f6GZw.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./context-COqsJpPE.js";import"./Button-Cv6Z8Boo.js";import"./ProgressBar-Cyf_qqmn.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-xKHqVDKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBbw6zuw.js";import"./useFocus-C2EjpkOi.js";import"./useFocusRing-GixRvSCg.js";import"./useFocusable-CTkb3k3n.js";import"./ContextMenuSection-YXAca86g.js";import"./Dialog-DrnAiCXy.js";import"./RSPContexts-C-PXoOC4.js";import"./OverlayArrow-Crxssx6c.js";import"./useControlledState-DVvxwSwc.js";import"./Collection-DWx577Su.js";import"./CollectionBuilder-juJreXU3.js";import"./Separator-DwuryqiD.js";import"./Input-BwarHJUi.js";import"./SearchField-B6_Arn2l.js";import"./FieldError-D98nnMcy.js";import"./Form-B_FAPEGw.js";import"./Group-OTUHyQEq.js";import"./useTextField-a1-urwSv.js";import"./useFormReset-TpB1RScY.js";import"./TextField-BmMhD-pd.js";import"./SelectionManager-DkqMHGWK.js";import"./useEvent-CS1uc1JE.js";import"./useCollator-Bw9Jdjt0.js";import"./FocusScope-BxmYTtWO.js";import"./VisuallyHidden-D_XOb9iP.js";import"./TextFieldBase-Cw_Qte1l.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Dr7dAG6C.js";import"./FieldDescription-A2U3bIvB.js";import"./ReactAriaControlledValueFix-dweYB-6u.js";import"./context-DRI9dj_K.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

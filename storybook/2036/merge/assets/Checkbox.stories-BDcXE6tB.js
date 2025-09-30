import{j as r}from"./iframe-lUo2nGnz.js";import{a as l,u as x,F as h,t as b}from"./Form-DCV6t3hU.js";import{B as m}from"./Button-BJSwvuxb.js";import{S as T}from"./Section-BmAZdHSz.js";import{A as S}from"./ActionGroup-DNEOJX-0.js";import{s as f}from"./Action-CDVhK15_.js";import{C as i}from"./Checkbox-DhniAQWg.js";import{T as g}from"./Text-BGPM5sar.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./Form-CNo_OXXk.js";import"./useFormValidation-DhAPE9Wk.js";import"./EmulatedBoldText-DD5sDuaA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),s=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"acceptTerms",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsDefaultValue",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(i,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(i,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Checkbox>
            <Text>Text</Text>
          </Checkbox>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Dr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Dr as __namedExportsOrder,kr as default};

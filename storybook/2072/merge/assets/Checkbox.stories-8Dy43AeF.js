import{j as r}from"./iframe-CqjcYzEy.js";import{a as l,u as x,F as h,t as b}from"./Form-B9tr9_nz.js";import{B as m}from"./Button-_n3f2tJI.js";import{S as T}from"./Section-JW2VQrnX.js";import{A as S}from"./ActionGroup-D6A6si9S.js";import{s as f}from"./Action-BV8ECr9I.js";import{C as s}from"./Checkbox-DcMoh04r.js";import{T as g}from"./Text-C88kvj5Y.js";import"./index-Cun1SEai.js";import"./dynamic-B6VmRDv6.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./clsx-B-dksMZM.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./browser-BlhuXvad.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./useStatic-B0fjiaVy.js";import"./context-BZQvEHSq.js";import"./Form-DnnLWbpp.js";import"./useFormValidation-Jq_wsvSc.js";import"./useToggleState-CKfljIsx.js";import"./useFormReset-BSVvJl_b.js";import"./EmulatedBoldText-CpIdef6b.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Or=["Default","WithFocusAndError"];export{e as Default,o as WithFocusAndError,Or as __namedExportsOrder,Er as default};

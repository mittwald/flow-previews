import{j as r}from"./iframe-DRU2mvvl.js";import{a as l,u as x,F as h,t as b}from"./Form-DXkXYe5Y.js";import{B as m}from"./Button-B0nESNPa.js";import{S as T}from"./Section-BqGqHoUM.js";import{A as S}from"./ActionGroup-D1ho32W2.js";import{s as f}from"./Action-DTfm05Ga.js";import{C as s}from"./Checkbox-Jhz1mBfW.js";import{T as g}from"./Text-CEDtxg_Y.js";import"./index-Cun1SEai.js";import"./dynamic-BlISIwZy.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./clsx-B-dksMZM.js";import"./index-BV-9eFwZ.js";import"./FieldError-DvrKLXyD.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./utils-CFpcVBbf.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./browser-DycDZ9Cy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./useStatic-ZRFoobPh.js";import"./context-BmZA5kUX.js";import"./Form-BR3m4Qab.js";import"./useFormValidation-BPBMmZYe.js";import"./useToggleState-DJNV6eOo.js";import"./useFormReset-BYiU13z5.js";import"./EmulatedBoldText-B-n-Sp9M.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

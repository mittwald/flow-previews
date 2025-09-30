import{j as r}from"./iframe-Dmf5T25c.js";import{a as l,u as x,F as h,t as b}from"./Form-m_PW291X.js";import{B as m}from"./Button-DJAJQ6nX.js";import{S as T}from"./Section-CuethHEJ.js";import{A as S}from"./ActionGroup-L54X6gLb.js";import{s as f}from"./Action-7bo_XniG.js";import{C as s}from"./Checkbox-DigRpMaG.js";import{T as g}from"./Text-DLrkajvz.js";import"./index-Cun1SEai.js";import"./dynamic-Do2mwXEo.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./clsx-B-dksMZM.js";import"./index-C0-6kTd0.js";import"./FieldError-BrbRFqe2.js";import"./IconWarning-1UlzAmnA.js";import"./FieldError-osDHr7AF.js";import"./utils-DsML-bt_.js";import"./Text-DgEV6luH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./context-CfglF3Ge.js";import"./browser-DrFxiFmb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./ContextMenuSection-DC2rWjKA.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./useStatic-B7bUROdd.js";import"./context-DfHcYJaf.js";import"./Form-CioSAe3u.js";import"./useFormValidation-BlVKI6aj.js";import"./useToggleState-BmhNkieC.js";import"./useFormReset-BQs2ByJh.js";import"./EmulatedBoldText-B4ifPFjU.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

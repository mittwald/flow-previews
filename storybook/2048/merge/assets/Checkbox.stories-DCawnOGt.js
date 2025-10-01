import{j as r}from"./iframe-BdvCKsbF.js";import{a as l,u as x,F as h,t as b}from"./Form-C_oFPc-t.js";import{B as m}from"./Button-CEcdxUV1.js";import{S as T}from"./Section-Jzko1FZT.js";import{A as S}from"./ActionGroup-8hqY-sJD.js";import{s as f}from"./Action-CY3HJwZy.js";import{C as s}from"./Checkbox-DA-AMjv9.js";import{T as g}from"./Text-JqEaJ00k.js";import"./index-Cun1SEai.js";import"./dynamic-a4vM_yKz.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./FieldError-CdPfgsKF.js";import"./IconWarning-P52nLd_s.js";import"./FieldError-CxS3H1fm.js";import"./utils-BbupUKpI.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./browser-1fV_VPE3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./ContextMenuSection-BnE57rKt.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./useStatic-PYikJUKS.js";import"./context-CCm7d4ti.js";import"./Form-5t9tGa91.js";import"./useFormValidation-CYJuvObN.js";import"./useToggleState-Dwl8BZhq.js";import"./useFormReset-DGsTBoXq.js";import"./EmulatedBoldText-Bq1I9eFa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

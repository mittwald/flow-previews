import{r as x,j as r}from"./iframe-CFTqgbub.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-BsnX_xmS.js";import{B as d}from"./Button-DYo4uywI.js";import{S as j}from"./Section-DUGYD1S5.js";import{A as b}from"./ActionGroup-CBwjeAhX.js";import{s as u}from"./ActionBatch-D8GPDYy5.js";import{C as t}from"./Checkbox-4VYpHFnM.js";import{F as E}from"./FieldError-CYjuAiBI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-GrVhUXuF.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./clsx-B-dksMZM.js";import"./index-B_-FfeBA.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./ActionGroupView-BE1yaK9j.js";import"./Content-CuF6CEcC.js";import"./Heading-439pSAMO.js";import"./Heading-D2J3_q6l.js";import"./RSPContexts-CFURB7yy.js";import"./utils-B4tY5r2S.js";import"./Text-DGb4Yj-N.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./Modal-bFHglDPM.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./Overlay-BHE1PsiE.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./Dialog-BnZ8dnOj.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./ButtonView-B-4zjQiO.js";import"./Flex-DlegQ8We.js";import"./useRef-Bmtm6YEx.js";import"./ContextMenuSection-C0W18m8x.js";import"./getActionGroupSlot-B6jQShKX.js";import"./useFieldComponent-CbaMz5aY.js";import"./FieldError-DNv3qA2U.js";import"./Form-XRNm8_rd.js";import"./useFormValidation-BPzjnfej.js";import"./useToggleState-CSmxVOAE.js";import"./useFormReset-BbhAN2Ls.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};

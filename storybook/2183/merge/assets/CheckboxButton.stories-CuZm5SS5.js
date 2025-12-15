import{j as r,r as C}from"./iframe-CN4G8qqm.js";import{u as a,F as p}from"./Form-BIBDTt_X.js";import{F as c,t as j}from"./Field-DHx6lHTS.js";import{B as l}from"./Button-Bq80dFyw.js";import{S as B}from"./Section-BzFgBFFU.js";import{A as b}from"./ActionGroup-CwhBesa8.js";import{s as u}from"./Action-Cfr2BBp2.js";import{T as i}from"./Text-0Ubm83r2.js";import{C as m}from"./Content-CVWt400t.js";import{F as E}from"./FieldError-ClazPaCD.js";import{C as d}from"./CheckboxButton-DUSmxty1.js";import{R as h}from"./ResetButton-uasqmqzP.js";import{S as f}from"./SubmitButton-DXpxzH2k.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-D9oGWwUs.js";import"./PropsContextProvider-4OAE62jj.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./context-CcGGjrZQ.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./ContextMenuSection-D61kPd_y.js";import"./lib-90ocxLs-.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./useStatic-CM9-VZa7.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./EmulatedBoldText-moUjmeps.js";import"./FieldError-BYURGtTT.js";import"./IconDanger-BS5-adBO.js";import"./useFieldComponent-TTf0ydYE.js";import"./Activity-BEbOvIp9.js";import"./TranslationProvider-D4PNRj4s.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Checkbox-DVtWS0sd.js";import"./IconCheckboxEmpty-DHcZCbzA.js";import"./Form-CGtio7r9.js";import"./useFormValidation-Dm9_Tt2c.js";import"./useToggleState-D7LYRA75.js";import"./useFormReset-CiTTEZ9A.js";import"./useRef-BiGavIyS.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ar={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Ir as __namedExportsOrder,Ar as default};

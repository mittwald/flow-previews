import{r as C,j as r}from"./iframe-jPI25t47.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-B5ZX2fMA.js";import{B as l}from"./Button-CMdL10Ys.js";import{S as B}from"./Section-wgX4yeQq.js";import{A as b}from"./ActionGroup-19L6oHyS.js";import{s as u}from"./ActionBatch-DVEQdHps.js";import{T as i}from"./Text-CzRKl4Rn.js";import{C as m}from"./CheckboxButton-C_DFFb33.js";import{C as p}from"./Content-KabCAW67.js";import{F as E}from"./FieldError-DPfGZS1P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DcvTJJQa.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./ActionGroupView-BqWWBXhU.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./utils-DssEHlsW.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./LoadingSpinner-DhHtGG23.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./Text-BUiBuDRU.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";import"./browser-BKdBfXKE.js";import"./ContextMenuSection-BG427zDb.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Checkbox-BM574MEP.js";import"./useFieldComponent-CHdLkU8r.js";import"./FieldError-C3mwkvrq.js";import"./Form-BeysAUF2.js";import"./useFormValidation-aAlw1sTR.js";import"./useToggleState-B1STqCKF.js";import"./useFormReset-DGTIvKtn.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};

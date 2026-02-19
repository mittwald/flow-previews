import{r as C,j as r}from"./iframe-DQkRMfo_.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-CYoqNksw.js";import{B as l}from"./Button-CTuc7Sb1.js";import{S as B}from"./Section-L3monAfc.js";import{A as b}from"./ActionGroup-CsHM66H4.js";import{s as u}from"./ActionBatch-CnbeSwOL.js";import{T as i}from"./Text-DZXogYJp.js";import{C as m}from"./CheckboxButton-pwI5vrjY.js";import{C as p}from"./Content-o4sDFduR.js";import{F as E}from"./FieldError-Bk57uQQs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bf6rAVHb.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./clsx-B-dksMZM.js";import"./index-BmRrr2ih.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./ActionGroupView-3Ij1E1q5.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./RSPContexts-Bk8qKDL5.js";import"./utils-Bfb5K-41.js";import"./Modal-CJ5SZ1IH.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./Overlay-Z1E506pH.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./LoadingSpinner-BfuFQdyU.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocusable-BWtjl4YZ.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./Text-BXxFgtol.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";import"./ButtonView-CdT4dZVW.js";import"./Flex-DdCAiEkA.js";import"./useRef-D8jPCy5Y.js";import"./browser-BnHwZVCd.js";import"./ContextMenuSection-CK2JeTTJ.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Checkbox-qcDYRRcl.js";import"./useFieldComponent-DKGKIVkH.js";import"./FieldError-BDV0g7vQ.js";import"./Form-DMHoM5vs.js";import"./useFormValidation-Baae3HaH.js";import"./useToggleState-BXYT-WIx.js";import"./useFormReset-CbTvEeV3.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{r as C,j as r}from"./iframe-C1IdntWq.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-De-Psidt.js";import{B as l}from"./Button-mSWnhOmK.js";import{S as B}from"./Section-AIy1dCAg.js";import{A as b}from"./ActionGroup-BahMWm8O.js";import{s as u}from"./ActionBatch-VQdQXkn7.js";import{T as i}from"./Text-W7h8_LNr.js";import{C as m}from"./CheckboxButton-GPXoxz4H.js";import{C as p}from"./Content-BSdmmpR7.js";import{F as E}from"./FieldError-DsJ8c-ZE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CUpn0zgH.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./ActionGroupView-U73m2CoE.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./RSPContexts-DcVP09I4.js";import"./utils-CNo0qaX0.js";import"./Modal-Cd8QIcZl.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./Overlay-vUOl12kW.js";import"./OverlayContextProvider-Car-oabl.js";import"./LoadingSpinner-C4dBxxC2.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./Dialog-DaGSiRkj.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./Text-CkLpWhuM.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./ButtonView-UjagI0v2.js";import"./Flex-DyCVhYjZ.js";import"./useRef-m9duQCt_.js";import"./browser-WXx3m9ky.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Checkbox-CZlp4DjP.js";import"./useFieldComponent-o_u9PYdj.js";import"./FieldError-DgBT4dcF.js";import"./Form-CijQ_R7m.js";import"./useFormValidation-CloSy7V5.js";import"./useToggleState-DDHVFVTa.js";import"./useFormReset-CaX1fgpZ.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{r as C,j as r}from"./iframe-DepdzLEL.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton--NiDVYNh.js";import{B as l}from"./Button-CNIywMH8.js";import{S as B}from"./Section-Bhu7zDVU.js";import{A as b}from"./ActionGroup-C6xkxQp3.js";import{s as u}from"./ActionBatch-CxGdjV-j.js";import{T as i}from"./Text-DQklyFH_.js";import{C as m}from"./CheckboxButton-DiWvo7Jb.js";import{C as p}from"./Content-BP0iCj4e.js";import{F as E}from"./FieldError-BU6iaS9f.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DyShJQHT.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./clsx-B-dksMZM.js";import"./index-QBVvmMGX.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./ActionGroupView-D0VedWpi.js";import"./Heading-BfiUETdQ.js";import"./Heading-Dfg4FmbO.js";import"./RSPContexts-C4BguXQB.js";import"./utils-7tdA0jB4.js";import"./Modal-BbNl1Qkg.js";import"./useOverlayController-Br9LJhfN.js";import"./useStatic-D2N_z3eO.js";import"./Overlay-CViqvEV6.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./LoadingSpinner-CFbq72U2.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./Dialog-pPKxFXOM.js";import"./Button-BTig9cwD.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BqHqHS4f.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./Text-CHX4WGB5.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./ButtonView-DkAiozhy.js";import"./Flex-DV0RJgp7.js";import"./useRef-DibF1Y9V.js";import"./browser-DxvLCkxH.js";import"./ContextMenuSection-DuMO6oHS.js";import"./getActionGroupSlot-DngwkT4-.js";import"./EmulatedBoldText-MhUupop4.js";import"./Checkbox-By-Cq0Ns.js";import"./useFieldComponent-PSzBC9V7.js";import"./FieldError-BblJXfzn.js";import"./Form-C_wI2Oz7.js";import"./useFormValidation-C9ltsd1k.js";import"./useToggleState-3lRe43ig.js";import"./useFormReset-BQp6BNc9.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

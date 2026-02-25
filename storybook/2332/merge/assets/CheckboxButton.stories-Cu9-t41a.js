import{r as C,j as r}from"./iframe-DewKgIpk.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-Dpl1xNUH.js";import{B as l}from"./Button-DK1DwTQu.js";import{S as B}from"./Section-Cq4fcZ5v.js";import{A as b}from"./ActionGroup-CsnGu6B4.js";import{s as u}from"./ActionBatch-aysWcgWo.js";import{T as i}from"./Text-CAhyjFWz.js";import{C as m}from"./CheckboxButton-DtTEIUoZ.js";import{C as p}from"./Content-DTiR9lwx.js";import{F as E}from"./FieldError-B3PY7-i2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7D0Ds_bm.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./ActionGroupView-CAM-V0fg.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./RSPContexts-CJFisqoy.js";import"./utils-CUPQPHYu.js";import"./Modal-DYibmbrU.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./Overlay-DezOH_1M.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./LoadingSpinner-CskkGazD.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./Dialog-BgAnH5cc.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./Text-CIY7d5XG.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./ButtonView-DU9V458m.js";import"./Flex-Y2OL3ID-.js";import"./useRef-DAA7TMQ_.js";import"./browser-D8jMTJt0.js";import"./ContextMenuSection-v31gfoed.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Checkbox-BHl3qP-8.js";import"./useFieldComponent-D7thqSXy.js";import"./FieldError-BKx1r64I.js";import"./Form-CIigNYkb.js";import"./useFormValidation-CdyRJz3a.js";import"./useToggleState-ru_gTzXX.js";import"./useFormReset-w2Qnh74g.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

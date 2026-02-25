import{r as C,j as r}from"./iframe-n3VOiEf5.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-fxisxfEG.js";import{B as l}from"./Button-gwePC8r8.js";import{S as B}from"./Section-BlfcbXvq.js";import{A as b}from"./ActionGroup-DCg0s9cx.js";import{s as u}from"./ActionBatch-B7NWJImq.js";import{T as i}from"./Text-CwVjZxCT.js";import{C as m}from"./CheckboxButton-D-WHK5eS.js";import{C as p}from"./Content-D1DgylIT.js";import{F as E}from"./FieldError-DRCS1Gz9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DgHDUJEW.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./ActionGroupView-CZAOrVnR.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./RSPContexts-DzW0xATd.js";import"./utils-BTX3Dk-t.js";import"./Modal-B-xEtS1E.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./Overlay-DXNeIFBA.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./LoadingSpinner-BZywMYAM.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./Text-BWj5dCJ1.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./ButtonView-CrXGo-AL.js";import"./Flex-i6CO50OO.js";import"./useRef-D3Fh0Wul.js";import"./browser-DXFXi5M2.js";import"./ContextMenuSection-MotZbouy.js";import"./getActionGroupSlot-CP2KeStW.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Checkbox-F6QUvUca.js";import"./useFieldComponent-6hUMLoYk.js";import"./FieldError-IZ2wmqkG.js";import"./Form-BfOiuDw8.js";import"./useFormValidation-0mLIssn1.js";import"./useToggleState-CoPURb0B.js";import"./useFormReset-C-KjP2af.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

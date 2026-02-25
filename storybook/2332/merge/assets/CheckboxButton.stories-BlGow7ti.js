import{r as C,j as r}from"./iframe-COJ9RE48.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-ClaeOlVC.js";import{B as l}from"./Button-CMQanS4m.js";import{S as B}from"./Section-CUB_WQoM.js";import{A as b}from"./ActionGroup-De8HYD8X.js";import{s as u}from"./ActionBatch-BL-a0sfJ.js";import{T as i}from"./Text-Bzpr-GrC.js";import{C as m}from"./CheckboxButton-D-pjpjHV.js";import{C as p}from"./Content-CnaSOdl5.js";import{F as E}from"./FieldError-CCI4UyFC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTxK5DLa.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./clsx-B-dksMZM.js";import"./index-D5EZb4o9.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./ActionGroupView-fMLXotgU.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./utils-mqorQ4Bj.js";import"./Modal-DApCOQ01.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./Overlay-DCP7Ml7p.js";import"./OverlayContextProvider-CBc03cFF.js";import"./LoadingSpinner-CBTolouR.js";import"./IconWarning-BMwiqmvN.js";import"./remote-BHpqvLOn.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./Text-De8BGzPh.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./ButtonView-BPjbrkaq.js";import"./Flex-DKLR47fR.js";import"./useRef-CyM80vuH.js";import"./browser-DOjt7J27.js";import"./ContextMenuSection-BD_6r0jM.js";import"./getActionGroupSlot-CmDqFskk.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Checkbox-CSm3h58N.js";import"./useFieldComponent-C2vXV8Pm.js";import"./FieldError-GKNsJ0Cn.js";import"./Form-DdhXtOmH.js";import"./useFormValidation-DQ8UK_oB.js";import"./useToggleState-BmWJDr6D.js";import"./useFormReset-BVeU8GRO.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

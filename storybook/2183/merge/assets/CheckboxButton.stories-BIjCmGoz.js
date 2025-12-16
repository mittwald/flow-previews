import{j as r,r as C}from"./iframe-D7SrQHv2.js";import{u as d,F as a}from"./Form-BXCbrZCD.js";import{F as c,t as j}from"./Field-DBxnfWkn.js";import{B as l}from"./Button-BDlkh_ZH.js";import{S as B}from"./Section-8dl5sO8X.js";import{A as b}from"./ActionGroup-B6ZvpuSe.js";import{s as u}from"./Action-DB8rk5cM.js";import{T as i}from"./Text-DGpwmxCB.js";import{C as m}from"./CheckboxButton-DMipDHmy.js";import{C as p}from"./Content-DgXu4YZz.js";import{F as E}from"./FieldError-Cd_0vMJA.js";import{R as h}from"./ResetButton-DUuxsp19.js";import{S as f}from"./SubmitButton-B-bFW6GY.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DrK2T41E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CUG3tgkH.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./clsx-B-dksMZM.js";import"./index-CJAJ5du0.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./IconChevronDown-CXRERNRA.js";import"./remote-DGKmlYcY.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CGLL8cMT.js";import"./utils-CiuuAwJm.js";import"./ProgressBar-BmurXtXH.js";import"./Label-mdRoqDLO.js";import"./Hidden-4rkKn0h6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./ContextMenuSection-C543Zwy4.js";import"./lib-90ocxLs-.js";import"./Dialog-CW3mhUGv.js";import"./RSPContexts-BbVjh3iw.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./Text-BPF9cVJc.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./useStatic-D8BNL5i4.js";import"./context-CVbxfW-6.js";import"./EmulatedBoldText-ChURRL1S.js";import"./Checkbox-C0fdelcg.js";import"./IconCheckboxEmpty-CC2dlqo4.js";import"./useFieldComponent-Cu1xRHEa.js";import"./FieldError-B-ueBDjj.js";import"./Form-DYXfoEHm.js";import"./useFormValidation-LvcU-ucb.js";import"./useToggleState-mqcJgHu1.js";import"./useFormReset-icxQof7S.js";import"./IconDanger-Bz8n8vBB.js";import"./useRef-Cks4M8C_.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

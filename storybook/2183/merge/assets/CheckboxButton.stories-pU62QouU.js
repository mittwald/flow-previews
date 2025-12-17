import{j as r,r as C}from"./iframe-CQakcPxy.js";import{u as d,F as a}from"./Form-47CGJ_Aq.js";import{F as c,t as j}from"./Field-67CmYIVd.js";import{B as l}from"./Button-BgdUtfaQ.js";import{S as B}from"./Section-B-CKtBZu.js";import{A as b}from"./ActionGroup-BNhvl4_-.js";import{s as u}from"./Action-DugCc7r9.js";import{T as i}from"./Text-BtxvTgzr.js";import{C as m}from"./CheckboxButton-BcpRLxsO.js";import{C as p}from"./Content-DNuv7GRL.js";import{F as E}from"./FieldError-8S-oU2Os.js";import{R as h}from"./ResetButton-DQSr2qrJ.js";import{S as f}from"./SubmitButton-CWp_lRmI.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-n5THB09p.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-smSIHOJr.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./clsx-B-dksMZM.js";import"./index-Cea8xGLH.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CodSfk9S.js";import"./utils-kpK_hrRV.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./Text-C-10tsQv.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./context-BwdTo_HZ.js";import"./EmulatedBoldText-BugEiGRa.js";import"./useFieldComponent-7TLC4lNV.js";import"./Checkbox-B5OqVpdP.js";import"./IconCheckboxEmpty-mQVKDvKv.js";import"./FieldError-CB5plbtQ.js";import"./Form-Cw0lrebL.js";import"./useFormValidation-8JnUx94A.js";import"./useToggleState-fkZHg4w4.js";import"./useFormReset-DCX2Qfen.js";import"./IconDanger-BPWM_X_l.js";import"./useRef-BCfuUs1f.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

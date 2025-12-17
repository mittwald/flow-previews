import{j as r,r as x}from"./iframe-CQakcPxy.js";import{u as p,F as c}from"./Form-47CGJ_Aq.js";import{F as a,t as F}from"./Field-67CmYIVd.js";import{B as d}from"./Button-BgdUtfaQ.js";import{S as j}from"./Section-B-CKtBZu.js";import{A as b}from"./ActionGroup-BNhvl4_-.js";import{s as u}from"./Action-DugCc7r9.js";import{F as E}from"./FieldError-8S-oU2Os.js";import{C as o}from"./Checkbox-B5OqVpdP.js";import{R as l}from"./ResetButton-DQSr2qrJ.js";import{S as f}from"./SubmitButton-CWp_lRmI.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-n5THB09p.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-smSIHOJr.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./clsx-B-dksMZM.js";import"./index-Cea8xGLH.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./Text-BtxvTgzr.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./utils-kpK_hrRV.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./context-BwdTo_HZ.js";import"./FieldError-CB5plbtQ.js";import"./IconDanger-BPWM_X_l.js";import"./IconCheckboxEmpty-mQVKDvKv.js";import"./useFieldComponent-7TLC4lNV.js";import"./Form-Cw0lrebL.js";import"./useFormValidation-8JnUx94A.js";import"./useToggleState-fkZHg4w4.js";import"./useFormReset-DCX2Qfen.js";import"./useRef-BCfuUs1f.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Vr as default};

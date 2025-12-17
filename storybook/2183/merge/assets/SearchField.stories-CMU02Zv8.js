import{j as r,r as S}from"./iframe-CQakcPxy.js";import{u as n,F as p}from"./Form-47CGJ_Aq.js";import{L as m}from"./Label-Bciz4GF2.js";import{F as a,t as x}from"./Field-67CmYIVd.js";import{B as d}from"./Button-BgdUtfaQ.js";import{S as j}from"./Section-B-CKtBZu.js";import{A as b}from"./ActionGroup-BNhvl4_-.js";import{s as c}from"./Action-DugCc7r9.js";import{S as s}from"./SearchField-DnHJGEyj.js";import{F as E}from"./FieldError-8S-oU2Os.js";import{R as u}from"./ResetButton-DQSr2qrJ.js";import{S as l}from"./SubmitButton-CWp_lRmI.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-n5THB09p.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./Label-CTPlNXVy.js";import"./utils-kpK_hrRV.js";import"./Hidden-BPFiveoH.js";import"./dynamic-smSIHOJr.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./Text-BtxvTgzr.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./context-BwdTo_HZ.js";import"./useFieldComponent-7TLC4lNV.js";import"./IconClose-BczVcUhw.js";import"./IconSearch-8eH40Z3-.js";import"./useControlledHostValueProps-BZjTuBfL.js";import"./FieldError-CB5plbtQ.js";import"./Form-Cw0lrebL.js";import"./Group-EK03D1ng.js";import"./Input-BcEHoXQP.js";import"./useTextField-ChzRdWGu.js";import"./useFormReset-DCX2Qfen.js";import"./useFormValidation-8JnUx94A.js";import"./IconDanger-BPWM_X_l.js";import"./useRef-BCfuUs1f.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};

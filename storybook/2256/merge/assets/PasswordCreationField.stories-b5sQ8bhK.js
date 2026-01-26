import{r as x,j as r}from"./iframe-ICCBaEZ0.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-DHM0HwV0.js";import{L as i}from"./Label-CdS4JTo9.js";import{B as t}from"./Button-BPUjkcWl.js";import{S as g}from"./Section-f7ELsjIS.js";import{A as E}from"./ActionGroup-Cyu4G9Rw.js";import{s as F}from"./Action-BI-eqtgf.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-B6cfUBMz.js";import{F as L}from"./FieldError-CXiPiawI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./useRef-CiWut0dQ.js";import"./utils-Bdyed02U.js";import"./ButtonView-BszEJvVk.js";import"./browser-BXZux_wF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./context-CFn3lEGQ.js";import"./FieldDescription-CTX2Nbt4.js";import"./Tooltip-B0ufLVm4.js";import"./ContextualHelpTrigger-kLpHcv6Z.js";import"./Popover-BznUFd8V.js";import"./useOverlayController-CTkEh9O7.js";import"./OverlayContextProvider-DutSGNyV.js";import"./OverlayTrigger-CZVSbWDN.js";import"./Heading-_OIl0AzZ.js";import"./Heading-BmRm-FE-.js";import"./useFieldComponent-C2gLyH5u.js";import"./useControlledHostValueProps--FOjf0QU.js";import"./TextField-UgkkafNs.js";import"./FieldError-Uso8nKHu.js";import"./Form-Dqb0_Mn-.js";import"./Group-Kcal-yRn.js";import"./Input-CQyHZiU6.js";import"./useTextField-1ZJA7UcR.js";import"./useFormReset-mc9YwuWr.js";import"./useFormValidation-BK0HiA-u.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: usePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
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
}`,...c.parameters?.docs?.source}}};const se=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,se as __namedExportsOrder,te as default};

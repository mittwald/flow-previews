import{r as x,j as r}from"./iframe-C9fRvTrj.js";import{u as c,F as f}from"./Form-BnT7ftAH.js";import{L as i}from"./Label-BRzY6dIy.js";import{B as t}from"./Button-BYUXEkA_.js";import{S}from"./Section-Os3PQZDv.js";import{A as g}from"./ActionGroup-D8loN3Ok.js";import{s as h}from"./Action-DsOzwT3Y.js";import{d as E,O as C,P as n,n as o,r as R}from"./PasswordCreationField-BZHyVuUN.js";import{F as V}from"./FieldError-Bd58Epno.js";import{F,t as L}from"./Field-C9gkn32I.js";import{R as b}from"./ResetButton-Dd_iBR74.js";import{S as j}from"./SubmitButton-BwKhKVf4.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CUSAF5aW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./Label-DetJ9FyC.js";import"./utils-CPkfOZj3.js";import"./Hidden-D46P9k-k.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./Text-D323xmXD.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwWpYEN0.js";import"./ProgressBar-DI2IDnVu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./ContextMenuSection-BxarHMTi.js";import"./lib-90ocxLs-.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./dynamic-C1VXiIMv.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./useStatic-0FUtvL5U.js";import"./context-CrKYMuPA.js";import"./FieldDescription-D93KtgO4.js";import"./Tooltip-ssf35lN1.js";import"./TranslationProvider-DQ3lfXrb.js";import"./IconCircleCheck-Bi756DUt.js";import"./ContextualHelpTrigger-71Am93L7.js";import"./Popover-DDuwRsLL.js";import"./OverlayContextProvider-CHFdaBg3.js";import"./useOverlayController-MVFXohJh.js";import"./OverlayTrigger-DYVHY-Wc.js";import"./IconInfo-DW6nA0fy.js";import"./Heading-t9VUyPqr.js";import"./Heading-Ujz6i7vC.js";import"./useFieldComponent-jGlg5Icl.js";import"./useControlledHostValueProps-DvGioMkI.js";import"./TextField-CHn7zTiT.js";import"./FieldError-BSiYpFWr.js";import"./Form-FOSkHwoF.js";import"./Group-DtY3YVtI.js";import"./Input-Cvlim89t.js";import"./useTextField-BpilKR79.js";import"./useFormReset-CS_NLM25.js";import"./useFormValidation-BLFhZbJU.js";import"./IconDanger-Cax3VcTl.js";import"./useRef-CxgC11e8.js";const y=(e=E)=>{const a=x.useMemo(()=>C.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:F,render:()=>{const e=async s=>{await h(1e3),O(s)},a=c({defaultValues:{user:""}}),m=L();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(g,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await h(2e3),console.log("submitted",a)},children:[r.jsx(F,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ce=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ce as __namedExportsOrder,pe as default};

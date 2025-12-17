import{r as x,j as r}from"./iframe-CuoLN6Ak.js";import{u as c,F as f}from"./Form-CSUkBA4d.js";import{L as i}from"./Label-CaF-n4li.js";import{B as t}from"./Button-Cfn_KBZi.js";import{S}from"./Section-DpKeH7t9.js";import{A as g}from"./ActionGroup-BQouqhs8.js";import{s as h}from"./Action-BkuSI1AI.js";import{d as E,O as C,P as n,n as o,r as R}from"./PasswordCreationField-BnYudCn3.js";import{F as V}from"./FieldError-BXdT0ENq.js";import{F,t as L}from"./Field-Bn8O-tEJ.js";import{R as b}from"./ResetButton-CuwicxmT.js";import{S as j}from"./SubmitButton-DikI2hGX.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-t1e5k5Lt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./context-DM2sT4iG.js";import"./Label-D3KIvHQC.js";import"./utils-C2NHa3pd.js";import"./Hidden-DgR9vk0-.js";import"./IconApp-BDJ8KTSO.js";import"./remote-JKpMdsKf.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./Text-DdChUKUI.js";import"./EmulatedBoldText-BNHG0Gfg.js";import"./Text-C8IviCt6.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6bHbdkl.js";import"./ProgressBar-DQXQN5uc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./ContextMenuSection-BtjuRqVn.js";import"./lib-90ocxLs-.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./OverlayArrow-C99iKRaY.js";import"./useControlledState-ItXXMvHS.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useEvent-CGtQDWm6.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";import"./dynamic-8E81vrw4.js";import"./getActionGroupSlot-w80GylpO.js";import"./useStatic-DF3kEdZS.js";import"./context-Cxg_dyF2.js";import"./FieldDescription-B83QXWUS.js";import"./Tooltip-IwBGo9E-.js";import"./TranslationProvider-BnJHpUgr.js";import"./IconCircleCheck-CbiZvSof.js";import"./ContextualHelpTrigger-rUevOoil.js";import"./Popover-DXwzYIUP.js";import"./OverlayContextProvider-DODbX18A.js";import"./useOverlayController-BQNvHxuF.js";import"./OverlayTrigger-BBfxPtJK.js";import"./IconInfo-D2rw_1io.js";import"./Heading-CfRZsy__.js";import"./Heading-D1DEAOPr.js";import"./useFieldComponent-CpAAuxDf.js";import"./useControlledHostValueProps-BqZEo0r9.js";import"./TextField-auQk3RGt.js";import"./FieldError-zdBOb0_m.js";import"./Form-BoKLrbzS.js";import"./Group-y2y6-45-.js";import"./Input-CSQeI68y.js";import"./useTextField-DuTAd_dm.js";import"./useFormReset-Cj_2aRsw.js";import"./useFormValidation-BeXwm1Ez.js";import"./IconDanger-CxUQbc1u.js";import"./useRef-Qg3Ql4nX.js";const y=(e=E)=>{const a=x.useMemo(()=>C.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:F,render:()=>{const e=async s=>{await h(1e3),O(s)},a=c({defaultValues:{user:""}}),m=L();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(g,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await h(2e3),console.log("submitted",a)},children:[r.jsx(F,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

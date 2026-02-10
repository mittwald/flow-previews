import{r as x,j as r}from"./iframe-CKZ3lvbD.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-jo2lO0hE.js";import{L as i}from"./Label-GTbkpoc2.js";import{B as t}from"./Button-CJlIPsW5.js";import{S as g}from"./Section-DVJloPPJ.js";import{A as E}from"./ActionGroup-OimQLutj.js";import{s as F}from"./Action-BaMcPQM3.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField--mOR_li4.js";import{F as L}from"./FieldError-BAXRdB0p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BOUQFyUk.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./clsx-B-dksMZM.js";import"./index-4RPaTPNn.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./context-C9x0o2NL.js";import"./useRef-DbyQDNZa.js";import"./utils-BvJRIsTz.js";import"./ButtonView-DfeKjjgQ.js";import"./browser-burL9SPa.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./IconWarning-C7p1kK8i.js";import"./remote-CtPArtkt.js";import"./Text-C_6aanp2.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./LoadingSpinner-D6ABJv6G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BHDMacWQ.js";import"./ProgressBar-aA2LYAol.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BdqAXD8t.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./ContextMenuSection-Dgn4oNc5.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./useStatic-B8hmur2r.js";import"./context-Ca4O4Dr-.js";import"./FieldDescription-G4RsrN-A.js";import"./Tooltip-CRp5hwMU.js";import"./ContextualHelpTrigger-CZudG9-6.js";import"./Popover-BaFxU9kE.js";import"./useOverlayController-CXRFu3Cx.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./OverlayTrigger-C1yyJzXM.js";import"./Heading-BKtZSdLW.js";import"./Heading-DdSm2kzR.js";import"./useFieldComponent-sXfPOyeP.js";import"./useControlledHostValueProps-el4q383E.js";import"./TextField-JDVnl2nc.js";import"./FieldError-BqwxYxeF.js";import"./Form-akuVNupd.js";import"./Group-BXHCPMTj.js";import"./Input-DyPHNw9T.js";import"./useTextField-Bb4VUV4A.js";import"./useFormReset-C_HfEwX8.js";import"./useFormValidation-BpwCrRY1.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

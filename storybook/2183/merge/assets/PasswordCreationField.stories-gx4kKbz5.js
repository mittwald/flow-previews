import{r as x,j as r}from"./iframe-BzW-9mMD.js";import{u as c,F as f}from"./Form-xEKyLAtK.js";import{L as i}from"./Label-BuckRFL6.js";import{F as h,t as S}from"./Field-DBa6Uppk.js";import{B as t}from"./Button-kdt8pR0M.js";import{S as g}from"./Section-CEIUQkyy.js";import{A as E}from"./ActionGroup-DtgroWHO.js";import{s as F}from"./Action-B9rUenjA.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-oAkiknMG.js";import{F as L}from"./FieldError-CEOf2ovw.js";import{R as b}from"./ResetButton-D6wtVwDI.js";import{S as j}from"./SubmitButton-CJq3gcLg.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C2fMNT9-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./Label-CGJ_PWGO.js";import"./utils-BrWwMsiw.js";import"./Hidden-Dd9I5XIl.js";import"./dynamic-C266PTaS.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./Text-V56jcQh9.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./Text-lCB5Bcpt.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./ContextMenuSection-DvCS3UY5.js";import"./lib-90ocxLs-.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./useStatic-CTmF8sLz.js";import"./context-CzkXJT4I.js";import"./FieldDescription-DOg-G1iQ.js";import"./Tooltip-BB5SPmww.js";import"./TranslationProvider-D7abRsjS.js";import"./IconCircleCheck-CtMIN61o.js";import"./ContextualHelpTrigger-Bzz_8Yob.js";import"./Popover-9e6SMGW8.js";import"./OverlayContextProvider-DkaFHDgz.js";import"./useOverlayController-D-du17tQ.js";import"./OverlayTrigger-CpP3uoqI.js";import"./IconInfo-BMahyVNn.js";import"./Heading-CFmOB0E2.js";import"./Heading-C_mfasv9.js";import"./useFieldComponent-CbusyouS.js";import"./useControlledHostValueProps-Drs0uCj9.js";import"./TextField-CzlELa-i.js";import"./FieldError-YIyLtRkF.js";import"./Form-DVsU3UIy.js";import"./Group-DlZIxVzc.js";import"./Input-DnvETqzY.js";import"./useTextField-DejpfAEP.js";import"./useFormReset-DSNp4f3d.js";import"./useFormValidation-CVoSAArr.js";import"./IconDanger-BcSmAgIr.js";import"./useRef-D0yR5Dxm.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

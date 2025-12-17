import{r as x,j as r}from"./iframe-DnYi-t8H.js";import{u as c,F as f}from"./Form-DRMZk2Gh.js";import{L as i}from"./Label-DliS2X1j.js";import{F as h,t as S}from"./Field-BjRzpRw4.js";import{B as t}from"./Button-CGm1W1qT.js";import{S as g}from"./Section-BocAxRga.js";import{A as E}from"./ActionGroup-Cx49wkZ2.js";import{s as F}from"./Action-BbwnmsIN.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BX68Gykh.js";import{F as L}from"./FieldError-9-oFldGv.js";import{R as b}from"./ResetButton-B6Cz-gaL.js";import{S as j}from"./SubmitButton-CbYD0M1w.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-Cx51Q07l.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Label-DpP4Z3U4.js";import"./utils-DErHybyt.js";import"./Hidden-D2dwjMI8.js";import"./dynamic-Bt-cD_bv.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./Text-Bl1v2nei.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./Text-CnHQzzWa.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvsL5VIA.js";import"./ProgressBar-C0arnLiQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CvNtERHu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSFKAxA8.js";import"./useFocus-Cp5_bDzt.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocusable-CJcfCTZ3.js";import"./ContextMenuSection-BLRCeISj.js";import"./lib-90ocxLs-.js";import"./Dialog-_g0NQG0c.js";import"./RSPContexts-fnRhq3x5.js";import"./OverlayArrow-Cdm9aZ0d.js";import"./useControlledState-CUB7XdW4.js";import"./Collection-Dl9RCK9z.js";import"./CollectionBuilder-Dz2l6Qz0.js";import"./SelectionIndicator-B3bHR6It.js";import"./Separator-DF_Ka3NA.js";import"./SelectionManager-D2Yq1xXP.js";import"./useEvent-BzaRCHg1.js";import"./useCollator-b7BSiHgL.js";import"./FocusScope-CymXO5HE.js";import"./VisuallyHidden-BnpIJKhq.js";import"./getActionGroupSlot-D0nHzOJX.js";import"./useStatic-nPTr3XXM.js";import"./context-EfU6UTnF.js";import"./FieldDescription-Dv0mKlK_.js";import"./Tooltip-DWtw_cTG.js";import"./TranslationProvider-yInY7Dxd.js";import"./IconCircleCheck-Ed2AkDNC.js";import"./ContextualHelpTrigger-jwppJyOX.js";import"./Popover-BLsbaJHt.js";import"./OverlayContextProvider-B_Yv-het.js";import"./useOverlayController-C4BihEJv.js";import"./OverlayTrigger-CMvzQfjH.js";import"./IconInfo-_QICPALr.js";import"./Heading-Bl0D9Fk9.js";import"./Heading-3QLXl-8j.js";import"./useFieldComponent-BC1W_qCr.js";import"./useControlledHostValueProps-CY46Idh6.js";import"./TextField-DjS4j9il.js";import"./FieldError-DFN_xfpl.js";import"./Form-BNVSNvMr.js";import"./Group-trRaFn9q.js";import"./Input-Ci5DOXXh.js";import"./useTextField-DyhgGonc.js";import"./useFormReset-CY2BFsrw.js";import"./useFormValidation-D4Tsj5aM.js";import"./IconDanger-CDad_7H2.js";import"./useRef-C3gFaWux.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

import{r as x,j as r}from"./iframe-nUnY8CpM.js";import{u as c,F as f}from"./Form-CFvv8rQ9.js";import{L as i}from"./Label-CarGuai1.js";import{F as h,t as S}from"./Field-CI5_U4-n.js";import{B as t}from"./Button-Drav3_ks.js";import{S as g}from"./Section-D3jyF995.js";import{A as E}from"./ActionGroup-DFwXau3j.js";import{s as F}from"./Action-Akn1uW1v.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-CJ7dM34-.js";import{F as L}from"./FieldError-Dl4XoXDz.js";import{R as b}from"./ResetButton-hHtNxjTm.js";import{S as j}from"./SubmitButton-DcdLNLZc.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-vyiLhVPE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./Label-B7kFjMQQ.js";import"./utils-DtyHAF7C.js";import"./Hidden-DuLhuFUb.js";import"./dynamic-BZsQ8DvG.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./ContextMenuSection-DH9LKzKz.js";import"./lib-90ocxLs-.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./useStatic-D4OCIKv7.js";import"./context-CUJwrxJk.js";import"./FieldDescription-CiRWpG91.js";import"./Tooltip-DIiRbZq4.js";import"./TranslationProvider-B34SHO_y.js";import"./IconCircleCheck-Cp0XlozD.js";import"./ContextualHelpTrigger-Bw2VGBGE.js";import"./Popover-DAIMajuO.js";import"./OverlayContextProvider-QZV7xJtt.js";import"./useOverlayController-D3ZcYAE3.js";import"./OverlayTrigger-CW0LF_M5.js";import"./IconInfo-BRSoGua_.js";import"./Heading-wRPk5wst.js";import"./Heading-BKnaj6R8.js";import"./useFieldComponent-CwsJxGlb.js";import"./useControlledHostValueProps-DFslcMmj.js";import"./TextField-DC8Uy_by.js";import"./FieldError-CG7ulvH_.js";import"./Form-DX8kqEOp.js";import"./Group-BykXvQmq.js";import"./Input-B5TNmDN2.js";import"./useTextField-BpK1hl2r.js";import"./useFormReset-B9MhH15U.js";import"./useFormValidation-BmCGlg1a.js";import"./IconDanger-BtbJ86A5.js";import"./useRef-DngU7hM5.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

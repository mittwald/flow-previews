import{r as x,j as r}from"./iframe-DXKyl4qq.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-SPfrEBJU.js";import{L as i}from"./Label-DJy_0fcC.js";import{B as t}from"./Button-0acoIVQZ.js";import{S as g}from"./Section-B8nblZQJ.js";import{A as E}from"./ActionGroup-CDY92rej.js";import{s as F}from"./Action-eA8jYG3_.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DCprBnpn.js";import{F as L}from"./FieldError-hPaNUVVF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaArDE2O.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./clsx-B-dksMZM.js";import"./index-CK0x1Z6h.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./useRef-CVzViYXT.js";import"./utils-Cgx1j8_A.js";import"./ButtonView-vjQ-21-e.js";import"./browser-Q1FjFR8E.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-MFF54RNh.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useFocusable-DAwaDAhU.js";import"./ContextMenuSection-BIRP1Ixf.js";import"./Dialog-B1psX4sF.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./useControlledState-DW1EgN0_.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./VisuallyHidden-XnRwWdWi.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./useStatic-CdHxY_ZS.js";import"./context-9N5Shw7P.js";import"./FieldDescription-BLR7NcCI.js";import"./Tooltip-CAJ4vYen.js";import"./ContextualHelpTrigger-D10VcDcc.js";import"./Popover-aE3BG6iV.js";import"./useOverlayController-jwGD9Xed.js";import"./OverlayContextProvider-M458RI5v.js";import"./OverlayTrigger-BY_70k08.js";import"./Heading-C5r2I8c5.js";import"./Heading-CG4_-w1-.js";import"./useFieldComponent-DrLbNusb.js";import"./useControlledHostValueProps-8m6fvoIX.js";import"./TextField-Bx0CYa7T.js";import"./FieldError-CXwp2WFY.js";import"./Form-VygiigBM.js";import"./Group-DMqjorr8.js";import"./Input-Bhgje7aH.js";import"./useTextField-1rJhdvTW.js";import"./useFormReset-Cw-gwOYV.js";import"./useFormValidation-1Ohd4Vow.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

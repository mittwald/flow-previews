import{r as x,j as r}from"./iframe-BUwXHbLV.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-DD2EU88j.js";import{L as i}from"./Label-VcTz9-oy.js";import{B as t}from"./Button-C47X2BbH.js";import{S as g}from"./Section-DvLGNmum.js";import{A as E}from"./ActionGroup-B01MVWJe.js";import{s as F}from"./Action-Wt0sSzk-.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-CKTCxGeO.js";import{F as L}from"./FieldError-BFYCcyQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-jPtu3qAR.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./clsx-B-dksMZM.js";import"./index-B1fishDV.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./useRef-BrSocotX.js";import"./utils-JDwP1GoF.js";import"./ButtonView-DumfpSry.js";import"./browser-DgSxuaKY.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./Text-DQHJUI0D.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcgTA6VC.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Dialog-2n0yrNbm.js";import"./RSPContexts-CfLLQl4G.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./useStatic-BtWsPYN-.js";import"./context-BtwGTzrQ.js";import"./FieldDescription-CJjcfRgA.js";import"./Tooltip-nohw18Qw.js";import"./ContextualHelpTrigger-DmImrJkZ.js";import"./Popover-DKz-OvIj.js";import"./useOverlayController-Dogh-DtE.js";import"./OverlayContextProvider-CQG9zk-L.js";import"./OverlayTrigger-FaFIiRYX.js";import"./Heading-DVvJZI_m.js";import"./Heading-Bx_NYZMu.js";import"./useFieldComponent-NdCAuKiZ.js";import"./useControlledHostValueProps-BrTeFcEP.js";import"./TextField-HNnoCTf3.js";import"./FieldError-DDJD7LnR.js";import"./Form-D0DN8V4Z.js";import"./Group-BwNIZrev.js";import"./Input-NxVda43d.js";import"./useTextField-BaJoqTBw.js";import"./useFormReset-juEzhCU8.js";import"./useFormValidation-GMJFkgaI.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

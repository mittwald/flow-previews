import{r as x,j as r}from"./iframe-jqgUclr4.js";import{u as c,F as f}from"./Form-Dc6zdHeZ.js";import{L as i}from"./Label-B_zOvN70.js";import{F as h,t as S}from"./Field-WmeAWjEG.js";import{B as t}from"./Button-Df2EGOwf.js";import{S as g}from"./Section-7B4EPCtc.js";import{A as E}from"./ActionGroup-B2OhWuHy.js";import{s as F}from"./Action-DzpPHaH9.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-6G74IFQq.js";import{F as L}from"./FieldError-C5F3bfgz.js";import{R as b}from"./ResetButton-Bv__d16Z.js";import{S as j}from"./SubmitButton-D312ZINB.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-EX5vhkWE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./index-KptOOerd.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./Label-BRPoLfQP.js";import"./utils-5IALZqjS.js";import"./Hidden-DkAwJJ8c.js";import"./dynamic-CApc5zUm.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./Text-B-prTEID.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./Text-tTF8cKGK.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./ContextMenuSection-0hv9Ce60.js";import"./lib-90ocxLs-.js";import"./Dialog-MLUvkWk2.js";import"./RSPContexts-BB1SZI7P.js";import"./OverlayArrow-ERqZtQI-.js";import"./useControlledState-Cu6J25_e.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./SelectionManager-Bd2Xd50m.js";import"./useEvent-DIea5lRE.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./getActionGroupSlot-C1ZLvjFs.js";import"./useStatic-Hn0frKun.js";import"./context-BZOmdfdu.js";import"./FieldDescription-BpCIxkVt.js";import"./Tooltip-DtIndd4E.js";import"./TranslationProvider-ByjfP9RK.js";import"./IconCircleCheck-Dl3MgLAm.js";import"./ContextualHelpTrigger-BZva7YNv.js";import"./Popover-DoC5dA8I.js";import"./OverlayContextProvider-Couwo4Zm.js";import"./useOverlayController-BJtvb9v-.js";import"./OverlayTrigger-DYf82eWt.js";import"./IconInfo-Fmslxo20.js";import"./Heading-BlxvO5L5.js";import"./Heading-BCZhlYP-.js";import"./useFieldComponent-C0Pt2yH0.js";import"./useControlledHostValueProps-BbYne8gB.js";import"./TextField-2lpdlEdv.js";import"./FieldError-DSvmLOVG.js";import"./Form-BMNY4Kb2.js";import"./Group-N_eJQU5l.js";import"./Input-Dn37EEpO.js";import"./useTextField-BDtQfqtc.js";import"./useFormReset-BuHZrSbJ.js";import"./useFormValidation-BWQF9tl0.js";import"./IconDanger-BMQW6rjZ.js";import"./useRef-N6H0Txdu.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

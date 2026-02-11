import{r as x,j as r}from"./iframe-CNIcTJYh.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-B90bKA5P.js";import{L as i}from"./Label-Dk1BsiHf.js";import{B as t}from"./Button-DAjUCwya.js";import{S as g}from"./Section-CUzAZq5T.js";import{A as E}from"./ActionGroup-DwraTk7X.js";import{s as F}from"./Action-CB-yo4he.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-D9saDKL3.js";import{F as L}from"./FieldError-CRJL1-ZW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfddFL0U.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./useRef-DPaH8BEG.js";import"./utils-BMrW0rs-.js";import"./ButtonView-f9GsubAG.js";import"./browser-e5gpn1Ib.js";import"./Label.module-CUYTf9Jc.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Text-6t0QtAeQ.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./LoadingSpinner-D1M8B3tV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./ContextMenuSection-B2n1IDtN.js";import"./Dialog-C8--keRD.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./getActionGroupSlot-BroJtED_.js";import"./useStatic-J4GDP0vf.js";import"./context-CHGIk6I_.js";import"./FieldDescription-D4T9Jptd.js";import"./Tooltip-xebOMeva.js";import"./ContextualHelpTrigger-Byh6waEB.js";import"./Popover-DmppkICQ.js";import"./useOverlayController-DAzTf57J.js";import"./OverlayContextProvider-DLVotmKz.js";import"./OverlayTrigger-DLlBnUgI.js";import"./Heading-CSBDI-d5.js";import"./Heading-DegGgrrB.js";import"./useFieldComponent-BcSx3cQM.js";import"./useControlledHostValueProps-CCy3mJ8p.js";import"./TextField-BlWPRgiP.js";import"./FieldError-C-WtBUhj.js";import"./Form-DFzq_6cf.js";import"./Group-B3nGsmaJ.js";import"./Input-DXXfkxpG.js";import"./useTextField-DUQ7sCSl.js";import"./useFormReset-ClGEeDTe.js";import"./useFormValidation-Cl_ELzYY.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

import{r as x,j as r}from"./iframe-CEWg6_IX.js";import{a as p,u as f,F as h,R as b,S as j,t as g}from"./ResetButton-C4Ep7Det.js";import{L as n}from"./Label-BaJSnICs.js";import{B as t}from"./Button-CA6AkUR_.js";import{S as w}from"./Section-smxk9QAc.js";import{A as y}from"./ActionGroup-2A27ggL_.js";import{s as F}from"./ActionBatch-CnX-7Tzc.js";import{d as C,O as R,P as i,n as e,r as v}from"./PasswordCreationField-BVR-ngL_.js";import{F as V}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./FieldDescription-BJFWlccI.js";import"./Tooltip-Dc8FrXul.js";import"./ContextualHelpTrigger-B-fxFq0g.js";import"./Popover-CBq8Jp6I.js";import"./OverlayTrigger-DGu3y4_r.js";import"./useFieldComponent-BOMK2S5G.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./TextField-DfYJlBbG.js";import"./FieldError-B_BExaNJ.js";import"./Form-XtAuYD0I.js";import"./Group-BY2zOSJX.js";import"./Input-DI2XwVnV.js";import"./useTextField-aMHav-G9.js";import"./useFormReset-D1AT4nVs.js";import"./useFormValidation-przZuKLk.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const B=(o=C)=>{const a=x.useMemo(()=>R.fromDeclaration(o),[o]),l=x.useRef(null);return async s=>{if(s!==""){if(l.current?.password===s)return l.current.isValid;try{const P=await(await a.validate(s)).isValid;return l.current={password:s,isValid:P},P}catch{return!1}}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[v.number],maxLength:2},{ruleType:e.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},io={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const o=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),l=g();return r.jsx(h,{form:a,onSubmit:o,children:r.jsxs(w,{children:[r.jsx(l,{name:"user",rules:{required:!0,validate:B()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},m={render:()=>{const o=f({defaultValues:{password:""}});return r.jsx(h,{form:o,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:r.jsxs(w,{children:[r.jsx(p,{rules:{required:!0,validate:B(S)},name:"password",children:r.jsxs(i,{validationPolicy:S,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},u={render:()=>{const o=f({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(h,{form:o,onSubmit:async()=>await F(2e3),children:r.jsxs(w,{children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})})}},c={render:()=>{const o=f({defaultValues:{field:""}});return r.jsxs(h,{form:o,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(y,{children:[r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field rules={{
          required: true,
          validate: usePasswordCreationFieldValidation(policyDecl)
        }} name="password">
            <PasswordCreationField validationPolicy={policyDecl}>
              <Label>Password</Label>
              <Button>asd</Button>
            </PasswordCreationField>
          </Field>
          <ActionGroup>
            <ResetButton slot="abort">Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
            <PasswordCreationField>
              <Label>Password</Label>
              <Button>asd</Button>
            </PasswordCreationField>
          </Field>
          <PasswordCreationField defaultValue="" isInvalid>
            <Label>Password</Label>
            <Button>asd</Button>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </PasswordCreationField>
          <PasswordCreationField defaultValue="">
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Section>
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
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const ao=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,m as WithForm,ao as __namedExportsOrder,io as default};

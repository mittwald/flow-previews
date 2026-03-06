import{r as x,j as r}from"./iframe-DBOgS3cI.js";import{a as p,u as f,F as h,R as b,S as j,t as g}from"./ResetButton-BJEIRnrv.js";import{L as n}from"./Label-DEbA9P8V.js";import{B as t}from"./Button-DeSyDtjE.js";import{S as w}from"./Section-B03hcWHL.js";import{A as y}from"./ActionGroup-B1DNkudK.js";import{s as F}from"./ActionBatch-C1BOMxBF.js";import{d as C,O as R,P as i,n as e,r as v}from"./PasswordCreationField-CTZdyMTf.js";import{F as V}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Content-DrBXQyIN.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./utils-BhJeINWq.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./getActionGroupSlot-BVP40Z09.js";import"./FieldDescription-CSCgjXc1.js";import"./Tooltip-BMbUJuQE.js";import"./ContextualHelpTrigger-DIF0oG5T.js";import"./Popover-BfI_0-2O.js";import"./OverlayTrigger-B4nPvJJx.js";import"./useFieldComponent-pONIfnVv.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./TextField-BdIP0Lrm.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useFormValidation-BF3CckmA.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";const B=(o=C)=>{const a=x.useMemo(()=>R.fromDeclaration(o),[o]),l=x.useRef(null);return async s=>{if(s!==""){if(l.current?.password===s)return l.current.isValid;try{const P=await(await a.validate(s)).isValid;return l.current={password:s,isValid:P},P}catch{return!1}}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[v.number],maxLength:2},{ruleType:e.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},io={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const o=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),l=g();return r.jsx(h,{form:a,onSubmit:o,children:r.jsxs(w,{children:[r.jsx(l,{name:"user",rules:{required:!0,validate:B()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},m={render:()=>{const o=f({defaultValues:{password:""}});return r.jsx(h,{form:o,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:r.jsxs(w,{children:[r.jsx(p,{rules:{required:!0,validate:B(S)},name:"password",children:r.jsxs(i,{validationPolicy:S,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},u={render:()=>{const o=f({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(h,{form:o,onSubmit:async()=>await F(2e3),children:r.jsxs(w,{children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})})}},c={render:()=>{const o=f({defaultValues:{field:""}});return r.jsxs(h,{form:o,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(y,{children:[r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

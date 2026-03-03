import{r as x,j as r}from"./iframe-BZ1p44Xs.js";import{a as p,u as f,F as h,R as b,S as j,t as g}from"./ResetButton-BCpb_Ry0.js";import{L as n}from"./Label-HK0aVnMe.js";import{B as t}from"./Button-BXzJaHaH.js";import{S as w}from"./Section-DYkPYl1t.js";import{A as y}from"./ActionGroup-D6AJDGA7.js";import{s as F}from"./ActionBatch-kp--iEDz.js";import{d as C,O as R,P as i,n as e,r as v}from"./PasswordCreationField-B8JlqEoG.js";import{F as V}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-FMJg67QM.js";import"./getActionGroupSlot-D6uph6L1.js";import"./FieldDescription-PY5u12Fd.js";import"./Tooltip-CqH1Sb2R.js";import"./ContextualHelpTrigger-Dzsj7OvC.js";import"./Popover-CWPz-1RW.js";import"./OverlayTrigger-DzQUlxLA.js";import"./useFieldComponent-CdmiPNAX.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./TextField-BFG4RQnU.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const B=(o=C)=>{const a=x.useMemo(()=>R.fromDeclaration(o),[o]),l=x.useRef(null);return async s=>{if(s!==""){if(l.current?.password===s)return l.current.isValid;try{const P=await(await a.validate(s)).isValid;return l.current={password:s,isValid:P},P}catch{return!1}}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[v.number],maxLength:2},{ruleType:e.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},io={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const o=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),l=g();return r.jsx(h,{form:a,onSubmit:o,children:r.jsxs(w,{children:[r.jsx(l,{name:"user",rules:{required:!0,validate:B()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},m={render:()=>{const o=f({defaultValues:{password:""}});return r.jsx(h,{form:o,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:r.jsxs(w,{children:[r.jsx(p,{rules:{required:!0,validate:B(S)},name:"password",children:r.jsxs(i,{validationPolicy:S,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},u={render:()=>{const o=f({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(h,{form:o,onSubmit:async()=>await F(2e3),children:r.jsxs(w,{children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})})}},c={render:()=>{const o=f({defaultValues:{field:""}});return r.jsxs(h,{form:o,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(y,{children:[r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

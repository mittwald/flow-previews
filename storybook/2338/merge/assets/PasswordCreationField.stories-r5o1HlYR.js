import{r as x,j as r}from"./iframe-BFddea_x.js";import{a as p,u as f,F as h,R as b,S as j,t as g}from"./FormRootError-DAozFL3q.js";import{L as n}from"./Label-Cyz25dCh.js";import{B as t}from"./Button-DmFob37h.js";import{S as w}from"./Section-DorsmKJX.js";import{A as y}from"./ActionGroup-B4CMqS7f.js";import{s as F}from"./ActionBatch-BLAWmMpV.js";import{d as C,O as R,P as i,n as e,r as v}from"./PasswordCreationField-C9DkMOZ2.js";import{F as V}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./utils-D-aZUMcZ.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C_9nT1gz.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./FieldDescription-DqsHbSnc.js";import"./Tooltip-Cx9YY_jk.js";import"./ContextualHelpTrigger-DL49s42d.js";import"./Popover-BbCf_utC.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./useFieldComponent-DrOhnKye.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./TextField-Cha2rHT2.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useFormValidation-CYvJLeFF.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const B=(o=C)=>{const a=x.useMemo(()=>R.fromDeclaration(o),[o]),l=x.useRef(null);return async s=>{if(s!==""){if(l.current?.password===s)return l.current.isValid;try{const P=await(await a.validate(s)).isValid;return l.current={password:s,isValid:P},P}catch{return!1}}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[v.number],maxLength:2},{ruleType:e.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ao={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const o=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),l=g();return r.jsx(h,{form:a,onSubmit:o,children:r.jsxs(w,{children:[r.jsx(l,{name:"user",rules:{required:!0,validate:B()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},m={render:()=>{const o=f({defaultValues:{password:""}});return r.jsx(h,{form:o,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:r.jsxs(w,{children:[r.jsx(p,{rules:{required:!0,validate:B(S)},name:"password",children:r.jsxs(i,{validationPolicy:S,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},u={render:()=>{const o=f({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(h,{form:o,onSubmit:async()=>await F(2e3),children:r.jsxs(w,{children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})})}},c={render:()=>{const o=f({defaultValues:{field:""}});return r.jsxs(h,{form:o,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(y,{children:[r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const lo=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,m as WithForm,lo as __namedExportsOrder,ao as default};

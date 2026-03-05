import{r as x,j as r}from"./iframe-BcqfzoOA.js";import{a as p,u as f,F as h,R as b,S as j,t as g}from"./ResetButton--7CtDtWT.js";import{L as n}from"./Label-CQjtN3Gn.js";import{B as t}from"./Button-C2msjhlA.js";import{S as w}from"./Section-B_QgMIam.js";import{A as y}from"./ActionGroup-Cjv-TUqT.js";import{s as F}from"./ActionBatch-D231mKj-.js";import{d as C,O as R,P as i,n as e,r as v}from"./PasswordCreationField-YPUR2F1S.js";import{F as V}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./FieldDescription-BAMY7EMv.js";import"./Tooltip-Bm2yjacH.js";import"./ContextualHelpTrigger-CZtZy0Ll.js";import"./Popover-lZTmTyt9.js";import"./OverlayTrigger-CxrHdMrt.js";import"./useFieldComponent-CSNqGKWj.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const B=(o=C)=>{const a=x.useMemo(()=>R.fromDeclaration(o),[o]),l=x.useRef(null);return async s=>{if(s!==""){if(l.current?.password===s)return l.current.isValid;try{const P=await(await a.validate(s)).isValid;return l.current={password:s,isValid:P},P}catch{return!1}}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[v.number],maxLength:2},{ruleType:e.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},io={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const o=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),l=g();return r.jsx(h,{form:a,onSubmit:o,children:r.jsxs(w,{children:[r.jsx(l,{name:"user",rules:{required:!0,validate:B()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},m={render:()=>{const o=f({defaultValues:{password:""}});return r.jsx(h,{form:o,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:r.jsxs(w,{children:[r.jsx(p,{rules:{required:!0,validate:B(S)},name:"password",children:r.jsxs(i,{validationPolicy:S,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(y,{children:[r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},u={render:()=>{const o=f({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(h,{form:o,onSubmit:async()=>await F(2e3),children:r.jsxs(w,{children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})})}},c={render:()=>{const o=f({defaultValues:{field:""}});return r.jsxs(h,{form:o,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(y,{children:[r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(t,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(b,{slot:"abort",children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

import{r as x,j as r}from"./iframe-jaoHr1AV.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-DAPnXDhG.js";import{L as i}from"./Label-Kdaxftsp.js";import{B as t}from"./Button-DsyAZnvz.js";import{S as g}from"./Section-D5fyzIcp.js";import{A as E}from"./ActionGroup-BMyaLsc1.js";import{s as F}from"./ActionBatch-Dl5Fmp7w.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-Js3hNqRo.js";import{F as L}from"./FieldError-SYu40l7i.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BZQIArQs.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./clsx-B-dksMZM.js";import"./index-BFCtAlHX.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./ActionGroupView-DUyubtpm.js";import"./Content-CP7dqr2s.js";import"./Heading-BypYnbKw.js";import"./Heading-CGZUJUiQ.js";import"./RSPContexts-CUx4KoIL.js";import"./utils-CQw042JL.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./Modal-B8CAdwBg.js";import"./useOverlayController-CzdtfrCF.js";import"./useStatic-CMyMNZPZ.js";import"./Overlay-B6aX1fvL.js";import"./OverlayContextProvider-CEARkGE9.js";import"./LoadingSpinner-DQaYydFO.js";import"./IconWarning-DyIA4Uof.js";import"./remote-CF-AY8I2.js";import"./Dialog-COvhX_CP.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-WaW8O6jQ.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocusable-Bnc4O4Ay.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./ButtonView-DldKei58.js";import"./Flex-MfsvjoaP.js";import"./useRef-Fb7B-TJZ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BSB41Hhw.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./FieldDescription-i3dtwlr1.js";import"./Tooltip-CFAa3NDd.js";import"./ContextualHelpTrigger-C5hM45Eq.js";import"./Popover-BDgL-7Qp.js";import"./OverlayTrigger-mWrXut7l.js";import"./useFieldComponent-D-iYVveA.js";import"./useControlledHostValueProps-Cis_Za3O.js";import"./TextField-AoRDnB9E.js";import"./FieldError-D7CvISHf.js";import"./Form-B8e0R8nB.js";import"./Group-7_zwoJgV.js";import"./Input-eh_683Iq.js";import"./useTextField-DeLc3kwF.js";import"./useFormReset-B3LvCMGn.js";import"./useFormValidation-B1svUyZM.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ae={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const me=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,me as __namedExportsOrder,ae as default};

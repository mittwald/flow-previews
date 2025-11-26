import{r as x,j as r}from"./iframe-BjQgS_dl.js";import{b as p,u as f,F as h,t as S}from"./Form-CyjpWmDT.js";import{L as i}from"./Label-BioMMRbR.js";import{R as b,S as w}from"./ResetButton-DRrKeGe6.js";import{B as t}from"./Button-mR6tCl9f.js";import{S as g,s as F}from"./Section-BeaFJCve.js";import{A as E}from"./ActionGroup-CR4mXt-z.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DmBCIGkd.js";import"./index-nuYtCEEu.js";import"./dynamic-CTQIFy3Y.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./context-3TgVXJa8.js";import"./browser-D8Ytpe6r.js";import"./utils-C6Mwuf68.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-wUhw_T8r.js";import"./Text-hFF5yDpy.js";import"./EmulatedBoldText-CmEhCy_I.js";import"./LoadingSpinner-BVWf40cO.js";import"./Button-CWLE3PAH.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./context-C9CRIziz.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./useStatic-CbhvCGnA.js";import"./Accordion-HUQJDa8a.js";import"./Alert-dt7Crh6d.js";import"./AlertIcon-CKkF89KF.js";import"./AlertBadge-BuoAO-EF.js";import"./Align-whB8MF17.js";import"./Popover-DNrzHtdF.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./TableFooterRow-DIeYbuw8.js";import"./SkeletonText-CYyiBvSU.js";import"./Avatar-BzNSebrE.js";import"./AvatarStack-B41TTh57.js";import"./Badge-CWhMpUJo.js";import"./BigNumber-DelUDah8.js";import"./Breadcrumb-W_Ta7J5l.js";import"./Link-toGczOVY.js";import"./Heading-DmijLSYI.js";import"./Legend-CJxX7Jjd.js";import"./FileCardList-DxtvYBZN.js";import"./Image-D2Uh7TNb.js";import"./Color-CkV5zOWc.js";import"./Content-B-6ROZD8.js";import"./ContextualHelpTrigger-GCKXkGjA.js";import"./CounterBadge-BVTBh7o7.js";import"./DonutChart-CxTDQKuL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-s0Iy2v7I.js";import"./Header-CccJlXz1.js";import"./Initials-BQ1BPtAw.js";import"./InlineCode-DubGci4q.js";import"./PopoverTrigger-vpZCTXgF.js";import"./Separator-V7QUjuvc.js";import"./Message-B_08b52f.js";import"./MessageSeparator-a9jr4f53.js";import"./NavigationGroup-DACyTvZZ.js";import"./Notification-CufI5Fok.js";import"./NotificationProvider-Ba5bESUN.js";import"./ProgressBar-C_67UiSI.js";import"./Rating-CzDqBwDX.js";import"./Skeleton-CgTPZh5a.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,re as __namedExportsOrder,$r as default};

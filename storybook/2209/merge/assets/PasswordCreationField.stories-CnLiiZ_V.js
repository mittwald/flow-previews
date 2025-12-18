import{r as x,j as r}from"./iframe-BvEN2NvC.js";import{b as p,u as f,F as h,t as S}from"./Form-DBSfX1dx.js";import{L as i}from"./Label-RkJmXprF.js";import{R as b,S as w}from"./ResetButton-883lRELC.js";import{B as t}from"./Button-Bs-8xdNz.js";import{S as g,s as F}from"./Section-DxQGOPA_.js";import{A as E}from"./ActionGroup-BZJifhVY.js";import{aw as C,ax as R,ao as n,ay as o,az as V,g as L}from"./TimeField-lCDwSgC8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DLGtdFUV.js";import"./PropsContextProvider-O5-VKPQz.js";import"./mergeRefs-g8AQtJ3m.js";import"./index-Cj5OZb7o.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DGN2LQ2z.js";import"./context-BaB4gzT5.js";import"./browser-8558U_eE.js";import"./utils-C9Kbpp7Q.js";import"./ProgressBar-BQTQq0xH.js";import"./Hidden-BwWPEWcQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BXkJ-YfP.js";import"./Text-B-pkYbpH.js";import"./EmulatedBoldText-6Mje0LKd.js";import"./LoadingSpinner-sib-jng1.js";import"./Button-rdkFrasx.js";import"./useFocusRing-CLF9PT1b.js";import"./useFocusable-CY4PxcCA.js";import"./context-YRnoeiMa.js";import"./RSPContexts-BVxsMlKh.js";import"./Collection-2Wi3GcVI.js";import"./CollectionBuilder-BPHXmLic.js";import"./SelectionIndicator-BH4md7QJ.js";import"./Separator-B9TFzlzp.js";import"./useStatic-mqBjZ187.js";import"./Accordion-BCRlOG0V.js";import"./Alert-C42HKgo7.js";import"./AlertIcon-DIx0PRwu.js";import"./AlertBadge-XnLcIBhb.js";import"./Align-BNYYkpwl.js";import"./Popover-DQy7sKpB.js";import"./OverlayTrigger-C-OXtxoJ.js";import"./TableFooterRow-Bbn0J-Fj.js";import"./SkeletonText-Bhrpszsw.js";import"./Avatar-DoJW0BST.js";import"./AvatarStack-Q_naNyxA.js";import"./Badge-By_J3NvW.js";import"./BigNumber-CCiAKU5q.js";import"./Breadcrumb-hvZPW9kp.js";import"./Link-8ro0Mgm2.js";import"./Legend-CWg-OgU1.js";import"./Heading-BmIYVqpT.js";import"./FileCardList-wULZQ2pe.js";import"./Image-DcRVgG1x.js";import"./Color-UnoQ_G4y.js";import"./Content-CW2666Kc.js";import"./ContextualHelpTrigger-Dg6Q6BSc.js";import"./CounterBadge-29Eky_dN.js";import"./DonutChart-hAMSRr4O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYNB-H_.js";import"./Header-CzZTtWKn.js";import"./Initials-CMzRsNMX.js";import"./InlineCode-BJIBhEMp.js";import"./PopoverTrigger-CZadA-q7.js";import"./Separator-DbRA9--m.js";import"./Message-CWiHvRIx.js";import"./MessageSeparator-BcRpZ2Jp.js";import"./NavigationGroup-BIJMiTrt.js";import"./Notification-Z9SSqstJ.js";import"./NotificationProvider-Bd1F4Dho.js";import"./ProgressBar-DlKcEA1p.js";import"./Rating-C71hnCIK.js";import"./Skeleton-C-NZiBB5.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

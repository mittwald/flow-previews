import{r as b,j as r}from"./iframe-BxshUsxH.js";import{a as c,u as f,F as h,t as w}from"./Form-CA-xPwH4.js";import{L as i}from"./Label-Cai8LRw4.js";import{B as o}from"./Button-HRLIFp2S.js";import{S as P}from"./Section-BZHA2v0g.js";import{A as y}from"./ActionGroup-Dg04WDgn.js";import{s as F}from"./Action-CuTPfi8I.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-PT7cjgn4.js";import"./index-nuYtCEEu.js";import"./dynamic-DbpBUg3_.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./clsx-B-dksMZM.js";import"./index-DKGU8PvL.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./context-jrbRSF4x.js";import"./browser-CjJK-aFI.js";import"./utils-CVs5O02N.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B98y0Q8s.js";import"./Text-18K6QUAV.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./LoadingSpinner-CLA14IJX.js";import"./Button-BSW16sZi.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./Dialog-g1S8F0Mk.js";import"./RSPContexts-B9j1N_uk.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./useStatic-B3TheZVH.js";import"./context-Dpzgqk2_.js";import"./Popover-D8mPu2R9.js";import"./OverlayTrigger-DqSMwG9L.js";import"./ControlledNotification-BKvhz06W.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./LayoutCard-DOb3jwRC.js";import"./Accordion-DEPnjlv6.js";import"./Alert-B5lIPS-K.js";import"./AlertIcon-CAIekxtK.js";import"./AlertBadge-CATc84Up.js";import"./Align-DMHcV-Z-.js";import"./TableFooterRow-DdBdlw9v.js";import"./SkeletonText-Bp9OgATd.js";import"./Avatar-BPWVlMTS.js";import"./AvatarStack-BR45Yctn.js";import"./Badge-Bk_g3Swr.js";import"./BigNumber-DnCE5n1M.js";import"./Breadcrumb-DtQ3sVXm.js";import"./Link-C-_Opw-i.js";import"./Heading-DdZYTwhD.js";import"./Legend-CyK7PpxD.js";import"./FileCardList-Cfb5d7AC.js";import"./Image-CcvZpHPH.js";import"./CodeBlock-D0kilfM3.js";import"./CopyButton-BkqTb8K1.js";import"./Tooltip-Bg81ta88.js";import"./react-children-utilities-C2vFZTwt.js";import"./Color-DYQX0n1L.js";import"./Content-BWTtEus_.js";import"./ContextualHelpTrigger-p7RfMObQ.js";import"./CounterBadge-D__9oxv-.js";import"./DonutChart-kkf7Q-Dm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DPGgsGpw.js";import"./Header-CF_4_vNz.js";import"./Initials-BH4vAllU.js";import"./InlineCode-DjaHKjIt.js";import"./LabeledValue-Bj8_T89u.js";import"./PopoverTrigger-Cwh_kwTN.js";import"./Markdown-C3IX7c8c.js";import"./Separator-CfZgi8IV.js";import"./Message-Cqw0c2-b.js";import"./MessageSeparator-Dr08CMNP.js";import"./NavigationGroup-CfAWN36R.js";import"./Notification-DKARu49o.js";import"./NotificationProvider-BmLKCltC.js";import"./ProgressBar-D2EMuaV0.js";import"./Rating-CWqAGodb.js";import"./Skeleton-Cd2redhc.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const de=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,p as WithFocus,d as WithForm,de as __namedExportsOrder,le as default};

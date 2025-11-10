import{r as b,j as r}from"./iframe-BUpOconN.js";import{a as c,u as f,F as h,t as w}from"./Form-BE9ZVYLW.js";import{L as i}from"./Label-CfIUyjLz.js";import{B as o}from"./Button-BI2nRdMO.js";import{S as P}from"./Section-BpWTwwJh.js";import{A as y}from"./ActionGroup-DfParnZE.js";import{s as F}from"./Action-zZ74f8ZW.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-6HiJrUaX.js";import"./index-nuYtCEEu.js";import"./dynamic-BC3S0Bwc.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./clsx-B-dksMZM.js";import"./index-DbC_ni2B.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./context-BerssnGJ.js";import"./browser-BvUtNH1Q.js";import"./utils-D0zgVK2Q.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BhCngq7e.js";import"./Text-BmeR1AHd.js";import"./EmulatedBoldText-BYxux4hO.js";import"./LoadingSpinner-BP3hPEk8.js";import"./Button-kwZ3-LYf.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./Dialog-9peppKdC.js";import"./RSPContexts-DHzB_yYn.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./getActionGroupSlot-CQ_4bzXc.js";import"./useStatic-lOwByp-V.js";import"./context-kOiZEgEs.js";import"./Popover-Ba6VttQl.js";import"./OverlayTrigger-BUfLbgE9.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./LayoutCard-WSxHsShP.js";import"./Accordion-DpimxwIb.js";import"./Alert-DUPmf3UR.js";import"./AlertIcon-BFFrkh8K.js";import"./AlertBadge-D6ZmWE1l.js";import"./Align-DgAAqJuR.js";import"./TableFooterRow-gq6t1pjS.js";import"./SkeletonText-Wx_Alp0s.js";import"./Avatar-hm6V4z7e.js";import"./AvatarStack-BbKdzFSM.js";import"./Badge-Btso2PJq.js";import"./BigNumber-Be6raZDD.js";import"./Breadcrumb-DROHrIdn.js";import"./Link-Drjv9HvP.js";import"./Heading-BGtG9kd2.js";import"./Legend-4qLNiKsc.js";import"./FileCardList-DzvNlTUg.js";import"./Image-DhVv3MkO.js";import"./CodeBlock-Dpf4dOWR.js";import"./CopyButton-Cu_iGNqV.js";import"./Tooltip-BcgCPXFx.js";import"./react-children-utilities-DgZ1xxml.js";import"./Color-BJtZIrG9.js";import"./Content-CxwaKG9h.js";import"./ContextualHelpTrigger-B6DAcZCV.js";import"./CounterBadge-B9utj9pH.js";import"./DonutChart-CdxGHQVf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CqRVRiHz.js";import"./Header-CHAQ6t4H.js";import"./Initials-DyWmpGOU.js";import"./InlineCode-Bi5CJncS.js";import"./LabeledValue-DFZAKBi6.js";import"./PopoverTrigger-p8rmDyPx.js";import"./Markdown-C9_BuH0P.js";import"./Separator-XIP1-rXu.js";import"./Message-B_Y9b0L6.js";import"./MessageSeparator-5RUgA9Mv.js";import"./NavigationGroup-7iBbwWvS.js";import"./Notification-B53uF-St.js";import"./NotificationProvider-Aaxx3LqL.js";import"./ProgressBar-CzaJizZm.js";import"./Rating-C8hC5BCb.js";import"./Skeleton-RgkCN70r.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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

import{r as b,j as r}from"./iframe-CPn2ZlG8.js";import{a as c,u as f,F as h,t as w}from"./Form-Bzt_tKay.js";import{L as i}from"./Label-Opx6KdMe.js";import{B as o}from"./Button-i2RXMGoH.js";import{S as P}from"./Section-K5CfbtJu.js";import{A as y}from"./ActionGroup-gwUYpalQ.js";import{s as F}from"./Action-Dgdncsxu.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-BBOS47oM.js";import"./index-nuYtCEEu.js";import"./dynamic-CmzXv2ZH.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./clsx-B-dksMZM.js";import"./index-B0eWxAoc.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./context-BiAR75ic.js";import"./browser-Cl13ZrDl.js";import"./utils-DBul4rcK.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTNOc1CF.js";import"./Text-6RCNpXVe.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./LoadingSpinner-mgkNzsmz.js";import"./Button-Di4iIPFk.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./Dialog-CXw6CUzT.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./useStatic-BnTfOIpp.js";import"./context-CgTN8SSG.js";import"./Popover-BXUF-6SC.js";import"./OverlayTrigger-20DAFHoE.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./LayoutCard-C_hSjeDr.js";import"./Accordion-B-bChxW6.js";import"./Alert-Ug9GHVUz.js";import"./AlertIcon-zTj1UJpO.js";import"./AlertBadge-BsQaA3x6.js";import"./Align-DE9bebnk.js";import"./TableFooterRow-B5LtY95q.js";import"./SkeletonText-oiPGeqDP.js";import"./Avatar-DDyQczM4.js";import"./AvatarStack-CWZ-VL73.js";import"./Badge-D9v8JAmm.js";import"./BigNumber-C4G7-3T-.js";import"./Breadcrumb-Bacspdd1.js";import"./Link-DVlBL-qV.js";import"./Heading-BzbKq0dK.js";import"./Legend-DDMMG7bH.js";import"./FileCardList-rzh9hTjl.js";import"./Image-C-mKiOK_.js";import"./CodeBlock-DfQLW9jR.js";import"./CopyButton-BPFZIEl4.js";import"./Tooltip-BEM5VXj8.js";import"./react-children-utilities-WPpO_PnD.js";import"./Color-BEtva2JY.js";import"./Content-35wcbQLb.js";import"./ContextualHelpTrigger-BF0zQddW.js";import"./CounterBadge-DQvxwwoY.js";import"./DonutChart-BrF9Zm5P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGRfp6b0.js";import"./Header-DnNd6Njs.js";import"./Initials-Bv6RP1-8.js";import"./InlineCode-CHc7o_jp.js";import"./LabeledValue-j0cEpKgE.js";import"./PopoverTrigger-CMl9e6LO.js";import"./Markdown-Coe6N29n.js";import"./Separator-CJJgusYM.js";import"./Message-Dqi0-r_q.js";import"./MessageSeparator-CroayyHM.js";import"./NavigationGroup-qSfETvJA.js";import"./Notification-r_T3n36Q.js";import"./NotificationProvider-u0HbSQig.js";import"./ProgressBar-BXbWnBwm.js";import"./Rating-DIBuOTMV.js";import"./Skeleton-1myRvyzI.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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

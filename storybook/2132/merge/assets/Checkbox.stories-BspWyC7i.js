import{j as r,r as x}from"./iframe-Ao-19aY7.js";import{b as p,u as c,F as a,t as F}from"./Form-BtqoyCgy.js";import{R as l,S as h}from"./ResetButton-BpLwrhXs.js";import{B as d}from"./Button-_rMwV1Xt.js";import{S as j,s as u}from"./Section-2WoXliP6.js";import{A as b}from"./ActionGroup-BgGdTMdO.js";import{s as t,g as E}from"./TimeField-Dga-XMzj.js";import"./index-nuYtCEEu.js";import"./dynamic-BWdxymTp.js";import"./PropsContextProvider-Cs2UiszJ.js";import"./mergeRefs-CpqvPaGj.js";import"./index-Bwqp99l-.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8j8z1fr.js";import"./context-7NlFttbo.js";import"./browser-BDaFAJwm.js";import"./utils-WPNuaWF4.js";import"./IconWarning-B7Z3gPWk.js";import"./Text-Cgpj2Q8N.js";import"./EmulatedBoldText-RvYGXArR.js";import"./LoadingSpinner-Bt9_hZhS.js";import"./Button-CfbtfR1G.js";import"./ProgressBar-BcqTIQAj.js";import"./Hidden-C5KNGjq4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ByqSttt6.js";import"./useFocusable-BMboqtpt.js";import"./context-voT1I8WS.js";import"./RSPContexts-Bd7Uumw6.js";import"./Collection-D6xC-F9z.js";import"./CollectionBuilder-BTcaQmh_.js";import"./SelectionIndicator-M10krl_K.js";import"./Separator-DI5W5_TB.js";import"./useStatic-CAyH9HjC.js";import"./Accordion-g1Nkd-OG.js";import"./Alert-U6NTr8Od.js";import"./AlertIcon-C4DLD5al.js";import"./AlertBadge-ChGUqDlc.js";import"./Align-BbT-h_Cc.js";import"./Popover-wNAiL1x4.js";import"./OverlayTrigger-BCM2xdVL.js";import"./TableFooterRow-BwGlA40j.js";import"./SkeletonText-CbmbZ7fm.js";import"./Avatar-BhBRyywd.js";import"./AvatarStack-BZuHR7nK.js";import"./Badge-BuVQhiwS.js";import"./BigNumber-DSg8ShS_.js";import"./Breadcrumb-COHPTftu.js";import"./Link-NPcLnUZm.js";import"./Heading-QgN9T77K.js";import"./Legend-CpLZYkOf.js";import"./FileCardList-BgWOMS33.js";import"./Image-CdE7kzrE.js";import"./Color-DrlriSBP.js";import"./Content-BC-EzTEV.js";import"./Label-AFlDOwlr.js";import"./ContextualHelpTrigger-B3G8FKik.js";import"./CounterBadge-Dj5sakNv.js";import"./DonutChart-56Bfv6wo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DWXyrnjp.js";import"./Header-BkTYts4H.js";import"./Initials-DDzHo9v4.js";import"./InlineCode-C5oGO-2D.js";import"./PopoverTrigger-B0RiF3ar.js";import"./Separator-BRXjwrzz.js";import"./Message-CiVygppY.js";import"./MessageSeparator-Di_mCWbl.js";import"./NavigationGroup-JU6xFLtT.js";import"./Notification-BcOA895o.js";import"./NotificationProvider-BTG9WpBj.js";import"./ProgressBar-Db3cRUkt.js";import"./Rating-VGNHCp_t.js";import"./Skeleton-yWgO8i6q.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};

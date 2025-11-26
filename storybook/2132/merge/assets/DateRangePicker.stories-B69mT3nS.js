import{j as e,r as g}from"./iframe-Ao-19aY7.js";import{b as d,u as c,F as l,t as D}from"./Form-BtqoyCgy.js";import{L as t}from"./Label-AFlDOwlr.js";import{R as h,S as F}from"./ResetButton-BpLwrhXs.js";import{B as p}from"./Button-_rMwV1Xt.js";import{S as b,s as u}from"./Section-2WoXliP6.js";import{A as S}from"./ActionGroup-BgGdTMdO.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-Dga-XMzj.js";import"./index-nuYtCEEu.js";import"./dynamic-BWdxymTp.js";import"./PropsContextProvider-Cs2UiszJ.js";import"./mergeRefs-CpqvPaGj.js";import"./index-Bwqp99l-.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8j8z1fr.js";import"./context-7NlFttbo.js";import"./browser-BDaFAJwm.js";import"./utils-WPNuaWF4.js";import"./ProgressBar-BcqTIQAj.js";import"./Hidden-C5KNGjq4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B7Z3gPWk.js";import"./Text-Cgpj2Q8N.js";import"./EmulatedBoldText-RvYGXArR.js";import"./LoadingSpinner-Bt9_hZhS.js";import"./Button-CfbtfR1G.js";import"./useFocusRing-ByqSttt6.js";import"./useFocusable-BMboqtpt.js";import"./context-voT1I8WS.js";import"./RSPContexts-Bd7Uumw6.js";import"./Collection-D6xC-F9z.js";import"./CollectionBuilder-BTcaQmh_.js";import"./SelectionIndicator-M10krl_K.js";import"./Separator-DI5W5_TB.js";import"./useStatic-CAyH9HjC.js";import"./Accordion-g1Nkd-OG.js";import"./Alert-U6NTr8Od.js";import"./AlertIcon-C4DLD5al.js";import"./AlertBadge-ChGUqDlc.js";import"./Align-BbT-h_Cc.js";import"./Popover-wNAiL1x4.js";import"./OverlayTrigger-BCM2xdVL.js";import"./TableFooterRow-BwGlA40j.js";import"./SkeletonText-CbmbZ7fm.js";import"./Avatar-BhBRyywd.js";import"./AvatarStack-BZuHR7nK.js";import"./Badge-BuVQhiwS.js";import"./BigNumber-DSg8ShS_.js";import"./Breadcrumb-COHPTftu.js";import"./Link-NPcLnUZm.js";import"./Heading-QgN9T77K.js";import"./Legend-CpLZYkOf.js";import"./FileCardList-BgWOMS33.js";import"./Image-CdE7kzrE.js";import"./Color-DrlriSBP.js";import"./Content-BC-EzTEV.js";import"./ContextualHelpTrigger-B3G8FKik.js";import"./CounterBadge-Dj5sakNv.js";import"./DonutChart-56Bfv6wo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DWXyrnjp.js";import"./Header-BkTYts4H.js";import"./Initials-DDzHo9v4.js";import"./InlineCode-C5oGO-2D.js";import"./PopoverTrigger-B0RiF3ar.js";import"./Separator-BRXjwrzz.js";import"./Message-CiVygppY.js";import"./MessageSeparator-Di_mCWbl.js";import"./NavigationGroup-JU6xFLtT.js";import"./Notification-BcOA895o.js";import"./NotificationProvider-BTG9WpBj.js";import"./ProgressBar-Db3cRUkt.js";import"./Rating-VGNHCp_t.js";import"./Skeleton-yWgO8i6q.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const ze=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ze as __namedExportsOrder,Ye as default};

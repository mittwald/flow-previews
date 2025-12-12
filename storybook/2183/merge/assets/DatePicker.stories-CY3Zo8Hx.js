import{j as r,r as j}from"./iframe-Cun9xEvG.js";import{b as a,u as p,F as d,t as b}from"./Form-BKYclWQG.js";import{L as t}from"./Label-TZZHTJSd.js";import{R as f,S as h}from"./ResetButton-r2IcFcrO.js";import{B as u}from"./Button-Be9JkCpV.js";import{S as E,s as c}from"./Section-DpYYQ4ld.js";import{A as S}from"./ActionGroup-CgFwCvu8.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-BGefC99t.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bm0M0-O-.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./context-CTkEoG47.js";import"./browser-BgnuhwhB.js";import"./utils-S5M_7oVk.js";import"./ProgressBar-c76aO61i.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CPVRn4jW.js";import"./remote-BgISxXks.js";import"./Text-46CNKReN.js";import"./EmulatedBoldText-2bJ0isTU.js";import"./LoadingSpinner-BiAtSGtu.js";import"./Button-D2k4TCQe.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./context-DiBM2o-y.js";import"./RSPContexts-DVf4IkrV.js";import"./Collection-Tg2L3ks0.js";import"./CollectionBuilder-CdiRFq1v.js";import"./SelectionIndicator-MYqiPo_p.js";import"./Separator-CR4CvoS_.js";import"./useStatic-fkJ5iy3g.js";import"./Accordion-Cdni6XcU.js";import"./Alert-4wPBFwsv.js";import"./AlertIcon-BYwbyTte.js";import"./AlertBadge-CvD56Z7r.js";import"./Align-B9GNgo2e.js";import"./Popover-5hFlpbJ0.js";import"./OverlayTrigger-DKCqdxLC.js";import"./TableFooterRow-003QdVoj.js";import"./SkeletonText-CmWS1NKM.js";import"./Avatar-JpJgtP-K.js";import"./AvatarStack-CbaO4bzk.js";import"./Badge-EPhAECZq.js";import"./BigNumber-BNm1-qZc.js";import"./Breadcrumb-DoQvOC0E.js";import"./Link-C9__0RQZ.js";import"./Heading-Bz0fxZKP.js";import"./Legend-C6YyRaO2.js";import"./FileCardList-DwvB7YNF.js";import"./Image-8vZX0aCN.js";import"./Color-BXoGRGl8.js";import"./Content-dmvs88C5.js";import"./ContextualHelpTrigger-2IHKY-I1.js";import"./CounterBadge-uqhuCsZh.js";import"./DonutChart-Cj-oFqap.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CpOeYIRy.js";import"./Header-xba_U-tz.js";import"./Initials-BQFGk1hN.js";import"./InlineCode-Cy0P-BMe.js";import"./PopoverTrigger-Cx-yVyab.js";import"./Separator-DEE4s9X8.js";import"./Message-Dm2-PPq3.js";import"./MessageSeparator-5qm7ji2U.js";import"./NavigationGroup-yrrTCNaJ.js";import"./Notification-CPdts9a5.js";import"./NotificationProvider-J10LZgU2.js";import"./ProgressBar-BnIkde9y.js";import"./Rating-Cz8jym0U.js";import"./Skeleton-D4LiAhc6.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};

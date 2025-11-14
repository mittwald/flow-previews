import{j as r,r as x}from"./iframe-tJv_x5rY.js";import{c as m,u as a,F as d,t as E}from"./Form-jEx2y5xc.js";import{L as s}from"./Label-RjTzOsfv.js";import{R as u,S as c}from"./ResetButton-DjXvyyaO.js";import{B as l}from"./Button-BFrhyxcx.js";import{S as j,s as p}from"./Section-C3zFkOR2.js";import{A as b}from"./ActionGroup-ofmp5p0b.js";import{t as n,F as g}from"./Modal-C5nUCLYg.js";import"./index-nuYtCEEu.js";import"./dynamic-D0IhEVDX.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./clsx-B-dksMZM.js";import"./index-zslH_nwp.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./context-DzrJfCbv.js";import"./browser-TdwBVE6G.js";import"./utils-CzbxkoY8.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-3nJf9pka.js";import"./Text-Dguu0ahS.js";import"./EmulatedBoldText-BtPGtFYn.js";import"./LoadingSpinner-Bcrzivl8.js";import"./Button-DANMsRvu.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./context-B6V5mJe_.js";import"./RSPContexts-B20KOh4s.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./useStatic-ChHmkVJf.js";import"./getActionGroupSlot-Bx9-2150.js";import"./FileCardList-xvc84fPF.js";import"./Avatar-DCjhmqbI.js";import"./AlertIcon-BmIRgy9X.js";import"./Image-BsEx4Gyw.js";import"./Link-CNQmH85M.js";import"./ControlledNotification-Bf-cHYr4.js";import"./LayoutCard-FaDrJ9hh.js";import"./Accordion-BkjCzJbI.js";import"./Alert-BSKDhqn2.js";import"./AlertBadge-DwpbJvbe.js";import"./Align-CwffRYKZ.js";import"./AvatarStack-Dk_NcqSD.js";import"./BigNumber-CVotIBh9.js";import"./Breadcrumb-CqycGyzj.js";import"./Heading-DBV7hltH.js";import"./Legend-DwZKxd2C.js";import"./Color-DCrxZZxn.js";import"./TableFooterRow-CTXom9Ef.js";import"./SkeletonText-D85nAxtU.js";import"./Content-B6i-pyoJ.js";import"./CounterBadge-C7SQltDy.js";import"./DonutChart-BF3qOkbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5HLqNns.js";import"./Header-DsWh8L6x.js";import"./Initials-WnEx4zz5.js";import"./InlineCode-B62lvli0.js";import"./Separator-CYyKLl0S.js";import"./MessageSeparator-DELmev1y.js";import"./NavigationGroup-DtKUP1MG.js";import"./Notification-kUETDS4p.js";import"./NotificationProvider-Cl16zYR0.js";import"./ProgressBar-4Q8djMZo.js";import"./Rating-BBipw1Rp.js";import"./Skeleton-DtEBxlD8.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(d,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
